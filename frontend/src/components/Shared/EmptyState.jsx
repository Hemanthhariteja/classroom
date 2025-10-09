import React from 'react'
export default function EmptyState({ title = 'Nothing here yet', subtitle = 'This section will populate when data is available.', action }) {
  return (
    <div className="border border-border rounded-lg p-6 text-center text-textMuted">
      <div className="text-sm font-semibold mb-1">{title}</div>
      <div className="text-xs opacity-80">{subtitle}</div>
      {action && <div className="mt-3">{action}</div>}
    </div>
  )
}