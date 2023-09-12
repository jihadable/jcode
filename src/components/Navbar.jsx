import logo from "../assets/logo.png"
import { IconMenu2 } from "@tabler/icons-react"
import "../style/Navbar.css"
import { useState } from "react"
import { IconX } from "@tabler/icons-react"
import { useRef } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Navbar({ page }){

    const [showNavbar, setShowNavbar] = useState(false)

    const showNavbarBtn = useRef(null)
    const navLinks = useRef(null)

    useEffect(() => {
        document.addEventListener("click", function(e){
            if (!showNavbarBtn.current.contains(e.target) && !navLinks.current.contains(e.target)){
                setShowNavbar(false)
            }
        })
    }, [])

    return (
        <>
        <nav className="navbar">
            <Link to={"/"} className="logo">
                <img src={logo} alt="Logo" />
            </Link>
            <div className={`links ${showNavbar ? "active" : ""}`} ref={navLinks}>
                <div className="close-navbar" onClick={() => {setShowNavbar(false)}}>
                    <IconX stroke={1.5} />
                </div>
                <Link to={"/"} className={`${page === "Home" ? "page" : ""}`}>Home</Link>
                <Link to={"/about"} className={`${page === "About" ? "page" : ""}`}>About</Link>
                <Link to={"/e-learning"} className={`${page === "E-learning" ? "page" : ""}`}>E-Learning</Link>
                <Link to={"/login"} className="signin">Sign In</Link>
            </div>
            <div className="extra">
                <Link to={"/login"} className="signin">Sign In</Link>
                <span className="mobile-menu" onClick={() => {setShowNavbar(!showNavbar)}} ref={showNavbarBtn}>
                    <IconMenu2 stroke={1.5} />
                </span>
            </div>
            <div className={`overlay ${showNavbar ? "active" : ""}`}></div>
        </nav>
        </>
    )
}