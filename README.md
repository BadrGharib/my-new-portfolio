
## ✨ Features

- 🗺️ **Story Chapters Navigation** - Interactive sidebar with all chapters unlocked
- 🎨 **Dark Gaming Aesthetic** - Beautiful dark theme with purple/blue gradient accents
- 📖 **Story Progression** - Engaging "About Me" section with story steps
- 🤖 **AI Guide Chatbot** - Interactive AI assistant in the bottom right
- 🎯 **Chapter Navigation System** - Navigate freely between all story chapters with Next/Previous buttons
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Smooth Animations** - Engaging transitions and hover effects

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool for fast development
- **React Icons** - Beautiful icon library
- **CSS3** - Custom styling with animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portofolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx/css          # Top header with profile and story title
│   │   ├── QuestMap.jsx/css        # Sidebar navigation with chapter items
│   │   ├── AIGuide.jsx/css         # AI chatbot component
│   │   └── quests/                 # Story chapter components
│   │       ├── AboutQuest.jsx/css
│   │       ├── ExperienceQuest.jsx/css
│   │       ├── EducationQuest.jsx/css
│   │       ├── SkillsQuest.jsx/css
│   │       ├── ActivitiesQuest.jsx/css
│   │       ├── ProjectsQuest.jsx/css
│   │       └── ContactQuest.jsx/css
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # Global app styles
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Base styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Story Chapter System

The portfolio uses a story-driven navigation system:

1. **About Me Story** - Introduces the developer with interactive story progression
2. **Experience Story** - Professional work history
3. **Education Story** - Academic background and certifications
4. **Skills Story** - Technical skills with progress bars
5. **Activities Story** - Achievements and community involvement
6. **Projects Story** - Portfolio of work
7. **Contact Story** - Get in touch form

All chapters are unlocked from the start. Navigate freely or use Next/Previous buttons!

## 🎨 Customization

To customize the portfolio with your information:

1. Update personal info in `src/components/Header.jsx`
2. Modify story data in each chapter component under `src/components/quests/`
3. Change colors in the CSS files (look for gradient values)
4. Add your own project images and links in `ProjectsQuest.jsx`
5. Update social media links in `ContactQuest.jsx`
6. Choose from 6 color themes using the theme selector

## 🚀 Deployment

Build the project and deploy to your favorite hosting platform:

```bash
npm run build
```

The `dist` folder will contain your production-ready files.

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

