import React, { useState, useEffect } from 'react'
import api from '../../api/api.js'

export default function UploadSlides() {
  const [files, setFiles] = useState([])
  const [classId, setClassId] = useState('68cced26157d87e24fee03ce') // Valid ObjectId
  const [status, setStatus] = useState('')
  const [uploadedSlides, setUploadedSlides] = useState([])

  // Fetch existing slides when component loads or classId changes
  useEffect(() => {
    fetchClassData()
  }, [classId])

  const fetchClassData = async () => {
    try {
      const res = await api.get(`/classes/${classId}`)
      if (res.status === 'ok' && res.class) {
        setUploadedSlides(res.class.slides || [])
      }
    } catch (error) {
      console.error('Failed to fetch class data:', error)
    }
  }

  const onUpload = async () => {
    const fd = new FormData()
    for (const f of files) fd.append('slides', f)
    setStatus('Uploading...')
    try {
      const res = await api.upload(`/classes/${classId}/slides`, fd)
      setStatus(res.status === 'ok' ? 'Uploaded!' : (res.message || 'Failed'))
      if (res.status === 'ok') {
        // Refresh the uploaded slides list
        await fetchClassData()
        setFiles([]) // Clear selected files
      }
    } catch (e) { 
      setStatus('Network error') 
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button className="btn-ghost" onClick={() => window.history.back()}>
          ← Back to Dashboard
        </button>
        <h1 className="text-2xl font-bold">Upload Slides</h1>
      </div>
      <div className="max-w-2xl mx-auto card p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Slides</h2>
      <label className="text-sm text-textMuted">Class ID</label>
      <input className="input w-full mb-3" value={classId} onChange={(e) => setClassId(e.target.value)} />
      <div className="border border-border rounded p-4 bg-card">
        <input type="file" accept="image/*,.pdf" multiple onChange={(e) => setFiles([...e.target.files])} />
        <p className="text-xs text-textMuted mt-2">Use thumbnails, we will lazy load.</p>
      </div>
      <button className="btn mt-4" onClick={onUpload}>Upload</button>
      {status && <p className="text-sm text-textMuted mt-2">{status}</p>}

      {/* Display uploaded slides */}
      {uploadedSlides.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Uploaded Slides ({uploadedSlides.length})</h3>
          <div className="space-y-2">
            {uploadedSlides.map((slide, index) => (
              <div key={slide._id || index} className="flex items-center justify-between p-3 bg-card rounded border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
                    {slide.mime?.includes('image') ? '🖼️' : '📄'}
                  </div>
                  <div>
                    <p className="font-medium">{slide.filename?.split('/').pop()}</p>
                    <p className="text-xs text-textMuted">{slide.mime}</p>
                  </div>
                </div>
                <a 
                  href={`/storage/${slide.filename}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-ghost text-sm"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  )
}