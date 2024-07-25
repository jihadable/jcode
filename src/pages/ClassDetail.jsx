import { IconChevronsRight } from "@tabler/icons-react"
import { useParams } from "react-router-dom"
import { classesData } from "../components/ClassesData"
import ClassesSection from "../components/ClassesSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../style/ClassDetail.css"
import NotFound from "./NotFound"

export default function ClassDetail(){

    const { slug } = useParams()

    const item = classesData.filter(item => item.slug == slug)[0]

    if (item === undefined){
        return <NotFound />
    }

    document.title = "Jcode | " + item.title

    return (
        <>
        <Navbar page={"Kelas"} />
        <section className="class-detail">
            <div className="top">
                <div className="img">
                    <img src={item?.img} alt={item?.title} loading="lazy" />
                </div>
                <div className="info">
                    <div className="title">{item?.title}</div>
                    <div className="topics-list">
                    {
                        classesData &&
                        item.topic_list.map((item, index) => (
                            <div className="topic" key={index}>
                                <IconChevronsRight stroke={1.5} width={20} height={20} />
                                <span>{item}</span>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <button type="button" className="bottom">Join</button>
        </section>
        <ClassesSection />
        <Footer />
        </>
    )
}