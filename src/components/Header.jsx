import { FaStar } from 'react-icons/fa'
import './Header.css'
import portfolioData from '../data/portfolio.json'

function Header() {
  const { name, title, profileImage } = portfolioData.personal
  
  return (
    <header className="header">
      <div className="profile-section">
        <img 
          src={profileImage} 
          alt={name} 
          className="profile-img"
        />
        <div className="profile-info">
          <h1 className="profile-name">{name}</h1>
          <p className="profile-title">{title}</p>
        </div>
      </div>
      <div className="story-title">
        <span className="story-icon">⭐</span>
        <span>{name}'s Portfolio Story</span>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
