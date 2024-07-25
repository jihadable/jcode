import { Link } from "react-router-dom"
import coding from "../assets/coding.png"
import cooperation from "../assets/cooperation.png"
import job from "../assets/job.png"
import programmer from "../assets/programmer.png"
import skills from "../assets/skills.png"
import world from "../assets/world.png"
import goTop from "../utils/goTop"

export default function Career(){

    return (
        <section className="career">
            <div className="title">Mulai karir mu dengan Jcode</div>
            <div className="items">
                <div className="item">
                    <div className="item-img">
                        <img src={world} alt="World" />
                    </div>
                    <div className="item-text">Jcode memiliki 250+ pengguna</div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src={job} alt="Briefcase" />
                    </div>
                    <div className="item-text">Banyak alumni Jcode berhasil mendapatkan karir impian</div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src={cooperation} alt="Cooperation" />
                    </div>
                    <div className="item-text">Jcode berkolaborasi dengan banyak partner</div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src={skills} alt="Skills" />
                    </div>
                    <div className="item-text">Belajar banyak skill dari seorang ahli</div>
                </div>
            </div>
            <div className="benefits">
                <div className="item">
                    <div className="content">
                        <div className="header">Pembelajaran yang fleksibel serta sertifikat yang menunjang.</div>
                        <div className="text">Rasakan kebebasan untuk belajar sesuai dengan kecepatan Anda sendiri dan dapatkan sertifikat saat Anda menguasai ratusan keterampilan melalui kursus online programming kami.</div>
                        <Link to="/signin" onClick={goTop} className="join-now">Masuk</Link>
                    </div>
                    <div className="img">
                        <img src={coding} alt="Coding" />
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="header">Jelajahi keterampilan secara intensif melalui pembelajaran dan praktik online langsung.</div>
                        <div className="text">Terjunlah lebih dalam dalam pengembangan keterampilan dengan sesi online langsung, di mana Anda dapat terlibat secara intensif dalam pembelajaran dan praktik langsung untuk meningkatkan keahlian programming Anda.</div>
                        <Link to="/signin" onClick={goTop} className="join-now">Masuk</Link>
                    </div>
                    <div className="img">
                        <img src={programmer} alt="Programmer" />
                    </div>
                </div>
            </div>
        </section>
    )
}