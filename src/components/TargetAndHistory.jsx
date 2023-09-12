import { IconTargetArrow } from "@tabler/icons-react";
import { IconHistory } from "@tabler/icons-react";
import coding from "../assets/coding.jpg"
import coding2 from "../assets/coding2.jpg"

export default function TargetAndHistory(){
    return (
        <section className="target-history">
            <div className="target">
                <div className="left">
                    <IconTargetArrow stroke={1.5} />
                    <div className="header">Our Target</div>
                    <div className="text">At Jcode, our primary goal is to empower individuals with the skills and knowledge needed to excel in the world of programming. We are committed to providing accessible and high-quality online courses that cater to beginners and experienced coders alike. Our target is to create a supportive learning community that fosters innovation and opens doors to exciting career opportunities in the tech industry.</div>
                </div>
                <div className="right">
                    <img src={coding2} alt="Coding" />
                </div>
            </div>
            <div className="history">
                <div className="left">
                    <IconHistory stroke={1.5} />
                    <div className="header">Our History</div>
                    <div className="text">Jcode has a rich history of delivering top-notch programming education. Founded in 2014, we've come a long way, shaping the journeys of countless aspiring developers. Over the years, we've evolved our curriculum to stay current with industry trends and technologies. Our history is a testament to our dedication to excellence in teaching and guiding students toward programming success.</div>
                </div>
                <div className="right">
                    <img src={coding} alt="Coding" />
                </div>
            </div>
        </section>
    )
}