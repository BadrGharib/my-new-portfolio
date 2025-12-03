import './EducationQuest.css'
import portfolioData from '../../data/portfolio.json'

function EducationQuest() {
  const { title, subtitle, items } = portfolioData.education
  
  return (
    <section className="story-section">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>

      <div className="education-grid">
        {items.flatMap((item, index) => {
          if (item.type === 'degree') {
            return [
              <div key={index} className="education-card">
                <div className="edu-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p className="university">{item.university}</p>
                <p className="field">{item.field}</p>
                <p className="grade">{item.grade}</p>
                <span className="year">{item.year}</span>
              </div>
            ]
          } else if (item.type === 'certifications') {
            // Render each certification as a separate card
            return item.items.map((cert, certIndex) => (
              typeof cert === 'string' ? (
                <div key={`${index}-${certIndex}`} className="education-card">
                  <div className="edu-icon">{item.icon}</div>
                  <p>{cert}</p>
                </div>
              ) : (
                <div key={`${index}-${certIndex}`} className="education-card">
                  <div className="edu-icon">{item.icon}</div>
                  <h3>{cert.name}</h3>
                  {cert.status && <span className="cert-status">({cert.status})</span>}
                  <p className="cert-description">{cert.description}</p>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cert-link"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              )
            ))
          } else if (item.type === 'learning') {
            // Keep languages grouped in one card
            return [
              <div key={index} className="education-card">
                <div className="edu-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <div className="lang-list">
                  {item.items.map((lang, i) => (
                    <p key={i}>{lang}</p>
                  ))}
                </div>
              </div>
            ]
          }
          return []
        })}
      </div>

    </section>
  )
}

export default EducationQuest
