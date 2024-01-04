import { IconUserPlus } from "@tabler/icons-react"
import { IconStar } from "@tabler/icons-react"
import { IconBook2 } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import goTop from "./goTop"
import backend from "../assets/backend.jpg"
import cyber from "../assets/cyber.jpg"
import data from "../assets/data.jpg"
import cloud from "../assets/cloud.jpg"

export default function BestClasses(){

    const bestClassesData = [
        {
            slug: "backend",
            title: "Backend Development",
            img: backend,
            member: 580,
            rating: 4.8,
            topic_list: ["Server-side Programming Languages", "Database Management", "Web Frameworks", "API Development", "Server Management and Deployment", "Backend Architecture", "Chacing and Security", "Authentication and Authorization", "Message Queues and Testing", "Distributed Systems", "Logging and Monitoring", "Containerization and Orchestration", "Continuous Integration and Continuous Deployment (CI/CD)", "Performance Optimization and Scalability", "Error Handling and Debugging", "Data Migration and Versioning", "API Security"]
        },
        {
            slug: "cyber-security",
            title: "Cyber Security",
            img: cyber,
            member: 667,
            rating: 4.9,
            topic_list: ["Networking Fundamentals", "Operating Systems", "Cryptography", "Web Application Security", "Network Security", "Ethical Hacking/Penetration Testing", "Security Best Practices", "Incident Response", "Security Standards and Compliance", "Security Awareness and Training", "Malware Analysis", "Cloud Security", "Mobile Security", "IoT (Internet of Things) Security", "Threat Intelligence", "Digital Forensics", "Secure Coding and Network Design", "Cybersecurity Tools", "Network Monitoring and Analysis"]
        },
        {
            slug: "data-analyst",
            title: "Data Analyst",
            img: data,
            member: 640,
            rating: 4.8,
            topic_list: ["Statistics", "Data Exploration", "Data Wrangling", "Data Analysis Tools", "Data Visualization", "Exploratory Data Analysis (EDA)", "Hypothesis Testing", "Regression Analysis", "Machine Learning Basics", "Data Ethics and Privacy", "Data Storytelling", "Time Series Analysis", "Data Mining", "Excel and Spreadsheet Analysis", "Big Data Technologies", "Database Management", "Command Line and Scripting", "Data Analytics Tools and Libraries"]
        },
        {
            slug: "cloud-architect",
            title: "Cloud Architecture",
            img: cloud,
            member: 566,
            rating: 4.8,
            topic_list: ["Cloud Fundamentals", "Cloud Service Providers", "Infrastructure as Code (IaC)", "Networking in the Cloud", "Identity and Access Management (IAM)", "Cloud Security Best Practices", "Cloud Storage and Services", "Load Balancing and Scaling", "Data Management", "Monitoring and Logging", "High Availability and Disaster Recovery", "Cost Management", "Multi-Cloud and Hybrid Cloud", "Compliance and Governance", "Containers and Serverless Computing", "Cloud DevOps", "Networking Security", "Scripting and Automation", "Cloud Architecture Design Patterns", "Business Continuity and Disaster Recovery (BCDR)", "Serverless and Microservices Architecture", "AI and Machine Learning in the Cloud", "Cloud Migration Strategies"]
        }
    ]

    return (
        <section className="best-classes">
            <div className="title">Our Best Classes</div>
            <div className="items">
            {
                bestClassesData.map((item, index) => {
                    return (
                        <Link to={`/e-learning/${item.slug}`} onClick={goTop} className="item" key={index}>
                            <div className="title">{item.title}</div>
                            <div className="img">
                                <img src={item.img} alt="Develoment" />
                            </div>
                            <div className="info">
                                <div className="info-item">
                                    <IconUserPlus stroke={1.5} />
                                    <span>{item.member}+</span>
                                </div>
                                <div className="info-item">
                                    <IconBook2 stroke={1.5} />
                                    <span>{item.topic_list.length} Topics</span>
                                </div>
                                <div className="info-item">
                                    <IconStar stroke={1.5} />
                                    <span>{item.rating}/5</span>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
            </div>
        </section>
    )
}