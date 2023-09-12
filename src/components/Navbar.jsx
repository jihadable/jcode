import logo from "../assets/logo.png"
import { IconMenu2 } from "@tabler/icons-react"
import "../style/Navbar.css"
import { useState } from "react"
import { IconX } from "@tabler/icons-react"
import { useRef } from "react"
import { useEffect } from "react"

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
            <a href="/" className="logo">
                <img src={logo} alt="Logo" />
            </a>
            <div className={`links ${showNavbar ? "active" : ""}`} ref={navLinks}>
                <div className="close-navbar" onClick={() => {setShowNavbar(false)}}>
                    <IconX stroke={1.5} />
                </div>
                <a href="/" className={`${page === "Home" ? "page" : ""}`}>Home</a>
                <a href="/about" className={`${page === "About" ? "page" : ""}`}>About</a>
                <a href="/e-learning" className={`${page === "E-learning" ? "page" : ""}`}>E-Learning</a>
                <a href="/login" className="signin">Sign In</a>
            </div>
            <div className="extra">
                <a href="/login" className="signin">Sign In</a>
                <span className="mobile-menu" onClick={() => {setShowNavbar(!showNavbar)}} ref={showNavbarBtn}>
                    <IconMenu2 stroke={1.5} />
                </span>
            </div>
            <div className={`overlay ${showNavbar ? "active" : ""}`}></div>
        </nav>
        </>
    )
}