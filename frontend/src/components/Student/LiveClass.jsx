import React, { useEffect, useRef, useState } from 'react'
import { webRTCClient } from '../../utils/webRTCClient.js'
import api from '../../api/api.js'
import { useParams } from 'react-router-dom'
import { savePendingQuiz } from '../../utils/offline.js'
import ConnectivityBadge from '../Shared/ConnectivityBadge.jsx'
import DataUsageMeter from '../Shared/DataUsageMeter.jsx'
import AudioVisualizer3D from '../Three/AudioVisualizer3D.jsx'
import AIChatBot from './AIChatBot.jsx'

export default function LiveClass() {
  const { id } = useParams()
  console.log('[LiveClass] URL Parameter ID:', id)
  console.log('[LiveClass] Current URL:', window.location.href)
  const audioRef = useRef(null)
  const videoRef = useRef(null)
  const [isAudioInitialized, setIsAudioInitialized] = useState(false)
  const [hasVideo, setHasVideo] = useState(false)
  
  // Audio initialization and debugging function
  const initializeAudio = async () => {
    if (audioRef.current) {
      const audio = audioRef.current
      
      console.log('[LiveClass] Initializing audio element...')
      console.log('[LiveClass] Initial audio state:', {
        volume: audio.volume,
        muted: audio.muted,
        paused: audio.paused,
        readyState: audio.readyState,
        src: audio.src,
        srcObject: !!audio.srcObject
      })
      
      // Force set volume and unmute
      audio.volume = 1.0
      audio.muted = false
      
      // Check system audio
      console.log('[LiveClass] System audio check...')
      try {
        // Create a simple test tone to verify audio output
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime) // A note
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime) // Low volume
        
        oscillator.start()
        oscillator.stop(audioContext.currentTime + 0.1) // Play for 100ms
        
        console.log('[LiveClass] Audio context test completed - if you heard a beep, audio is working')
        audioContext.close()
      } catch (e) {
        console.error('[LiveClass] Audio context test failed:', e)
      }
      
      setIsAudioInitialized(true)
      console.log('[LiveClass] Audio initialization complete')
      
      return audio
    }
  }
  const [slides, setSlides] = useState([])
  const [audioFiles, setAudioFiles] = useState([])
  const [active, setActive] = useState(0)
  const [chat, setChat] = useState([])
  const [msg, setMsg] = useState('')
  const [quizOpen, setQuizOpen] = useState(false)
  const [quiz, setQuiz] = useState(null)
  const [webrtcFailed, setWebrtcFailed] = useState(false)
  const [httpAudio, setHttpAudio] = useState('')
  const [showEnableAudio, setShowEnableAudio] = useState(false)
  const [classTitle, setClassTitle] = useState('Live Class')
  const [teacherLive, setTeacherLive] = useState(false) // Will be set from API data
  const [hasLiveStream, setHasLiveStream] = useState(false) // Track if we have an active WebRTC stream

  useEffect(() => {
    (async () => {
      try {
        console.log('[LiveClass] About to fetch class data for ID:', id)
        // Fetch real class data from API
        const res = await api.get(`/classes/${id}`)
        console.log('[LiveClass] API Response:', res)
        
        if (res.status === 'ok' && res.class) {
          const classData = res.class
          console.log('[LiveClass] Class data:', classData)
          console.log('[LiveClass] Slides array:', classData.slides)
          console.log('[LiveClass] SlideAudio array:', classData.slideAudio)
          
          // Helper function to get file extension
          const getFileExtension = (filename) => {
            return filename.split('.').pop().toLowerCase()
          }
          
          // Helper function to determine file type
          const getFileType = (filename) => {
            const ext = getFileExtension(filename)
            if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return 'image'
            if (['pdf'].includes(ext)) return 'pdf'
            if (['mp3', 'wav', 'ogg', 'm4a'].includes(ext)) return 'audio'
            return 'unknown'
          }
          
          // Process slides (images and PDFs)
          const slideFiles = (classData.slides || []).map((slide, index) => ({
            id: `slide-${index}`,
            filename: slide.filename,
            url: `http://localhost:3000/storage/${slide.filename}`,
            title: slide.filename.split('.')[0] || `Slide ${index + 1}`,
            type: getFileType(slide.filename),
            extension: getFileExtension(slide.filename)
          }))
          
          // Process audio files (stored separately in slideAudio)
          const audioFilesList = (classData.slideAudio || []).map((audio, index) => {
            console.log('[LiveClass] Raw audio data:', audio);
            const audioUrl = `http://localhost:3000/storage/${audio.audioFile}`;
            console.log('[LiveClass] Constructed audio URL:', audioUrl);
            return {
              id: `audio-${index}`,
              filename: audio.audioFile.split('/').pop(), // Extract filename from path
              url: audioUrl,
              title: `Slide ${audio.slideIndex} Audio`,
              type: 'audio',
              extension: getFileExtension(audio.audioFile),
              slideIndex: audio.slideIndex
            }
          })
          
          console.log('[LiveClass] Slide files:', slideFiles)
          console.log('[LiveClass] Audio files:', audioFilesList)
          console.log('[LiveClass] Audio files URLs:', audioFilesList.map(f => f.url))
          console.log('[LiveClass] First audio file URL:', audioFilesList[0]?.url)
          
          // Set slides (images + PDFs for viewing)
          setSlides(slideFiles)
          setAudioFiles(audioFilesList)
          setClassTitle(classData.title || 'Live Class')
          
          // Set live status from API data
          setTeacherLive(!!classData.live)
          console.log('[LiveClass] Live status:', classData.live)
          
          // Set quiz data if available
          if (classData.quiz) {
            setQuiz(classData.quiz)
          }
        } else {
          console.error('[LiveClass] Invalid response format:', res)
        }
      } catch (error) {
        console.error('[LiveClass] Failed to fetch class data:', error)
      }
    })()
  }, [id])

  // Monitor audio files changes
  useEffect(() => {
    console.log('[LiveClass] audioFiles state changed:', audioFiles);
    console.log('[LiveClass] teacherLive status:', teacherLive);
    console.log('[LiveClass] hasLiveStream status:', hasLiveStream);
    
    // Only set static audio if:
    // 1. Teacher is NOT live
    // 2. We DON'T have an active live stream
    // 3. We have audio files available
    if (audioFiles.length > 0 && audioRef.current && !teacherLive && !hasLiveStream) {
      const firstAudio = audioFiles[0];
      console.log('[LiveClass] Setting STATIC audio source to:', firstAudio.url);
      
      // Make sure we're not interrupting any existing playback
      if (audioRef.current.srcObject) {
        console.log('[LiveClass] Clearing WebRTC stream before loading static audio');
        audioRef.current.srcObject = null;
      }
      
      // Only load if src is different to avoid unnecessary interruptions
      if (audioRef.current.src !== firstAudio.url) {
        audioRef.current.pause();
        audioRef.current.src = firstAudio.url;
        audioRef.current.load();
        console.log('[LiveClass] Loaded static audio source');
      }
      
      // Check browser support for audio format
      const audio = audioRef.current;
      const canPlayOgg = audio.canPlayType('audio/ogg; codecs="vorbis"');
      console.log('[LiveClass] Browser OGG support:', canPlayOgg);
      
      // Try to play after a short delay
      setTimeout(() => {
        if (audioRef.current && !teacherLive && !hasLiveStream) {
          audioRef.current.play().catch(err => {
            console.log('[LiveClass] Auto-play failed (expected):', err.message);
          });
        }
      }, 500);
    } else if (hasLiveStream && audioRef.current) {
      // Clear static audio when we have a live stream
      if (audioRef.current.src && !audioRef.current.srcObject) {
        console.log('[LiveClass] Clearing static audio - live stream is active');
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current.load();
      }
    } else if (teacherLive || hasLiveStream) {
      console.log('[LiveClass] Live stream active - prioritizing live audio over static files');
    }
  }, [audioFiles, teacherLive, hasLiveStream]);

  // Separate effect for WebRTC connection based on live status
  useEffect(() => {
    if (!teacherLive) {
      console.log('[LiveClass] Teacher not live, using static audio')
      setWebrtcFailed(true)
      setHasLiveStream(false)
      setHasVideo(false)
      return
    }

    console.log('[LiveClass] Teacher is live, attempting WebRTC connection')
    setWebrtcFailed(false)
    
    const initWebRTC = async () => {
      const mod = await import('../../api/api.js')
      const token = mod.getAuthToken ? await mod.getAuthToken() : ''
      
      const wsUrl = import.meta.env.VITE_WS_URL || 'ws://localhost:3000/ws'
      console.log('[LiveClass] Initializing WebRTC with URL:', wsUrl)
      const client = webRTCClient({ wsUrl, token })
      
      client.joinClass(id, (remoteStream) => {
        console.log('[LiveClass] Received LIVE audio stream from teacher!', remoteStream);
        console.log('[LiveClass] Stream tracks:', remoteStream.getTracks());
        console.log('[LiveClass] Audio tracks:', remoteStream.getAudioTracks());
        console.log('[LiveClass] Video tracks:', remoteStream.getVideoTracks());

        // If the remote stream also contains video, wire it to the video element
        if (remoteStream.getVideoTracks().length > 0) {
          console.log('[LiveClass] *** AUDIO STREAM CONTAINS VIDEO TRACKS! ***');
          setHasVideo(true);
          if (videoRef.current) {
            try {
              videoRef.current.srcObject = remoteStream;
              videoRef.current.play().then(() => {
                console.log('[LiveClass] Video playback started from audio callback');
              }).catch(err => {
                console.log('[LiveClass] Video play failed from audio callback:', err.message);
                // Prompt user to enable audio/video via gesture
                setShowEnableAudio(true);
              });
            } catch (e) {
              console.log('[LiveClass] Failed to set video srcObject:', e);
            }
          }
        }

        // Log audio track details
        remoteStream.getAudioTracks().forEach((track, index) => {
          console.log(`[LiveClass] Audio track ${index}:`, {
            enabled: track.enabled,
            muted: track.muted,
            readyState: track.readyState,
            label: track.label,
            settings: track.getSettings()
          });
        });

        if (audioRef.current) {
          // Stop any current playback and clear sources completely
          audioRef.current.pause();
          audioRef.current.src = '';
          audioRef.current.srcObject = null;
          audioRef.current.load(); // Force clear

          // Wait a moment then set live stream
          setTimeout(async () => {
            if (audioRef.current && remoteStream) {
              console.log('[LiveClass] Setting srcObject to remoteStream');
              audioRef.current.srcObject = remoteStream;

              // Initialize audio properly
              await initializeAudio();

              // Set audio properties for better playback
              audioRef.current.volume = 1.0;
              audioRef.current.muted = false;

              setHasLiveStream(true); // Mark that we have an active live stream
              console.log('[LiveClass] Switched to LIVE WebRTC stream');

              // Try to play the live stream
              audioRef.current.play().then(() => {
                console.log('[LiveClass] Audio playback started successfully');
              }).catch(err => {
                console.log('[LiveClass] Live stream play failed (may need user interaction):', err.message);
                // Prompt user to enable audio via gesture
                setShowEnableAudio(true);
              });
            }
          }, 100);
        }
      }, (evt) => {
        console.log('[LiveClass] WebRTC event:', evt);
        if (evt === 'webrtc-failed') {
          setWebrtcFailed(true)
          setHasLiveStream(false) // Clear live stream state on failure
          setHasVideo(false) // Clear video state on failure
          console.log('[LiveClass] WebRTC failed - will fallback to static audio');
        }
      }, (remoteStream) => {
        // Video stream callback
        console.log('[LiveClass] Received LIVE video stream from teacher!', remoteStream);
        console.log('[LiveClass] Video tracks:', remoteStream.getVideoTracks());
        console.log('[LiveClass] Audio tracks in video stream:', remoteStream.getAudioTracks());
        console.log('[LiveClass] All tracks in video stream:', remoteStream.getTracks());
        
        // Check video track details
        remoteStream.getVideoTracks().forEach((track, index) => {
          console.log(`[LiveClass] Video track ${index} details:`, {
            enabled: track.enabled,
            muted: track.muted,
            readyState: track.readyState,
            label: track.label,
            settings: track.getSettings(),
            constraints: track.getConstraints()
          });
        });
        
        if (videoRef.current) {
          if (remoteStream.getVideoTracks().length > 0) {
            console.log('[LiveClass] Setting video srcObject with stream containing video tracks');
            
            // Force reset the video element
            videoRef.current.srcObject = null;
            setTimeout(() => {
              videoRef.current.srcObject = remoteStream;
              setHasVideo(true);
              
              console.log('[LiveClass] Video element details after setting stream:', {
                videoWidth: videoRef.current.videoWidth,
                videoHeight: videoRef.current.videoHeight,
                readyState: videoRef.current.readyState,
                paused: videoRef.current.paused,
                currentTime: videoRef.current.currentTime
              });
              
              // Try to play the video
              videoRef.current.play().then(() => {
                console.log('[LiveClass] Video playback started successfully');
                console.log('[LiveClass] Video dimensions after play:', {
                  videoWidth: videoRef.current.videoWidth,
                  videoHeight: videoRef.current.videoHeight
                });
              }).catch(err => {
                console.log('[LiveClass] Video play failed:', err.message);
                // If autoplay blocked, prompt user gesture to enable audio/video
                setShowEnableAudio(true);
              });
            }, 100);
            
            console.log('[LiveClass] Video stream set to video element');
          } else {
            console.log('[LiveClass] No video tracks found in received stream');
          }
        } else {
          console.log('[LiveClass] Video ref is null');
        }
      })
      
      return client
    }
    
    let ctl
    initWebRTC().then(client => {
      ctl = client
    }).catch(err => {
      console.error('[LiveClass] WebRTC initialization failed:', err)
      setWebrtcFailed(true)
    })
    
    return () => {
      console.log('[LiveClass] Cleaning up WebRTC connection');
      setHasLiveStream(false)
      setHasVideo(false)
      ctl?.leave()
    }
  }, [id, teacherLive])

  useEffect(() => {
    if (webrtcFailed && audioRef.current && httpAudio) {
      console.log('[LiveClass] Switching to fallback audio:', httpAudio)
      // Pause current playback before switching sources
      audioRef.current.pause()
      audioRef.current.srcObject = null
      audioRef.current.src = httpAudio
      audioRef.current.load()
      
      // Initialize audio for fallback file
      setTimeout(async () => {
        await initializeAudio()
        console.log('[LiveClass] Fallback audio initialized')
      }, 100)
    }
  }, [webrtcFailed, httpAudio])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setActive(a => Math.min(a + 1, slides.length - 1))
      if (e.key === 'ArrowLeft') setActive(a => Math.max(a - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [slides.length])

  // Add audio debugging and management
  const playAudioFile = (audioFile) => {
    if (audioRef.current && audioFile.url) {
      audioRef.current.src = audioFile.url;
      audioRef.current.load(); // Reload the audio element
      console.log('[LiveClass] Switching to audio:', audioFile.title, audioFile.url);
      
      // Try to play automatically (may require user interaction)
      audioRef.current.play().catch(err => {
        console.error('Error playing audio:', err);
      });
    }
  };

  const testAudio = () => {
    console.log('[LiveClass] Testing audio...');
    console.log('[LiveClass] Audio ref:', audioRef.current);
    console.log('[LiveClass] Available audio files:', audioFiles);
    console.log('[LiveClass] Audio element src:', audioRef.current?.src);
    console.log('[LiveClass] Audio element readyState:', audioRef.current?.readyState);
    
    if (audioFiles.length > 0) {
      const testFile = audioFiles[0];
      console.log('[LiveClass] Testing first audio file:', testFile);
      console.log('[LiveClass] Audio URL to test:', testFile.url);
      
      // Test if URL is accessible
      fetch(testFile.url, { method: 'HEAD' })
        .then(response => {
          console.log('[LiveClass] Audio file fetch test - Status:', response.status);
          console.log('[LiveClass] Audio file fetch test - Headers:', response.headers.get('content-type'));
          
          if (response.ok) {
            playAudioFile(testFile);
          } else {
            alert(`Audio file not accessible. Status: ${response.status}`);
          }
        })
        .catch(err => {
          console.error('[LiveClass] Audio file fetch test failed:', err);
          alert('Failed to access audio file: ' + err.message);
        });
    } else {
      console.log('[LiveClass] No audio files available');
      alert('No audio files available for this class');
    }
  };

  const sendMsg = () => {
    if (msg.trim()) {
      const newMessage = { text: msg, me: true, time: new Date().toLocaleTimeString() }
      setChat([...chat, newMessage])
      
      // Simulate teacher response (in real app, this would be real-time)
      setTimeout(() => {
        if (msg.toLowerCase().includes('question') || msg.toLowerCase().includes('help')) {
          setChat(prev => [...prev, { 
            text: "I'll address that in a moment. Keep following along!", 
            me: false, 
            sender: 'Teacher',
            time: new Date().toLocaleTimeString() 
          }])
        }
      }, 2000)
      
      setMsg('')
    }
  }

  const submitQuiz = async (answers) => {
    try {
      const res = await api.post(`/quizzes/${quiz.id}/submit`, { answers, createdAt: Date.now() })
      if (res.status !== 'ok') throw new Error('fail')
      alert('Quiz submitted!')
    } catch {
      await savePendingQuiz({ quizId: quiz.id, answers, createdAt: Date.now() })
      if ('serviceWorker' in navigator && navigator.serviceWorker.ready) {
        const reg = await navigator.serviceWorker.ready
        if ('sync' in reg) reg.sync.register('sync-quiz-submissions').catch(() => {})
      }
      alert('Offline: saved for sync.')
    }
    setQuizOpen(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button className="btn-ghost" onClick={() => window.history.back()}>
          ← Back to Dashboard
        </button>
        <h1 className="text-2xl font-bold">{classTitle}</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
      <section className="relative card p-4 lg:col-span-2 overflow-hidden">
        {/* 3D visualizer behind the audio controls */}
        <AudioVisualizer3D audioRef={audioRef} />
        <div className="relative z-10">
          <div className="section-title">
            <h3 className="font-semibold flex items-center gap-2">
              {classTitle}
              {teacherLive && (
                <div className="flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/20 rounded-full text-xs">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  <span className="text-red-700 dark:text-red-300 font-medium">LIVE</span>
                </div>
              )}
              {/* Connection Status */}
              {teacherLive && (
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                  hasLiveStream 
                    ? 'bg-green-100 dark:bg-green-900/20' 
                    : webrtcFailed 
                    ? 'bg-yellow-100 dark:bg-yellow-900/20' 
                    : 'bg-blue-100 dark:bg-blue-900/20'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    hasLiveStream 
                      ? 'bg-green-500' 
                      : webrtcFailed 
                      ? 'bg-yellow-500' 
                      : 'bg-blue-500 animate-pulse'
                  }`}></span>
                  <span className={`font-medium ${
                    hasLiveStream 
                      ? 'text-green-700 dark:text-green-300' 
                      : webrtcFailed 
                      ? 'text-yellow-700 dark:text-yellow-300' 
                      : 'text-blue-700 dark:text-blue-300'
                  }`}>
                    {hasLiveStream ? 'CONNECTED' : webrtcFailed ? 'STATIC AUDIO' : 'CONNECTING...'}
                  </span>
                </div>
              )}
            </h3>
            <div className="flex items-center gap-3">
              <DataUsageMeter kbps={24} />
              <ConnectivityBadge />
              {quiz && <button className="btn ml-2" onClick={() => setQuizOpen(true)}>Take Quiz</button>}
            </div>
          </div>
          <audio 
            ref={audioRef} 
            controls 
            className="w-full mt-2"
            preload="metadata"
            autoPlay={true}
            playsInline={true}
            volume={1.0}
            onLoadedData={(e) => {
              console.log('[LiveClass] Audio loaded data:', {
                duration: e.target.duration,
                readyState: e.target.readyState,
                srcObject: !!e.target.srcObject,
                tracks: e.target.srcObject?.getTracks?.()?.length || 0
              });
            }}
            onCanPlay={(e) => {
              console.log('[LiveClass] Audio can play:', {
                paused: e.target.paused,
                muted: e.target.muted,
                volume: e.target.volume
              });
            }}
            onPlay={() => console.log('[LiveClass] Audio started playing')}
            onPause={() => console.log('[LiveClass] Audio paused')}
            onVolumeChange={(e) => console.log('[LiveClass] Volume changed:', e.target.volume)}
            onError={(e) => {
              console.log('[LiveClass] Audio error:', e);
              console.log('[LiveClass] Audio src:', e.target.src);
              console.log('[LiveClass] Available audio files:', audioFiles);
              console.log('[LiveClass] httpAudio:', httpAudio);
              console.log('[LiveClass] Audio error code:', e.target.error?.code);
              console.log('[LiveClass] Audio error message:', e.target.error?.message);
            }}
            onLoadStart={() => {
              console.log('[LiveClass] Audio load started');
            }}
          >
            Your browser does not support the audio element.
          </audio>
          
          {/* Video element for screen sharing */}
          {hasVideo && (
            <div className="mt-4">
              <h4 className="font-bold mb-2">📺 Teacher's Screen</h4>
              <video 
                ref={videoRef} 
                controls 
                className="w-full max-h-96 bg-gray-900 rounded border-2 border-green-500"
                autoPlay={true}
                playsInline={true}
                muted={true}
                onLoadedData={() => console.log('[LiveClass] Video loaded')}
                onPlay={() => console.log('[LiveClass] Video started playing')}
                onError={(e) => console.log('[LiveClass] Video error:', e)}
                onLoadedMetadata={(e) => {
                  console.log('[LiveClass] Video metadata loaded');
                  console.log('[LiveClass] Video dimensions:', e.target.videoWidth, 'x', e.target.videoHeight);
                }}
                onCanPlay={() => console.log('[LiveClass] Video can play')}
                style={{ minHeight: '200px' }}
              >
                Your browser does not support the video element.
              </video>
              
              {/* Video Debug Info */}
              <div className="mt-2 p-2 bg-blue-100 dark:bg-blue-900 rounded text-sm">
                <p><strong>Video Status:</strong> {hasVideo ? 'Active' : 'No Video'}</p>
                <p><strong>Element Ready:</strong> {videoRef.current?.readyState || 'N/A'}</p>
                <p><strong>Dimensions:</strong> {videoRef.current?.videoWidth || 0} x {videoRef.current?.videoHeight || 0}</p>
                <button 
                  onClick={() => {
                    if (videoRef.current) {
                      const stream = videoRef.current.srcObject
                      if (stream) {
                        console.log('[Debug] Video stream tracks:', stream.getTracks())
                        console.log('[Debug] Video tracks:', stream.getVideoTracks())
                        console.log('[Debug] Video element properties:', {
                          videoWidth: videoRef.current.videoWidth,
                          videoHeight: videoRef.current.videoHeight,
                          currentSrc: videoRef.current.currentSrc,
                          readyState: videoRef.current.readyState,
                          paused: videoRef.current.paused,
                          muted: videoRef.current.muted,
                          currentTime: videoRef.current.currentTime,
                          duration: videoRef.current.duration
                        })
                        
                        // Try to force play
                        videoRef.current.play().then(() => {
                          console.log('[Debug] Force play successful')
                        }).catch(err => {
                          console.log('[Debug] Force play failed:', err)
                        })
                      } else {
                        console.log('[Debug] No stream object on video element')
                      }
                    }
                  }}
                  className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
                >
                  Debug Video
                </button>
              </div>
            </div>
          )}
          
          {/* Show when expecting video but not receiving */}
          {teacherLive && !hasVideo && (
            <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900 rounded">
              <p className="text-sm">📺 Waiting for screen sharing from teacher...</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Status: {hasLiveStream ? 'Audio connected, waiting for video' : 'Connecting to teacher...'}
              </p>
            </div>
          )}
          
          {/* Debug info for video reception */}
          {teacherLive && (
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <h5 className="font-bold text-sm mb-2">🔍 WebRTC Debug Info</h5>
              <div className="text-xs space-y-1">
                <p><strong>Audio Connection:</strong> {hasLiveStream ? '✅ Connected' : '❌ Not connected'}</p>
                <p><strong>Video Connection:</strong> {hasVideo ? '✅ Connected' : '❌ Not connected'}</p>
                <p><strong>WebRTC Failed:</strong> {webrtcFailed ? '❌ Yes' : '✅ No'}</p>
                <button 
                  onClick={() => {
                    console.log('[Debug] Current state:', {
                      hasLiveStream,
                      hasVideo,
                      webrtcFailed,
                      teacherLive,
                      audioElement: audioRef.current ? {
                        srcObject: !!audioRef.current.srcObject,
                        src: audioRef.current.src,
                        paused: audioRef.current.paused,
                        volume: audioRef.current.volume,
                        tracks: audioRef.current.srcObject ? audioRef.current.srcObject.getTracks().map(t => ({
                          kind: t.kind,
                          label: t.label,
                          enabled: t.enabled,
                          readyState: t.readyState
                        })) : []
                      } : null,
                      videoElement: videoRef.current ? {
                        srcObject: !!videoRef.current.srcObject,
                        videoWidth: videoRef.current.videoWidth,
                        videoHeight: videoRef.current.videoHeight,
                        paused: videoRef.current.paused
                      } : null
                    })
                    
                    // Check if audio stream has video tracks
                    if (audioRef.current && audioRef.current.srcObject) {
                      const stream = audioRef.current.srcObject
                      console.log('[Debug] Audio stream analysis:', {
                        totalTracks: stream.getTracks().length,
                        audioTracks: stream.getAudioTracks().length,
                        videoTracks: stream.getVideoTracks().length,
                        allTracks: stream.getTracks().map(t => ({
                          kind: t.kind,
                          label: t.label,
                          enabled: t.enabled
                        }))
                      })
                      
                      // If audio stream has video tracks, set them to video element
                      if (stream.getVideoTracks().length > 0) {
                        console.log('[Debug] Found video tracks in audio stream! Setting to video element...')
                        if (videoRef.current) {
                          videoRef.current.srcObject = stream
                          setHasVideo(true)
                          console.log('[Debug] Video element updated with stream from audio')
                        }
                      }
                    }
                  }}
                  className="mt-2 px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
                >
                  Log Debug Info
                </button>
                <button 
                  onClick={() => {
                    console.log('[Debug] Forcing video check...')
                    if (audioRef.current && audioRef.current.srcObject) {
                      const stream = audioRef.current.srcObject
                      const videoTracks = stream.getVideoTracks()
                      console.log('[Debug] Video tracks in audio stream:', videoTracks.length)
                      
                      if (videoTracks.length > 0) {
                        console.log('[Debug] Video tracks found! Setting hasVideo to true')
                        setHasVideo(true)
                        if (videoRef.current) {
                          videoRef.current.srcObject = stream
                          videoRef.current.play().catch(e => console.log('[Debug] Video play failed:', e))
                        }
                      } else {
                        console.log('[Debug] No video tracks in current stream')
                      }
                    } else {
                      console.log('[Debug] No audio stream available')
                    }
                  }}
                  className="mt-1 px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                >
                  Force Video Check
                </button>
              </div>
            </div>
          )}
          
          {/* Audio Test and Debug Panel */}
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
            <h4 className="font-bold mb-2">🔊 Audio Debug Panel</h4>
            <div className="flex gap-2 mb-2">
              <button 
                onClick={initializeAudio}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                Initialize Audio
              </button>
              <button 
                onClick={() => {
                  if (audioRef.current) {
                    audioRef.current.volume = 1.0
                    audioRef.current.muted = false
                    console.log('[LiveClass] Force unmuted and volume=1.0')
                  }
                }}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
              >
                Force Unmute
              </button>
              <button 
                onClick={() => {
                  if (audioRef.current && (audioRef.current.src || audioRef.current.srcObject)) {
                    audioRef.current.play().then(() => {
                      console.log('[LiveClass] Manual play successful')
                    }).catch(e => {
                      console.log('[LiveClass] Manual play failed:', e.message)
                    })
                  }
                }}
                className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
              >
                Force Play
              </button>
              <button 
                onClick={async () => {
                  // Comprehensive audio test
                  console.log('[LiveClass] Running comprehensive audio test...')
                  
                  try {
                    // Test 1: Web Audio API beep
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
                    console.log('[LiveClass] AudioContext state:', audioContext.state)
                    
                    if (audioContext.state === 'suspended') {
                      await audioContext.resume()
                      console.log('[LiveClass] AudioContext resumed')
                    }
                    
                    const oscillator = audioContext.createOscillator()
                    const gainNode = audioContext.createGain()
                    
                    oscillator.connect(gainNode)
                    gainNode.connect(audioContext.destination)
                    
                    oscillator.frequency.setValueAtTime(880, audioContext.currentTime) // High A note
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime) // Louder volume
                    
                    oscillator.start()
                    oscillator.stop(audioContext.currentTime + 0.5) // Play for 500ms
                    
                    console.log('[LiveClass] Test beep played - did you hear it?')
                    
                    // Test 2: HTML Audio element
                    setTimeout(() => {
                      const testAudio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAUA0GO2Ou8cB4FNYzT8M2AOQkNZrrr55JMDR1Nnunn0xhMczkgqOG5rGMcBzaZ3u3AaSEGOnLR89eTQQoUZrXr4qhRFAhHot/nvWITAz+M1OSXJIHi2Lz6wBcQ')
                      testAudio.volume = 0.5
                      testAudio.play().then(() => {
                        console.log('[LiveClass] HTML Audio test successful')
                      }).catch(e => {
                        console.log('[LiveClass] HTML Audio test failed:', e.message)
                      })
                    }, 600)
                    
                    audioContext.close()
                  } catch (e) {
                    console.error('[LiveClass] Audio test failed:', e)
                    alert('Audio test failed: ' + e.message)
                  }
                }}
                className="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600"
              >
                Audio Test
              </button>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Status: {isAudioInitialized ? '✅ Initialized' : '❌ Not initialized'} | 
              Volume: {audioRef.current?.volume || 'N/A'} | 
              Muted: {audioRef.current?.muted ? 'Yes' : 'No'} | 
              Source: {audioRef.current?.src ? 'File' : audioRef.current?.srcObject ? 'Stream' : 'None'}
            </div>
          </div>

          {/* Overlay prompt when autoplay is blocked */}
          {showEnableAudio && (
            <div className="fixed inset-0 flex items-end sm:items-center justify-center p-4 pointer-events-none">
              <div className="bg-white dark:bg-gray-900 border border-border rounded p-4 shadow-lg pointer-events-auto">
                <p className="mb-2 font-semibold">Enable audio</p>
                <p className="text-sm text-textMuted mb-3">Your browser blocked autoplay. Click below to enable live audio.</p>
                <div className="flex gap-2">
                  <button className="btn bg-green-500 text-white" onClick={async () => {
                    try {
                      await initializeAudio()
                      if (audioRef.current) {
                        await audioRef.current.play()
                        console.log('[LiveClass] Audio enabled via user gesture')
                        setShowEnableAudio(false)
                      }
                    } catch (e) {
                      console.log('[LiveClass] Enabling audio failed:', e)
                      alert('Failed to enable audio: ' + (e.message || e))
                    }
                  }}>Enable Audio</button>
                  <button className="btn" onClick={() => setShowEnableAudio(false)}>Dismiss</button>
                </div>
              </div>
            </div>
          )}
          
          {/* Test button for debugging */}
          <div className="mt-2 flex gap-2">
            <button 
              onClick={testAudio}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              🔊 Test Audio
            </button>
            <button 
              onClick={() => {
                if (audioRef.current) {
                  console.log('[LiveClass] Manual play attempt');
                  console.log('[LiveClass] Audio src:', audioRef.current.src);
                  console.log('[LiveClass] Audio readyState:', audioRef.current.readyState);
                  audioRef.current.play().catch(err => {
                    console.error('[LiveClass] Manual play failed:', err);
                    alert('Play failed: ' + err.message);
                  });
                }
              }}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              ▶️ Force Play
            </button>
            <button 
              onClick={() => {
                if (audioRef.current && audioFiles.length > 0) {
                  const url = audioFiles[0].url;
                  console.log('[LiveClass] Manual load:', url);
                  audioRef.current.src = url;
                  audioRef.current.load();
                }
              }}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              🔄 Reload
            </button>
          </div>
          
          {audioFiles.length === 0 && !httpAudio && (
            <div className="mt-2 p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded border">
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                ⚠️ No audio available for this class. The teacher may start live audio soon.
              </p>
            </div>
          )}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {slides.map((file, i) => (
              <button key={file.id} onClick={() => setActive(i)} className={`border border-border rounded overflow-hidden card-hover ${i===active?'ring-2 ring-accent':''}`}>
                {file.type === 'image' ? (
                  <img loading="lazy" src={file.url} alt={file.title} className="w-full h-20 object-cover" />
                ) : file.type === 'pdf' ? (
                  <div className="w-full h-20 bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 text-xs font-bold">PDF</span>
                  </div>
                ) : (
                  <div className="w-full h-20 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600 text-xs">{file.extension.toUpperCase()}</span>
                  </div>
                )}
                <div className="text-[11px] text-textMuted px-2 py-1 text-left truncate">{file.title}</div>
              </button>
            ))}
            {!slides.length && <div className="text-sm text-textMuted">No files found.</div>}
          </div>
          <div className="mt-4">
            {slides[active] ? (
              <div>
                {slides[active].type === 'image' ? (
                  <img loading="lazy" src={slides[active].url} alt="" className="w-full max-h-[420px] object-contain rounded border border-border" />
                ) : slides[active].type === 'pdf' ? (
                  <div className="border border-border rounded p-6 text-center">
                    <div className="mb-4">
                      <span className="text-red-600 text-4xl">📄</span>
                      <h3 className="text-lg font-semibold mt-2">{slides[active].title}</h3>
                      <p className="text-textMuted text-sm">PDF Document</p>
                    </div>
                    <a 
                      href={slides[active].url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      📖 Open PDF
                    </a>
                  </div>
                ) : (
                  <div className="border border-border rounded p-6 text-center text-textMuted">
                    <p>Unsupported file type: {slides[active].extension}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="border border-border rounded p-6 text-center text-textMuted">Files will appear here</div>
            )}
          </div>
          
          {/* Audio Files Section */}
          {audioFiles.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold mb-3">📢 Audio Files</h4>
              <div className="space-y-3">
                {audioFiles.map((audio, index) => (
                  <div key={index} className="border border-border rounded p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{audio.title}</span>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => playAudioFile(audio)}
                          className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                        >
                          Play Main
                        </button>
                        <span className="text-xs text-textMuted">{audio.extension.toUpperCase()}</span>
                      </div>
                    </div>
                    <audio controls className="w-full">
                      <source src={audio.url} type={`audio/${audio.extension}`} />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mt-2 text-xs text-textMuted">Tip: Use ← → to navigate slides.</div>
        </div>
      </section>

      <aside className="card p-4">
        <h4 className="font-semibold mb-2">Chat</h4>
        <div className="h-64 overflow-y-auto scrollbar-thin space-y-2 border border-border rounded p-2">
          {chat.length === 0 ? (
            <div className="text-sm text-textMuted opacity-70">No messages yet. Say hi to your class!</div>
          ) : chat.map((c, idx) => (
            <div key={idx} className={`text-sm p-2 rounded ${c.me ? 'bg-blue-100 dark:bg-blue-900/20 ml-4' : 'bg-gray-100 dark:bg-gray-800 mr-4'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium">{c.me ? 'You' : (c.sender || 'Teacher')}</span>
                {c.time && <span className="text-xs text-textMuted">{c.time}</span>}
              </div>
              <div className={c.me ? 'text-blue-700 dark:text-blue-300' : 'text-textMuted'}>{c.text}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-2">
          <input className="input flex-1" placeholder="Say hi..." value={msg} onChange={e=>setMsg(e.target.value)} />
          <button className="btn" onClick={sendMsg}>Send</button>
        </div>
      </aside>

      {quizOpen && quiz && (
        <QuizModal quiz={quiz} onClose={()=>setQuizOpen(false)} onSubmit={submitQuiz} />
      )}
      
      {/* AI Chat Bot */}
      <AIChatBot />
      </div>
    </div>
  )
}

function QuizModal({ quiz, onClose, onSubmit }) {
  const [answers, setAnswers] = useState({})
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="card p-5 w-full max-w-lg">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{quiz.title}</h3>
          <button className="text-textMuted" onClick={onClose}>✕</button>
        </div>
        <div className="mt-3 space-y-4">
          {quiz.questions.map((q, idx) => (
            <div key={q.id}>
              <div className="text-sm mb-2">{idx+1}. {q.text}</div>
              <div className="grid grid-cols-3 gap-2">
                {q.options.map((opt, i) => (
                  <label key={i} className={`border border-border rounded px-2 py-1 cursor-pointer ${answers[q.id]===i?'bg-accent text-black':''}`}>
                    <input type="radio" className="hidden" name={q.id} onChange={() => setAnswers({ ...answers, [q.id]: i })} />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="btn mt-4" onClick={() => onSubmit(answers)}>Submit</button>
      </div>
    </div>
  )
}