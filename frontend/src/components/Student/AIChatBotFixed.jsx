import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, Send, Bot, User, X, Minimize2, Maximize2 } from 'lucide-react'

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your AI study assistant. I can help you with questions about your classes, study tips, or any academic topics. How can I assist you today? 🤖📚',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  // Simple but effective AI response function
  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim()
    
    console.log('Processing message:', message) // Debug log
    
    // Math calculations
    const mathMatch = message.match(/(\d+)\s*([+\-*/])\s*(\d+)/)
    if (mathMatch) {
      const [, num1, operator, num2] = mathMatch
      const n1 = parseFloat(num1)
      const n2 = parseFloat(num2)
      let result, operation
      
      switch(operator) {
        case '+': result = n1 + n2; operation = 'addition'; break
        case '-': result = n1 - n2; operation = 'subtraction'; break
        case '*': result = n1 * n2; operation = 'multiplication'; break
        case '/': result = n1 / n2; operation = 'division'; break
      }
      
      return `🧮 **${num1} ${operator} ${num2} = ${result}**\n\n📚 That's ${operation}! Here are some tips:\n• Always double-check your work\n• Practice mental math for speed\n• Understanding is better than memorizing\n\nNeed help with more math problems?`
    }
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 Ready to learn something new today? I can help you with:\n• Math problems and concepts\n• Study strategies\n• Time management\n• Exam preparation\n• Science topics\n\nWhat would you like to work on?"
    }
    
    // Math help
    if (message.includes('math') || message.includes('algebra') || message.includes('geometry')) {
      return "🔢 **Math Help Available!**\n\n📝 **Problem-Solving Tips:**\n• Read the problem twice\n• Identify what you know vs. what you need\n• Show your work step by step\n• Check if your answer makes sense\n\n💡 **Study Strategies:**\n• Practice daily for 15-30 minutes\n• Start with easier problems first\n• Use visual aids and diagrams\n• Ask questions when stuck\n\nWhat specific math topic can I help with?"
    }
    
    // Study help
    if (message.includes('study') || message.includes('learn') || message.includes('tips')) {
      return "📚 **Study Success Strategies:**\n\n🎯 **Active Learning:**\n• Teach the material to someone else\n• Create your own practice questions\n• Summarize in your own words\n• Test yourself regularly\n\n⏰ **Time Management:**\n• Use Pomodoro Technique (25min + 5min break)\n• Study hardest subjects when energy is high\n• Take regular breaks\n• Set specific daily goals\n\nWhat study challenge can I help you tackle?"
    }
    
    // Time management
    if (message.includes('time') || message.includes('schedule') || message.includes('timetable')) {
      if (message.includes('timetable') || message.includes('give')) {
        return "📅 **Daily Study Schedule:**\n\n🌅 **Morning (7:00-12:00)**\n• 7:00-9:00: Hardest subject (peak focus)\n• 9:15-11:00: Second priority subject\n• 11:15-12:00: Review yesterday's notes\n\n🌞 **Afternoon (1:00-6:00)**\n• 1:00-3:00: Practice problems/homework\n• 3:15-5:00: Lighter subjects\n• 5:00-6:00: Reading or review\n\n🌙 **Evening (7:00-9:00)**\n• 7:00-8:30: Review and organize\n• 8:30-9:00: Plan tomorrow\n\n💡 **Customize this based on your energy and school schedule!**"
      }
      return "⏰ **Time Management Tips:**\n\n🗓️ **Planning:**\n• Use a calendar or planner\n• Color-code different subjects\n• Set realistic daily goals\n• Include breaks in your schedule\n\n🎯 **Productivity:**\n• Remove distractions (phone, social media)\n• Use timers for focused work\n• Tackle hardest tasks when alert\n• Reward yourself for completing goals\n\nNeed help creating a specific schedule?"
    }
    
    // Exams
    if (message.includes('exam') || message.includes('test') || message.includes('quiz')) {
      return "📝 **Exam Success Guide:**\n\n📚 **Preparation (2-3 weeks before):**\n• Create study schedule\n• Gather all materials\n• Identify weak areas\n• Start reviewing actively\n\n🎯 **Final week:**\n• Take practice tests\n• Focus on problem areas\n• Review key concepts\n• Get good sleep!\n\n📋 **Exam day:**\n• Read instructions carefully\n• Start with easier questions\n• Manage your time\n• Stay calm and focused\n\nWhat type of exam are you preparing for?"
    }
    
    // Notes
    if (message.includes('notes') || message.includes('note-taking')) {
      return "📝 **Note-Taking Mastery:**\n\n🏛️ **Cornell Method:**\n• Divide page: Notes | Cues | Summary\n• Take main notes during class\n• Add keywords in cue column\n• Write summary at bottom\n\n🎨 **Visual Techniques:**\n• Use colors for different topics\n• Draw diagrams and flowcharts\n• Create mind maps\n• Use symbols for speed\n\n📱 **Digital vs Paper:**\n• Paper: better for memory\n• Digital: easy to search and organize\n\nWhat subject are you taking notes for?"
    }
    
    // Motivation
    if (message.includes('help') || message.includes('difficult') || message.includes('motivation')) {
      return "💪 **You Can Do This!**\n\n🌟 **Stay Motivated:**\n• Remember why you started\n• Celebrate small wins\n• Every expert was once a beginner\n• Challenges make you stronger\n\n🎯 **Overcome Difficulties:**\n• Break big problems into smaller pieces\n• Ask for help when needed\n• Learn from mistakes\n• Focus on progress, not perfection\n\n💡 **Daily Success:**\n• Set one small goal each day\n• Track your progress\n• Connect with study partners\n\nWhat specific challenge can I help you with?"
    }
    
    // Thanks
    if (message.includes('thank') || message.includes('thanks')) {
      const responses = [
        "You're welcome! Keep up the great work! 🌟",
        "Happy to help! Learning is a journey - enjoy it! 📚",
        "My pleasure! You're doing awesome by asking questions! 💪"
      ]
      return responses[Math.floor(Math.random() * responses.length)]
    }
    
    // Default varied responses
    const defaultResponses = [
      "I'm here to help with your studies! 📚 Try asking me about:\n• Math problems (like '5+6')\n• Study techniques\n• Creating schedules\n• Exam preparation\n• Taking better notes\n\nWhat would you like to learn about?",
      
      "Great question! 🤔 I can help you with:\n• Solving math step-by-step\n• Study strategies that work\n• Time management tips\n• Subject-specific guidance\n• Motivation and encouragement\n\nWhat's your biggest study challenge right now?",
      
      "I'm your AI study buddy! 🤖 I'm great at:\n• Breaking down complex topics\n• Creating study plans\n• Explaining concepts clearly\n• Providing encouragement\n• Answering academic questions\n\nHow can I support your learning today?"
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage)
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        title="Open AI Study Assistant"
      >
        <MessageCircle size={24} />
      </button>
    )
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80' : 'w-96'
    }`}>
      <div className={`bg-card border border-border rounded-lg shadow-xl transition-all duration-300 ${
        isMinimized ? 'h-14' : 'h-96'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
              <Bot size={16} className="text-accent" />
            </div>
            <div>
              <h3 className="font-medium text-sm">AI Study Assistant</h3>
              {!isMinimized && (
                <p className="text-xs text-textMuted">Always here to help! 🤖</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-muted rounded"
            >
              {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-muted rounded"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.type === 'bot' && (
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={12} className="text-accent" />
                    </div>
                  )}
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-accent text-white ml-auto' 
                      : 'bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600'
                  }`}>
                    <div className="text-sm whitespace-pre-line">{message.content}</div>
                    <div className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-white/70' : 'text-textMuted'
                    }`}>
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                  {message.type === 'user' && (
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={12} className="text-primary" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={12} className="text-accent" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about studying..."
                  className="flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-border rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-3 py-2 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white rounded-lg transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}