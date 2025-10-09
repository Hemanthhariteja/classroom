import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Shared/Navbar.jsx'
import Footer from './components/Shared/Footer.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import StudentLogin from './pages/StudentLogin.jsx'
import TeacherLogin from './pages/TeacherLogin.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute, { StudentOnlyRoute, TeacherOnlyRoute } from './components/Auth/ProtectedRoute.jsx'
import Loader from './components/Shared/Loader.jsx'

const LiveClass = lazy(() => import('./components/Student/LiveClass.jsx'))
const OfflineDownload = lazy(() => import('./components/Student/OfflineDownload.jsx'))
const Discussion = lazy(() => import('./components/Student/Discussion.jsx'))
const UploadSlides = lazy(() => import('./components/Faculty/UploadSlides.jsx'))
const RecordAudio = lazy(() => import('./components/Faculty/RecordAudio.jsx'))
const StartLiveClass = lazy(() => import('./components/Faculty/StartLiveClass.jsx'))
const MultiUserTest = lazy(() => import('./components/Testing/MultiUserTest.jsx'))

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-4">
        <Suspense fallback={<Loader />}>
          <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/login/teacher" element={<TeacherLogin />} />
          
          {/* Protected dashboard - accessible to both roles but shows different content */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          {/* Testing route */}
          <Route path="/test" element={<MultiUserTest />} />
          
          {/* Student-only routes */}
          <Route path="/student/live/:id" element={
            <StudentOnlyRoute>
              <LiveClass />
            </StudentOnlyRoute>
          } />
          <Route path="/student/offline" element={
            <StudentOnlyRoute>
              <OfflineDownload />
            </StudentOnlyRoute>
          } />
          <Route path="/student/discussion/:id" element={
            <StudentOnlyRoute>
              <Discussion />
            </StudentOnlyRoute>
          } />
          <Route path="/student/courses" element={
            <StudentOnlyRoute>
              <div className="card p-6">
                <h2 className="text-2xl font-bold mb-4">All Courses</h2>
                <p className="text-textMuted">Course listing feature coming soon...</p>
                <div className="mt-4">
                  <button className="btn" onClick={() => window.history.back()}>
                    ← Back to Dashboard
                  </button>
                </div>
              </div>
            </StudentOnlyRoute>
          } />
          <Route path="/student/course/:id" element={
            <StudentOnlyRoute>
              <div className="card p-6">
                <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                <p className="text-textMuted">Individual course viewer coming soon...</p>
                <div className="mt-4">
                  <button className="btn" onClick={() => window.history.back()}>
                    ← Back to Dashboard
                  </button>
                </div>
              </div>
            </StudentOnlyRoute>
          } />
          <Route path="/student/quiz" element={
            <StudentOnlyRoute>
              <div className="card p-6">
                <h2 className="text-2xl font-bold mb-4">Quiz Platform</h2>
                <p className="text-textMuted">Quiz feature coming soon...</p>
                <div className="mt-4">
                  <button className="btn" onClick={() => window.history.back()}>
                    ← Back to Dashboard
                  </button>
                </div>
              </div>
            </StudentOnlyRoute>
          } />
          
          {/* Teacher-only routes */}
          <Route path="/faculty/upload" element={
            <TeacherOnlyRoute>
              <UploadSlides />
            </TeacherOnlyRoute>
          } />
          <Route path="/faculty/record/:id" element={
            <TeacherOnlyRoute>
              <RecordAudio />
            </TeacherOnlyRoute>
          } />
          <Route path="/faculty/go-live/:id" element={
            <TeacherOnlyRoute>
              <StartLiveClass />
            </TeacherOnlyRoute>
          } />
          <Route path="/faculty/edit/:id" element={
            <TeacherOnlyRoute>
              <div className="card p-6">
                <h2 className="text-2xl font-bold mb-4">Edit Course</h2>
                <p className="text-textMuted">Course editor coming soon...</p>
                <div className="mt-4">
                  <button className="btn" onClick={() => window.history.back()}>
                    ← Back to Dashboard
                  </button>
                </div>
              </div>
            </TeacherOnlyRoute>
          } />
          <Route path="/faculty/students" element={
            <TeacherOnlyRoute>
              <div className="card p-6">
                <h2 className="text-2xl font-bold mb-4">Manage Students</h2>
                <p className="text-textMuted">Student management coming soon...</p>
                <div className="mt-4">
                  <button className="btn" onClick={() => window.history.back()}>
                    ← Back to Dashboard
                  </button>
                </div>
              </div>
            </TeacherOnlyRoute>
          } />
          <Route path="/faculty/analytics" element={
            <TeacherOnlyRoute>
              <div className="card p-6">
                <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
                <p className="text-textMuted">Analytics feature coming soon...</p>
                <div className="mt-4">
                  <button className="btn" onClick={() => window.history.back()}>
                    ← Back to Dashboard
                  </button>
                </div>
              </div>
            </TeacherOnlyRoute>
          } />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}