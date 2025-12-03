import { useState, useEffect } from 'react'
import { FaPalette } from 'react-icons/fa'
import './ThemeSelector.scss'

const themes = [
  { id: 'default', name: 'Green', colors: ['#10b981', '#34d399'] },
  { id: 'Purple', name: 'Purple', colors: ['#6366f1', '#8b5cf6'] },
  { id: 'red', name: 'Red', colors: ['#ef4444', '#f87171'] },
  { id: 'orange', name: 'Orange', colors: ['#f97316', '#fb923c'] },
  { id: 'cyan', name: 'Cyan', colors: ['#06b6d4', '#22d3ee'] },
  { id: 'pink', name: 'Pink', colors: ['#ec4899', '#f472b6'] }
]

function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('default')

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default'
    setCurrentTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (themeId) => {
    if (themeId === 'default') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', themeId)
    }
  }

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId)
    applyTheme(themeId)
    localStorage.setItem('portfolio-theme', themeId)
    setIsOpen(false)
  }

  return (
    <div className="theme-selector">
      <button 
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
      >
        <FaPalette />
      </button>

      {isOpen && (
        <div className="theme-panel">
          <h3>Choose Theme</h3>
          <div className="theme-grid">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                onClick={() => handleThemeChange(theme.id)}
                aria-label={`${theme.name} theme`}
              >
                <div className="theme-preview">
                  <div 
                    className="color-circle" 
                    style={{ background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})` }}
                  />
                </div>
                <span>{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ThemeSelector
