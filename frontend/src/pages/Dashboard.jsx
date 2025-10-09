import React from 'react'
import useAuth from '../hooks/useAuth.js'
import StudentDashboard from '../components/Dashboards/StudentDashboard.jsx'
import TeacherDashboard from '../components/Dashboards/TeacherDashboard.jsx'
import EmptyState from '../components/Shared/EmptyState.jsx'

export default function Dashboard() {
  const { user } = useAuth()

  // Show loading state if user is not loaded yet
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <EmptyState 
          title="Loading Dashboard..." 
          subtitle="Please wait while we load your personalized dashboard." 
        />
      </div>
    )
  }

  // Role-based dashboard rendering with access control
  switch (user.role) {
    case 'teacher':
      return <TeacherDashboard user={user} />
    
    case 'student':
      return <StudentDashboard user={user} />
    
    default:
      return (
        <div className="flex items-center justify-center min-h-screen">
          <EmptyState 
            title="Access Denied" 
            subtitle={`Unknown user role: ${user.role}. Please contact support.`} 
          />
        </div>
      )
  }
}