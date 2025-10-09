import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThreeBackground from '../components/Three/ThreeBackground.jsx'
import Tetrahedron from '../components/Shared/Tetrahedron.jsx'
import useAuth from '../hooks/useAuth.js'
import { Radio, Download, MessageSquare, GraduationCap, Users, LayoutGrid, LogOut } from 'lucide-react'

export default function Home() {
  const { user, loading, logout } = useAuth()
  const navigate = useNavigate()

  // Debug logging
  React.useEffect(() => {
    console.log('[DEBUG HOME] User state:', { user: user?.role, phone: user?.phone, loading })
  }, [user, loading])

  // Navigation handlers for testing
  const handleDashboardClick = () => {
    console.log('[DEBUG] Dashboard button clicked - using navigate')
    navigate('/dashboard')
  }

  const handleLiveClassClick = () => {
    console.log('[DEBUG] Live class button clicked - using navigate')
    navigate('/student/live/68cced26157d87e24fee03ce')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full mx-auto mb-2"></div>
          <p className="text-sm text-textMuted">Loading...</p>
        </div>
      </div>
    )
  }

  // Show authenticated user home page
  if (user) {
    return (
      <div className="space-y-6">
        {/* Welcome back section */}
        <section className="relative rounded-[14px] overflow-hidden hero-wrap p-0 min-h-[320px]">
          <ThreeBackground />
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-semibold">Welcome back!</h1>
              <p className="text-[#d2d6ff]/80 mt-3">
                Logged in as <span className="text-accent font-semibold">{user.role}</span> • {user.phone}
              </p>
              <div className="h-[1px] w-40 mt-6 bg-gradient-to-r from-transparent via-[#c084fc]/60 to-transparent" />
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button 
            className="glass p-6 card-hover flex items-center gap-4 w-full text-left" 
            onClick={handleDashboardClick}
          >
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <LayoutGrid size={20} className="text-accent" />
            </div>
            <div>
              <div className="font-semibold">Go to Dashboard</div>
              <div className="text-xs text-textMuted">Access your {user.role} portal</div>
            </div>
          </button>

          {user.role === 'student' && (
            <>
              <button 
                className="glass p-6 card-hover flex items-center gap-4 w-full text-left" 
                onClick={handleLiveClassClick}
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Radio size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold">Join Live Class</div>
                  <div className="text-xs text-textMuted">Audio-first learning</div>
                </div>
              </button>
              
              <Link 
                className="glass p-6 card-hover flex items-center gap-4" 
                to="/student/offline"
                onClick={() => console.log('[DEBUG] Student: Navigating to offline content')}
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Download size={20} className="text-green-400" />
                </div>
                <div>
                  <div className="font-semibold">Offline Content</div>
                  <div className="text-xs text-textMuted">Download for later</div>
                </div>
              </Link>
            </>
          )}

          {user.role === 'teacher' && (
            <>
              <Link 
                className="glass p-6 card-hover flex items-center gap-4" 
                to="/faculty/go-live/68cced26157d87e24fee03ce"
                onClick={() => console.log('[DEBUG] Teacher: Navigating to go-live')}
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Radio size={20} className="text-red-400" />
                </div>
                <div>
                  <div className="font-semibold">Start Live Class</div>
                  <div className="text-xs text-textMuted">Broadcast to students</div>
                </div>
              </Link>
              
              <Link 
                className="glass p-6 card-hover flex items-center gap-4" 
                to="/faculty/upload"
                onClick={() => console.log('[DEBUG] Teacher: Navigating to upload')}
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Download size={20} className="text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold">Upload Content</div>
                  <div className="text-xs text-textMuted">Slides and materials</div>
                </div>
              </Link>
            </>
          )}

          {/* Logout option */}
          <button 
            onClick={logout}
            className="glass p-6 card-hover flex items-center gap-4 hover:bg-red-500/10 transition-colors"
          >
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
              <LogOut size={20} className="text-red-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Logout</div>
              <div className="text-xs text-textMuted">Sign out of account</div>
            </div>
          </button>
        </section>
      </div>
    )
  }

  // Show login options for non-authenticated users
  return (
    <div className="space-y-6">
      {/* Hero with 3D Background */}
      <section className="relative rounded-[14px] overflow-hidden hero-wrap p-0 min-h-[420px]">
        <ThreeBackground />
        <div className="absolute -left-8 -top-10 opacity-60"><Tetrahedron size={160}/></div>
        <div className="absolute -right-10 -bottom-8 opacity-60"><Tetrahedron size={120}/></div>

        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">RuralConnect Classroom</h1>
            <p className="text-sm md:text-base text-[#d2d6ff]/80 mt-3 max-w-2xl">
              Audio-first educational platform designed for rural areas with low bandwidth. Real SMS OTP authentication with separate portals for students and teachers.
            </p>
            <div className="h-[1px] w-40 mt-6 bg-gradient-to-r from-transparent via-[#c084fc]/60 to-transparent" />
          </div>

          <div className="glass p-5 md:p-6 w-full md:w-[360px]">
            <div className="text-lg font-semibold mb-2">Choose Your Portal</div>
            <p className="text-xs text-[#d2d6ff]/70 mb-4">Login with your phone number via SMS OTP</p>
            
            <div className="grid gap-3">
              <Link 
                className="btn-gradient w-full flex items-center gap-3 p-4 rounded-lg" 
                to="/login/student"
              >
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <GraduationCap size={16} className="text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Student Login</div>
                  <div className="text-xs opacity-80">Join classes, access content</div>
                </div>
              </Link>
              
              <Link 
                className="btn w-full flex items-center gap-3 p-4 rounded-lg border border-purple-500/30" 
                to="/login/teacher"
              >
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Users size={16} className="text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Teacher Login</div>
                  <div className="text-xs opacity-80">Create & manage classes</div>
                </div>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="glass p-5 card-hover">
          <div className="flex items-center gap-2 mb-2 text-[#c084fc]"><Radio size={18}/> Live, audio-first</div>
          <p className="text-sm text-[#d2d6ff]/80">Opus WebRTC with HTTP fallback. Works on low bandwidth.</p>
        </div>
        <div className="glass p-5 card-hover">
          <div className="flex items-center gap-2 mb-2 text-[#c084fc]"><Download size={18}/> Offline packages</div>
          <p className="text-sm text-[#d2d6ff]/80">Slides + audio saved to device with background sync.</p>
        </div>
        <div className="glass p-5 card-hover">
          <div className="flex items-center gap-2 mb-2 text-[#c084fc]"><MessageSquare size={18}/> Discussions</div>
          <p className="text-sm text-[#d2d6ff]/80">Lightweight forum with offline outbox for patchy networks.</p>
        </div>
      </section>
    </div>
  )
}