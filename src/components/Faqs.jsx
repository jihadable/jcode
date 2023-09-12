import { IconChevronDown } from "@tabler/icons-react"
import { useState } from "react"

export default function Faqs(){

    const faqData = [
        {
            question: "What is Jcode?",
            answer: "Jcode is an online platform dedicated to programming courses. We offer a wide range of programming languages and topics to help individuals develop their coding skills and advance their careers."
        },
        {
            question: "Is Jcode suitable for beginners with no programming experience?",
            answer: "Absolutely! Jcode is designed to cater to learners of all levels, including beginners with no prior programming experience. Our courses start with the basics and gradually progress, making it accessible to newcomers."
        },
        {
            question: "Can I earn certificates from Jcode courses?",
            answer: "Yes, you can! Upon successful completion of our courses and associated assessments, you will receive certificates that validate your skills and knowledge in the specific programming field you've studied."
        },
        {
            question: "Can I collaborate with other learners on Jcode?",
            answer: "Certainly! Jcode fosters a collaborative learning environment. You can engage with fellow learners through discussion forums, group projects, and peer-to-peer support, enhancing your learning experience."
        },
        {
            question: "Is Jcode suitable for advanced programmers?",
            answer: "Yes, Jcode caters to advanced programmers as well. We offer advanced courses that dive deep into specific topics, allowing experienced coders to further refine their skills and stay up-to-date with the latest advancements in the field."
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
            <div className="title">Frequently Asked Questions</div>
            <div className="content">
            {
                faqData.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="question" onClick={() => handleShowAnswer(index)}>
                                <span>{item.question}</span>
                                <IconChevronDown className={`${showAnswer[index] ? "active" : ""}`} stroke={1.5} width={16} height={16} />
                            </div>
                            <div className={`answer-container ${showAnswer[index] ? "active" : ""}`}>
                                <div className="answer">{item.answer}</div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}