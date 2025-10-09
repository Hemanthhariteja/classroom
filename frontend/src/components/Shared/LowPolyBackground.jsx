import React, { useEffect, useRef } from 'react'

/**
 * Lightweight low-poly canvas background (no libs).
 * Draws once on mount and on resize. ~1-2ms/frame; no continuous animation to save CPU.
 */
export default function LowPolyBackground({ className = '', density = 90 }) {
  const ref = useRef(null)

  useEffect(() => {
    let raf = 0
    const canvas = ref.current
    const ctx = canvas.getContext('2d', { alpha: true })

    function resize() {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw(w, h)
    }

    function lerp(a, b, t) { return a + (b - a) * t }
    function mix(c1, c2, t) {
      const a = hexToRgb(c1), b = hexToRgb(c2)
      return `rgb(${Math.round(lerp(a.r, b.r, t))},${Math.round(lerp(a.g, b.g, t))},${Math.round(lerp(a.b, b.b, t))})`
    }
    function hexToRgb(hex) {
      const h = hex.replace('#',''); const n = parseInt(h.length===3 ? h.split('').map(x=>x+x).join('') : h, 16)
      return { r: (n>>16)&255, g: (n>>8)&255, b: n&255 }
    }

    function draw(w, h) {
      ctx.clearRect(0,0,w,h)
      const step = Math.max(64, density)
      const jitter = step * 0.32
      const cols = Math.ceil(w / step) + 2
      const rows = Math.ceil(h / step) + 2

      const pts = []
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x * step + (Math.random() * jitter - jitter/2)
          const py = y * step + (Math.random() * jitter - jitter/2)
          pts.push({ x: px, y: py })
        }
      }

      // radial color mix (indigo -> purple -> magenta)
      const cx = w * 0.5, cy = h * 0.45
      const maxd = Math.hypot(Math.max(cx, w-cx), Math.max(cy, h-cy))
      function colorAt(x, y) {
        const d = Math.hypot(x - cx, y - cy) / maxd
        if (d < 0.4) return mix('#1e1b4b', '#7c3aed', d / 0.4) // indigo -> purple
        if (d < 0.85) return mix('#7c3aed', '#a21caf', (d-0.4)/0.45) // purple -> magenta
        return '#111827'
      }

      // Build triangles from grid cells
      const idx = (x, y) => y * cols + x
      for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < cols - 1; x++) {
          const a = pts[idx(x, y)]
          const b = pts[idx(x+1, y)]
          const c = pts[idx(x, y+1)]
          const d = pts[idx(x+1, y+1)]
          tri(a, b, c)
          tri(b, d, c)
        }
      }

      function tri(p1, p2, p3) {
        // centroid color with slight noise
        const cx = (p1.x + p2.x + p3.x) / 3
        const cy = (p1.y + p2.y + p3.y) / 3
        ctx.fillStyle = colorAt(cx, cy)
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.lineTo(p3.x, p3.y); ctx.closePath()
        ctx.fill()
      }

      // vignette
      const g = ctx.createRadialGradient(w/2, h*0.6, 10, w/2, h*0.6, Math.max(w,h))
      g.addColorStop(0, 'rgba(0,0,0,0)')
      g.addColorStop(1, 'rgba(0,0,0,0.35)')
      ctx.fillStyle = g
      ctx.fillRect(0,0,w,h)
    }

    const onResize = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(resize) }
    resize()
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(raf) }
  }, [])

  return <canvas ref={ref} className={`absolute inset-0 -z-10 ${className}`} />
}