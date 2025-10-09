import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Animated low-poly "crystal field" backdrop.
 * - ~5–8k tris max, pausable when tab hidden.
 * - Respects prefers-reduced-motion (single frame draw).
 */
export default function ThreeBackground({ className = '', intensity = 0.9 }) {
  const wrapRef = useRef(null)
  const rendererRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const groupRef = useRef(null)
  const rafRef = useRef(0)
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const el = wrapRef.current
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    el.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const scene = new THREE.Scene()
    sceneRef.current = scene

    // camera
    const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 100)
    camera.position.set(0, 0.8, 4.2)
    cameraRef.current = camera

    // lighting
    const amb = new THREE.AmbientLight('#ffffff', 0.5)
    scene.add(amb)
    const key = new THREE.PointLight('#7c3aed', 2.4, 10)
    key.position.set(-2, 1.5, 1.5)
    const fill = new THREE.PointLight('#0ea5e9', 1.8, 10)
    fill.position.set(2.5, -1, 2)
    scene.add(key, fill)

    // gradient fog-ish backdrop
    scene.background = null
    scene.fog = new THREE.FogExp2(new THREE.Color('#0b0f24'), 0.28)

    // crystal field
    const group = new THREE.Group()
    groupRef.current = group
    scene.add(group)

    const geo = new THREE.IcosahedronGeometry(1, 1) // low poly
    const count = 26
    for (let i = 0; i < count; i++) {
      const color = new THREE.Color().setHSL(0.72 + Math.random()*0.12, 0.6, 0.6)
      const mat = new THREE.MeshStandardMaterial({
        color,
        metalness: 0.55,
        roughness: 0.25,
        emissive: new THREE.Color('#3b0764').multiplyScalar(0.3)
      })
      const m = new THREE.Mesh(geo, mat)
      m.scale.setScalar(0.25 + Math.random() * 0.6)
      m.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.2) * 3,
        -1 - Math.random() * 4
      )
      m.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI)
      group.add(m)
    }

    const clock = new THREE.Clock()
    function render() {
      const t = clock.getElapsedTime()
      group.rotation.y = t * 0.08
      group.rotation.x = Math.sin(t * 0.15) * 0.05
      group.children.forEach((m, i) => {
        m.rotation.y += 0.005 + (i % 3) * 0.002
        m.position.y += Math.sin(t * 0.6 + i) * 0.0008
      })
      renderer.render(scene, camera)
    }

    function loop() {
      rafRef.current = requestAnimationFrame(loop)
      render()
    }

    function onResize() {
      const w = el.clientWidth
      const h = el.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current)
      else if (!reduced) loop()
    }

    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVis)

    // initial frame or loop
    onResize()
    if (reduced) render()
    else loop()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVis)
      group.children.forEach((m) => {
        m.geometry.dispose()
        if (Array.isArray(m.material)) m.material.forEach(mt => mt.dispose())
        else m.material.dispose()
      })
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [intensity])

  return <div ref={wrapRef} className={`absolute inset-0 -z-10 ${className}`} />
}