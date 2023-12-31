import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Classes from "../components/Classes"
import { IconChevronsRight } from "@tabler/icons-react"
import "../style/Class.css"
import { classesData } from "../components/ClassesData"
import { useParams } from "react-router-dom"

export default function Class(){

    const { slug } = useParams()

    const item = classesData.filter(item => item.slug == slug)[0]

    document.title = "Jcode | " + item.title

    return (
        <>
        <Navbar page={"E-learning"} />
        <section className="class-detail">
            <div className="img">
                <img src={item?.img} alt={item?.title} loading="lazy" />
            </div>
            <div className="info">
                <div className="title">{item?.title}</div>
                <div className="topics-list">
                {classesData &&
                    item.topic_list.map((item, index) => {
                        return (
                            <div className="topic" key={index}>
                                <IconChevronsRight stroke={1.5} width={20} height={20} />
                                <span>{item}</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
        <Classes />
        <Footer />
        </>
    )
}