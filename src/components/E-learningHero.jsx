import { Link } from "react-router-dom"
import elearning from "../assets/img1-header.jpg"
import goTop from "./goTop"

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
                    <Link to={"/login"} onClick={goTop}>Join Now</Link>
                    <a href="#classes">Classes</a>
                </div>
            </div>
        </header>
    )
}