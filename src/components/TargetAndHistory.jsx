import { IconHistory, IconTargetArrow } from "@tabler/icons-react";
import coding from "../assets/coding.jpg";
import coding2 from "../assets/coding2.jpg";

export default function TargetAndHistory(){
    return (
        <section className="target-history">
            <div className="target">
                <div className="left">
                    <IconTargetArrow stroke={1.5} />
                    <div className="header">Target Kami</div>
                    <div className="text">Di Jcode, tujuan utama kami adalah memberdayakan individu dengan keterampilan dan pengetahuan yang diperlukan untuk unggul di dunia programming. Kami berkomitmen untuk menyediakan kursus online yang berkualitas tinggi dan mudah diakses, baik untuk pemula maupun coder berpengalaman. Target kami adalah menciptakan komunitas belajar yang mendukung, mendorong inovasi, dan membuka pintu menuju peluang karir yang menarik di industri teknologi.</div>
                </div>
                <div className="right">
                    <img src={coding2} alt="Coding" />
                </div>
            </div>
            <div className="history">
                <div className="left">
                    <IconHistory stroke={1.5} />
                    <div className="header">Latar Belakang</div>
                    <div className="text">Jcode memiliki pengalaman yang kaya dalam memberikan pendidikan programming berkualitas tinggi. Didirikan pada tahun 2014, kami telah menempuh perjalanan panjang dalam membentuk perjalanan banyak pengembang yang bercita-cita tinggi. Selama bertahun-tahun, kami telah mengembangkan kurikulum kami untuk tetap relevan dengan tren dan teknologi industri. Pengalaman kami adalah bukti dedikasi kami terhadap keunggulan dalam pengajaran dan bimbingan siswa menuju kesuksesan dalam programming.</div>
                </div>
                <div className="right">
                    <img src={coding} alt="Coding" />
                </div>
            </div>
        </section>
    )
}