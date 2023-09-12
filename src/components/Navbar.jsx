import logo from "../assets/logo.png"
import { IconMenu2 } from "@tabler/icons-react"
import "../style/Navbar.css"

export default function Navbar({ page }){
    return (
        <nav className="nav-bar">
            <a href="/" className="logo">
                <img src={logo} alt="Logo" />
            </a>
            <div className="links">
                <a href="/" className={`${page === "Home" ? "page" : ""} nav-item`}>Home</a>
                <a href="/about" className={`${page === "About" ? "page" : ""} nav-item`}>About</a>
                <a href="/e-learning" className={`${page === "E-learning" ? "page" : ""} nav-item`}>E-Learning</a>
                <a href="/login" className="nav-item signin">Sign In</a>
            </div>
            <div className="extra">
                <a href="/login" className="signin">Sign In</a>
                <span className="mobile-menu">
                    <IconMenu2 stroke={1.5} />
                </span>
            </div>
        </nav>
    )
}