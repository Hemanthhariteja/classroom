import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * 3D audio visualizer: circular bars that react to frequencies.
 * Pass the audio element ref; creates its own AudioContext.
 */
export default function AudioVisualizer3D({ audioRef, className = '' }) {
  const mountRef = useRef(null)
  const ctxRef = useRef(null)
  const analyserRef = useRef(null)
  const rafRef = useRef(0)
  const barsRef = useRef([])
  const rendererRef = useRef(null)
  const cameraRef = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    const el = mountRef.current
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    renderer.setSize(el.clientWidth, el.clientHeight)
    el.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const scene = new THREE.Scene()
    sceneRef.current = scene
    const camera = new THREE.PerspectiveCamera(45, el.clientWidth/el.clientHeight, 0.1, 100)
    camera.position.z = 5
    cameraRef.current = camera

    const amb = new THREE.AmbientLight('#ffffff', 0.6)
    const pt = new THREE.PointLight('#7c3aed', 2.0, 8); pt.position.set(0, 2, 2)
    scene.add(amb, pt)

    const group = new THREE.Group()
    scene.add(group)

    const N = 48
    const radius = 1.6
    for (let i=0;i<N;i++){
      const geo = new THREE.BoxGeometry(0.07, 0.4, 0.07)
      const hue = 0.72 + (i/N)*0.15
      const mat = new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(hue, 0.7, 0.55), metalness: 0.4, roughness: 0.35 })
      const m = new THREE.Mesh(geo, mat)
      const a = (i / N) * Math.PI * 2
      m.position.set(Math.cos(a)*radius, Math.sin(a)*radius, 0)
      m.lookAt(0,0,0)
      group.add(m)
      barsRef.current.push(m)
    }

    function onResize() {
      const w = el.clientWidth
      const h = el.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)
    onResize()

    function render() {
      group.rotation.z += 0.003
      renderer.render(scene, camera)
    }
    function loop() {
      rafRef.current = requestAnimationFrame(loop)
      const analyser = analyserRef.current
      if (analyser) {
        const arr = new Uint8Array(analyser.frequencyBinCount)
        analyser.getByteFrequencyData(arr)
        const step = Math.floor(arr.length / barsRef.current.length)
        barsRef.current.forEach((m, i) => {
          const v = arr[i*step] / 255 // 0..1
          m.scale.y = 0.6 + v * 2.2
          m.material.emissiveIntensity = 0.3 + v * 1.4
        })
      }
      render()
    }

    // Setup audio graph when the element can play
    let srcNode
    const ensureAudio = () => {
      if (ctxRef.current || !audioRef?.current) return
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)()
        const analyser = ctx.createAnalyser()
        analyser.fftSize = 1024
        const src = ctx.createMediaElementSource(audioRef.current)
        src.connect(analyser)
        analyser.connect(ctx.destination)
        ctxRef.current = ctx
        analyserRef.current = analyser
        srcNode = src
      } catch (e) {}
    }
    const onPlay = () => {
      ensureAudio()
      if (ctxRef.current?.state === 'suspended') ctxRef.current.resume()
    }
    audioRef?.current?.addEventListener('play', onPlay)
    audioRef?.current?.addEventListener('canplay', onPlay)

    loop()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      audioRef?.current?.removeEventListener('play', onPlay)
      audioRef?.current?.removeEventListener('canplay', onPlay)
      if (srcNode) try { srcNode.disconnect() } catch {}
      if (analyserRef.current) try { analyserRef.current.disconnect() } catch {}
      if (ctxRef.current) try { ctxRef.current.close() } catch {}
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [audioRef])

  return <div ref={mountRef} className={`absolute inset-0 -z-10 ${className}`} />
}