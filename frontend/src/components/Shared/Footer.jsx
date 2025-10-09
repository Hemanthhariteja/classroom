import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-border/60 mt-6">
      <div className="container mx-auto px-4 py-4 text-xs text-textMuted flex justify-between">
        <span>© {new Date().getFullYear()} RuralConnect Classroom</span>
        <span className="opacity-80">Low-bandwidth • Audio-first • PWA</span>
      </div>
    </footer>
  )
}