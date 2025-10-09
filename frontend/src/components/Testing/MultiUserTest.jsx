import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

export default function MultiUserTest() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [testPhones] = useState({
    teacher: '9876543210',
    student: '8765432109'
  })

  const openNewTabAsRole = (role) => {
    const phone = testPhones[role]
    const loginUrl = `/login/${role}?testPhone=${phone}`
    
    // Open in new tab with specific parameters
    const newTab = window.open(loginUrl, '_blank', 'width=800,height=600')
    
    if (newTab) {
      // Add a small delay to ensure the tab opens
      setTimeout(() => {
        newTab.focus()
      }, 100)
    } else {
      alert('Please allow popups for this site to test multi-user functionality')
    }
  }

  const quickLogin = async (role) => {
    try {
      // For testing purposes, redirect to the login page with pre-filled phone
      navigate(`/login/${role}?testPhone=${testPhones[role]}`)
    } catch (error) {
      console.error('[MultiUserTest] Quick login error:', error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="card p-6">
        <h1 className="text-2xl font-bold mb-4">Multi-User Testing</h1>
        <p className="text-textMuted mb-4">
          Test teacher and student functionality simultaneously using different browser tabs.
        </p>
        
        {user && (
          <div className="mb-4 p-3 bg-primary/10 rounded border">
            <p className="text-sm">
              <strong>Current User:</strong> {user.role} ({user.phone})
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="card p-4 border">
            <h3 className="font-semibold mb-2 text-blue-600">👨‍🏫 Teacher Mode</h3>
            <p className="text-sm text-textMuted mb-3">
              Phone: {testPhones.teacher}
            </p>
            <div className="space-y-2">
              <button 
                className="btn w-full"
                onClick={() => openNewTabAsRole('teacher')}
              >
                Open Teacher Tab
              </button>
              <button 
                className="btn-ghost w-full"
                onClick={() => quickLogin('teacher')}
              >
                Switch to Teacher
              </button>
            </div>
          </div>

          <div className="card p-4 border">
            <h3 className="font-semibold mb-2 text-green-600">👨‍🎓 Student Mode</h3>
            <p className="text-sm text-textMuted mb-3">
              Phone: {testPhones.student}
            </p>
            <div className="space-y-2">
              <button 
                className="btn w-full"
                onClick={() => openNewTabAsRole('student')}
              >
                Open Student Tab
              </button>
              <button 
                className="btn-ghost w-full"
                onClick={() => quickLogin('student')}
              >
                Switch to Student
              </button>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2">Testing Instructions:</h3>
          <ol className="text-sm text-textMuted space-y-1 list-decimal list-inside">
            <li>Open teacher tab and login as teacher</li>
            <li>Open student tab and login as student</li>
            <li>In teacher tab: Upload slides and start live class</li>
            <li>In student tab: Join the live class and test offline downloads</li>
            <li>Both users can operate independently</li>
          </ol>
        </div>

        <div className="flex gap-2 mt-4">
          <button 
            className="btn-ghost"
            onClick={() => navigate('/dashboard')}
          >
            ← Back to Dashboard
          </button>
          {user && (
            <button 
              className="btn btn-danger"
              onClick={logout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  )
}