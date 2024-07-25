import { Link } from "react-router-dom"
import about from "../assets/about-us-head.png"

export default function AboutHero(){
    return (
        <header className="about-hero">
            <div className="content">
                <div className="left">
                    <div className="text">Di Jcode, kami percaya bahwa coding lebih dari sekadar baris teks. Ini adalah kekuatan super yang dapat membuka kemungkinan tak terbatas. Misi kami adalah memberdayakan pembelajar dari berbagai latar belakang untuk menguasai seni coding dan membentuk masa depan teknologi.</div>
                    <Link to={"/signin"} className="join-now">Masuk</Link>
                </div>
                <div className="right">
                    <img src={about} alt="About" />
                </div>
            </div>
        </header>
    )
}