import { useState, useEffect } from 'react'
import { FaRobot, FaTimes } from 'react-icons/fa'
import './AIGuide.css'
import portfolioData from '../data/portfolio.json'

// Import quest messages and knowledge base from JSON
const questMessages = portfolioData.aiGuide.questMessages
const questKnowledge = portfolioData.aiGuide.knowledgeBase

// Keep the old structure for backward compatibility
const oldQuestKnowledge = {
  about: {
    keywords: ['who', 'about', 'you', 'name', 'yehia', 'location', 'cairo', 'story', 'background'],
    responses: {
      default: 'I\'m Badr Gharib, a passionate Software Engineer from Cairo, Egypt! 🇪🇬 I graduated with honors from the German University in Cairo in Computer Engineering. I\'m an AI Enthusiast and Innovation Focused developer who loves pushing boundaries! 🚀',
      location: 'I\'m based in Cairo, Egypt! 🌍 Beautiful city, amazing tech scene, and the best place to write code with a view of ancient history! 🏛️',
      education_brief: 'I graduated with an honor grade from the German University in Cairo, majoring in Computer Engineering. Quality education meets passion! 🎓'
    }
  },
  experience: {
    keywords: ['experience', 'work', 'job', 'company', 'senior', 'role', 'position', 'career'],
    responses: {
      default: 'I have progressive experience in software engineering! 💼 Started as a Junior Developer at Digital Agency (2019-2020), moved to Software Engineer at StartUp Inc (2020-2022), and now I\'m a Senior Software Engineer at Tech Company (2022-Present)! 📈',
      senior: 'As a Senior Software Engineer since 2022, I lead development of scalable web applications, mentor junior developers, and drive technical decisions. My tech stack includes React, Node.js, AWS, and TypeScript! 💪',
      technologies: 'I\'ve worked with amazing technologies: React, Node.js, AWS, TypeScript, JavaScript, Python, Docker, MongoDB, and more! Each role expanded my tech arsenal! ⚡',
      current: 'Currently, I\'m a Senior Software Engineer at Tech Company where I build scalable applications and mentor the next generation of developers! 🎯'
    }
  },
  education: {
    keywords: ['education', 'university', 'degree', 'study', 'graduate', 'guc', 'german', 'certification', 'learning'],
    responses: {
      default: 'I hold a Bachelor\'s Degree in Computer Engineering from the German University in Cairo (GUC) with an Honor Grade! 🎓 Plus, I\'m constantly learning with certifications in AWS, React, Machine Learning, and Full Stack Development! 📚',
      certifications: 'My certification arsenal includes: AWS Certified Solutions Architect, Advanced React & Redux, Machine Learning Specialization, and Full Stack Web Development! Always leveling up! 📜✨',
      university: 'German University in Cairo (GUC) - graduated with Honor Grade in Computer Engineering (2016-2020). Amazing experience! 🏛️',
      continuous: 'I\'m all about continuous learning! Currently studying System Design, Cloud Computing (AWS/Azure), AI & Machine Learning, and DevOps Best Practices! 🚀'
    }
  },
  skills: {
    keywords: ['skills', 'technology', 'tech', 'stack', 'languages', 'framework', 'tools', 'know', 'can'],
    responses: {
      default: 'My skill set is diverse! 💻 Frontend: React/Next.js (90%), JavaScript/TypeScript (85%), HTML/CSS (95%). Backend: Node.js/Express (88%), Python/Django (80%), Databases (85%). DevOps: AWS/Azure (82%), Docker/Kubernetes (78%), CI/CD (85%). Plus tools like Git, MongoDB, PostgreSQL, Redis, and more! ⚡',
      frontend: 'Frontend is my playground! React/Next.js at 90%, JavaScript/TypeScript at 85%, and HTML/CSS at 95%. I create beautiful, responsive UIs! 🎨',
      backend: 'Backend skills include Node.js/Express (88%), Python/Django (80%), and strong database knowledge (85%) with both SQL and NoSQL! 🔧',
      tools: 'My toolkit: Git, Docker, AWS, MongoDB, PostgreSQL, Redis, GraphQL, REST API, Webpack, Vite, Jest, and Linux! Everything you need for modern development! 🛠️'
    }
  },
  activities: {
    keywords: ['activities', 'achievement', 'hackathon', 'open source', 'community', 'mentor', 'speaker', 'contribution'],
    responses: {
      default: 'I\'m actively involved in the tech community! 🏆 Won first place in AI Innovation Hackathon 2023, contribute to open source React libraries, speak at tech conferences, and mentor junior developers and bootcamp students! 🌟',
      hackathon: 'Won first place in the AI Innovation Hackathon 2023! 🥇 Nothing beats the thrill of building something amazing under pressure! 🚀',
      opensource: 'I\'m an active contributor to popular React libraries! Contributing to open source is my way of giving back to the community that taught me so much! 💚',
      mentorship: 'Mentoring is my passion! I\'ve been mentoring junior developers and bootcamp students since 2021. Helping others grow is incredibly rewarding! 🎓'
    }
  },
  projects: {
    keywords: ['projects', 'portfolio', 'built', 'created', 'app', 'application', 'work'],
    responses: {
      default: 'I\'ve built some awesome projects! 🚀 AI Chat Platform (React, Node.js, OpenAI), E-Commerce Dashboard (Next.js, TypeScript, PostgreSQL), Task Management App (React, Firebase), and Weather Forecast API (Node.js, Redis, Docker)! Each one solving real problems! 💡',
      ai: 'The AI Chat Platform is my pride - real-time chat with smart AI suggestions and context-aware responses using React, Node.js, OpenAI, and WebSocket! 🤖',
      ecommerce: 'Built a comprehensive E-Commerce Dashboard with Next.js, TypeScript, PostgreSQL, and Tailwind. Full analytics and inventory management! 📊',
      tech: 'My projects showcase diverse tech: React, Next.js, TypeScript, Node.js, Firebase, PostgreSQL, Redis, Docker, and more! Always using the right tool for the job! 🔧'
    }
  },
  contact: {
    keywords: ['contact', 'reach', 'email', 'hire', 'collaborate', 'connect', 'message', 'talk'],
    responses: {
      default: 'Want to connect? 📬 You can reach me through the contact form, or find me on GitHub, LinkedIn, and Twitter! I\'m always open to interesting projects, collaborations, and tech discussions! Let\'s build something amazing together! 🤝',
      hire: 'Interested in working together? Fill out the contact form with your project details! I\'m always excited about new opportunities and challenges! 💼',
      collaborate: 'I love collaboration! Whether it\'s open source, side projects, or tech discussions - drop me a message and let\'s create something awesome! 🚀'
    }
  }
}

