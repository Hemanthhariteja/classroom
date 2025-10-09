import React, { useState, useEffect } from 'react'
import { getLecturePackage } from '../../utils/offline.js'

export default function OfflineViewer({ packageId, onClose }) {
  const [pkg, setPkg] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadPackage()
  }, [packageId])

  const loadPackage = async () => {
    try {
      setLoading(true)
      console.log('[OfflineViewer] Loading package:', packageId)
      const packageData = await getLecturePackage(packageId)
      console.log('[OfflineViewer] Package loaded:', packageData)
      
      if (!packageData) {
        setError('Package not found')
        return
      }

      // Fix file type detection for slides
      if (packageData.slides) {
        packageData.slides = packageData.slides.map(slide => {
          console.log('[OfflineViewer] Processing slide:', slide)
          
          // Recreate blob URL if we have a blob but the URL is invalid
          if (slide.blob && (!slide.url || slide.url.startsWith('blob:'))) {
            // For PDFs, ensure proper MIME type
            if (slide.blob.type === 'application/pdf' || slide.filename?.match(/\.pdf$/i)) {
              const pdfBlob = new Blob([slide.blob], { type: 'application/pdf' })
              slide.url = URL.createObjectURL(pdfBlob)
              console.log('[OfflineViewer] Recreated PDF blob URL:', slide.url)
            } else {
              slide.url = URL.createObjectURL(slide.blob)
              console.log('[OfflineViewer] Recreated blob URL:', slide.url)
            }
          }
          
          // If type is missing, detect it from filename or blob type
          if (!slide.type && slide.filename) {
            const ext = slide.filename.split('.').pop().toLowerCase()
            if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
              slide.type = 'image'
            } else if (['pdf'].includes(ext)) {
              slide.type = 'pdf'
            } else {
              slide.type = 'unknown'
            }
          }
          
          // If type is still missing, try to detect from blob type
          if (!slide.type && slide.blob && slide.blob.type) {
            if (slide.blob.type.startsWith('image/')) {
              slide.type = 'image'
            } else if (slide.blob.type === 'application/pdf') {
              slide.type = 'pdf'
            } else {
              slide.type = 'unknown'
            }
          }
          
          console.log('[OfflineViewer] Slide after processing:', slide)
          return slide
        })
      }
      
      // Fix audio file blob URLs too
      if (packageData.audioFiles) {
        packageData.audioFiles = packageData.audioFiles.map(audio => {
          console.log('[OfflineViewer] Processing audio:', audio)
          
          // Recreate blob URL if we have a blob but the URL is invalid
          if (audio.blob && (!audio.url || audio.url.startsWith('blob:'))) {
            audio.url = URL.createObjectURL(audio.blob)
            console.log('[OfflineViewer] Recreated audio blob URL:', audio.url)
          }
          
          return audio
        })
      }
      
      setPkg(packageData)
    } catch (err) {
      console.error('[OfflineViewer] Error loading package:', err)
      setError('Failed to load offline package: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="card p-6 max-w-md">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Loading offline content...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="card p-6 max-w-md">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Error</h3>
            <p className="text-red-400 mb-4">{error}</p>
            <button className="btn" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    )
  }

  if (!pkg) {
    return null
  }

  const slides = pkg.slides || []
  const audioFiles = pkg.audioFiles || []

  return (
    <div className="fixed inset-0 bg-black/90 z-50">
      {/* Header */}
      <div className="bg-card border-b border-border p-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">{pkg.name}</h2>
          <p className="text-sm text-textMuted">
            📱 Offline Mode • {slides.length} slides • {audioFiles.length} audio files
          </p>
        </div>
        <button 
          className="btn-ghost" 
          onClick={onClose}
          title="Close offline viewer"
        >
          ✕ Close
        </button>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Main content area */}
        <div className="flex-1 p-4">
          {/* Slide navigation */}
          {slides.length > 0 && (
            <div className="mb-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`flex-shrink-0 border rounded overflow-hidden ${
                      index === activeSlide ? 'ring-2 ring-accent' : 'border-border'
                    }`}
                  >
                    {(slide.type === 'image' || 
                      slide.filename?.match(/\.(jpg|jpeg|png|gif|webp)$/i) ||
                      slide.blob?.type?.startsWith('image/')) ? (
                      <img 
                        src={slide.url} 
                        alt={slide.title || slide.filename} 
                        className="w-20 h-16 object-cover"
                      />
                    ) : (slide.type === 'pdf' || 
                          slide.filename?.match(/\.pdf$/i) ||
                          slide.blob?.type === 'application/pdf') ? (
                      <div className="w-20 h-16 bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 text-xs font-bold">PDF</span>
                      </div>
                    ) : (
                      <div className="w-20 h-16 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600 text-xs">
                          {slide.filename?.split('.').pop()?.toUpperCase() || 'FILE'}
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-xs text-textMuted mt-2">
                Slide {activeSlide + 1} of {slides.length} • Use ← → keys to navigate
              </p>
            </div>
          )}

          {/* Main slide display */}
          <div className="flex-1 flex items-center justify-center bg-gray-900 rounded border border-border min-h-[400px]">
            {slides.length > 0 && slides[activeSlide] ? (
              <div className="max-w-full max-h-full">
                {/* Try to display as image first */}
                {(slides[activeSlide].type === 'image' || 
                  slides[activeSlide].filename?.match(/\.(jpg|jpeg|png|gif|webp)$/i) ||
                  slides[activeSlide].blob?.type?.startsWith('image/')) ? (
                  <img 
                    src={slides[activeSlide].url} 
                    alt={slides[activeSlide].title || slides[activeSlide].filename}
                    className="max-w-full max-h-[70vh] object-contain rounded"
                    onError={(e) => {
                      console.error('[OfflineViewer] Image load error:', e)
                      console.log('[OfflineViewer] Failed slide data:', slides[activeSlide])
                    }}
                  />
                ) : (slides[activeSlide].type === 'pdf' || 
                       slides[activeSlide].filename?.match(/\.pdf$/i) ||
                       slides[activeSlide].blob?.type === 'application/pdf') ? (
                  <div className="w-full h-[70vh]">
                    <iframe 
                      src={slides[activeSlide].url}
                      className="w-full h-full border-0 rounded"
                      title={slides[activeSlide].title || slides[activeSlide].filename || 'PDF Document'}
                      type="application/pdf"
                      onError={(e) => {
                        console.error('[OfflineViewer] PDF load error:', e)
                        console.log('[OfflineViewer] Failed PDF data:', slides[activeSlide])
                      }}
                    />
                    {/* Fallback if iframe doesn't work */}
                    <div className="text-center p-4 mt-2">
                      <button 
                        className="btn mr-2"
                        onClick={() => {
                          window.open(slides[activeSlide].url, '_blank')
                        }}
                      >
                        📖 Try to Open PDF
                      </button>
                      <button 
                        className="btn"
                        onClick={() => {
                          const link = document.createElement('a')
                          link.href = slides[activeSlide].url
                          link.download = slides[activeSlide].filename || 'document.pdf'
                          link.click()
                        }}
                      >
                        💾 Download PDF
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8 text-textMuted">
                    <div className="text-4xl mb-4">📄</div>
                    <p className="mb-2">File: {slides[activeSlide].filename || 'Unknown'}</p>
                    <p className="mb-2">Type: {slides[activeSlide].type || 'Unknown'}</p>
                    <p className="mb-4">Extension: {slides[activeSlide].extension || 'Unknown'}</p>
                    {slides[activeSlide].blob && (
                      <p className="mb-4">Blob Type: {slides[activeSlide].blob.type}</p>
                    )}
                    <p className="text-sm">
                      This file type is not yet supported for offline viewing.
                    </p>
                    {slides[activeSlide].url && (
                      <button 
                        className="btn mt-4"
                        onClick={() => {
                          window.open(slides[activeSlide].url, '_blank')
                        }}
                      >
                        🔗 Try to Open File
                      </button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-textMuted">
                <div className="text-4xl mb-4">📚</div>
                <p>No slides available in this offline package</p>
              </div>
            )}
          </div>
        </div>

        {/* Audio sidebar */}
        {audioFiles.length > 0 && (
          <div className="w-80 bg-card border-l border-border p-4">
            <h3 className="font-semibold mb-4">🎵 Audio Files</h3>
            <div className="space-y-4">
              {audioFiles.map((audio, index) => (
                <div key={index} className="border border-border rounded p-3">
                  <div className="text-sm font-medium mb-2">{audio.title}</div>
                  <audio controls className="w-full">
                    <source src={audio.url} type={audio.type} />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="text-xs text-textMuted mt-1">
                    {audio.extension?.toUpperCase()} • Slide {audio.slideIndex}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Keyboard navigation */}
      <div className="hidden">
        {/* This handles keyboard events */}
        <KeyboardHandler 
          onLeft={() => setActiveSlide(Math.max(0, activeSlide - 1))}
          onRight={() => setActiveSlide(Math.min(slides.length - 1, activeSlide + 1))}
        />
      </div>
    </div>
  )
}

// Keyboard event handler component
function KeyboardHandler({ onLeft, onRight }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onLeft()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        onRight()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onLeft, onRight])

  return null
}