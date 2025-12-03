import { useState } from 'react'
import Header from './components/Header'
import QuestMap from './components/QuestMap'
import AboutQuest from './components/quests/AboutQuest'
import ExperienceQuest from './components/quests/ExperienceQuest'
import EducationQuest from './components/quests/EducationQuest'
import SkillsQuest from './components/quests/SkillsQuest'
import ActivitiesQuest from './components/quests/ActivitiesQuest'
import ProjectsQuest from './components/quests/ProjectsQuest'
import ContactQuest from './components/quests/ContactQuest'
import ThemeSelector from './components/ThemeSelector'
import './App.css'

function App() {
  const chapterOrder = ['about', 'experience', 'education', 'skills', 'activities', 'projects', 'contact']
  const [activeChapter, setActiveChapter] = useState('about')
  // All chapters unlocked
  const unlockedChapters = chapterOrder

  const handleNext = () => {
    const currentIndex = chapterOrder.indexOf(activeChapter)
    if (currentIndex < chapterOrder.length - 1) {
      setActiveChapter(chapterOrder[currentIndex + 1])
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrevious = () => {
    const currentIndex = chapterOrder.indexOf(activeChapter)
    if (currentIndex > 0) {
      setActiveChapter(chapterOrder[currentIndex - 1])
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const renderStory = () => {
    return (
      
      <div style={{ display: 'flex', flexDirection: 'column',width:'100%'}}>
        {activeChapter === 'about' && <AboutQuest />}
        {activeChapter === 'experience' && <ExperienceQuest />}
        {activeChapter === 'education' && <EducationQuest />}
        {activeChapter === 'skills' && <SkillsQuest />}
        {activeChapter === 'activities' && <ActivitiesQuest />}
        {activeChapter === 'projects' && <ProjectsQuest />}
        {activeChapter === 'contact' && <ContactQuest />}
        
        {/* Story Navigation */}
        <div className="story-navigation">
          <button 
            className="nav-btn prev-btn" 
            onClick={handlePrevious}
            disabled={chapterOrder.indexOf(activeChapter) === 0}
          >
            ← Previous
          </button>
          <span className="story-progress">
            {chapterOrder.indexOf(activeChapter) + 1} / {chapterOrder.length}
          </span>
          <button 
            className="nav-btn next-btn" 
            onClick={handleNext}
            disabled={chapterOrder.indexOf(activeChapter) === chapterOrder.length - 1}
          >
            Next →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <QuestMap 
          activeChapter={activeChapter}
          onChapterSelect={setActiveChapter}
        />
        {renderStory()}
      </div>
      <ThemeSelector />
    </div>
  )
}

export default App
