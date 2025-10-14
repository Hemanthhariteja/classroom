import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'
import LowPolyBackground from '../components/Shared/LowPolyBackground.jsx'

export default function TeacherLogin() {
  const { loading, error, login } = useAuth()
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  // Check for test phone number in URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const testPhone = urlParams.get('testPhone')
    if (testPhone) {
      setPhone(testPhone)
      setMessage('Test phone number pre-filled. Ready to login.')
    }
  }, [location])

  const handleLogin = async () => {
    const res = await login(phone, 'teacher')
    if (res.status === 'ok') {
      setMessage('Logged in successfully! Redirecting...')
      // Navigate immediately without delay
      navigate('/dashboard')
    } else {
      setMessage(res.message || 'Login failed')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && phone && !loading) {
      handleLogin()
    }
  }

  return (
    <div className="relative">
      <div className="hero-wrap p-0">
        <div className="relative rounded-[14px] overflow-hidden min-h-[68vh] flex items-center">
          <LowPolyBackground />
          <div className="relative z-10 w-full grid lg:grid-cols-2 gap-8 p-6 md:p-12">
            <div className="hidden lg:block">
              <h2 className="text-3xl md:text-5xl font-semibold">Faculty Portal</h2>
              <p className="text-[#d2d6ff]/80 mt-3 max-w-xl">
                Create and manage classes, upload content, conduct live sessions, and track student progress.
              </p>
              <div className="h-[1px] w-40 mt-6 bg-gradient-to-r from-transparent via-[#c084fc]/60 to-transparent" />
              <div className="mt-6">
                <p className="text-sm text-[#d2d6ff]/60">
                  Are you a student? <a href="/login/student" className="text-accent hover:underline">Login here</a>
                </p>
              </div>
            </div>

            <div className="glass p-6 md:p-8 max-w-md w-full justify-self-end">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 text-sm font-semibold">T</span>
                </div>
                <h3 className="text-xl font-semibold">Teacher Login</h3>
              </div>
              
              <label className="text-sm text-[#d2d6ff]/80">Phone Number</label>
              <input 
                className="input w-full mb-3" 
                placeholder="+91 9876543210" 
                value={phone} 
                onChange={e => setPhone(e.target.value)}
                onKeyPress={handleKeyPress}
                type="tel"
              />
              
              <button 
                className="btn-gradient w-full" 
                disabled={loading || !phone} 
                onClick={handleLogin}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
              
              {message && (
                <div className={`text-sm mt-3 p-2 rounded ${
                  message.includes('success') 
                    ? 'text-green-400 bg-green-400/10' 
                    : 'text-yellow-400 bg-yellow-400/10'
                }`}>
                  {message}
                </div>
              )}
              
              {error && (
                <div className="text-sm text-red-400 bg-red-400/10 p-2 rounded mt-2">
                  {error}
                </div>
              )}
              
              <div className="text-[11px] text-[#d2d6ff]/60 mt-3">
                By continuing, you agree to our minimal data-use policy.
              </div>
              
              <div className="mt-4 p-3 bg-purple-500/10 rounded border border-purple-500/20">
                <p className="text-xs text-purple-300">
                  <strong>Note:</strong> Simplified login without OTP. Just enter your phone number to access the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}