import { IconChevronDown } from "@tabler/icons-react"
import { useState } from "react"

export default function Faqs(){

    const faqData = [
        {
            question: "Apa itu Jcode?",
            answer: "Jcode adalah platform online yang menyediakan kurus programming. We offer a wide range of programming languages and topics to help individuals develop their coding skills and advance their careers."
        },
        {
            question: "Apakah Jcode cocok dengan programmer pemula?",
            answer: "Tentu saja! Jcode dirancang untuk memenuhi kebutuhan pelajar di semua tingkatan, termasuk pemula yang tidak memiliki pengalaman programming sebelumnya. Kursus kami dimulai dengan dasar-dasar dan secara bertahap berkembang, membuatnya mudah diakses oleh para pendatang baru."
        },
        {
            question: "Apakah Saya bisa mendapatkan sertifikat dari kursus di Jcode?",
            answer: "Ya, Anda bisa! Setelah berhasil menyelesaikan kursus dan penilaian terkait, Anda akan menerima sertifikat yang memvalidasi keterampilan dan pengetahuan Anda di bidang programming yang telah Anda pelajari."
        },
        {
            question: "Apakah Saya bisa berkolaborasi dengan programmer lain di Jcode?",
            answer: "Tentu saja! Jcode mendorong lingkungan belajar yang kolaboratif. Anda dapat berinteraksi dengan sesama pembelajar melalui forum diskusi, proyek kelompok, dan dukungan antar teman, yang akan meningkatkan pengalaman belajar Anda."
        },
        {
            question: "Apakah Jcode cocok dengan programmer yang sudah handal?",
            answer: "Ya, Jcode juga melayani para programmer tingkat lanjut. Kami menawarkan kursus-kursus lanjutan yang mendalami topik-topik tertentu, memungkinkan para coder berpengalaman untuk lebih mengasah keterampilan mereka dan tetap mengikuti perkembangan terbaru di bidang ini."
        }
    ]

    const [showAnswer, setShowAnswer] = useState([false, false, false, false, false])

    const handleShowAnswer = (index) => {
        let newArray = [...showAnswer]
        newArray[index] = !newArray[index]

        setShowAnswer(newArray)
    }

    return (
        <section className="faqs">
            <div className="title">Pertanyaan yang Sering ditanyakan</div>
            <div className="content">
            {
                faqData.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="question" onClick={() => handleShowAnswer(index)}>
                            <span>{item.question}</span>
                            <IconChevronDown className={`${showAnswer[index] ? "active" : ""}`} stroke={1.5} width={16} height={16} />
                        </div>
                        <div className={`answer-container ${showAnswer[index] ? "active" : ""}`}>
                            <div className="answer">{item.answer}</div>
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
    )
}