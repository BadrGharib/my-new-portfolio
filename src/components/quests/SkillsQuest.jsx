import './SkillsQuest.css'
import portfolioData from '../../data/portfolio.json'

function SkillsQuest() {
  const { title, subtitle, categories, tools } = portfolioData.skills
  
  return (
    <section className="story-section">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>

      <div className="skills-container">
        {categories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-bars">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-level" 
                      style={{ width: `${skill.level}%` }}
                    >
                      {skill.level}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <div className="tech-grid">
            {tools.map((tech, index) => (
              <div key={index} className="tech-badge">{tech}</div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default SkillsQuest
