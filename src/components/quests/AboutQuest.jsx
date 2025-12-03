import { useState } from 'react'
import { FaMapMarkerAlt, FaCode, FaHeart, FaLightbulb, FaUserAstronaut } from 'react-icons/fa'
import './AboutQuest.css'
import portfolioData from '../../data/portfolio.json'

function AboutQuest() {
  const { name, location, title, profileImage, badges } = portfolioData.personal
  const { storySteps } = portfolioData.about
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < storySteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  return (
    <section className="story-section">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Discover the story behind the code</p>

      <div className="about-content">
        <div className="profile-card">
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt={name} 
              className="main-profile-img"
            />
            <div className="profile-badge">
              <FaUserAstronaut />
            </div>
          </div>
          <div className="profile-meta">
            <div className="meta-item">
              <FaMapMarkerAlt />
              <span>{location}</span>
            </div>
            <div className="meta-item">
              <FaCode />
              <span>{title}</span>
            </div>
            {badges.map((badge, index) => (
              <div key={index} className="meta-item">
                {badge.icon === 'heart' ? <FaHeart /> : <FaLightbulb />}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="story-progression">
          <div className="story-card">
            <div className="story-icon">{storySteps[currentStep].icon}</div>
            <h3>{storySteps[currentStep].title}</h3>
            <p>{storySteps[currentStep].content}</p>
            <div className="story-progress">
              <div className="progress-dots">
                {storySteps.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index <= currentStep ? 'active' : ''}`}
                  ></span>
                ))}
              </div>
              <button className="next-btn" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutQuest
