import about from "../assets/about-us-head.png"

export default function AboutHero(){
    return (
        <header className="about-hero">
            <div className="content">
                <div className="left">
                    <div className="text">At Jcode, we believe that coding is more than just lines of text. It's a superpower that can unlock infinite possibilities. Our mission is to empower learners of all backgrounds to master the art of coding and shape the future of technology.</div>
                    <a href="/login" className="join-now">Join Now</a>
                </div>
                <div className="right">
                    <img src={about} alt="About" />
                </div>
            </div>
        </header>
    )
}