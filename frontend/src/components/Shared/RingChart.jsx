import React from 'react'

// Tiny SVG ring, no heavy libs. size=64, strokeWidth=8 by default.
export default function RingChart({ value = 0.72, size = 64, strokeWidth = 8, color = '#14f195', bg = 'rgba(255,255,255,0.08)', label }) {
  const r = (size - strokeWidth) / 2
  const c = 2 * Math.PI * r
  const dash = Math.max(0, Math.min(1, value)) * c
  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} stroke={bg} strokeWidth={strokeWidth} fill="none" />
        <circle cx={size/2} cy={size/2} r={r}
          stroke={color} strokeWidth={strokeWidth} fill="none"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`} transform={`rotate(-90 ${size/2} ${size/2})`} />
      </svg>
      {label && <div className="absolute inset-0 flex items-center justify-center text-xs text-textMuted">{label}</div>}
    </div>
  )
}