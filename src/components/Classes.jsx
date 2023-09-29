import { IconUserPlus } from "@tabler/icons-react"
import { IconStar } from "@tabler/icons-react"
import { IconBook2 } from "@tabler/icons-react"
import goTop from "./goTop"
import { Link } from "react-router-dom"
// import { classesData } from '../components/ClassesData';
import { useState } from "react"
import { useEffect } from "react"

export default function Classes(){

    const [classesData, setClassesData] = useState([])

    useEffect(() => {
        const getClassesData = async() => {
            let response = await fetch("https://umar-api.000webhostapp.com/jcode/classes/")
            response = await response.json()
            response = response.map(item => ({...item, topic_list: JSON.parse(item.topic_list)}))

            setClassesData(response)
        }

        getClassesData()
    }, [])

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
                                <img src={item.img} alt="Develoment" loading="lazy" />
                            </div>
                            <div className="info">
                                <div className="info-item">
                                    <IconUserPlus stroke={1.5} />
                                    <span>{item.member}+</span>
                                </div>
                                <div className="info-item">
                                    <IconBook2 stroke={1.5} />
                                    <span>{item.topic_list.length} Topics</span>
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