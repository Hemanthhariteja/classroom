import { useEffect, useState } from 'react'
import api, { setAuthToken, getAuthToken } from '../api/api.js'

export default function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true) // Start with loading true
  const [error, setError] = useState(null)

  // Initialize user state from stored token
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = await getAuthToken()
        if (token) {
          // Check sessionStorage first for tab-specific sessions
          let userData = JSON.parse(sessionStorage.getItem('rcc-user') || 'null')
          
          // Fallback to localStorage if no session data
          if (!userData) {
            userData = JSON.parse(localStorage.getItem('rcc-user') || 'null')
            if (userData) {
              // Copy to sessionStorage for this tab
              sessionStorage.setItem('rcc-user', JSON.stringify(userData))
            }
          }
          
          if (userData) {
            setUser(userData)
          }
        }
      } catch (error) {
        console.error('[AUTH] Failed to initialize auth state:', error)
      } finally {
        setLoading(false)
      }
    }
    
    initializeAuth()
  }, [])

  // Simple login without OTP (primary method)
  const login = async (phone, role = 'student') => {
    setLoading(true); setError(null)
    try {
      const res = await api.login(phone, role)
      console.log('[AUTH] Login Response:', res) // Debug log
      if (res.status === 'ok' && res.token) {
        await setAuthToken(res.token)
        const userData = { 
          phone, 
          role: res.user?.role || role,
          id: res.user?.id,
          sessionId: Date.now() + Math.random() // Unique session ID
        }
        setUser(userData)
        // Store user data in sessionStorage for tab-specific sessions
        sessionStorage.setItem('rcc-user', JSON.stringify(userData))
        // Also store in localStorage as fallback
        localStorage.setItem('rcc-user', JSON.stringify(userData))
        return res
      } else {
        const errorMsg = res.message || 'Login failed'
        setError(errorMsg)
        return { status: 'error', message: errorMsg }
      }
    } catch (err) {
      console.error('[AUTH] Login Error:', err) // Debug log
      const errorMsg = err.message || 'Login failed'
      setError(errorMsg)
      return { status: 'error', message: errorMsg }
    } finally { 
      setLoading(false) 
    }
  }

  // Legacy OTP methods (kept for backward compatibility)
  const sendOTP = async (phone, role = 'student') => {
    setLoading(true); setError(null)
    try {
      const res = await api.sendOTP(phone, role)
      console.log('[AUTH] OTP Response:', res) // Debug log
      if (res.status === 'ok') {
        return res
      } else {
        const errorMsg = res.message || 'Failed to send OTP'
        setError(errorMsg)
        return { status: 'error', message: errorMsg }
      }
    } catch (err) {
      console.error('[AUTH] OTP Error:', err) // Debug log
      const errorMsg = err.message || 'Failed to send OTP'
      setError(errorMsg)
      return { status: 'error', message: errorMsg }
    } finally { 
      setLoading(false) 
    }
  }

  const verifyOTP = async (phone, otp, role = 'student') => {
    setLoading(true); setError(null)
    try {
      const res = await api.verifyOTP(phone, otp, role)
      if (res.status === 'ok' && res.token) {
        await setAuthToken(res.token)
        const userData = { 
          phone, 
          role: res.user?.role || role,
          id: res.user?.id,
          sessionId: Date.now() + Math.random() // Unique session ID
        }
        setUser(userData)
        // Store user data in sessionStorage for tab-specific sessions
        sessionStorage.setItem('rcc-user', JSON.stringify(userData))
        // Also store in localStorage as fallback
        localStorage.setItem('rcc-user', JSON.stringify(userData))
      } else {
        setError(res.message || 'Verification failed')
      }
      return res
    } catch (err) {
      setError('Verification failed')
      return { status: 'error', message: 'Verification failed' }
    } finally { 
      setLoading(false) 
    }
  }

  const logout = async () => {
    await setAuthToken('')
    sessionStorage.removeItem('rcc-user')
    localStorage.removeItem('rcc-user')
    setUser(null)
    setError(null)
  }

  return { user, loading, error, login, sendOTP, verifyOTP, logout }
}