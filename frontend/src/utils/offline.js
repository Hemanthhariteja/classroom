// IndexedDB wrapper + sync logic (lecturePackages, pendingQuizSubmissions, discussionOutbox)
const DB_NAME = 'rcc-db'
const DB_VERSION = 3
const STORES = {
  lectures: 'lecturePackages',
  quiz: 'pendingQuizSubmissions',
  discuss: 'discussionOutbox',
  auth: 'auth' // created by api.js too
}
let dbp

function opendb() {
  if (dbp) return dbp
  dbp = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORES.lectures))
        db.createObjectStore(STORES.lectures, { keyPath: 'id' })
      if (!db.objectStoreNames.contains(STORES.quiz))
        db.createObjectStore(STORES.quiz, { keyPath: 'createdAt' })
      if (!db.objectStoreNames.contains(STORES.discuss))
        db.createObjectStore(STORES.discuss, { keyPath: 'createdAt' })
      if (!db.objectStoreNames.contains(STORES.auth))
        db.createObjectStore(STORES.auth)
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  return dbp
}

async function tx(store, mode, cb) {
  const db = await opendb()
  return await new Promise((resolve, reject) => {
    const t = db.transaction(store, mode)
    const s = t.objectStore(store)
    const r = cb(s)
    t.oncomplete = () => resolve(r && r.result !== undefined ? r.result : true)
    t.onerror = () => reject(t.error)
  })
}

// Lecture package APIs
export const saveLecturePackage = (pkg) => tx(STORES.lectures, 'readwrite', s => s.put(pkg))
export const getLecturePackage = (id) => tx(STORES.lectures, 'readonly', s => s.get(id))
export const listLecturePackages = () => tx(STORES.lectures, 'readonly', (s) => s.getAll())
export const deleteLecturePackage = (id) => tx(STORES.lectures, 'readwrite', s => s.delete(id))
export const clearAllLecturePackages = () => tx(STORES.lectures, 'readwrite', s => s.clear())

// Quiz submissions
export const savePendingQuiz = (entry) => tx(STORES.quiz, 'readwrite', s => s.put(entry))
export const listPendingQuiz = () => tx(STORES.quiz, 'readonly', s => s.getAll())
export const clearPendingQuiz = (keys) => tx(STORES.quiz, 'readwrite', s => keys.forEach(k => s.delete(k)))

// Discussion
export const saveDiscussionOutbox = (entry) => tx(STORES.discuss, 'readwrite', s => s.put(entry))
export const listDiscussionOutbox = () => tx(STORES.discuss, 'readonly', s => s.getAll())
export const clearDiscussionOutbox = (keys) => tx(STORES.discuss, 'readwrite', s => keys.forEach(k => s.delete(k)))

// Sync logic: app-driven (SW asks via postMessage; also online events)
import api from '../api/api.js'

export async function flushPendingWhenOnline() {
  try {
    const pend = await listPendingQuiz()
    if (pend.length) {
      const okKeys = []
      for (const p of pend) {
        try {
          const res = await api.post(`/quiz/${p.quizId}/submit`, { answers: p.answers, createdAt: p.createdAt })
          if (res.status === 'ok') okKeys.push(p.createdAt)
        } catch {}
      }
      if (okKeys.length) await clearPendingQuiz(okKeys)
    }
    const out = await listDiscussionOutbox()
    if (out.length) {
      const ok = []
      for (const d of out) {
        try {
          const res = await api.post(`/classes/${d.classId}/discussion`, { text: d.text, createdAt: d.createdAt })
          if (res.status === 'ok') ok.push(d.createdAt)
        } catch {}
      }
      if (ok.length) await clearDiscussionOutbox(ok)
    }
  } catch (e) {}
}

export function setupSync() {
  window.addEventListener('online', () => flushPendingWhenOnline())
  window.addEventListener('SW_SYNC_QUIZ', () => flushPendingWhenOnline())
}

export default {
  saveLecturePackage, getLecturePackage, listLecturePackages, deleteLecturePackage, clearAllLecturePackages,
  savePendingQuiz, listPendingQuiz, clearPendingQuiz,
  saveDiscussionOutbox, listDiscussionOutbox, clearDiscussionOutbox,
  flushPendingWhenOnline, setupSync
}