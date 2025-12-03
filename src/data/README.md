# Portfolio Data Configuration Guide

## 📋 Overview

All portfolio content is now centralized in `portfolio.json`. This makes it easy to update your information without touching the component code!

## 📁 File Structure

```
src/data/
├── portfolio.json   # All portfolio data
└── README.md       # This file
```

## 🗂️ Data Sections

### 1. **Personal Information**
```json
"personal": {
  "name": "Badr Gharib",
  "title": "Software Engineer",
  "location": "Cairo, Egypt",
  "profileImage": "URL or path to image",
  "badges": [...]
}
```
**Used in**: Header, AboutQuest, QuestMap

---

### 2. **About Me**
```json
"about": {
  "storySteps": [
    { "icon": "🌟", "title": "...", "content": "..." }
  ]
}
```
**Used in**: AboutQuest component

---

### 3. **Experience**
```json
"experience": {
  "timeline": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "period": "2022 - Present",
      "description": "...",
      "tags": ["React", "Node.js"]
    }
  ]
}
```
**Used in**: ExperienceQuest component

---

### 4. **Education**
```json
"education": {
  "items": [
    {
      "type": "degree|certifications|learning",
      "title": "...",
      "items": [...]
    }
  ]
}
```
**Used in**: EducationQuest component

---

### 5. **Skills**
```json
"skills": {
  "categories": [
    {
      "name": "Frontend Development",
      "skills": [
        { "name": "React", "level": 90 }
      ]
    }
  ],
  "tools": ["Git", "Docker", ...]
}
```
**Used in**: SkillsQuest component

---

### 6. **Activities**
```json
"activities": {
  "items": [
    {
      "icon": "trophy|medal|star|award",
      "title": "Achievement Title",
      "description": "...",
      "date": "2023"
    }
  ]
}
```
**Used in**: ActivitiesQuest component

---

### 7. **Projects**
```json
"projects": {
  "items": [
    {
      "title": "Project Name",
      "description": "...",
      "tags": ["React", "Node.js"],
      "image": "image URL",
      "github": "GitHub URL",
      "demo": "Demo URL"
    }
  ]
}
```
**Used in**: ProjectsQuest component

---

### 8. **Contact**
```json
"contact": {
  "socialLinks": [
    {
      "icon": "envelope|github|linkedin|twitter",
      "text": "Display Text",
      "url": "Full URL"
    }
  ]
}
```
**Used in**: ContactQuest component

---

### 9. **AI Guide**
```json
"aiGuide": {
  "questMessages": {
    "about": "Welcome message for about section",
    ...
  },
  "knowledgeBase": {
    "about": {
      "keywords": ["who", "about", ...],
      "responses": {
        "default": "Default response",
        "specific": "Specific response"
      }
    }
  }
}
```
**Used in**: AIGuide component

---

## 🔧 How to Use the Data

### Option 1: Import the Entire JSON
```javascript
import portfolioData from '../data/portfolio.json'

// Access sections
const name = portfolioData.personal.name
const experiences = portfolioData.experience.timeline
```

### Option 2: Import Specific Sections (when using modules)
```javascript
import { personal, experience, skills } from '../data/portfolio.json'

console.log(personal.name) // "Badr Gharib"
```

---

## ✏️ Updating Your Portfolio

### Quick Update Checklist:

1. **Personal Info** → Update name, title, location
2. **About Story** → Change your story steps
3. **Experience** → Add/remove jobs, update descriptions
4. **Education** → Update university, certifications
5. **Skills** → Adjust skill levels, add new technologies
6. **Activities** → Add achievements, hackathons
7. **Projects** → Add new projects with images and links
8. **Contact** → Update social media links
9. **AI Guide** → Customize chatbot responses

### Example Update:

To add a new project:
```json
{
  "title": "My New Project",
  "description": "What it does",
  "tags": ["Tech1", "Tech2"],
  "image": "https://...",
  "github": "https://github.com/...",
  "demo": "https://..."
}
```

---

## 🎯 Next Steps

### To Use This Data in Components:

1. Import the JSON file in each component
2. Replace hardcoded data with JSON data
3. Map over arrays to render dynamic content

### Example Implementation:

```javascript
// In ExperienceQuest.jsx
import portfolioData from '../data/portfolio.json'

function ExperienceQuest() {
  const { title, subtitle, timeline } = portfolioData.experience
  
  return (
    <section>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {timeline.map((exp, index) => (
        <div key={index}>
          <h3>{exp.title}</h3>
          <span>{exp.company}</span>
          <p>{exp.description}</p>
          {exp.tags.map(tag => <span>{tag}</span>)}
        </div>
      ))}
    </section>
  )
}
```

---

## 📝 Data Validation

Ensure your data follows this structure:
- ✅ All required fields are filled
- ✅ URLs are valid (start with http:// or https://)
- ✅ Skill levels are between 0-100
- ✅ Icons match available icon names
- ✅ Dates follow consistent format

---

## 🚀 Benefits of Centralized Data

1. **Easy Updates** - Change content in one place
2. **Consistency** - Same data format everywhere
3. **Version Control** - Track changes to your portfolio
4. **Scalability** - Easy to add new sections
5. **Portability** - Export/import portfolio data
6. **Multilingual Ready** - Can create separate JSON files for languages

---

## 💡 Pro Tips

- Keep a backup of your `portfolio.json` file
- Use meaningful commit messages when updating data
- Test changes in development before deploying
- Consider using environment variables for sensitive data (API keys)
- You can create multiple JSON files (portfolio-en.json, portfolio-ar.json) for multilingual support

---

**Happy Coding! 🎉**
