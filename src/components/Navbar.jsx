import { IconMenu2, IconX } from "@tabler/icons-react"
import { useContext, useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import { AuthContext } from "../contexts/AuthContext"
import "../style/Navbar.css"
import goTop from "../utils/goTop"

export default function Navbar({ page }){

    const { isLogin, setIsLogin, user, setUser } = useContext(AuthContext)

    const [showNavbar, setShowNavbar] = useState(false)
    const [isShowAccountMenu, setIsShowAccountMenu] = useState(false)

    const showNavbarBtn = useRef(null)
    const navLinks = useRef(null)
    const accountBtn = useRef(null)
    const accountMenu = useRef(null)

    const navigate = useNavigate()

    useEffect(() => {
        document.addEventListener("click", function(e){
            if (!showNavbarBtn.current?.contains(e.target) && !navLinks.current?.contains(e.target)){
                setShowNavbar(false)
            }

            if (!accountBtn.current?.contains(e.target) && !accountMenu.current?.contains(e.target)){
                setIsShowAccountMenu(false)
            }
        })
    })

    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsLogin(false)
        setUser(null)

        navigate("/")
    }

    return (
        <>
        <nav className="navbar">
            <Link to={"/"} onClick={goTop} className="logo">
                <img src={logo} alt="Logo" />
            </Link>
            <div className={`links ${showNavbar ? "active" : ""}`} ref={navLinks}>
                <div className="close-navbar" onClick={() => {setShowNavbar(false)}}>
                    <IconX stroke={1.5} />
                </div>
                <Link to={"/"} onClick={goTop} className={`${page === "Home" ? "page" : ""}`}>Beranda</Link>
                <Link to={"/about"} onClick={goTop} className={`${page === "About" ? "page" : ""}`}>Tentang</Link>
                <Link to={"/classes"} onClick={goTop} className={`${page === "Kelas" ? "page" : ""}`}>Kelas</Link>
                <Link to={"/codex"} onClick={goTop} className={`${page === "Codex" ? "page" : ""}`}>Codex</Link>
            {
                isLogin === true ?
                <div className="mobile-links">
                    <Link to={"/account"} onClick={goTop}>Akun</Link>
                    <button type="button" onClick={handleLogout}>Keluar</button>
                </div> :
                <Link to={"/signin"} onClick={goTop} className="signin-btn">Masuk</Link>
            }
            </div>
            <div className="extra">
            {
                isLogin === true &&
                <div className="account-nav">
                    <div className="account-btn" onClick={() => setIsShowAccountMenu(!isShowAccountMenu)} ref={accountBtn}>
                        <img src={`${import.meta.env.VITE_AVATAR_GENERATOR}name=${user.username}`} alt="User" />
                    </div>
                    <div className={`account-menu ${isShowAccountMenu ? "active" : ""}`} ref={accountMenu}>
                        <Link to={"/account"}>Akun</Link>
                        <button type="button" onClick={handleLogout}>Keluar</button>
                    </div>
                </div> 
            }
            {
                isLogin === false &&
                <Link to={"/signin"} onClick={goTop} className="signin-btn">Masuk</Link>
            }
                <span className="mobile-menu" onClick={() => {setShowNavbar(!showNavbar)}} ref={showNavbarBtn}>
                    <IconMenu2 stroke={1.5} />
                </span>
            </div>
            <div className={`overlay ${showNavbar ? "active" : ""}`}></div>
        </nav>
        </>
    )
}