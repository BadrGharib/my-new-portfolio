import { FaTrophy, FaMedal, FaStar, FaAward } from 'react-icons/fa'
import './ActivitiesQuest.css'
import portfolioData from '../../data/portfolio.json'

const iconMap = {
  trophy: FaTrophy,
  medal: FaMedal,
  star: FaStar,
  award: FaAward
}

function ActivitiesQuest() {
  const { title, subtitle, items } = portfolioData.activities
  
  return (
    <section className="story-section">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>

      <div className="activities-grid">
        {items.map((activity, index) => {
          const Icon = iconMap[activity.icon]
          return (
            <div key={index} className="activity-card">
              <div className="activity-icon">
                <Icon />
              </div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <span className="activity-date">{activity.date}</span>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default ActivitiesQuest
