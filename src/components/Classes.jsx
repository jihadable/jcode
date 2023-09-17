import { IconUserPlus } from "@tabler/icons-react"
import { IconStar } from "@tabler/icons-react"
import { IconBook2 } from "@tabler/icons-react"
import { classesData } from "../components/ClassesData"
import goTop from "./goTop"
import { Link } from "react-router-dom"

export default function Classes(){

    return (
        <section className="classes" id="classes">
            <div className="title">Classes</div>
            <div className="grid">
            {
                classesData.map((item, index) => {
                    return (
                        <Link to={`/e-learning/${item.link}`} onClick={goTop} className="item" key={index}>
                            <div className="title">{item.title}</div>
                            <div className="img">
                                <img src={item.img} alt="Develoment" />
                            </div>
                            <div className="info">
                                <div className="info-item">
                                    <IconUserPlus stroke={1.5} />
                                    <span>{item.member}+</span>
                                </div>
                                <div className="info-item">
                                    <IconBook2 stroke={1.5} />
                                    <span>{item.topicsList.length} Topics</span>
                                </div>
                                <div className="info-item">
                                    <IconStar stroke={1.5} />
                                    <span>{item.rating}/5</span>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
            </div>
        </section>
    )
}