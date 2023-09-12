import elearning from "../assets/img1-header.jpg"

export default function ELearningHero(){
    return (
        <header className="e-learning-hero">
            <div className="left">
                <img src={elearning} alt="E-Learning" />
            </div>
            <div className="right">
                <p className="text">
                    Become a <span className="unique">Good Programmer</span> & find your <span className="unique">dream job</span> right now!
                </p>
                <div className="btns">
                    <a href={"/login"}>Join Now</a>
                    <a href="#classes">Classes</a>
                </div>
            </div>
        </header>
    )
}