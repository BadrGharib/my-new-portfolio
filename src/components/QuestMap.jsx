import { FaUser, FaBriefcase, FaGraduationCap, FaCode, FaTrophy, FaFolder, FaEnvelope, FaLock } from 'react-icons/fa'
import './QuestMap.css'
import portfolioData from '../data/portfolio.json'

const quests = [
  { id: 'about', name: 'About Me', icon: FaUser },
  { id: 'experience', name: 'Experience', icon: FaBriefcase },
  { id: 'education', name: 'Education', icon: FaGraduationCap },
  { id: 'skills', name: 'Skills', icon: FaCode },
  { id: 'activities', name: 'Activities', icon: FaTrophy },
  { id: 'projects', name: 'Projects', icon: FaFolder },
  { id: 'contact', name: 'Contact', icon: FaEnvelope },
]

function QuestMap({ activeChapter, onChapterSelect }) {
  const { name } = portfolioData.personal
  
  return (
    <aside className="story-map">
      <h2 className="story-map-title">Story Chapters</h2>
      <p className="story-map-subtitle">Navigate through {name}'s journey</p>
      
      <nav className="story-nav">
        {quests.map((chapter) => {
          const isActive = activeChapter === chapter.id
          const Icon = chapter.icon
          
          return (
            <button
              key={chapter.id}
              className={`story-item ${isActive ? 'active' : ''}`}
              onClick={() => onChapterSelect(chapter.id)}
            >
              <div className="story-info">
                <Icon className="story-icon-side-bar" />
                <span className="story-name">{chapter.name}</span>
              </div>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default QuestMap
