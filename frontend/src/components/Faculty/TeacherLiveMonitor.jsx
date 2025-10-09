import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

export default function TeacherLiveMonitor() {
  const { id } = useParams()
  const { user } = useAuth()
  const [students, setStudents] = useState([])
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  // Simulate live students (in real app, this would come from WebSocket)
  useEffect(() => {
    // Mock student data
    const mockStudents = [
      { id: 1, name: 'Student A', phone: '8765432109', status: 'online', joinedAt: new Date() },
      { id: 2, name: 'Student B', phone: '7654321098', status: 'online', joinedAt: new Date() },
      { id: 3, name: 'Student C', phone: '6543210987', status: 'viewing', joinedAt: new Date() }
    ]
    setStudents(mockStudents)

    // Mock messages
    const mockMessages = [
      { id: 1, sender: 'Student A', message: 'Can you repeat the last slide?', time: new Date() },
      { id: 2, sender: 'Student B', message: 'Audio is clear, thank you!', time: new Date() }
    ]
    setMessages(mockMessages)
  }, [id])

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        sender: 'Teacher',
        message: newMessage,
        time: new Date()
      }
      setMessages(prev => [...prev, message])
      setNewMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Live Class Monitor</h3>
      
      {/* Live Students */}
      <div className="card p-4">
        <h4 className="font-medium mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Live Students ({students.length})
        </h4>
        <div className="space-y-2">
          {students.map(student => (
            <div key={student.id} className="flex items-center justify-between p-2 bg-background rounded">
              <div>
                <span className="font-medium">{student.name}</span>
                <span className="text-xs text-textMuted ml-2">({student.phone})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  student.status === 'online' ? 'bg-green-100 text-green-700' : 
                  student.status === 'viewing' ? 'bg-blue-100 text-blue-700' : 
                  'bg-gray-100 text-gray-700'
                }`}>
                  {student.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="card p-4">
        <h4 className="font-medium mb-3">Student Messages</h4>
        <div className="space-y-2 max-h-64 overflow-y-auto mb-3">
          {messages.map(msg => (
            <div key={msg.id} className={`p-2 rounded ${
              msg.sender === 'Teacher' ? 'bg-blue-100 dark:bg-blue-900/20 ml-8' : 'bg-gray-100 dark:bg-gray-800 mr-8'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium">{msg.sender}</span>
                <span className="text-xs text-textMuted">{msg.time.toLocaleTimeString()}</span>
              </div>
              <p className="text-sm">{msg.message}</p>
            </div>
          ))}
          {messages.length === 0 && (
            <p className="text-textMuted text-center py-4">No messages yet</p>
          )}
        </div>
        
        {/* Send Message */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Send message to students..."
            className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            className="btn px-4"
          >
            Send
          </button>
        </div>
      </div>

      {/* Class Controls */}
      <div className="card p-4">
        <h4 className="font-medium mb-3">Class Controls</h4>
        <div className="grid md:grid-cols-2 gap-2">
          <button className="btn">
            📢 Send Announcement
          </button>
          <button className="btn">
            📊 Take Attendance
          </button>
          <button className="btn">
            ❓ Start Poll
          </button>
          <button className="btn">
            📝 Share Note
          </button>
        </div>
      </div>
    </div>
  )
}