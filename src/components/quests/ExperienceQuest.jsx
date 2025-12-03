import { FaBriefcase, FaCode } from 'react-icons/fa'
import './ExperienceQuest.css'
import portfolioData from '../../data/portfolio.json'

function ExperienceQuest() {
  const { title, subtitle, timeline } = portfolioData.experience
  
  return (
    <section className="story-section">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
      
      <div className="timeline">
        {timeline.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              {index === 0 ? <FaBriefcase /> : <FaCode />}
            </div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span className="company">{exp.company}</span>
              <span className="period">{exp.period}</span>
              <p>{exp.description}</p>
              <div className="tech-tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default ExperienceQuest
