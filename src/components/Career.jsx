import world from "../assets/world.png"
import job from "../assets/job.png"
import cooperation from "../assets/cooperation.png"
import skills from "../assets/skills.png"
import coding from "../assets/coding.png"
import programmer from "../assets/programmer.png"

export default function Career(){
    return (
        <section className="career">
            <div className="title">Start your career with Jcode</div>
            <div className="items">
                <div className="item">
                    <div className="item-img">
                        <img src={world} alt="World" />
                    </div>
                    <div className="item-text">Jcode have over 1 million Users</div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src={job} alt="Briefcase" />
                    </div>
                    <div className="item-text">Jcode Users land jobs in Renowned Companies</div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src={cooperation} alt="Cooperation" />
                    </div>
                    <div className="item-text">Jcode collaborates with various partners</div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src={skills} alt="Skills" />
                    </div>
                    <div className="item-text">Master a diverse range of skills from Experts</div>
                </div>
            </div>
            <div className="benefits">
                <div className="item">
                    <div className="content">
                        <div className="header">Flexible learning of hundreds of skills and obtain certificates.</div>
                        <div className="text">Experience the freedom to learn at your own pace and acquire certificates as you master hundreds of skills through our online programming courses.</div>
                        <a href="/signup" className="join-now">Join Now</a>
                    </div>
                    <div className="img">
                        <img src={coding} alt="Coding" />
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="header">Explore skills intensively through live online learning and practice.</div>
                        <div className="text">Dive deep into skill development with live online sessions, where you can engage intensively in learning and hands-on practice to enhance your programming expertise.</div>
                        <a href="/signup" className="join-now">Join Now</a>
                    </div>
                    <div className="img">
                        <img src={programmer} alt="Programmer" />
                    </div>
                </div>
            </div>
        </section>
    )
}