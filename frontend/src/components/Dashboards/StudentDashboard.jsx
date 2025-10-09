import React from 'react'
import { Link } from 'react-router-dom'
import ThreeBackground from '../Three/ThreeBackground.jsx'
import StatCard from '../Shared/StatCard.jsx'
import EmptyState from '../Shared/EmptyState.jsx'
import AIChatBot from '../Student/AIChatBot.jsx'
import { BookOpen, Radio, Download, Clock, MessageSquare, Play } from 'lucide-react'

export default function StudentDashboard({ user }) {
  return (
    <div className="space-y-4">
      {/* Glass hero with 3D */}
      <section className="relative hero-wrap p-0 rounded-[14px] overflow-hidden min-h-[260px]">
        <ThreeBackground />
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Student Dashboard</h2>
              <p className="text-sm text-[#d2d6ff]/75">Welcome {user?.phone}! Join live classes and access course materials.</p>
            </div>
            <div>
              <Link className="btn" to="/student/live/68cced26157d87e24fee03ce">Join Live Class</Link>
              <Link className="btn-ghost" to="/student/offline">Offline Mode</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-4 gap-4">
        <section className="lg:col-span-3 space-y-4">
          <div className="grid md:grid-cols-3 gap-3">
            <StatCard title="Active Class" value="Algebra 101" hint="Join now" pct={0.85} icon={<Radio size={18}/>} />
            <StatCard title="Completed Lessons" value="12" hint="This month" pct={0.12} icon={<BookOpen size={18}/>} />
            <StatCard title="Downloaded Lessons" value="8" hint="Available offline" pct={0.8} icon={<Download size={18}/>} />
          </div>

          <div className="card p-4">
            <div className="section-title">
              <h3>Live Classes</h3>
              <span className="text-xs text-green-400">● 2 active</span>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="glass p-3 border-l-2 border-green-400">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Basic Algebra — Lesson 1</div>
                    <div className="text-xs text-textMuted">Teacher: Prof. Smith • 23 students online</div>
                  </div>
                  <Link to="/student/live/68cced26157d87e24fee03ce" className="btn text-xs">
                    <Radio size={14} /> Join
                  </Link>
                </div>
              </div>
              <div className="glass p-3 border-l-2 border-yellow-400">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Fractions — Lesson 2</div>
                    <div className="text-xs text-textMuted">Teacher: Prof. Johnson • Starting in 15 min</div>
                  </div>
                  <button className="btn-ghost text-xs" disabled>
                    <Clock size={14} /> Waiting
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4">
            <div className="section-title">
              <h3>Available Courses</h3>
              <Link className="btn-ghost text-xs" to="/student/courses">View All</Link>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="glass p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Basic Algebra — Lesson 1</div>
                    <div className="text-xs text-textMuted">2 slides • 1 quiz • 18 min audio</div>
                  </div>
                  <Link to="/student/course/algebra-1" className="btn-ghost text-xs">
                    <Play size={14} /> Study
                  </Link>
                </div>
              </div>
              <div className="glass p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Fractions — Lesson 2</div>
                    <div className="text-xs text-textMuted">4 slides • 1 quiz • 22 min audio</div>
                  </div>
                  <Link to="/student/course/fractions-1" className="btn-ghost text-xs">
                    <Play size={14} /> Study
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="card p-4">
          <h4 className="font-semibold mb-2">Student Actions</h4>
          <ul className="space-y-2">
            <li><Link className="btn w-full" to="/student/live/68cced26157d87e24fee03ce">
              <Radio size={16} /> Join Live Class
            </Link></li>
            <li><Link className="btn w-full" to="/student/offline">
              <Download size={16} /> Offline Download
            </Link></li>
            <li><Link className="btn w-full" to="/student/discussion/general">
              <MessageSquare size={16} /> Discussion Board
            </Link></li>
            <li><Link className="btn w-full" to="/student/quiz">
              <BookOpen size={16} /> Take Quiz
            </Link></li>
          </ul>
          <div className="mt-4">
            <div className="text-xs text-textMuted mb-2">Study Progress</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '68%'}}></div>
            </div>
            <div className="text-xs text-textMuted mt-1">12 of 18 lessons completed</div>
          </div>
        </aside>
      </div>

      {/* AI Chat Bot */}
      <AIChatBot />
    </div>
  )
}