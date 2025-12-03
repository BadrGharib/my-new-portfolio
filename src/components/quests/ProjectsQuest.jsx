import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './ProjectsQuest.css'
import portfolioData from '../../data/portfolio.json'

function ProjectsQuest() {
  const { title, subtitle, items } = portfolioData.projects
  
  return (
    <section className="story-section">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>

      <div className="projects-grid">
        {items.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.github} className="project-link">
                  <FaGithub />
                </a>
                <a href={project.demo} className="project-link">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
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

export default ProjectsQuest
