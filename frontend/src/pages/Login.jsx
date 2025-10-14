import React from 'react'
import { Link } from 'react-router-dom'
import LowPolyBackground from '../components/Shared/LowPolyBackground.jsx'
import { GraduationCap, Users, ArrowRight } from 'lucide-react'

export default function Login() {
  return (
    <div className="relative">
      <div className="hero-wrap p-0">
        <div className="relative rounded-[14px] overflow-hidden min-h-[68vh] flex items-center">
          <LowPolyBackground />
          <div className="relative z-10 w-full max-w-4xl mx-auto p-6 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-semibold mb-4">Choose Your Portal</h2>
              <p className="text-[#d2d6ff]/80 max-w-2xl mx-auto">
                RuralConnect Classroom offers separate portals for students and teachers. 
                Simply enter your phone number to login - no OTP required.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Student Login Card */}
              <Link 
                to="/login/student"
                className="group glass p-6 md:p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <GraduationCap size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Student Portal</h3>
                    <p className="text-sm text-[#d2d6ff]/70">Learn and participate</p>
                  </div>
                </div>
                
                <ul className="space-y-2 text-sm text-[#d2d6ff]/80 mb-4">
                  <li>• Join live audio classes</li>
                  <li>• Download offline content</li>
                  <li>• Participate in discussions</li>
                  <li>• Take interactive quizzes</li>
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-medium">Login as Student</span>
                  <ArrowRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Teacher Login Card */}
              <Link 
                to="/login/teacher"
                className="group glass p-6 md:p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <Users size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Teacher Portal</h3>
                    <p className="text-sm text-[#d2d6ff]/70">Create and manage</p>
                  </div>
                </div>
                
                <ul className="space-y-2 text-sm text-[#d2d6ff]/80 mb-4">
                  <li>• Create and schedule classes</li>
                  <li>• Upload slides and content</li>
                  <li>• Record audio narrations</li>
                  <li>• Conduct live sessions</li>
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-medium">Login as Teacher</span>
                  <ArrowRight size={16} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <div className="h-[1px] w-40 mx-auto bg-gradient-to-r from-transparent via-[#c084fc]/60 to-transparent mb-4" />
              <p className="text-sm text-[#d2d6ff]/60">
                Quick and easy access - no verification codes needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}