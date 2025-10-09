import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'
import EmptyState from '../Shared/EmptyState.jsx'
import Loader from '../Shared/Loader.jsx'

// Protected Route component that requires authentication
export function ProtectedRoute({ children, requiredRole = null }) {
  const { user, loading } = useAuth()

  // Show loading spinner while checking authentication
  if (loading) {
    return <Loader />
  }

  // If no user is logged in, redirect to login
  if (!user) {
    return <Navigate to="/" replace />
  }

  // If a specific role is required and user doesn't have it, show access denied
  if (requiredRole && user.role !== requiredRole) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <EmptyState 
          title="Access Denied" 
          subtitle={`This page is only available to ${requiredRole}s. You are logged in as a ${user.role}.`} 
        />
      </div>
    )
  }

  // If everything is fine, render the protected content
  return children
}

// Specific role-based route components
export function StudentOnlyRoute({ children }) {
  return (
    <ProtectedRoute requiredRole="student">
      {children}
    </ProtectedRoute>
  )
}

export function TeacherOnlyRoute({ children }) {
  return (
    <ProtectedRoute requiredRole="teacher">
      {children}
    </ProtectedRoute>
  )
}

export default ProtectedRoute