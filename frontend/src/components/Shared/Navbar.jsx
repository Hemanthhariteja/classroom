import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Radio, Download, LogIn, LogOut, LayoutGrid, User } from 'lucide-react'
import ConnectivityBadge from './ConnectivityBadge.jsx'
import useAuth from '../../hooks/useAuth.js'

export default function Navbar() {
  const { pathname } = useLocation()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    // Optionally redirect to home page
    window.location.href = '/'
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur bg-app/80">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="RuralConnect logo" className="h-11 w-11 rounded-full object-cover shadow-glow" />
          <span className="font-semibold">RuralConnect</span>
          <span className="badge ml-2">v1.0</span>
        </Link>
        
        <nav className="flex items-center gap-2 text-sm">
          {user ? (
            <>
              {/* Show dashboard for all logged-in users */}
              <Link className={`px-3 py-1 rounded hover:bg-card flex items-center gap-1 ${pathname==='/dashboard'?'text-accent':''}`} to="/dashboard">
                <LayoutGrid size={16}/>Dashboard
              </Link>
              
              {/* Student-specific navigation */}
              {user.role === 'student' && (
                <>
                  <Link className="px-3 py-1 rounded hover:bg-card flex items-center gap-1" to="/student/live/68cced26157d87e24fee03ce">
                    <Radio size={16}/>Live
                  </Link>
                  <Link className="px-3 py-1 rounded hover:bg-card flex items-center gap-1" to="/student/offline">
                    <Download size={16}/>Offline
                  </Link>
                </>
              )}
              
              {/* Teacher-specific navigation */}
              {user.role === 'teacher' && (
                <>
                  <Link className="px-3 py-1 rounded hover:bg-card flex items-center gap-1" to="/faculty/upload">
                    <Download size={16}/>Upload
                  </Link>
                  <Link className="px-3 py-1 rounded hover:bg-card flex items-center gap-1" to="/faculty/go-live/68cced26157d87e24fee03ce">
                    <Radio size={16}/>Go Live
                  </Link>
                </>
              )}
              
              {/* User info and logout */}
              <div className="flex items-center gap-2 ml-4 px-3 py-1 bg-card rounded">
                <User size={16} />
                <span className="text-xs">
                  {user.role === 'teacher' ? 'Teacher' : 'Student'}: {user.phone}
                </span>
              </div>
              <button 
                onClick={handleLogout}
                className="px-3 py-1 rounded hover:bg-red-500/20 hover:text-red-400 flex items-center gap-1"
              >
                <LogOut size={16}/>Logout
              </button>
            </>
          ) : (
            <>
              {/* Public navigation for non-logged-in users */}
              <Link className="px-3 py-1 rounded hover:bg-card flex items-center gap-1" to="/login">
                <LogIn size={16}/>Login
              </Link>
            </>
          )}
          
          <ConnectivityBadge className="ml-2" />
        </nav>
      </div>
    </header>
  )
}