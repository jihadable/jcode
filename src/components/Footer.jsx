import logo from "../assets/logo.png"
import { IconBrandYoutube } from "@tabler/icons-react"
import { IconBrandLinkedin } from "@tabler/icons-react"
import { IconBrandTwitter } from "@tabler/icons-react"
import "../style/Footer.css"

export default function Footer(){

    const sosmedData = [
        {
            class: "twt",
            svg: <IconBrandTwitter stroke={1.5} />
        },
        {
            class: "ln",
            svg: <IconBrandLinkedin stroke={1.5} />
        },
        {
            class: "yt",
            svg: <IconBrandYoutube stroke={1.5} />
        }
    ]

    const footerLink1 = ["Contact us", "E-Learning", "Bootcamp & programs", "Students"]
    const footerLink2 = ["Help center", "Terms", "Blog", "Privacy policy"]

    return (
        <footer className="footer">
            <div className="top">
                <div className="top-left">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <p className="text">Improve yourseft and find your dream job here</p>
                    <div className="medsos">
                    {
                        sosmedData.map((item, index) => {
                            return (
                                <a href="#" key={index} className={item.class}>
                                    {item.svg}
                                </a>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="footer-link">
                    <ul className="footer-list">
                    {
                        footerLink1.map((link, index) => {
                            return <li key={index}><a href="#">{link}</a></li>
                        })
                    }
                    </ul>
                    <ul className="footer-list">
                    {
                        footerLink2.map((link, index) => {
                            return <li key={index}><a href="#">{link}</a></li>
                        })
                    }
                    </ul>
                </div>
            </div>
            <div className="bottom">Copyright © 2023 Jcode</div>
        </footer>
    )
}