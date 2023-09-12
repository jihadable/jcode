import test1 from "../assets/test1.jpg"
import test2 from "../assets/test2.jpg"
import test3 from "../assets/test3.jpg"
import test4 from "../assets/test4.jpg"
import test5 from "../assets/test5.jpg"
import test6 from "../assets/test6.jpg"
import test7 from "../assets/test7.jpg"
import test8 from "../assets/test8.jpg"
import test9 from "../assets/test9.jpg"
import test10 from "../assets/test10.jpg"
import test11 from "../assets/test11.jpg"
import test12 from "../assets/test12.jpg"

export default function Testimonials(){

    const leftTestimonials = [
        {
            img: test1,
            name: "Alexander Johnson",
            job: "Software Engineer",
            text: "Jcode transformed my coding journey into pure magic!"
        },
        {
            img: test2,
            name: "Benjamin Taylor",
            job: "Mobile App Developer",
            text: "I appreciated the flexibility of Jcode's courses. The ability to learn at my own pace allowed me to balance coding with my job and personal life. It's a game-changer for busy professionals like me."
        },
        {
            img: test3,
            name: "Sophie Fischer",
            job: "UI/UX Designer",
            text: "I proudly showcase my Jcode certificates on my resume."
        },
        {
            img: test4,
            name: "Antonio Silva",
            job: "Software Developer",
            text: "Jcode made coding accessible and incredibly rewarding. Thank you!"
        },
        {
            img: test11,
            name: "Daniel Anderson",
            job: "Android Developer",
            text: "Jcode's clear progression from basics to advanced topics made learning complex concepts manageable."
        },
        {
            img: test12,
            name: "Mia Kim",
            job: "Game Developer",
            text: "I love how Jcode encourages hands-on practice. I felt confident in my coding skills after completing their projects."
        }
    ]

    const firstTestimonials = [
        {
            img: test5,
            name: "Jennifer White",
            job: "VueJS Developer",
            text: "Jcode's affordability and quality are unmatched in the industry."
        },
        {
            img: test6,
            name: "Daniel Schmidt",
            job: "Backend Developer",
            text: "Learning to code with Jcode was an amazing experience."
        },
        {
            img: test7,
            name: "Christopher Lee",
            job: "Game Designer",
            text: "I appreciated the flexibility of Jcode's courses. The ability to learn at my own pace allowed me to balance coding with my job and personal life. It's a game-changer for busy professionals like me."
        },
        {
            img: test8,
            name: "William Taylor",
            job: "Frontend Developer",
            text: "From basics to advanced, Jcode's curriculum is superbly structured."
        }
    ]

    const secondTestimonials = [
        {
            img: test9,
            name: "Maxime Dupont",
            job: "ReactJS Developer",
            text: "As an experienced coder, Jcode's advanced courses were exactly what I needed to stay updated and deepen my expertise. The course content was challenging yet engaging, keeping me on the cutting edge of programming."
        },
        {
            img: test10,
            name: "Sarah Thompson",
            job: "Data Analyst",
            text: "The Jcode community is so welcoming and helpful to beginners."
        },
        {
            img: test11,
            name: "Daniel Anderson",
            job: "Android Developer",
            text: "The instructors at Jcode are top-notch. Their guidance and support made learning programming a breeze."
        },
        {
            img: test12,
            name: "Mia Kim",
            job: "Game Developer",
            text: "I can't thank Jcode enough for their incredible support and resources."
        }
    ]

    return (
        <section className="testimonials">
            <div className="title">Testimonials</div>
            <div className="content">
                <div className="left">
                {
                    leftTestimonials.map((item, index) => {
                        return (
                            <div className="testimonial" key={index}>
                                <div className="info">
                                    <div className="img"><img src={item.img} alt="Person" /></div>
                                    <div className="name-job">
                                        <div className="name">{item.name}</div>
                                        <div className="job">{item.job}</div>
                                    </div>
                                </div>
                                <div className="text">{item.text}</div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="right">
                    <div className="first">
                    {
                        firstTestimonials.map((item, index) => {
                            return (
                                <div className="testimonial" key={index}>
                                    <div className="info">
                                        <div className="img"><img src={item.img} alt="Person" /></div>
                                        <div className="name-job">
                                            <div className="name">{item.name}</div>
                                            <div className="job">{item.job}</div>
                                        </div>
                                    </div>
                                    <div className="text">{item.text}</div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="second">
                    {
                        secondTestimonials.map((item, index) => {
                            return (
                                <div className="testimonial" key={index}>
                                    <div className="info">
                                        <div className="img"><img src={item.img} alt="Person" /></div>
                                        <div className="name-job">
                                            <div className="name">{item.name}</div>
                                            <div className="job">{item.job}</div>
                                        </div>
                                    </div>
                                    <div className="text">{item.text}</div>
                                </div>
                            )
                        })
                    }  
                    </div>
                </div>
            </div>
        </section>
    )
}