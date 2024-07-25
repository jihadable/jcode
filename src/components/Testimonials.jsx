import test1 from "../assets/test1.jpg"
import test10 from "../assets/test10.jpg"
import test11 from "../assets/test11.jpg"
import test12 from "../assets/test12.jpg"
import test2 from "../assets/test2.jpg"
import test3 from "../assets/test3.jpg"
import test4 from "../assets/test4.jpg"
import test5 from "../assets/test5.jpg"
import test6 from "../assets/test6.jpg"
import test7 from "../assets/test7.jpg"
import test8 from "../assets/test8.jpg"
import test9 from "../assets/test9.jpg"

export default function Testimonials(){

    const leftTestimonials = [
        {
            img: test1,
            name: "Alexander Johnson",
            job: "Software Engineer",
            text: "Jcode mengubah kemampuan coding ku menjadi sempurna!"
        },
        {
            img: test2,
            name: "Benjamin Taylor",
            job: "Mobile App Developer",
            text: "Saya menghargai fleksibilitas kursus Jcode. Kemampuan untuk belajar dengan kecepatan saya sendiri memungkinkan saya menyeimbangkan antara coding dengan pekerjaan dan kehidupan pribadi saya. Ini adalah perubahan besar bagi profesional sibuk seperti saya."
        },
        {
            img: test3,
            name: "Sophie Fischer",
            job: "UI/UX Designer",
            text: "Saya bangga menampilkan sertifikat Jcode di CV ku"
        },
        {
            img: test4,
            name: "Antonio Silva",
            job: "Software Developer",
            text: "Jcode membuat coding menjadi lebih mudah diakses dan sangat memuaskan. Terima kasih!"
        },
        {
            img: test11,
            name: "Daniel Anderson",
            job: "Android Developer",
            text: "Kemajuan yang jelas dari dasar hingga topik lanjutan di Jcode membuat pembelajaran konsep-konsep kompleks menjadi lebih terkelola."
        },
        {
            img: test12,
            name: "Mia Kim",
            job: "Game Developer",
            text: "Saya suka bagaimana Jcode mendorong praktik langsung. Saya merasa percaya diri dengan keterampilan coding saya setelah menyelesaikan proyek-proyek mereka."
        }
    ]

    const firstTestimonials = [
        {
            img: test5,
            name: "Jennifer White",
            job: "VueJS Developer",
            text: "Kualitas yang dimiliki Jcode sangat baik!"
        },
        {
            img: test6,
            name: "Daniel Schmidt",
            job: "Backend Developer",
            text: "Belajar programming di Jcode merupakan pengalaman yang luar biasa."
        },
        {
            img: test7,
            name: "Christopher Lee",
            job: "Game Designer",
            text: "Saya menghargai fleksibilitas kursus Jcode. Kemampuan untuk belajar dengan kecepatan saya sendiri memungkinkan saya menyeimbangkan antara coding dengan pekerjaan dan kehidupan pribadi saya. Ini adalah perubahan besar bagi profesional sibuk seperti saya."
        },
        {
            img: test8,
            name: "William Taylor",
            job: "Frontend Developer",
            text: "Dari basic ke advanced, kurikulum Jcode sangat terstruktur."
        }
    ]

    const secondTestimonials = [
        {
            img: test9,
            name: "Maxime Dupont",
            job: "ReactJS Developer",
            text: "Sebagai seorang coder berpengalaman, kursus lanjutan Jcode adalah apa yang saya butuhkan untuk tetap terkini dan memperdalam keahlian saya. Konten kursusnya menantang namun menarik, menjaga saya tetap di garis depan pemrograman."
        },
        {
            img: test10,
            name: "Sarah Thompson",
            job: "Data Analyst",
            text: "Komunitas Jcode sangat ramah bagi pemula."
        },
        {
            img: test11,
            name: "Daniel Anderson",
            job: "Android Developer",
            text: "Pengajar di Jcode sangat ahli. Pengajaran yang mereka berikan sangat mudah dicerna."
        },
        {
            img: test12,
            name: "Mia Kim",
            job: "Game Developer",
            text: "Saya sangat berterima kasih kepada apa yang diberikan Jcode ke Saya."
        }
    ]

    return (
        <section className="testimonials">
            <div className="title">Testimoni</div>
            <div className="content">
                <div className="left">
                {
                    leftTestimonials.map((item, index) => (
                        <div className="testimonial" key={index}>
                            <div className="info">
                                <div className="img"><img src={item.img} alt="Person" /></div>
                                <div className="name-job">
                                    <div className="name">{item.name}</div>
                                    <div className="job">{item.job}</div>
                                </div>
                            </div>
                            <div className="text">{item.text}</div>
                        </div>
                    ))
                }
                </div>
                <div className="right">
                    <div className="first">
                    {
                        firstTestimonials.map((item, index) => (
                            <div className="testimonial" key={index}>
                                <div className="info">
                                    <div className="img"><img src={item.img} alt="Person" /></div>
                                    <div className="name-job">
                                        <div className="name">{item.name}</div>
                                        <div className="job">{item.job}</div>
                                    </div>
                                </div>
                                <div className="text">{item.text}</div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="second">
                    {
                        secondTestimonials.map((item, index) => (
                            <div className="testimonial" key={index}>
                                <div className="info">
                                    <div className="img"><img src={item.img} alt="Person" /></div>
                                    <div className="name-job">
                                        <div className="name">{item.name}</div>
                                        <div className="job">{item.job}</div>
                                    </div>
                                </div>
                                <div className="text">{item.text}</div>
                            </div>
                        ))
                    }  
                    </div>
                </div>
            </div>
        </section>
    )
}