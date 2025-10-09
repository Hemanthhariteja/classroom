import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((reg) => {
      // listen for sw update messages
      navigator.serviceWorker.addEventListener('message', (e) => {
        if (e.data?.type === 'SYNC_QUIZ_REQUEST') {
          window.dispatchEvent(new CustomEvent('SW_SYNC_QUIZ'));
        }
      });
    }).catch(console.error)
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter 
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Suspense fallback={<div className="p-6">Loading…</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)