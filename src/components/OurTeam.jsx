import member1 from "../assets/member1.jpg"
import member2 from "../assets/member2.jpg"
import member3 from "../assets/member3.jpg"
import member4 from "../assets/member4.jpg"
import member5 from "../assets/member5.jpg"
import member6 from "../assets/member6.jpg"
import member7 from "../assets/member7.jpg"
import member8 from "../assets/member8.jpg"
import member9 from "../assets/member9.jpg"
import member10 from "../assets/member10.jpg"
import member11 from "../assets/member11.jpg"
import member12 from "../assets/member12.jpg"

export default function OurTeam(){

    const teamData = [
        {
            name: "Liam Davis",
            job: "Backend Developer at Amazon",
            img: member1
        },
        {
            name: "Noah Turner",
            job: "Full Stack Developer at Kahoot",
            img: member2
        },
        {
            name: "Sophia Carter",
            job: "UI/UX at Shopee",
            img: member3
        },
        {
            name: "Mason Parker",
            job: "Data Analyst at Uber",
            img: member4
        },
        {
            name: "Ethan Adams",
            job: "Frontend Developer at Twitter",
            img: member5
        },
        {
            name: "Aiden Scott",
            job: "Android Developer at Traveloka",
            img: member6
        },
        {
            name: "Olivia White",
            job: "Game Developer at Garena",
            img: member7
        },
        {
            name: "Benjamin Lewis",
            job: "Laravel Developer at Spotify",
            img: member8
        },
        {
            name: "William Walker",
            job: "ReactJS Developer at Agoda",
            img: member9
        },
        {
            name: "James Bennett",
            job: "Game Designer at EA",
            img: member10
        },
        {
            name: "Samuel Cooper",
            job: "Java Developer at Google",
            img: member11
        },
        {
            name: "Ava Mitchell",
            job: "Software Engineer at Microsoft",
            img: member12
        }
    ]

    return (
        <section className="our-team">
            <div className="title">Our Team</div>
            <div className="content">
            {
                teamData.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="img">
                                <img src={item.img} alt="Lecturer" />
                            </div>
                            <div className="name-job">
                                <div className="name">{item.name}</div>
                                <div className="job">{item.job}</div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}