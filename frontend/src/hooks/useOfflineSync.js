import { useEffect } from 'react'
import { setupSync, flushPendingWhenOnline } from '../utils/offline.js'

export default function useOfflineSync() {
  useEffect(() => {
    setupSync()
    flushPendingWhenOnline()
  }, [])
}