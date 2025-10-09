import React from 'react'
import { Link } from 'react-router-dom'
import ThreeBackground from '../Three/ThreeBackground.jsx'
import StatCard from '../Shared/StatCard.jsx'
import EmptyState from '../Shared/EmptyState.jsx'
import { Users, Radio, Download, Activity, MessageSquare, Upload, Mic } from 'lucide-react'

export default function TeacherDashboard({ user }) {
  return (
    <div className="space-y-4">
      {/* Glass hero with 3D */}
      <section className="relative hero-wrap p-0 rounded-[14px] overflow-hidden min-h-[260px]">
        <ThreeBackground />
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Teacher Dashboard</h2>
              <p className="text-sm text-[#d2d6ff]/75">Welcome {user?.phone}! Manage live classes, slides and offline packages.</p>
            </div>
            <div className="hidden md:flex gap-2">
              <Link className="btn" to="/faculty/go-live/68cced26157d87e24fee03ce">Go Live</Link>
              <Link className="btn-ghost" to="/faculty/upload">Upload Slides</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-4 gap-4">
        <section className="lg:col-span-3 space-y-4">
          <div className="grid md:grid-cols-3 gap-3">
            <StatCard title="Current Class" value="Algebra 101" hint="Lecture 1" pct={0.72} icon={<Radio size={18}/>} />
            <StatCard title="Live Students (peak)" value="58" hint="Last 7 days" pct={0.58} icon={<Users size={18}/>} />
            <StatCard title="Course Materials" value="15" hint="Uploaded this month" pct={0.15} icon={<Download size={18}/>} />
          </div>

          <div className="card p-4">
            <div className="section-title">
              <h3>Recent Teaching Activity</h3>
              <span className="text-xs text-textMuted">Auto-updated</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Activity size={16} className="text-accent"/> Started live preview for Algebra 101</li>
              <li className="flex items-center gap-2"><MessageSquare size={16} className="text-accent"/> Student posted in Discussion Board</li>
              <li className="flex items-center gap-2"><Download size={16} className="text-accent"/> 12 students downloaded offline package</li>
              <li className="flex items-center gap-2"><Upload size={16} className="text-accent"/> Uploaded new slides for Fractions lesson</li>
            </ul>
          </div>

          <div className="card p-4">
            <div className="section-title">
              <h3>My Classes</h3>
              <Link className="btn-ghost text-xs" to="/faculty/upload">Create New</Link>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="glass p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Basic Algebra — Lesson 1</div>
                    <div className="text-xs text-textMuted">2 slides • 1 quiz • 18 min audio</div>
                    <div className="text-xs text-green-400">● 23 students online</div>
                  </div>
                  <div className="flex gap-1">
                    <Link to="/faculty/go-live/68cced26157d87e24fee03ce" className="btn text-xs">Go Live</Link>
                  </div>
                </div>
              </div>
              <div className="glass p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Fractions — Lesson 2</div>
                    <div className="text-xs text-textMuted">4 slides • 1 quiz • 22 min audio</div>
                    <div className="text-xs text-gray-400">Not live</div>
                  </div>
                  <div className="flex gap-1">
                    <Link to="/faculty/edit/fractions-2" className="btn-ghost text-xs">Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="card p-4">
          <h4 className="font-semibold mb-2">Teacher Tools</h4>
          <ul className="space-y-2">
            <li><Link className="btn w-full" to="/faculty/upload">
              <Upload size={16} /> Upload Slides
            </Link></li>
            <li><Link className="btn w-full" to="/faculty/record/68cced26157d87e24fee03ce">
              <Mic size={16} /> Record Audio
            </Link></li>
            <li><Link className="btn w-full" to="/faculty/go-live/68cced26157d87e24fee03ce">
              <Radio size={16} /> Go Live
            </Link></li>
            <li><Link className="btn w-full" to="/faculty/students">
              <Users size={16} /> Manage Students
            </Link></li>
            <li><Link className="btn w-full" to="/faculty/analytics">
              <Activity size={16} /> View Analytics
            </Link></li>
          </ul>
          <div className="mt-4">
            <div className="text-xs text-textMuted mb-2">Class Performance</div>
            <EmptyState title="No active classes" subtitle="Start a live session to see real-time metrics." />
          </div>
        </aside>
      </div>
    </div>
  )
}