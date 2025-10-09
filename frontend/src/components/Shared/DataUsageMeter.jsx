import React, { useEffect, useRef, useState } from 'react'

// Estimates session usage given target bitrate (kbps). Default 24kbps Opus.
export default function DataUsageMeter({ kbps = 24 }) {
  const [bytes, setBytes] = useState(0)
  const started = useRef(Date.now())
  useEffect(() => {
    const id = setInterval(() => {
      const secs = (Date.now() - started.current) / 1000
      const bits = kbps * 1000 * secs
      setBytes(bits / 8)
    }, 1000)
    return () => clearInterval(id)
  }, [kbps])
  const kb = bytes / 1024
  const mb = kb / 1024
  const label = mb >= 0.1 ? `${mb.toFixed(2)} MB` : `${kb.toFixed(0)} KB`
  const perMin = (kbps * 60 * 1000) / 8 / 1024 // KB/min
  return (
    <span className="inline-flex items-center gap-2 text-xs text-textMuted">
      <span className="badge">~{Math.round(perMin)} KB/min</span>
      <span className="opacity-80">Used: {label}</span>
    </span>
  )
}