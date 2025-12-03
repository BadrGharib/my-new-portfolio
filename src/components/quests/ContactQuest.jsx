import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './ContactQuest.css'
import portfolioData from '../../data/portfolio.json'

const iconMap = {
  envelope: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter
}

function ContactQuest() {
  const { title, subtitle, message, socialLinks } = portfolioData.contact
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Quest Complete! Message sent successfully!')
    onComplete()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="story-section">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>{message}</p>
          
          <div className="social-links">
            {socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon]
              return (
                <a key={index} href={link.url} className="social-link">
                  <Icon /> {link.text}
                </a>
              )
            })}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactQuest
