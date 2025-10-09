import React from 'react'

// Simple rotating tetrahedron built with SVG polygons; extremely lightweight.
export default function Tetrahedron({ size = 140 }) {
  const s = size
  return (
    <div className="tilt-3d" style={{ width: s, height: s }}>
      <svg width={s} height={s} viewBox="0 0 100 100" className="drop-shadow-lg">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#a21caf" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <polygon points="50,5 5,85 95,85" fill="url(#g1)" opacity="0.85" />
        <polygon points="50,5 5,85 50,60" fill="url(#g2)" opacity="0.95" />
        <polygon points="50,5 95,85 50,60" fill="url(#g2)" opacity="0.65" />
        <polygon points="5,85 95,85 50,60" fill="url(#g1)" opacity="0.55" />
      </svg>
    </div>
  )
}