// Minimal API wrapper with IndexedDB-backed JWT and light obfuscation
const baseURL = import.meta.env.VITE_API_BASE_URL || ''

const DB_NAME = 'rcc-db'
const DB_VERSION = 3 // Increased version to handle conflicts
const STORE_AUTH = 'auth'
let dbPromise

function openDB() {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      // Clear and recreate stores to handle version conflicts
      if (db.objectStoreNames.contains(STORE_AUTH)) {
        db.deleteObjectStore(STORE_AUTH)
      }
      db.createObjectStore(STORE_AUTH)
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => {
      console.error('[DB] Failed to open database:', req.error)
      reject(req.error)
    }
    req.onblocked = () => {
      console.warn('[DB] Database upgrade blocked. Please close other tabs.')
    }
  })
  return dbPromise
}

function lightEncrypt(str) {
  // NOTE: lightweight obfuscation, not real security
  const salt = 'rcc-salt'
  const coded = [...str].map((ch, i) => ch.charCodeAt(0) ^ salt.charCodeAt(i % salt.length))
  return btoa(String.fromCharCode(...coded))
}
function lightDecrypt(b64) {
  try {
    const salt = 'rcc-salt'
    const raw = atob(b64)
    const decoded = [...raw].map((ch, i) => ch.charCodeAt(0) ^ salt.charCodeAt(i % salt.length))
    return String.fromCharCode(...decoded)
  } catch (e) { return '' }
}

export async function setAuthToken(token) {
  try {
    const db = await openDB()
    const tx = db.transaction(STORE_AUTH, 'readwrite')
    tx.objectStore(STORE_AUTH).put(lightEncrypt(token), 'jwt')
    await tx.complete
    return true
  } catch (error) {
    console.warn('[DB] Failed to store token in IndexedDB, using localStorage fallback:', error)
    // Fallback to localStorage
    localStorage.setItem('rcc-jwt', lightEncrypt(token))
    return true
  }
}

export async function getAuthToken() {
  try {
    const db = await openDB()
    return await new Promise((resolve) => {
      const tx = db.transaction(STORE_AUTH, 'readonly')
      const req = tx.objectStore(STORE_AUTH).get('jwt')
      req.onsuccess = () => resolve(lightDecrypt(req.result || ''))
      req.onerror = () => {
        console.warn('[DB] Failed to read from IndexedDB, using localStorage fallback')
        const fallback = localStorage.getItem('rcc-jwt')
        resolve(lightDecrypt(fallback || ''))
      }
    })
  } catch (error) {
    console.warn('[DB] Failed to access IndexedDB, using localStorage fallback:', error)
    const fallback = localStorage.getItem('rcc-jwt')
    return lightDecrypt(fallback || '')
  }
}

async function request(path, options = {}) {
  const token = await getAuthToken()
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers
  }
  
  try {
    console.log(`[API] Request: ${options.method || 'GET'} ${baseURL}/api${path}`) // Debug log
    const res = await fetch(`${baseURL}/api${path}`, { ...options, headers })
    console.log(`[API] Response status: ${res.status}`) // Debug log
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    }
    
    const data = await res.json().catch(() => ({}))
    console.log('[API] Response data:', data) // Debug log
    return data // expected envelope {status, ...}
  } catch (error) {
    console.error('[API] Request failed:', error) // Debug log
    throw error
  }
}

// Helper function to reset database if needed
export async function resetDB() {
  try {
    indexedDB.deleteDatabase(DB_NAME)
    localStorage.removeItem('rcc-jwt')
    dbPromise = null // Reset the promise
    console.log('[DB] Database reset successfully')
    return true
  } catch (error) {
    console.error('[DB] Failed to reset database:', error)
    return false
  }
}

export const api = {
  post: (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) }),
  get: (path) => request(path, { method: 'GET' }),
  upload: async (path, formData) => {
    const token = await getAuthToken()
    const res = await fetch(`${baseURL}/api${path}`, {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: formData
    })
    return res.json()
  },
  // Auth shortcuts with role support
  // Simple login without OTP (primary method)
  login: (phone, role = 'student') => request('/auth/login', { 
    method: 'POST', 
    body: JSON.stringify({ phone, role }) 
  }),
  // Legacy OTP methods (kept for backward compatibility)
  sendOTP: (phone, role = 'student') => request('/auth/send-otp', { 
    method: 'POST', 
    body: JSON.stringify({ phone, role }) 
  }),
  verifyOTP: (phone, otp, role = 'student') => request('/auth/verify-otp', { 
    method: 'POST', 
    body: JSON.stringify({ phone, otp, role }) 
  }),
  setAuthToken
}
export default api