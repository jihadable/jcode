import fe from "../assets/frontend.jpg"
import be from "../assets/backend.jpg"
import uiux from "../assets/design.jpg"
import gameDev from "../assets/game.jpg"
import gameDesign from "../assets/game-design.jpg"
import android from "../assets/mobile.jpg"
import ios from "../assets/ios.jpg"
import data from "../assets/data.jpg"
import cyber from "../assets/cyber.jpg"
import devops from "../assets/devops.jpg"
import aiml from "../assets/ai-ml.jpg"
import cloud from "../assets/cloud.jpg"

const getClassesData = async() => {
    let response = await fetch("https://umar-api.000webhostapp.com/jcode/classes/")
    response = await response.json()

    return response
}

export let classesData = [...await getClassesData()].map(item => ({...item, topic_list: JSON.parse(item.topic_list)}))

// export let classesData = [
//     {
//         link: "frontend",
//         title: "Frontend Development",
//         img: fe,
//         member: 580,
//         rating: 4.7,
//         topicsList: ["HTML", "CSS", "JavaScript", "JavaScript Framework", "Responsive Web Design", "Testing and Debugging", "Web Performance", "Build Tools", "Basic Command Line Usage", "Web Accessibility", "Basic SEO (Search Engine Optimization)", "Cross-Browser Compatibility", "Bundling and Module Systems", "Progressive Web Apps (PWAs)", "Build and Deployment", "Best Practices and Coding Standards"]
//     },
//     {
//         link: "backend",
//         title: "Backend Development",
//         img: be,
//         member: 580,
//         rating: 4.8,
//         topicsList: ["Server-side Programming Languages", "Database Management", "Web Frameworks", "API Development", "Server Management and Deployment", "Backend Architecture", "Chacing and Security", "Authentication and Authorization", "Message Queues and Testing", "Distributed Systems", "Logging and Monitoring", "Containerization and Orchestration", "Continuous Integration and Continuous Deployment (CI/CD)", "Performance Optimization and Scalability", "Error Handling and Debugging", "Data Migration and Versioning", "API Security"]
//     },
//     {
//         link: "ui-ux",
//         title: "UI/UX Designer",
//         img: uiux,
//         member: 465,
//         rating: 4.5,
//         topicsList: ["UI Design Principles", "Color Theory and Typography", "Visual Elements", "Design Tools", "Responsive Design", "UI Patterns", "Prototyping", "User Research", "Information Architecture and Wireframing", "Usability Testing", "Interaction Design and Accesibility", "Visual Design", "Project Management"]
//     },
//     {
//         link: "game-dev",
//         title: "Game Development",
//         img: gameDev,
//         member: 600,
//         rating: 4.6,
//         topicsList: ["Programming Languages for Game Development", "Game Engines", "Physics and Mathematics", "Game Development Tools", "Game Testing and Quality Assurance", "Game Monetization", "Multiplayer and Networking", "Artificial Intelligence (AI)", "Mobile and Console Development", "Scripting and Game Logic", "Cross-Platform Developmen", "Legal and Intellectual Property (IP) Issues"]
//     },
//     {
//         link: "game-design",
//         title: "Game Designer",
//         img: gameDesign,
//         member: 540,
//         rating: 4.5,
//         topicsList: ["Game Design Fundamentals", "Game Mechanics", "Game Prototyping", "Level Design", "Storytelling and Narrative Design", "Game Genre Knowledge", "Game Art and Visual Design", "Sound and Music", "Game UI/UX Design", "2D and 3D Graphics", "Game Testing and QA", "Game Engines and Tools", "Game Monetization and Balancing", "Game Market and Trends", "Storyboarding and Scriptwriting"]
//     },
//     {
//         link: "android-dev",
//         title: "Android Development",
//         img: android,
//         member: 520,
//         rating: 4.7,
//         topicsList: ["Programming Languages (Java or Kotlin)", "Android Studio", "Android App Architecture", "Layouts and Views", "Intents and Navigation", "Fragments", "User Input Handling", "Networking and API Integration", "Background Processing", "Permission", "Security and Testing", "App Deployment"]
//     },
//     {
//         link: "ios-dev",
//         title: "IOS Development",
//         img: ios,
//         member: 510,
//         rating: 4.5,
//         topicsList: ["Swift Programming", "Xcode and Interface Builder", "iOS App Architecture", "View Controllers", "Table Views and Collection Views", "Navigation and Tab Bar Controllers", "User Input Handling", "Auto Layout and Constraints", "Core Graphics and Animation", "Core Location and MapKit", "App Lifecycle and State Management", "App Deployment"]
//     },
//     {
//         link: "data-analyst",
//         title: "Data Analyst",
//         img: data,
//         member: 640,
//         rating: 4.8,
//         topicsList: ["Statistics", "Data Exploration", "Data Wrangling", "Data Analysis Tools", "Data Visualization", "Exploratory Data Analysis (EDA)", "Hypothesis Testing", "Regression Analysis", "Machine Learning Basics", "Data Ethics and Privacy", "Data Storytelling", "Time Series Analysis", "Data Mining", "Excel and Spreadsheet Analysis", "Big Data Technologies", "Database Management", "Command Line and Scripting", "Data Analytics Tools and Libraries"]
//     },
//     {
//         link: "cyber-security",
//         title: "Cyber Security",
//         img: cyber,
//         member: 667,
//         rating: 4.9,
//         topicsList: ["Networking Fundamentals", "Operating Systems", "Cryptography", "Web Application Security", "Network Security", "Ethical Hacking/Penetration Testing", "Security Best Practices", "Incident Response", "Security Standards and Compliance", "Security Awareness and Training", "Malware Analysis", "Cloud Security", "Mobile Security", "IoT (Internet of Things) Security", "Threat Intelligence", "Digital Forensics", "Secure Coding and Network Design", "Cybersecurity Tools", "Network Monitoring and Analysis"]
//     },
//     {
//         link: "dev-ops",
//         title: "DevOps Engineer",
//         img: devops,
//         member: 623,
//         rating: 4.7,
//         topicsList: ["Operating Systems", "Programming for automation and scripting", "Configuration Management", "Continuous Integration/Continuous Deployment (CI/CD)", "Containerization", "Infrastructure as Code (IaC)", "Monitoring and Logging", "Cloud Services", "Agile and DevOps Culture", "Scripting and Automation", "Performance Optimization", "Troubleshooting and Debugging", "Versioning and Dependency Management", "Disaster Recovery and Backup", "Infrastructure Scaling and Monitoring", "Compliance and Governance"]
//     },
//     {
//         link: "ai-ml",
//         title: "AI/ML Engineer",
//         img: aiml,
//         member: 523,
//         rating: 4.6,
//         topicsList: ["Mathematics", "Python for Programming Language", "Machine Learning Fundamentals", "Deep Learning", "Data Preprocessing and Feature Engineering", "Model Evaluation and Validation", "Model Deployment", "Natural Language Processing (NLP)", "Computer Vision", "Big Data and Distributed Computing", "Optimization Algorithms", "Hyperparameter Tuning", "Model Interpretability and Explainability", "A/B Testing", "AI Ethics and Regulations", "Cloud Computing", "Distributed Machine Learning"]
//     },
//     {
//         link: "cloud-architect",
//         title: "Cloud Architecture",
//         img: cloud,
//         member: 566,
//         rating: 4.8,
//         topicsList: ["Cloud Fundamentals", "Cloud Service Providers", "Infrastructure as Code (IaC)", "Networking in the Cloud", "Identity and Access Management (IAM)", "Cloud Security Best Practices", "Cloud Storage and Services", "Load Balancing and Scaling", "Data Management", "Monitoring and Logging", "High Availability and Disaster Recovery", "Cost Management", "Multi-Cloud and Hybrid Cloud", "Compliance and Governance", "Containers and Serverless Computing", "Cloud DevOps", "Networking Security", "Scripting and Automation", "Cloud Architecture Design Patterns", "Business Continuity and Disaster Recovery (BCDR)", "Serverless and Microservices Architecture", "AI and Machine Learning in the Cloud", "Cloud Migration Strategies"]
//     }
// ]