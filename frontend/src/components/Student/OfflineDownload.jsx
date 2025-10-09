import React, { useEffect, useState } from 'react'
import { saveLecturePackage, listLecturePackages, getLecturePackage, clearAllLecturePackages } from '../../utils/offline.js'
import api from '../../api/api.js'
import OfflineViewer from './OfflineViewer.jsx'
import AIChatBot from './AIChatBot.jsx'

export default function OfflineDownload() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('')
  const [availableClasses, setAvailableClasses] = useState([])
  const [downloading, setDownloading] = useState(false)
  const [viewingPackage, setViewingPackage] = useState(null)

  useEffect(() => { 
    refresh()
    loadAvailableClasses()
  }, [])

  async function refresh() { 
    try {
      console.log('[OfflineDownload] Loading saved packages...')
      const packages = await listLecturePackages()
      console.log('[OfflineDownload] Found packages:', packages)
      setItems(packages || [])
    } catch (error) {
      console.error('[OfflineDownload] Error loading packages:', error)
      setItems([])
    }
  }

  async function loadAvailableClasses() {
    try {
      // For now, we'll use the known class ID. In a real app, you'd have an API to list all classes
      const classId = '68cced26157d87e24fee03ce'
      const res = await api.get(`/classes/${classId}`)
      if (res.status === 'ok' && res.class) {
        setAvailableClasses([res.class])
      }
    } catch (error) {
      console.error('Failed to load classes:', error)
    }
  }

  const downloadClass = async (classData) => {
    setDownloading(true)
    setStatus('Downloading files...')
    
    try {
      // Helper function to download a file and convert to blob
      const downloadFile = async (url) => {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Failed to download ${url}`)
        return await response.blob()
      }

      // Process slides
      const slides = []
      for (const slide of classData.slides || []) {
        try {
          const url = `http://localhost:3000/storage/${slide.filename}`
          const blob = await downloadFile(url)
          slides.push({
            filename: slide.filename,
            blob: blob,
            type: blob.type,
            url: URL.createObjectURL(blob) // Create local URL for offline access
          })
          setStatus(`Downloaded: ${slide.filename}`)
        } catch (error) {
          console.error(`Failed to download slide ${slide.filename}:`, error)
        }
      }

      // Process audio files
      const audioFiles = []
      for (const audio of classData.slideAudio || []) {
        try {
          const url = `http://localhost:3000/storage/${audio.audioFile}`
          const blob = await downloadFile(url)
          audioFiles.push({
            filename: audio.audioFile.split('/').pop(),
            blob: blob,
            type: blob.type,
            url: URL.createObjectURL(blob),
            slideIndex: audio.slideIndex
          })
          setStatus(`Downloaded: ${audio.audioFile}`)
        } catch (error) {
          console.error(`Failed to download audio ${audio.audioFile}:`, error)
        }
      }

      // Save package to IndexedDB
      await saveLecturePackage({
        id: `class-${classData.id}`,
        classId: classData.id,
        name: classData.title || 'Untitled Class',
        slides: slides,
        audioFiles: audioFiles,
        downloadedAt: new Date().toISOString(),
        manifest: classData
      })

      setStatus('Saved for offline!')
      refresh()
    } catch (error) {
      console.error('Download failed:', error)
      setStatus('Download failed. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  const playOffline = async (id) => {
    try {
      console.log('[OfflineDownload] Opening package viewer for:', id)
      setViewingPackage(id)
    } catch (error) {
      console.error('[OfflineDownload] Failed to open package viewer:', error)
      alert('Failed to open offline package: ' + error.message)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button className="btn-ghost" onClick={() => window.history.back()}>
          ← Back to Dashboard
        </button>
        <h1 className="text-2xl font-bold">Offline Download</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <section className="card p-4">
          <h3 className="font-semibold mb-2">Available Classes</h3>
          <p className="text-sm text-textMuted mb-3">Download classes for offline access</p>
          
          {availableClasses.length > 0 ? (
            <div className="space-y-3">
              {availableClasses.map((cls) => (
                <div key={cls.id} className="border border-border rounded p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{cls.title || 'Untitled Class'}</div>
                      <div className="text-xs text-textMuted">
                        {(cls.slides || []).length} slides • {(cls.slideAudio || []).length} audio files
                      </div>
                    </div>
                    <button 
                      className="btn" 
                      onClick={() => downloadClass(cls)}
                      disabled={downloading}
                    >
                      {downloading ? 'Downloading...' : 'Download'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-textMuted">No classes available for download</div>
          )}
          
          {status && <p className="text-sm text-textMuted mt-3">{status}</p>}
        </section>

        <section className="card p-4">
          <h3 className="font-semibold mb-2">Saved Packages</h3>
          <div className="mb-3 flex gap-2">
            <button 
              className="btn-ghost text-xs" 
              onClick={() => {
                console.log('[OfflineDownload] Current packages:', items)
                refresh()
              }}
            >
              🔄 Refresh
            </button>
            <button 
              className="btn-ghost text-xs" 
              onClick={async () => {
                if (confirm('Clear all saved packages?')) {
                  try {
                    await clearAllLecturePackages()
                    console.log('[OfflineDownload] Cleared all packages')
                    await refresh()
                    setStatus('All packages cleared')
                  } catch (error) {
                    console.error('Failed to clear packages:', error)
                    setStatus('Failed to clear packages')
                  }
                }
              }}
            >
              🗑️ Clear All
            </button>
          </div>
          <ul className="space-y-2">
            {items.map((i) => {
              // Handle both old and new data structures
              const slideCount = i.slides ? i.slides.length : 0
              const audioCount = i.audioFiles ? i.audioFiles.length : (i.audioKeys ? i.audioKeys.length : 0)
              
              return (
                <li key={i.id} className="flex items-center justify-between border border-border rounded px-3 py-2">
                  <div>
                    <div className="font-semibold">{i.name || 'Unnamed Package'}</div>
                    <div className="text-xs text-textMuted">
                      {slideCount} slides • {audioCount} audio files
                    </div>
                    {i.downloadedAt && (
                      <div className="text-xs text-textMuted">
                        Downloaded: {new Date(i.downloadedAt).toLocaleDateString()}
                      </div>
                    )}
                    <div className="text-xs text-gray-400">
                      ID: {i.id}
                    </div>
                  </div>
                  <button className="btn" onClick={() => playOffline(i.id)}>Play</button>
                </li>
              )
            })}
            {!items.length && <li className="text-sm text-textMuted">No packages saved. Download a class to get started!</li>}
          </ul>
        </section>
      </div>

      {/* Offline Viewer Modal */}
      {viewingPackage && (
        <OfflineViewer 
          packageId={viewingPackage} 
          onClose={() => setViewingPackage(null)}
        />
      )}
      
      {/* AI Chat Bot */}
      <AIChatBot />
    </div>
  )
}