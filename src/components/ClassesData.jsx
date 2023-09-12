import fe from "../assets/frontend.jpg"
import be from "../assets/backend.jpg"
import uiux from "../assets/design.jpg"
import gameDev from "../assets/game.jpg"
import gameDesign from "../assets/game-design.jpg"
import android from "../assets/mobile.jpg"
import ios from "../assets/ios.jpg"
import data from "../assets/data.jpg"

export let classesData = [
    {
        link: "frontend",
        title: "Frontend Development",
        img: fe,
        member: 580,
        topics: 15,
        rating: 4.8,
        topicsList: ["HTML", "CSS", "JavaScript", "JavaScript Framework", "Responsive Web Design", "Testing and Debugging", "Web Performance", "Build Tools", "Basic Command Line Usage", "Web Accessibility", "Basic SEO (Search Engine Optimization)", "Cross-Browser Compatibility", "Bundling and Module Systems", "Progressive Web Apps (PWAs)", "Build and Deployment", "Best Practices and Coding Standards"]
    },
    {
        link: "backend",
        title: "Backend Development",
        img: be,
        member: 580,
        topics: 14,
        rating: 4.8,
        topicsList: ["Server-side Programming Languages", "Database Management", "Web Frameworks", "API Development", "Server Management and Deployment", "Backend Architecture", "Chacing and Security", "Authentication and Authorization", "Message Queues and Testing", "Distributed Systems", "Logging and Monitoring", "Containerization and Orchestration", "Continuous Integration and Continuous Deployment (CI/CD)", "Performance Optimization and Scalability", "Error Handling and Debugging", "Data Migration and Versioning", "API Security"]
    },
    {
        link: "ui-ux",
        title: "UI/UX Designer",
        img: uiux,
        member: 410,
        topics: 10,
        rating: 4.5,
        topicsList: ["UI Design Principles", "Color Theory and Typography", "Visual Elements", "Design Tools", "Responsive Design", "UI Patterns", "Prototyping", "User Research", "Information Architecture and Wireframing", "Usability Testing", "Interaction Design and Accesibility", "Visual Design", "Project Management"]
    },
    {
        link: "game-dev",
        title: "Game Development",
        img: gameDev,
        member: 600,
        topics: 16,
        rating: 4.6,
        topicsList: ["Programming Languages for Game Development", "Game Engines", "Physics and Mathematics", "Game Development Tools", "Game Testing and Quality Assurance", "Game Monetization", "Multiplayer and Networking", "Artificial Intelligence (AI)", "Mobile and Console Development", "Scripting and Game Logic", "Cross-Platform Developmen", "Legal and Intellectual Property (IP) Issues"]
    },
    {
        link: "game-design",
        title: "Game Designer",
        img: gameDesign,
        member: 540,
        topics: 15,
        rating: 4.5,
        topicsList: ["Game Design Fundamentals", "Game Mechanics", "Game Prototyping", "Level Design", "Storytelling and Narrative Design", "Game Genre Knowledge", "Game Art and Visual Design", "Sound and Music", "Game UI/UX Design", "2D and 3D Graphics", "Game Testing and QA", "Game Engines and Tools", "Game Monetization and Balancing", "Game Market and Trends", "Storyboarding and Scriptwriting"]
    },
    {
        link: "android-dev",
        title: "Android Development",
        img: android,
        member: 520,
        topics: 16,
        rating: 4.7,
        topicsList: ["Programming Languages (Java or Kotlin)", "Android Studio", "Android App Architecture", "Layouts and Views", "Intents and Navigation", "Fragments", "User Input Handling", "Networking and API Integration", "Background Processing", "Permission", "Security and Testing", "App Deployment"]
    },
    {
        link: "ios-dev",
        title: "IOS Development",
        img: ios,
        member: 510,
        topics: 16,
        rating: 4.4,
        topicsList: ["Swift Programming", "Xcode and Interface Builder", "iOS App Architecture", "View Controllers", "Table Views and Collection Views", "Navigation and Tab Bar Controllers", "User Input Handling", "Auto Layout and Constraints", "Core Graphics and Animation", "Core Location and MapKit", "App Lifecycle and State Management", "App Deployment"]
    },
    {
        link: "data-analyst",
        title: "Data Analyst",
        img: data,
        member: 640,
        topics: 17,
        rating: 4.6,
        topicsList: ["Statistics", "Data Exploration", "Data Wrangling", "Data Analysis Tools", "Data Visualization", "Exploratory Data Analysis (EDA)", "Hypothesis Testing", "Regression Analysis", "Machine Learning Basics", "Data Ethics and Privacy", "Data Storytelling", "Time Series Analysis", "Data Mining", "Excel and Spreadsheet Analysis", "Big Data Technologies", "Database Management", "Command Line and Scripting", "Data Analytics Tools and Libraries"]
    }
]