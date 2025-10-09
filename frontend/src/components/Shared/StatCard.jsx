import React from 'react'
import RingChart from './RingChart.jsx'

export default function StatCard({ title, value, hint, pct, icon }) {
  return (
    <div className="card card-hover p-4 flex items-center gap-3">
      {icon && <div className="h-10 w-10 rounded-md bg-accent/15 border border-accent/30 text-accent flex items-center justify-center">{icon}</div>}
      <div className="flex-1">
        <div className="text-textMuted text-xs">{title}</div>
        <div className="text-xl font-semibold leading-tight">{value}</div>
        {hint && <div className="text-xs text-textMuted mt-0.5">{hint}</div>}
      </div>
      {typeof pct === 'number' && <RingChart value={pct} size={52} strokeWidth={7} label={`${Math.round(pct*100)}%`} />}
    </div>
  )
}