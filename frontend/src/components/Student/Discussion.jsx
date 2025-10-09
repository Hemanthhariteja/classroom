import React, { useEffect, useState } from 'react'
import { saveDiscussionOutbox } from '../../utils/offline.js'
import { useParams } from 'react-router-dom'
import AIChatBot from './AIChatBot.jsx'

export default function Discussion() {
  const { id } = useParams()
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  useEffect(() => {
    fetch('/mock/discussion.json').then(r=>r.json()).then(r => setItems(r.data || []))
  }, [id])

  const post = async () => {
    const entry = { classId: id, text, createdAt: Date.now() }
    setItems([...items, { id: `tmp-${entry.createdAt}`, author: 'You', text: entry.text, createdAt: entry.createdAt }])
    setText('')
    try {
      const res = await fetch(`/api/classes/${id}/discussion`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ text: entry.text }) })
      if (!res.ok) throw new Error('offline?')
    } catch {
      await saveDiscussionOutbox(entry)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button className="btn-ghost" onClick={() => window.history.back()}>
          ← Back to Dashboard
        </button>
        <h1 className="text-2xl font-bold">Discussion Board</h1>
      </div>
      <div className="max-w-2xl mx-auto card p-4">
      <h3 className="font-semibold mb-2">Discussion Board</h3>
      <div className="space-y-3 max-h-[50vh] overflow-y-auto scrollbar-thin">
        {items.map((d) => (
          <div key={d.id} className="border border-border rounded p-2">
            <div className="text-xs text-textMuted">{new Date(d.createdAt).toLocaleString()}</div>
            <div>{d.author? <span className="text-accent">{d.author}: </span>: null}{d.text}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input className="input flex-1" value={text} placeholder="Type message…" onChange={(e)=>setText(e.target.value)} />
        <button className="btn" onClick={post} disabled={!text.trim()}>Post</button>
      </div>
      <p className="text-xs text-textMuted mt-2">Works offline: posts will sync when back online.</p>
      </div>
      
      {/* AI Chat Bot */}
      <AIChatBot />
    </div>
  )
}