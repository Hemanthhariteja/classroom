import React, { useRef, useState } from 'react'
import api from '../../api/api.js'

export default function RecordAudio() {
  const [classId] = useState('68cced26157d87e24fee03ce') // Valid ObjectId
  const [slideIndex, setSlideIndex] = useState('0') // Changed from slideId to slideIndex
  const [recorder, setRecorder] = useState(null)
  const chunksRef = useRef([])
  const [status, setStatus] = useState('Idle')
  const [url, setUrl] = useState('')

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    const r = new MediaRecorder(stream, { mimeType: 'audio/webm;codecs=opus' })
    r.ondataavailable = (e) => chunksRef.current.push(e.data)
    r.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'audio/ogg' })
      chunksRef.current = []
      setUrl(URL.createObjectURL(blob))
    }
    r.start()
    setRecorder(r); setStatus('Recording...')
  }
  const stop = async () => {
    recorder?.stop()
    setStatus('Stopped')
  }
  const upload = async () => {
    if (!url) return
    const res = await fetch(url)
    const blob = await res.blob()
    const fd = new FormData()
    fd.append('slideIndex', slideIndex) // Changed from slideId to slideIndex
    fd.append('audio', blob, `slide-${slideIndex}.ogg`)
    setStatus('Uploading...')
    const result = await api.upload(`/classes/${classId}/slide-audio`, fd)
    setStatus(result.status === 'ok' ? 'Uploaded!' : 'Failed')
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button className="btn-ghost" onClick={() => window.history.back()}>
          ← Back to Dashboard
        </button>
        <h1 className="text-2xl font-bold">Record Audio</h1>
      </div>
      <div className="max-w-xl mx-auto card p-6">
      <h2 className="text-xl font-semibold mb-2">Record per-slide audio</h2>
      <div className="flex gap-2 items-end">
        <div className="flex-1">
          <label className="text-sm text-textMuted">Slide Index (0, 1, 2...)</label>
          <input className="input w-full" value={slideIndex} onChange={e => setSlideIndex(e.target.value)} />
        </div>
        {!recorder ? <button className="btn" onClick={start}>Start</button> : <button className="btn" onClick={stop}>Stop</button>}
        <button className="btn" onClick={upload} disabled={!url}>Upload</button>
      </div>
      <p className="text-sm text-textMuted mt-3">Status: {status}</p>
      {url && <audio className="mt-3 w-full" controls src={url}></audio>}
      </div>
    </div>
  )
}