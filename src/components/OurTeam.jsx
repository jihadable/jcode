import member1 from "../assets/member1.jpg"
import member10 from "../assets/member10.jpg"
import member11 from "../assets/member11.jpg"
import member12 from "../assets/member12.jpg"
import member2 from "../assets/member2.jpg"
import member3 from "../assets/member3.jpg"
import member4 from "../assets/member4.jpg"
import member5 from "../assets/member5.jpg"
import member6 from "../assets/member6.jpg"
import member7 from "../assets/member7.jpg"
import member8 from "../assets/member8.jpg"
import member9 from "../assets/member9.jpg"

export default function OurTeam(){

    const teamData = [
        {
            name: "Liam Davis",
            job: "Backend Developer di Amazon",
            img: member1
        },
        {
            name: "Noah Turner",
            job: "AI Engineer di Kahoot",
            img: member2
        },
        {
            name: "Sophia Carter",
            job: "UI/UX Designer di Shopee",
            img: member3
        },
        {
            name: "Mason Parker",
            job: "Data Analyst di Uber",
            img: member4
        },
        {
            name: "Ethan Adams",
            job: "Frontend Developer di Twitter",
            img: member5
        },
        {
            name: "Aiden Scott",
            job: "Cyber Security di Traveloka",
            img: member6
        },
        {
            name: "Olivia White",
            job: "Game Developer di Garena",
            img: member7
        },
        {
            name: "Benjamin Lewis",
            job: "Laravel Developer di Spotify",
            img: member8
        },
        {
            name: "William Walker",
            job: "ReactJS Developer di Agoda",
            img: member9
        },
        {
            name: "James Bennett",
            job: "Game Designer di EA",
            img: member10
        },
        {
            name: "Samuel Cooper",
            job: "Java Developer di Google",
            img: member11
        },
        {
            name: "Ava Mitchell",
            job: "Software Engineer di Microsoft",
            img: member12
        }
    ]

    return (
        <section className="our-team">
            <div className="title">Tim Kami</div>
            <div className="content">
            {
                teamData.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="img">
                            <img src={item.img} alt="Lecturer" />
                        </div>
                        <div className="name-job">
                            <div className="name">{item.name}</div>
                            <div className="job">{item.job}</div>
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
    )
}