import { Link } from "react-router-dom"
import elearning from "../assets/e-learning-header.png"

export default function ClassesHero(){
    return (
        <header className="classes-hero">
            <div className="left">
                <img src={elearning} alt="Jcode" />
            </div>
            <div className="right">
                <p className="text">
                    Menjadi <span className="unique">Programmer Handal</span> & temukan <span className="unique">Karir Impian</span> sekarang juga!
                </p>
                <div className="btns">
                    <Link to={"/signin"}>Masuk</Link>
                    <a href="#classes">Semua kelas</a>
                </div>
            </div>
        </header>
    )
}