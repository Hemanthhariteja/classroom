import React, { useEffect, useState } from 'react'
import { Wifi, WifiOff } from 'lucide-react'

export default function ConnectivityBadge({ className = '' }) {
  const [online, setOnline] = useState(navigator.onLine)
  useEffect(() => {
    const on = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off) }
  }, [])
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${online ? 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10' : 'border-yellow-500/40 text-yellow-200 bg-yellow-500/10'} ${className}`}>
      {online ? <Wifi size={14}/> : <WifiOff size={14}/>}
      {online ? 'Online' : 'Offline'}
    </span>
  )
}