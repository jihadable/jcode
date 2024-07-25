import pathImg from "../assets/path.jpg"

export default function Path(){

    const pathData = [
        {
            title: "Pengenalan dengan code",
            text: "Dalam modul pengantar ini, Anda akan memulai perjalanan coding, mengeksplorasi dasar-dasar bahasa pemrograman. Dapatkan dasar yang kuat dan buka pintu menuju dunia coding."
        },
        {
            title: "Bagaimana menulic code dengan efektif",
            text: "Pelajari seni menulis code yang efisien dan bersih. Temukan praktik terbaik, gaya coding, dan alat untuk membuat code Anda tidak hanya fungsional tetapi juga elegan dan mudah dipelihara."
        },
        {
            title: "Latihan membuat proyek",
            text: "Terjun ke dalam proyek coding praktis yang menantang dan meningkatkan keterampilan Anda. Dari skrip kecil hingga aplikasi berskala penuh, Anda akan membangun portofolio yang menampilkan keahlian coding Anda."
        },
        {
            title: "Temukan karir impian",
            text: "Keterampilan coding Anda kini siap bersinar di pasar kerja. Jelajahi tips untuk menghadapi wawancara teknis dengan sukses, membuat resume yang menonjol, dan mendapatkan pekerjaan impian Anda di bidang programming."
        }
    ]

    return (
        <section className="path">
            <div className="path-items">
            {
                pathData.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="title">{item.title}</div>
                        <p className="text">{item.text}</p>
                    </div>
                ))
            }
            </div>
            <div className="img">
                <img src={pathImg} alt="Coding" />
            </div>
        </section>
    )
}