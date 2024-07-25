import { IconBook2, IconStar, IconUserPlus } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import goTop from "../utils/goTop"
import { classesData } from "./ClassesData"

export default function ClassesSection(){

    return (
        <section className="classes-section" id="classes">
            <div className="title">Semua Kelas</div>
            <div className="grid">
            {
                classesData.map((item, index) => (
                    <Link to={`/classes/${item.slug}`} onClick={goTop} className="item" key={index}>
                        <div className="title">{item.title}</div>
                        <div className="img">
                            <img src={item.img} alt="Develoment" loading="lazy" />
                        </div>
                        <div className="info">
                            <div className="info-item">
                                <IconUserPlus stroke={1.5} />
                                <span>{item.member}+</span>
                            </div>
                            <div className="info-item">
                                <IconBook2 stroke={1.5} />
                                <span>{item.topic_list.length} Topik</span>
                            </div>
                            <div className="info-item">
                                <IconStar stroke={1.5} />
                                <span>{item.rating}/5</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
            </div>
        </section>
    )
}