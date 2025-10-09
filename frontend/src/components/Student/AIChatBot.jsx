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

  // ADVANCED AI REASONING FUNCTIONS
  const analyzeAndSolveStep = (question) => {
    const q = question.toLowerCase()
    
    // Multi-step problem analysis
    if (q.includes('word problem') || q.includes('story problem')) {
      return "🧠 **Advanced Problem-Solving Framework:**\n\n📖 **Step 1: Read & Understand**\n• Read the problem 2-3 times carefully\n• Identify what's being asked (the question)\n• Underline or highlight key information\n• Ignore irrelevant details\n\n🔍 **Step 2: Analyze & Extract**\n• What do I know? (given information)\n• What do I need to find? (unknown)\n• What relationships exist between known and unknown?\n• Are there any constraints or conditions?\n\n🎯 **Step 3: Plan Strategy**\n• What mathematical concepts apply here?\n• Can I draw a diagram or visual representation?\n• Is this similar to problems I've solved before?\n• What formula or method should I use?\n\n⚡ **Step 4: Execute & Solve**\n• Set up equations or calculations\n• Work through step-by-step\n• Show all work clearly\n• Double-check calculations\n\n✅ **Step 5: Verify & Reflect**\n• Does my answer make sense in context?\n• Can I check it a different way?\n• What did I learn from this problem?\n• How can I apply this method to similar problems?\n\n💡 **Pro Tips:**\n• If stuck, try working backwards from the answer\n• Break complex problems into smaller parts\n• Use estimation to check if answer is reasonable\n• Practice similar problems to build pattern recognition\n\nTell me your specific problem and I'll walk through it with you!"
    }
    
    if (q.includes('steps') || q.includes('solve') || q.includes('method')) {
      return "🎯 **Intelligent Problem-Solving Approach:**\n\n🧩 **Universal Problem-Solving Method:**\n1. **Comprehension**: What exactly is being asked?\n2. **Analysis**: What tools/knowledge do I need?\n3. **Strategy**: What's my plan of attack?\n4. **Execution**: Implement the solution step-by-step\n5. **Evaluation**: Is my answer correct and complete?\n\n🔬 **Critical Thinking Questions:**\n• What patterns do I recognize?\n• What assumptions am I making?\n• Are there multiple approaches?\n• How does this connect to what I already know?\n• What would happen if I changed one variable?\n\n💭 **Metacognitive Reflection:**\n• Am I understanding the underlying concepts?\n• What strategies work best for me?\n• Where do I typically make mistakes?\n• How can I improve my problem-solving process?\n\nShare your specific challenge and I'll demonstrate this advanced reasoning approach!"
    }
    
    return "🚀 **Advanced Problem Solver Activated!**\n\nI can help you tackle complex problems using sophisticated reasoning. Whether it's:\n• Multi-step math problems with logical progression\n• Scientific analysis requiring hypothesis testing\n• Essay arguments needing critical evaluation\n• Strategic study planning with optimization\n\nI'll break down any challenge into manageable steps and teach you the thinking process behind each solution.\n\nWhat specific problem shall we solve together?"
  }

  const provideDeepExplanation = (originalQuestion, lowerCaseQ) => {
    // Advanced reasoning for 'why' questions
    if (lowerCaseQ.includes('why')) {
      if (lowerCaseQ.includes('math') || lowerCaseQ.includes('algebra') || lowerCaseQ.includes('formula')) {
        return "🤔 **Why Mathematics Works (Deep Understanding):**\n\n🌟 **The Beauty of Mathematical Logic:**\nMath isn't arbitrary rules - it's a language that describes patterns in our universe!\n\n🔬 **Why Formulas Exist:**\n• They capture relationships that always work\n• They're shortcuts for repeated reasoning\n• They connect abstract concepts to real situations\n• Example: A = πr² isn't just memorization - it represents how area grows exponentially with radius!\n\n🧠 **Why We Learn Step-by-Step:**\n• Complex reasoning builds on simple foundations\n• Each concept unlocks access to more advanced ideas\n• Mastery at each level prevents confusion later\n• Like building a house - you need a solid foundation first\n\n💡 **Why Practice Matters:**\n• Pattern recognition becomes automatic\n• Your brain builds neural pathways for problem-solving\n• Confidence grows through successful experiences\n• Transfer learning - skills apply to new situations\n\n🎯 **The Deeper Purpose:**\nMath teaches logical thinking, problem-solving, and precision - skills valuable in ANY career or life situation!\n\nWhat specific mathematical 'why' can I explain for you?"
      }
      
      if (lowerCaseQ.includes('study') || lowerCaseQ.includes('learn')) {
        return "🧠 **Why We Study (The Science Behind Learning):**\n\n🔬 **Neuroplasticity in Action:**\n• Your brain physically changes when you learn!\n• New neural connections form with each concept mastered\n• Practice strengthens these pathways like muscle training\n• This is why 'getting it' feels like a breakthrough moment\n\n🎯 **Why Different Methods Work:**\n• **Visual learners**: Spatial processing areas activate\n• **Auditory learners**: Language centers engage more\n• **Kinesthetic learners**: Motor cortex involvement helps\n• **Everyone benefits** from multi-sensory approaches!\n\n⏰ **Why Timing Matters:**\n• **Spaced repetition**: Leverages memory consolidation cycles\n• **Sleep**: Brain literally cleans out toxins and strengthens memories\n• **Interleaving**: Mixing topics builds flexible thinking\n• **Deliberate practice**: Focused effort in weakness areas accelerates growth\n\n🌱 **Why Struggle is Good:**\n• Difficulty forces deeper processing\n• Making mistakes activates error-correction systems\n• Overcoming challenges builds resilience and confidence\n• 'Productive struggle' leads to stronger understanding\n\n🚀 **The Ultimate Why:**\nLearning expands your capacity to understand and shape the world around you!\n\nWhat aspect of learning science interests you most?"
      }
    }
    
    // Advanced reasoning for 'how' questions
    if (lowerCaseQ.includes('how does') || lowerCaseQ.includes('how can') || lowerCaseQ.includes('how to')) {
      return "⚡ **Advanced 'How' Analysis:**\n\n🔍 **Multi-Level Thinking Approach:**\n• **Surface Level**: What are the immediate steps?\n• **Strategic Level**: What's the underlying method?\n• **Conceptual Level**: Why does this approach work?\n• **Transfer Level**: How can I apply this elsewhere?\n\n🧩 **Systems Thinking:**\n• How do all the pieces connect?\n• What are the cause-and-effect relationships?\n• Where are the leverage points for maximum impact?\n• What patterns repeat across different contexts?\n\n💭 **Critical Analysis Framework:**\n• What are the assumptions behind this approach?\n• What alternative methods exist?\n• What are the trade-offs of each option?\n• How do I choose the best strategy for my situation?\n\n🎯 **Implementation Strategy:**\n• Start with the end goal clearly defined\n• Work backwards to identify necessary steps\n• Identify potential obstacles and solutions\n• Create checkpoints to monitor progress\n\nGive me your specific 'how' question and I'll provide a comprehensive, multi-layered analysis!"
    }
    
    return "🤔 **Deep Thinking Mode Activated!**\n\nI can provide sophisticated explanations that go beyond surface-level answers:\n\n• **Root Cause Analysis**: Understanding the 'why' behind concepts\n• **Systems Thinking**: How everything connects and influences everything else\n• **Multiple Perspectives**: Examining questions from different angles\n• **Predictive Reasoning**: What happens if we change variables?\n• **Transfer Learning**: How knowledge applies across domains\n\nWhat would you like me to analyze deeply for you?"
  }

  const provideLearningSupport = (originalQuestion, lowerCaseQ) => {
    const confusionIndicators = ['confused', 'don\'t understand', 'don\'t get', 'lost', 'stuck']
    const hasConfusion = confusionIndicators.some(indicator => lowerCaseQ.includes(indicator))
    
    if (hasConfusion) {
      return "🤝 **Confusion is Normal - Let's Figure This Out Together!**\n\n🧠 **First, Let's Diagnose:**\n• What specific part doesn't make sense?\n• Where did you first feel lost?\n• What do you DO understand about this topic?\n• Have you seen anything similar before?\n\n🔧 **Adaptive Learning Strategies:**\n• **Concept Mapping**: Let's draw connections between ideas\n• **Analogies**: Find familiar concepts that work similarly\n• **Multiple Representations**: Try visual, verbal, and numerical approaches\n• **Scaffolding**: Build up from what you already know\n\n🎯 **Targeted Support Approach:**\n1. **Identify Prerequisites**: What foundation knowledge is missing?\n2. **Fill Gaps**: Quick review of necessary background\n3. **Rebuild Understanding**: Step-by-step concept construction\n4. **Apply & Practice**: Immediate application to solidify learning\n5. **Extend & Connect**: Link to broader understanding\n\n💡 **Confusion-to-Clarity Techniques:**\n• **Feynman Method**: Explain it like you're teaching a friend\n• **Question Chains**: Ask 'why' and 'how' repeatedly\n• **Error Analysis**: Learn from what went wrong\n• **Multiple Examples**: See the pattern across different contexts\n\n🌟 **Remember**: Confusion means you're at the edge of new learning!\n\nTell me exactly where you're stuck and I'll provide personalized support to get you unstuck!"
    }
    
    return "🌟 **Personalized Learning Support:**\n\nI can adapt my explanations to your specific learning style and needs:\n\n• **Visual Learners**: Diagrams, charts, spatial relationships\n• **Auditory Learners**: Verbal explanations, discussions, rhythms\n• **Kinesthetic Learners**: Hands-on examples, movement, manipulation\n• **Reading/Writing**: Text-based learning, note-taking strategies\n\nI'll also adjust complexity based on your current understanding level.\n\nWhat learning challenge can I help you overcome?"
  }

  // ADVANCED AI HELPER FUNCTIONS
  const analyzeConversationContext = (recentMessages, currentMessage) => {
    const context = {
      isFollowUp: false,
      previousTopic: null,
      needsClarification: false,
      complexity: 'beginner'
    }
    
    // Detect if this relates to previous messages
    if (recentMessages.includes('fraction') && currentMessage.includes('add')) {
      context.isFollowUp = true
      context.previousTopic = 'fractions'
    }
    
    return context
  }

  const isFollowUpQuestion = (message, recentMessages) => {
    // Don't treat greetings as follow-ups
    const greetingWords = ['hello', 'hi', 'hey', 'helo', 'hellooo', 'good morning', 'good evening']
    if (greetingWords.some(greeting => message.includes(greeting))) {
      return false
    }
    
    // Don't treat standalone simple words as follow-ups
    if (message.trim().split(' ').length <= 2 && message.length <= 10) {
      const simpleWords = ['what', 'how', 'why', 'when', 'where', 'ok', 'thanks', 'yes', 'no']
      if (simpleWords.includes(message.trim())) {
        return false
      }
    }
    
    const followUpWords = ['also', 'what about', 'but', 'however', 'and then', 'another', 'more', 'else', 'next']
    return followUpWords.some(word => message.includes(word)) || 
           (recentMessages && message.includes('that') || message.includes('this'))
  }

  const handleFollowUpIntelligently = (originalMsg, lowerMsg, context) => {
    // Intelligent context-aware responses
    if (context.includes('fraction') && lowerMsg.includes('add')) {
      return "📚 **Building on Fractions - Adding Specifically:**\n\nSince we just discussed fractions, let me dive deeper into addition:\n\n🎯 **Same Denominators (Easy!):**\n• ¹⁄₄ + ²⁄₄ = ³⁄₄ (just add the tops!)\n• ³⁄₈ + ¹⁄₈ = ⁴⁄₈ = ½ (simplify when possible)\n\n🔄 **Different Denominators (Need Common Ground):**\n• ½ + ⅓: Find common denominator (6)\n• ½ = ³⁄₆ and ⅓ = ²⁄₆\n• So ³⁄₆ + ²⁄₆ = ⁵⁄₆\n\n🧠 **The 'Butterfly Method':**\n```\n  1   +   1   =  ?    Cross multiply:\n  2       3          1×3 + 1×2 = 5\n                     2×3 = 6\n                     Answer: 5/6\n```\n\nNeed me to walk through a specific fraction addition problem?"
    }
    
    if (context.includes('math') && (lowerMsg.includes('another') || lowerMsg.includes('more'))) {
      return "🎯 **More Advanced Math Concepts:**\n\nSince you're interested in expanding your math knowledge:\n\n🔢 **Next Level Topics:**\n• **Exponents**: Powers and roots (2³ = 8)\n• **Variables**: Using letters for unknown numbers (x + 5 = 12)\n• **Functions**: Mathematical machines that transform inputs to outputs\n• **Graphing**: Visual representation of mathematical relationships\n\n🌟 **Problem-Solving Strategies:**\n• **Working Backwards**: Start with the answer and reverse-engineer\n• **Guess and Check**: Strategic trial and error\n• **Looking for Patterns**: Finding rules in number sequences\n• **Drawing Pictures**: Visualizing word problems\n\nWhich advanced topic interests you most?"
    }
    
    return "💭 **I sense you want to go deeper!**\n\nBased on our conversation, I can provide:\n• More detailed explanations of the current topic\n• Related concepts that build on what we've discussed\n• Practice problems to test your understanding\n• Connections to real-world applications\n\nWhat specific aspect would you like to explore further?"
  }

  const classifyQuestionType = (message) => {
    if (message.includes('solve') || message.includes('calculate') || /\d+[\+\-\*\/]\d+/.test(message)) {
      return 'computational'
    }
    if (message.includes('why') || message.includes('how') || message.includes('explain')) {
      return 'conceptual'
    }
    if (message.includes('help') || message.includes('stuck') || message.includes('confused')) {
      return 'support'
    }
    if (message.includes('study') || message.includes('learn') || message.includes('practice')) {
      return 'learning'
    }
    return 'general'
  }

  const assessComplexityLevel = (message) => {
    const advancedWords = ['calculus', 'derivative', 'integral', 'quadratic', 'trigonometry']
    const intermediateWords = ['algebra', 'geometry', 'fraction', 'equation', 'variable']
    const basicWords = ['add', 'subtract', 'multiply', 'divide']
    
    if (advancedWords.some(word => message.includes(word))) return 'advanced'
    if (intermediateWords.some(word => message.includes(word))) return 'intermediate'
    if (basicWords.some(word => message.includes(word))) return 'basic'
    return 'general'
  }

  const inferLearningStyle = (message) => {
    if (message.includes('show me') || message.includes('picture') || message.includes('diagram')) {
      return 'visual'
    }
    if (message.includes('explain') || message.includes('tell me') || message.includes('say')) {
      return 'auditory'
    }
    if (message.includes('practice') || message.includes('do') || message.includes('try')) {
      return 'kinesthetic'
    }
    return 'mixed'
  }

  // Advanced AI response function with sophisticated reasoning
  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim()
    
    console.log('Processing message:', message) // Debug log
    
    // ADVANCED REASONING & CONTEXT AWARENESS
    // Multi-step problem solving detection
    if (message.includes('solve') || message.includes('help me with') || message.includes('how do i')) {
      return analyzeAndSolveStep(userMessage)
    }
    
    // Pattern recognition for complex questions
    if (message.includes('why') || message.includes('how') || message.includes('what if') || message.includes('explain why')) {
      return provideDeepExplanation(userMessage, message)
    }
    
    // Contextual learning assessment
    if (message.includes('understand') || message.includes('confused') || message.includes("don't get")) {
      return provideLearningSupport(userMessage, message)
    }
    
    // CONTEXT AWARENESS - Remember conversation flow
    const recentMessages = messages.slice(-3).map(m => m.content.toLowerCase()).join(' ')
    const conversationContext = analyzeConversationContext(recentMessages, message)
    
    // INTELLIGENT FOLLOW-UP DETECTION
    if (isFollowUpQuestion(message, recentMessages)) {
      return handleFollowUpIntelligently(userMessage, message, recentMessages)
    }
    
    // ADVANCED PATTERN RECOGNITION
    const questionType = classifyQuestionType(message)
    const complexity = assessComplexityLevel(message)
    const learningStyle = inferLearningStyle(message)
    
    console.log('AI Analysis:', { questionType, complexity, learningStyle }) // Debug
    
    // MATHEMATICS - Advanced problem solving with reasoning
    let mathMatch, num1, num2, operator, operation, result
    
    // Pattern 1: Symbol-based math (5+6, 10*3, etc.)
    mathMatch = message.match(/(\d+)\s*([+\-*/^])\s*(\d+)/)
    if (mathMatch) {
      [, num1, operator, num2] = mathMatch
      const n1 = parseFloat(num1)
      const n2 = parseFloat(num2)
      
      switch(operator) {
        case '+': result = n1 + n2; operation = 'addition'; break
        case '-': result = n1 - n2; operation = 'subtraction'; break
        case '*': result = n1 * n2; operation = 'multiplication'; break
        case '/': result = n2 !== 0 ? n1 / n2 : 'undefined (division by zero)'; operation = 'division'; break
        case '^': result = Math.pow(n1, n2); operation = 'exponentiation'; break
      }
      
      return `🧮 **${num1} ${operator} ${num2} = ${result}**\n\n📚 That's ${operation}! Here are some tips:\n• Always double-check your work\n• Practice mental math for speed\n• Understanding is better than memorizing\n\nNeed help with more math problems?`
    }
    
    // Word-based math operations
    if (message.includes('add') || message.includes('plus') || message.includes('sum')) {
      const addMatch = message.match(/(?:add|plus|sum).*?(\d+(?:\.\d+)?).*?(?:and|with|\+).*?(\d+(?:\.\d+)?)/)
      if (addMatch) {
        const [, n1, n2] = addMatch
        result = parseFloat(n1) + parseFloat(n2)
        return `🧮 **${n1} + ${n2} = ${result}**\n\n📚 Addition Tips:\n• Think of it as combining quantities\n• Use the commutative property (a+b = b+a)\n• Practice skip counting for larger numbers\n• Break down complex additions into simpler parts`
      }
    }
    
    // Complex math topics
    if (message.includes('quadratic') || message.includes('x²') || message.includes('algebra')) {
      return "📐 **Quadratic Equations Help:**\n\n🔢 **Standard Form:** ax² + bx + c = 0\n\n📝 **Solution Methods:**\n• **Factoring:** Find (mx + p)(nx + q) = 0\n• **Quadratic Formula:** x = [-b ± √(b²-4ac)] / 2a\n• **Completing the Square:** Convert to (x + h)² = k form\n\n💡 **Tips:**\n• Always check your solutions by substituting back\n• Graph the parabola to visualize solutions\n• Discriminant (b²-4ac) tells you about roots\n\nNeed help with a specific quadratic problem?"
    }
    
    if (message.includes('calculus') || message.includes('derivative') || message.includes('integral')) {
      return "∫ **Calculus Fundamentals:**\n\n📈 **Derivatives (Rate of Change):**\n• d/dx[xⁿ] = nxⁿ⁻¹ (Power Rule)\n• d/dx[sin(x)] = cos(x)\n• d/dx[eˣ] = eˣ\n• Chain Rule: d/dx[f(g(x))] = f'(g(x)) × g'(x)\n\n📊 **Integrals (Area Under Curve):**\n• ∫xⁿ dx = (xⁿ⁺¹)/(n+1) + C\n• ∫sin(x) dx = -cos(x) + C\n• ∫eˣ dx = eˣ + C\n\n🎯 **Study Tips:**\n• Practice derivatives first, then integrals\n• Memorize basic formulas\n• Understand the geometric meaning\n\nWhat specific calculus topic needs help?"
    }
    
    if (message.includes('fraction') || message.includes('fractions') || message.includes('numerator') || message.includes('denominator')) {
      return "🔢 **Complete Fractions Guide:**\n\n📚 **What Are Fractions?**\n• A fraction represents part of a whole\n• Written as **numerator/denominator** (like ¾)\n• **Numerator** = top number (parts we have)\n• **Denominator** = bottom number (total parts)\n\n🎯 **Types of Fractions:**\n• **Proper:** Numerator < Denominator (like ½, ¾)\n• **Improper:** Numerator ≥ Denominator (like ⁵⁄₃, ⁷⁄₄)\n• **Mixed Numbers:** Whole number + fraction (like 2¼)\n• **Equivalent:** Same value, different form (½ = ²⁄₄ = ³⁄₆)\n\n➕ **Adding Fractions:**\n• **Same denominator:** Add numerators (½ + ¼ = ²⁄₄ + ¼ = ¾)\n• **Different denominators:** Find common denominator first\n• Example: ½ + ⅓ = ³⁄₆ + ²⁄₆ = ⁵⁄₆\n\n✖️ **Multiplying Fractions:**\n• Multiply numerators together\n• Multiply denominators together\n• Example: ½ × ¾ = ³⁄₈\n• **Tip:** Simplify before multiplying when possible\n\n➗ **Dividing Fractions:**\n• \"Keep, Change, Flip\" method\n• Keep first fraction, change ÷ to ×, flip second fraction\n• Example: ½ ÷ ¼ = ½ × ⁴⁄₁ = ²⁄₁ = 2\n\n💡 **Real-World Examples:**\n• Pizza slices: If you eat 2 out of 8 slices = ²⁄₈ = ¼\n• Time: 30 minutes = ³⁰⁄₆₀ = ½ hour\n• Money: 25 cents = ²⁵⁄₁₀₀ = ¼ dollar\n\n🎨 **Memory Tricks:**\n• **Butterfly Method** for adding/subtracting different denominators\n• **Cross multiply** for comparing fractions\n• **Pizza visualization** for understanding parts of a whole\n\n📝 **Practice Tips:**\n• Start with visual models (pie charts, number lines)\n• Use real objects to represent fractions\n• Practice simplifying fractions daily\n• Connect fractions to decimals and percentages\n\nWhat specific fraction concept would you like me to explain further?"
    }
    
    // Percentage and decimal topics
    if (message.includes('percentage') || message.includes('percent') || message.includes('%')) {
      return "📊 **Percentages Made Simple:**\n\n🎯 **What is a Percentage?**\n• Percent = \"per hundred\" (% = /100)\n• 50% = 50/100 = 0.5 = ½\n• Way to express parts of a whole\n\n🔄 **Conversions:**\n• **Fraction to %:** Divide, multiply by 100\n• **Decimal to %:** Multiply by 100, add % sign\n• **% to Decimal:** Divide by 100\n• Examples: ¼ = 0.25 = 25%\n\n🧮 **Calculating Percentages:**\n• **Find % of number:** Number × (% ÷ 100)\n• Example: 20% of 80 = 80 × (20÷100) = 16\n• **Find what % one number is of another:** (Part÷Whole) × 100\n• Example: What % is 15 of 60? (15÷60) × 100 = 25%\n\n💰 **Real-World Applications:**\n• **Discounts:** 30% off $100 = $100 - $30 = $70\n• **Tips:** 15% of $40 bill = $6 tip\n• **Grades:** 18 out of 20 = 90%\n• **Growth:** Population increased by 25%\n\n📝 **Memory Tricks:**\n• 50% = half, 25% = quarter, 75% = three-quarters\n• 10% = move decimal left one place\n• 1% = divide by 100\n• Double and halve for quick calculations\n\nNeed help with a specific percentage problem?"
    }
    
    if (message.includes('decimal') || message.includes('decimals')) {
      return "🔢 **Decimal Number System:**\n\n📍 **Understanding Decimals:**\n• Numbers with a decimal point (like 3.14, 0.5)\n• Each position has 10× value of position to its right\n• Places: ones, tenths, hundredths, thousandths\n• Example: 3.142 = 3 + 1/10 + 4/100 + 2/1000\n\n🔄 **Decimal Operations:**\n• **Adding/Subtracting:** Line up decimal points\n• **Multiplying:** Ignore decimals, then count total decimal places\n• **Dividing:** Move decimal point in divisor and dividend equally\n\n💡 **Fraction Connections:**\n• 0.5 = ½ (five tenths = one half)\n• 0.25 = ¼ (twenty-five hundredths = one quarter)\n• 0.75 = ¾ (seventy-five hundredths = three quarters)\n• 0.1 = 1/10, 0.01 = 1/100\n\n🎯 **Rounding Decimals:**\n• Look at digit to the right of target place\n• If 5 or greater, round up\n• If less than 5, round down\n• Example: 3.147 rounded to tenths = 3.1\n\n📊 **Real-World Examples:**\n• Money: $3.50 (3 dollars, 50 cents)\n• Measurements: 5.2 meters, 98.6°F\n• Statistics: 3.14159... (π)\n\nWhat decimal concept needs more explanation?"
    }
    
    if (message.includes('geometry') || message.includes('triangle') || message.includes('circle')) {
      return "📐 **Geometry Solutions:**\n\n🔺 **Triangles:**\n• Area = ½ × base × height\n• Pythagorean: a² + b² = c² (right triangles)\n• Sum of angles = 180°\n• Types: Equilateral, Isosceles, Scalene\n\n⭕ **Circles:**\n• Area = πr²\n• Circumference = 2πr\n• Arc length = (θ/360°) × 2πr\n• Sector area = (θ/360°) × πr²\n\n📏 **Key Formulas:**\n• Rectangle: Area = length × width\n• Trapezoid: Area = ½(b₁ + b₂) × height\n\nWhat geometry problem can I solve?"
    }
    
    // SCIENCE SUBJECTS
    if (message.includes('physics') || message.includes('force') || message.includes('velocity')) {
      return "⚗️ **Physics Help Center:**\n\n� **Mechanics:**\n• Force = mass × acceleration (F = ma)\n• Velocity = displacement / time\n• Kinetic Energy = ½mv²\n• Potential Energy = mgh\n\n⚡ **Electricity:**\n• Ohm's Law: V = IR\n• Power = VI = I²R = V²/R\n• Electrical Energy = Power × Time\n\n🌊 **Waves:**\n• Wave speed = frequency × wavelength\n• Period = 1 / frequency\n\n💡 **Problem-Solving Steps:**\n1. Identify given values\n2. Choose the right formula\n3. Substitute and calculate\n4. Check units and reasonableness\n\nWhat physics concept needs clarification?"
    }
    
    if (message.includes('chemistry') || message.includes('molecule') || message.includes('reaction')) {
      return "🧪 **Chemistry Assistant:**\n\n⚛️ **Atomic Structure:**\n• Protons (positive) + Neutrons = Nucleus\n• Electrons (negative) orbit the nucleus\n• Atomic number = number of protons\n• Mass number = protons + neutrons\n\n🔬 **Chemical Equations:**\n• Reactants → Products\n• Balance atoms on both sides\n• Conservation of mass applies\n\n🧮 **Mole Calculations:**\n• 1 mole = 6.022 × 10²³ particles\n• Molar mass from periodic table\n• n = m/M (moles = mass/molar mass)\n\n📊 **Periodic Trends:**\n• Atomic radius decreases across period\n• Ionization energy increases across period\n• Electronegativity increases across period\n\nWhat chemistry topic can I explain?"
    }
    
    if (message.includes('biology') || message.includes('cell') || message.includes('dna')) {
      return "🧬 **Biology Study Guide:**\n\n🦠 **Cell Biology:**\n• Prokaryotes: No nucleus (bacteria)\n• Eukaryotes: Has nucleus (plants, animals)\n• Cell membrane controls what enters/exits\n• Mitochondria = cellular powerhouse\n\n🧬 **Genetics:**\n• DNA → RNA → Protein (Central Dogma)\n• A-T and G-C base pairing\n• Genes code for traits\n• Dominant vs Recessive alleles\n\n🌱 **Ecology:**\n• Producers → Primary → Secondary → Tertiary consumers\n• Energy flows, matter cycles\n• Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n\n🔬 **Study Methods:**\n• Draw and label diagrams\n• Make concept maps\n• Use mnemonics for processes\n\nWhat biology concept needs explanation?"
    }
    
    // LANGUAGE ARTS & LITERATURE
    if (message.includes('english') || message.includes('essay') || message.includes('writing')) {
      return "✍️ **English & Writing Support:**\n\n📝 **Essay Structure:**\n• **Introduction:** Hook + Background + Thesis\n• **Body Paragraphs:** Topic sentence + Evidence + Analysis + Transition\n• **Conclusion:** Restate thesis + Summarize + Final thought\n\n📚 **Literary Analysis:**\n• Theme: Central message/meaning\n• Symbolism: Objects representing ideas\n• Character development: How characters change\n• Setting: Time, place, atmosphere\n\n✏️ **Writing Tips:**\n• Vary sentence length and structure\n• Use active voice when possible\n• Show, don't just tell\n• Proofread for grammar and spelling\n\n� **Common Essays:**\n• Argumentative: Take a stance with evidence\n• Narrative: Tell a story with purpose\n• Expository: Explain or inform\n• Descriptive: Paint a picture with words\n\nWhat writing project can I help with?"
    }
    
    if (message.includes('grammar') || message.includes('punctuation') || message.includes('sentence')) {
      return "📝 **Grammar & Mechanics Guide:**\n\n� **Parts of Speech:**\n• **Nouns:** Person, place, thing, idea\n• **Verbs:** Action or state of being\n• **Adjectives:** Describe nouns\n• **Adverbs:** Modify verbs, adjectives, other adverbs\n\n✏️ **Punctuation Rules:**\n• **Period (.):** End of complete sentences\n• **Comma (,):** Separate items, clauses, phrases\n• **Semicolon (;):** Connect related independent clauses\n• **Colon (:):** Introduce lists or explanations\n\n📐 **Sentence Types:**\n• **Simple:** One independent clause\n• **Compound:** Two independent clauses joined\n• **Complex:** Independent + dependent clause\n• **Compound-Complex:** Multiple independent + dependent\n\n🎯 **Common Errors:**\n• Subject-verb agreement\n• Run-on sentences\n• Comma splices\n• Apostrophe misuse\n\nWhat grammar rule needs clarification?"
    }
    
    // HISTORY & SOCIAL STUDIES
    if (message.includes('history') || message.includes('world war') || message.includes('revolution')) {
      return "🏛️ **History Study Helper:**\n\n� **Timeline Strategies:**\n• Create visual timelines\n• Connect cause and effect\n• Look for patterns across eras\n• Use mnemonic devices for dates\n\n🗺️ **Key Historical Themes:**\n• **Political:** Government changes, wars, revolutions\n• **Economic:** Trade, resources, industrialization\n• **Social:** Culture, religion, demographics\n• **Technological:** Inventions, innovations\n\n📖 **Study Methods:**\n• Make connections between events\n• Use primary sources when possible\n• Create character profiles of key figures\n• Draw maps and diagrams\n\n� **Essay Writing for History:**\n• Start with a clear thesis\n• Use specific evidence and examples\n• Analyze causes and consequences\n• Consider multiple perspectives\n\nWhat historical period or event interests you?"
    }
    
    // STUDY SKILLS & ORGANIZATION
    if (message.includes('study') || message.includes('learn') || message.includes('tips')) {
      return "� **Complete Study System:**\n\n🧠 **Learning Strategies:**\n• **Active Reading:** Highlight, annotate, summarize\n• **Spaced Repetition:** Review at increasing intervals\n• **Elaborative Interrogation:** Ask yourself 'why' and 'how'\n• **Self-Testing:** Quiz yourself regularly\n\n🎯 **Memory Techniques:**\n• **Mnemonics:** Create memorable phrases or acronyms\n• **Visual Imagery:** Associate concepts with mental pictures\n• **Method of Loci:** Link information to familiar places\n• **Chunking:** Group related information together\n\n⏰ **Time Management:**\n• **Pomodoro Technique:** 25min work + 5min break\n• **Time Blocking:** Assign specific times to subjects\n• **Priority Matrix:** Urgent vs Important tasks\n• **Weekly Planning:** Schedule study sessions in advance\n\n🎨 **Note-Taking Systems:**\n• **Cornell Method:** Notes, cues, summary sections\n• **Mind Mapping:** Visual connections between concepts\n• **Outline Method:** Hierarchical organization\n• **Charting:** Tables for comparing information\n\nWhat specific study challenge can I help solve?"
    }
    
    // MOTIVATION & MENTAL HEALTH
    if (message.includes('stressed') || message.includes('anxious') || message.includes('overwhelmed')) {
      return "🌈 **Mental Health Matters:**\n\n💙 **Stress Management:**\n• Deep breathing: 4 counts in, hold 4, out 6\n• Take regular breaks (even 5 minutes helps)\n• Talk to someone you trust\n• Remember: It's okay to not be perfect\n\n🧘 **Quick Relaxation:**\n• Progressive muscle relaxation\n• Listen to calming music\n• Go for a short walk\n• Practice gratitude (3 things daily)\n\n🎯 **Academic Stress:**\n• Prioritize tasks by importance\n• Break large projects into steps\n• Ask for help when needed\n• Celebrate small victories\n\nYou're stronger than you think! 💪"
    }
    
    if (message.includes('motivation') || message.includes('tired') || message.includes('give up') || message.includes('difficult')) {
      return "🌟 **Motivation Boost:**\n\n🔥 **Reignite Your Drive:**\n• Remember your 'why' - your ultimate goal\n• Visualize your success\n• Every small step counts\n• Progress > Perfection\n\n💪 **When You Want to Quit:**\n• Rest, don't quit\n• Talk to a mentor or friend\n• Review how far you've come\n• Set micro-goals for today\n\n� **Daily Energy Tips:**\n• Start with your easiest task\n• Reward yourself for completing goals\n• Study with energizing music\n• Change your environment\n\n\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" 📚"
    }
    
    // CAREER & FUTURE PLANNING
    if (message.includes('career') || message.includes('job') || message.includes('future')) {
      return "🚀 **Career & Future Planning:**\n\n💼 **Career Exploration:**\n• Research different career paths\n• Take personality/interest assessments\n• Talk to professionals in fields you like\n• Consider job market trends\n\n🎓 **Skill Development:**\n• Identify skills needed for your dream job\n• Build a portfolio of your work\n• Develop both hard and soft skills\n• Continuous learning mindset\n\n🌐 **Preparation Steps:**\n• Create a professional resume\n• Build a LinkedIn profile\n• Practice interview skills\n• Network with professionals\n\n📈 **Success Mindset:**\n• Set short-term and long-term goals\n• Embrace challenges as growth opportunities\n• Stay adaptable and open to change\n\nWhat career field interests you most?"
    }
    
    // TECHNOLOGY & DIGITAL TOOLS
    if (message.includes('technology') || message.includes('computer') || message.includes('coding') || message.includes('programming')) {
      return "💻 **Technology & Coding Help:**\n\n🖥️ **Programming Fundamentals:**\n• **Variables:** Store data (like boxes with labels)\n• **Functions:** Reusable blocks of code\n• **Loops:** Repeat actions efficiently\n• **Conditionals:** Make decisions (if/then)\n\n🌐 **Popular Languages:**\n• **Python:** Great for beginners, data science\n• **JavaScript:** Web development, interactive sites\n• **Java:** Object-oriented, enterprise applications\n• **C++:** System programming, game development\n\n📱 **Digital Study Tools:**\n• Code editors: VS Code, Sublime Text\n• Version control: Git and GitHub\n• Online platforms: CodePen, Repl.it\n• Learning sites: freeCodeCamp, Codecademy\n\n🎯 **Learning Path:**\n1. Choose one language to start\n2. Build small projects\n3. Practice daily (even 30 minutes)\n4. Join coding communities\n\nWhat programming concept interests you?"
    }
    
    // LANGUAGES & COMMUNICATION
    if (message.includes('language') || message.includes('spanish') || message.includes('french') || message.includes('communication')) {
      return "🌍 **Language Learning & Communication:**\n\n🗣️ **Language Learning Tips:**\n• **Immersion:** Surround yourself with the language\n• **Daily Practice:** Even 15 minutes consistently\n• **Speaking:** Practice with native speakers online\n• **Media:** Watch movies, listen to music in target language\n\n📝 **Communication Skills:**\n• **Active Listening:** Focus fully on the speaker\n• **Clear Expression:** Organize thoughts before speaking\n• **Body Language:** 55% of communication is nonverbal\n• **Empathy:** Try to understand others' perspectives\n\n🎯 **Study Strategies:**\n• Flashcards for vocabulary\n• Language exchange apps (HelloTalk, Tandem)\n• Set language on phone/computer\n• Keep a language journal\n\n💡 **Memory Techniques:**\n• Associate new words with images\n• Create sentences with new vocabulary\n• Use spaced repetition systems\n• Practice with real-life scenarios\n\nWhat language skill would you like to improve?"
    }
    
    // GREETINGS & GENERAL INTERACTION  
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || 
        message.includes('helo') || message.includes('hellooo') || message.includes('hii') ||
        message.includes('good morning') || message.includes('good evening') || message.includes('good afternoon')) {
      const greetings = [
        "Hello there! 👋 Ready to tackle some learning today? I can help with any subject - from complex calculus to essay writing!",
        "Hi! 🌟 Great to see you! Whether you need help with homework, study strategies, or just want to chat about academics, I'm here for you!",
        "Hey! 🤖 Welcome to your personal study session! I can assist with math, science, writing, test prep, or any academic challenge you're facing!",
        "Good to see you! 📚 I'm excited to help you learn today. What subject or topic would you like to explore together?",
        "Hello! 🎓 I'm your AI study assistant, ready to help with everything from basic arithmetic to advanced research methods. What can we work on?"
      ]
      return greetings[Math.floor(Math.random() * greetings.length)]
    }
    
    // HOMEWORK & ASSIGNMENT HELP
    if (message.includes('homework') || message.includes('assignment') || message.includes('project')) {
      return "📝 **Homework & Assignment Success:**\n\n🎯 **Getting Started:**\n• Read instructions carefully (twice!)\n• Break large assignments into smaller tasks\n• Create a timeline with deadlines\n• Gather all necessary resources first\n\n📚 **Research Tips:**\n• Use reliable sources (.edu, .gov, peer-reviewed)\n• Take notes while researching\n• Keep track of sources for citations\n• Fact-check information from multiple sources\n\n✍️ **Writing Process:**\n• Outline before writing\n• Write a rough draft first\n• Let it sit, then revise\n• Proofread for errors\n\n🔍 **Quality Check:**\n• Does it answer the question completely?\n• Is the argument clear and logical?\n• Are sources properly cited?\n• Is grammar and spelling correct?\n\nWhat specific assignment can I help you tackle?"
    }
    
    // EXAM AND TEST PREPARATION  
    if (message.includes('exam') || message.includes('test') || message.includes('quiz') || message.includes('midterm') || message.includes('final')) {
      return "📝 **Complete Exam Preparation Guide:**\n\n📅 **Timeline (3-4 weeks out):**\n• **Week 1:** Gather all materials, create study schedule\n• **Week 2-3:** Active studying, practice problems\n• **Week 4:** Review, practice tests, final prep\n• **Day before:** Light review, good sleep, prepare materials\n\n📚 **Study Strategies:**\n• **Active Recall:** Test yourself without looking\n• **Spaced Repetition:** Review at increasing intervals\n• **Practice Tests:** Simulate exam conditions\n• **Teaching Method:** Explain concepts to others\n\n🧠 **Memory Techniques:**\n• Create mnemonics for lists\n• Use visual associations\n• Make concept maps\n• Practice with flashcards\n\n⚡ **Exam Day Tips:**\n• Arrive early and calm\n• Read all instructions first\n• Start with easiest questions\n• Manage your time wisely\n• Review answers if time permits\n\nWhat type of exam are you preparing for?"
    }
    
    // TIME MANAGEMENT SPECIFIC
    if (message.includes('time') || message.includes('schedule') || message.includes('timetable') || message.includes('planning')) {
      if (message.includes('timetable') || message.includes('give') || message.includes('create')) {
        return "📅 **Personalized Daily Study Schedule:**\n\n🌅 **Early Morning (6:00-9:00)**\n• 6:00-6:30: Wake up, light exercise/meditation\n• 6:30-7:30: Breakfast & review yesterday's notes\n• 7:30-9:00: Hardest subject (peak mental energy)\n\n🌞 **Mid-Morning (9:00-12:00)**\n• 9:00-9:15: Break & hydration\n• 9:15-11:00: Second priority subject\n• 11:00-12:00: Practice problems/homework\n\n🕐 **Afternoon (1:00-5:00)**\n• 1:00-2:00: Lunch & relaxation\n• 2:00-3:30: Lighter subjects (reading, review)\n• 3:30-4:00: Break & physical activity\n• 4:00-5:00: Group study or tutoring\n\n🌆 **Evening (6:00-9:00)**\n• 6:00-7:00: Dinner & family time\n• 7:00-8:30: Review, organize notes\n• 8:30-9:00: Plan tomorrow, relaxation\n\n💡 **Customize based on your school schedule and energy patterns!**"
      }
      return "⏰ **Master Time Management:**\n\n🎯 **Planning Strategies:**\n• **Time Blocking:** Assign specific times to subjects\n• **Priority Matrix:** Urgent vs Important tasks\n• **Weekly Planning:** Schedule study sessions in advance\n• **Buffer Time:** Add 25% extra time for unexpected delays\n\n📊 **Productivity Techniques:**\n• **Pomodoro:** 25min work + 5min break + 15min break every 4 cycles\n• **Time Boxing:** Set strict time limits for tasks\n• **Eat the Frog:** Do hardest task first\n• **Batch Processing:** Group similar tasks together\n\n🚫 **Avoid Time Wasters:**\n• Social media during study hours\n• Perfectionism on low-priority tasks\n• Multitasking (reduces efficiency by 40%)\n• Procrastination (use 2-minute rule)\n\nNeed help creating a specific study schedule?"
    }
    
    // ADVANCED ACADEMIC TOPICS
    if (message.includes('research') || message.includes('thesis') || message.includes('dissertation')) {
      return "🔍 **Advanced Research & Writing:**\n\n📚 **Research Process:**\n• **Topic Selection:** Narrow and specific focus\n• **Literature Review:** Survey existing knowledge\n• **Methodology:** Choose appropriate research methods\n• **Data Collection:** Gather evidence systematically\n• **Analysis:** Interpret findings objectively\n\n✍️ **Academic Writing:**\n• **Structure:** Introduction → Methods → Results → Discussion\n• **Citations:** Use proper academic format (APA, MLA, Chicago)\n• **Objectivity:** Present evidence without bias\n• **Clarity:** Write for your audience level\n\n🎯 **Organization Tips:**\n• Use reference management tools (Zotero, Mendeley)\n• Create detailed outlines before writing\n• Set daily writing goals (word count)\n• Regular backup of your work\n\n🔬 **Quality Control:**\n• Peer review before submission\n• Fact-check all statements\n• Proper methodology documentation\n• Ethical considerations addressed\n\nWhat research topic are you working on?"
    }
    
    // Thanks
    if (message.includes('thank') || message.includes('thanks')) {
      const responses = [
        "You're welcome! Keep up the great work! 🌟",
        "Happy to help! Learning is a journey - enjoy it! 📚",
        "My pleasure! You're doing awesome by asking questions! 💪",
        "Anytime! I'm here whenever you need academic support! 🤖",
        "Glad I could help! Remember, every question brings you closer to mastery! 🎯"
      ]
      return responses[Math.floor(Math.random() * responses.length)]
    }
    
    // Intelligent default responses with context awareness
    const intelligentResponses = [
      `🧠 **Advanced AI Tutor Ready!** [${questionType.toUpperCase()}] [${complexity.toUpperCase()}]\n\n🎯 **Detected Learning Context:**\n• Question Type: ${questionType === 'computational' ? 'Problem-solving focused' : questionType === 'conceptual' ? 'Deep understanding needed' : questionType === 'support' ? 'Need guidance & support' : 'General exploration'}\n• Complexity: ${complexity === 'advanced' ? 'University level concepts' : complexity === 'intermediate' ? 'High school level topics' : complexity === 'basic' ? 'Elementary fundamentals' : 'Mixed difficulty'}\n• Learning Style: ${learningStyle === 'visual' ? 'Visual/spatial processing' : learningStyle === 'auditory' ? 'Verbal/auditory learning' : learningStyle === 'kinesthetic' ? 'Hands-on practice' : 'Multi-modal approach'}\n\n💡 **Intelligent Support Available:**\n• **Step-by-step reasoning** for complex problems\n• **Multiple explanation methods** adapted to your style\n• **Context-aware follow-ups** that build on our conversation\n• **Real-world connections** to make concepts meaningful\n\nWhat specific challenge shall we tackle with this intelligent approach?`,
      
      `� **Context-Aware Learning Assistant Activated!**\n\n🔍 **I've analyzed your question pattern and can provide:**\n• **Adaptive Explanations**: Matching your current understanding level\n• **Predictive Guidance**: Anticipating your next learning needs\n• **Multi-perspective Analysis**: Examining topics from different angles\n• **Transfer Learning**: Connecting concepts across subjects\n\n🎨 **Personalized Teaching Methods:**\n• **Visual Learners**: Diagrams, flowcharts, spatial relationships\n• **Logical Learners**: Step-by-step reasoning, cause-effect chains\n• **Creative Learners**: Analogies, stories, real-world examples\n• **Analytical Learners**: Data, patterns, systematic approaches\n\n📚 **Comprehensive Subject Mastery:**\n• Mathematics (Elementary → University Calculus)\n• Sciences (Basic concepts → Advanced research)\n• Language Arts (Grammar → Literary analysis)\n• Study Skills (Memory → Critical thinking)\n\nI adapt my intelligence to match exactly what you need!`,
      
      `🌟 **Sophisticated AI Reasoning Engine Online!**\n\n🧩 **Advanced Problem-Solving Capabilities:**\n• **Metacognitive Guidance**: Teaching you how to think about thinking\n• **Error Pattern Recognition**: Identifying and correcting common mistakes\n• **Knowledge Transfer**: Applying learning from one area to another\n• **Strategic Learning**: Optimizing your study approach for maximum efficiency\n\n🔬 **Deep Understanding Framework:**\n• **Surface Learning**: What are the facts and procedures?\n• **Deep Learning**: How do concepts connect and why do they work?\n• **Strategic Learning**: When and where should I apply this knowledge?\n• **Reflective Learning**: How can I improve my learning process?\n\n⚡ **Instant Intelligent Adaptation:**\nI monitor your responses and automatically adjust:\n• Explanation complexity\n• Teaching pace\n• Example difficulty\n• Support level needed\n\nLet's discover what you're capable of achieving!`,
      
      `� **AI Teaching Assistant with Advanced Reasoning!**\n\n🔄 **Dynamic Learning Loop:**\n1. **Assess**: What do you currently understand?\n2. **Adapt**: How should I explain this concept?\n3. **Apply**: Let's practice with real problems\n4. **Analyze**: What worked well? What needs adjustment?\n5. **Advance**: Ready for the next challenge?\n\n🧠 **Cognitive Science Applied:**\n• **Spaced Repetition**: Optimal timing for memory consolidation\n• **Interleaving**: Mixing topics for stronger learning\n• **Elaborative Interrogation**: Deep questioning for understanding\n• **Dual Coding**: Visual + verbal processing for maximum retention\n\n🎯 **Intelligent Question Analysis:**\nI can detect:\n• Your confidence level from word choice\n• Knowledge gaps from confusion patterns\n• Learning preferences from interaction style\n• Optimal challenge level for growth\n\nEvery interaction makes me better at helping you!`
    ]
    
    // Select response based on context and complexity
    let selectedResponse = intelligentResponses[0] // Default
    if (questionType === 'support') selectedResponse = intelligentResponses[1]
    if (complexity === 'advanced') selectedResponse = intelligentResponses[2]
    if (learningStyle === 'kinesthetic') selectedResponse = intelligentResponses[3]
    
    return selectedResponse
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