// Smart response generator
const generateResponse = (userMessage, activeChapter) => {
  const message = userMessage.toLowerCase()
  const knowledge = questKnowledge[activeChapter]
  
  if (!knowledge) {
    return 'Hmm, I\'m not sure about that! Try asking about my experience, skills, projects, or education! 🤔'
  }
  
  // Check if message contains quest-related keywords
  const hasKeyword = knowledge.keywords.some(keyword => message.includes(keyword))
  
  if (!hasKeyword) {
    return `Great question! I\'m currently in the ${activeChapter} section. Ask me about ${knowledge.keywords.slice(0, 3).join(', ')} and I\'ll share the details! 😊`
  }
  
  // Check for specific response patterns
  for (const [key, response] of Object.entries(knowledge.responses)) {
    if (key !== 'default' && message.includes(key)) {
      return response
    }
  }
  
  // Return default response for the quest
  return knowledge.responses.default
}

function AIGuide({ activeChapter }) {
  const { name } = portfolioData.personal
  
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'ai', text: questMessages.about }
  ])
  const [input, setInput] = useState('')

  // Update message when quest changes
  useEffect(() => {
    if (questMessages[activeChapter]) {
      setMessages([{ type: 'ai', text: questMessages[activeChapter] }])
    }
  }, [activeChapter])

  const handleSend = () => {
    if (!input.trim()) return
    
    const userMessage = input
    setMessages([...messages, { type: 'user', text: userMessage }])
    
    setTimeout(() => {
      const response = generateResponse(input, activeChapter)
      setMessages(prev => [...prev, { 
        type: 'ai', 
        text: response
      }])
    }, 500)
    
    setInput('')
  }

  return (
    <>
      <button className={`ai-guide-btn ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaRobot />}
      </button>

      {isOpen && (
        <div className="ai-guide-panel">
          <div className="ai-guide-header">
            <div className="ai-avatar"><FaRobot /></div>
            <div>
              <h4>{name}'s AI Guide</h4>
              <span className="status">● Online</span>
            </div>
          </div>

          <div className="ai-guide-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="ai-guide-input">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Let's start this epic journey! 🚀"
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AIGuide
