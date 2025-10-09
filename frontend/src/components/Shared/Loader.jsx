import React from 'react'
export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="flex items-center gap-2 text-textMuted">
      <div className="h-3 w-3 rounded-full bg-accent animate-pulse"></div>
      <span>{label}</span>
    </div>
  )
}