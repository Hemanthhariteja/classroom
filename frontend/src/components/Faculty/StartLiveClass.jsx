import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../api/api.js'
import useAuth from '../../hooks/useAuth.js'
import TeacherLiveMonitor from './TeacherLiveMonitor.jsx'

export default function StartLiveClass() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [started, setStarted] = useState(false)
  const [log, setLog] = useState('Ready to start live class')
  const [classData, setClassData] = useState(null)
  const [loading, setLoading] = useState(false)
  
  // Microphone and audio streaming state
  const [micStream, setMicStream] = useState(null)
  const [micPermission, setMicPermission] = useState('prompt') // 'granted', 'denied', 'prompt'
  const [isStreaming, setIsStreaming] = useState(false)
  const [audioLevel, setAudioLevel] = useState(0)

  // Load class data
  useEffect(() => {
    const loadClass = async () => {
      if (id) {
        try {
          setLoading(true)
          const response = await api.get(`/classes/${id}`)
          console.log('[StartLiveClass] API response:', response)
          
          // The API client already extracts JSON, so response is the data directly
          // API returns { status: "ok", class: {...} }
          const classInfo = response.class || response
          setClassData(classInfo)
          setLog(`Class loaded: ${classInfo.title || classInfo.subject || 'Unknown Class'}`)
        } catch (error) {
          console.error('[StartLiveClass] Error loading class:', error)
          setLog('Error loading class data')
        } finally {
          setLoading(false)
        }
      }
    }
    
    loadClass()
  }, [id])

  // Cleanup microphone on component unmount
  useEffect(() => {
    return () => {
      if (micStream) {
        micStream.getTracks().forEach(track => track.stop())
      }
    }
  }, [micStream])

  // Microphone access and audio streaming functions
  const requestMicrophoneAccess = async () => {
    try {
      setLog('Requesting microphone access...')
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      })
      
      setMicStream(stream)
      setMicPermission('granted')
      setLog('Microphone access granted')
      
      // Set up audio level monitoring
      const audioContext = new AudioContext()
      const source = audioContext.createMediaStreamSource(stream)
      const analyser = audioContext.createAnalyser()
      source.connect(analyser)
      
      const dataArray = new Uint8Array(analyser.frequencyBinCount)
      const updateAudioLevel = () => {
        analyser.getByteFrequencyData(dataArray)
        const average = dataArray.reduce((a, b) => a + b) / dataArray.length
        setAudioLevel(Math.round(average))
        if (isStreaming) {
          requestAnimationFrame(updateAudioLevel)
        }
      }
      updateAudioLevel()
      
      return stream
    } catch (error) {
      console.error('[StartLiveClass] Microphone access denied:', error)
      setMicPermission('denied')
      setLog('Microphone access denied: ' + error.message)
      throw error
    }
  }

  const stopMicrophone = () => {
    if (micStream) {
      micStream.getTracks().forEach(track => track.stop())
      setMicStream(null)
      setIsStreaming(false)
      setAudioLevel(0)
      setLog('Microphone stopped')
    }
  }

  const doStart = async () => {
    try {
      setLoading(true)
      setLog('Starting live broadcast...')
      
      // First, request microphone access
      let stream = micStream
      if (!stream) {
        stream = await requestMicrophoneAccess()
      }
      
      // Call API to start live broadcast
      const response = await api.post(`/classes/${id}/start-live`)
      console.log('[StartLiveClass] Live broadcast started:', response)
      
      // Update local state
      setStarted(true)
      setIsStreaming(true)
      const className = classData?.title || classData?.subject || 'class'
      setLog(`🔴 LIVE: Broadcasting ${className} with microphone!`)
      
      // Start WebRTC broadcasting
      try {
        const wsUrl = import.meta.env.VITE_WS_URL || 'ws://localhost:3000/ws'
        const token = '' // Get token if needed
        console.log('[StartLiveClass] Starting WebRTC broadcast to:', wsUrl)
        
        // Ask user if they want to share screen
        const includeScreen = confirm('Do you want to share your screen along with audio?')
        console.log('[StartLiveClass] User chose screen sharing:', includeScreen)
        
        const { startFacultyBroadcast } = await import('../../utils/webRTCClient.js')
        const ctrl = await startFacultyBroadcast({ 
          wsUrl, 
          token, 
          classId: id,
          includeScreen,
          onEvent: (e) => {
            console.log('[StartLiveClass] WebRTC event:', e)
            setLog(`WebRTC: ${e}`)
          }
        })
        
        // Store the controller for cleanup
        window.webrtcController = ctrl
        setLog(`🔴 LIVE: Broadcasting ${className} via WebRTC ${includeScreen ? '(Screen + Audio)' : '(Audio Only)'}!`)
        
      } catch (webrtcError) {
        console.error('[StartLiveClass] WebRTC setup failed:', webrtcError)
        setLog(`⚠️ LIVE: Broadcasting ${className} (WebRTC failed: ${webrtcError.message})`)
      }
      
    } catch (error) {
      console.error('[StartLiveClass] Error starting broadcast:', error)
      setLog('Failed to start live broadcast: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const doStop = async () => {
    try {
      setLoading(true)
      setLog('Stopping live broadcast...')
      
      // Stop microphone streaming
      stopMicrophone()
      
      // Stop WebRTC broadcasting
      if (window.webrtcController) {
        try {
          window.webrtcController.stop()
          window.webrtcController = null
          console.log('[StartLiveClass] WebRTC broadcast stopped')
        } catch (e) {
          console.error('[StartLiveClass] Error stopping WebRTC:', e)
        }
      }
      
      // Call API to stop live broadcast
      const response = await api.post(`/classes/${id}/stop-live`)
      console.log('[StartLiveClass] Live broadcast stopped successfully:', response?.message || 'OK')
      
      // Update local state
      setStarted(false)
      setIsStreaming(false)
      setLog('Live broadcast stopped')
      
    } catch (error) {
      console.error('[StartLiveClass] Error stopping broadcast:', error)
      setLog('Failed to stop live broadcast')
    } finally {
      setLoading(false)
    }
  }

  const goBack = () => {
    navigate('/dashboard')
  }

  if (loading && !classData) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <button className="btn-ghost" onClick={goBack}>
            ← Back to Dashboard
          </button>
          <h1 className="text-2xl font-bold">Go Live</h1>
        </div>
        <div className="max-w-xl mx-auto card p-6 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-textMuted">Loading class data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button className="btn-ghost" onClick={goBack}>
          ← Back to Dashboard
        </button>
        <h1 className="text-2xl font-bold">Go Live</h1>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Live Class Controls */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Go Live (Audio + Slides)</h2>
          <p className="text-textMuted mb-3">Start an audio-only broadcast. Slides are shared separately.</p>
          
          {classData && (
            <div className="mb-4 p-3 bg-background rounded border">
              <h3 className="font-medium">{classData.subject}</h3>
              <p className="text-sm text-textMuted">{classData.description}</p>
              <p className="text-xs text-textMuted mt-1">Class ID: {classData._id}</p>
            </div>
          )}
          
          {/* Microphone Controls */}
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded border">
            <h4 className="font-medium mb-2 flex items-center gap-2">
              🎤 Microphone Setup
              {micPermission === 'granted' && (
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300 rounded">
                  Ready
                </span>
              )}
            </h4>
            
            <div className="flex gap-2 mb-3">
              <button 
                className="btn btn-sm" 
                onClick={requestMicrophoneAccess}
                disabled={micPermission === 'granted' || loading}
              >
                {micPermission === 'granted' ? '✓ Mic Ready' : 'Test Microphone'}
              </button>
              
              {micStream && (
                <button 
                  className="btn-ghost btn-sm" 
                  onClick={stopMicrophone}
                  disabled={loading}
                >
                  Stop Mic
                </button>
              )}
            </div>
            
            {/* Audio Level Indicator */}
            {isStreaming && (
              <div className="mb-2">
                <div className="text-xs text-textMuted mb-1">Audio Level:</div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-100" 
                    style={{width: `${Math.min(audioLevel, 100)}%`}}
                  ></div>
                </div>
              </div>
            )}
            
            {micPermission === 'denied' && (
              <p className="text-xs text-red-600 dark:text-red-400">
                Microphone access denied. Please enable microphone in browser settings.
              </p>
            )}
          </div>
          
          <div className="flex gap-2 mb-4">
            {!started ? (
              <button 
                className="btn flex-1" 
                onClick={doStart}
                disabled={loading}
              >
                {loading ? 'Starting...' : 'Start Live'}
              </button>
            ) : (
              <button 
                className="btn btn-danger flex-1" 
                onClick={doStop}
              >
                Stop Live
              </button>
            )}
          </div>
          
          <div className="p-3 bg-background rounded border">
            <p className="text-sm font-medium mb-1">Status:</p>
            <p className="text-sm text-textMuted">{log}</p>
            
            {started && (
              <div className="mt-3 p-2 bg-green-100 dark:bg-green-900/20 rounded">
                <p className="text-sm text-green-700 dark:text-green-300">
                  🟢 Live broadcast is active! Share this class ID with students: <strong>{id}</strong>
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Live Monitor - only show when live */}
        {started && (
          <div>
            <TeacherLiveMonitor />
          </div>
        )}
      </div>
    </div>
  )
}