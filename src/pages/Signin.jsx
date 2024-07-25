import axios from "axios"
import { useContext, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import logo from "../assets/logo-black.png"
import { AuthContext } from "../contexts/AuthContext"
import "../style/Signin-Signup.css"

export default function Signin(){

    const { setIsLogin, setUser } = useContext(AuthContext)
    
    const [emailElement, passwordElement] = [useRef(null), useRef(null)]
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSignin = async(e) => {
        e.preventDefault()

        const [email, password] = [
            emailElement.current.value,
            passwordElement.current.value
        ]

        try {
            setIsLoading(true)
            const usersAPIEndpoint = import.meta.env.VITE_USERS_API_ENDPOINT

            const { data } = await axios.post(`${usersAPIEndpoint}/login`, {
                email, password
            })

            localStorage.setItem("token", data.token)
            setIsLogin(true)
            setUser(data.user)
            setIsLoading(false)
            navigate("/")
        } catch(error){
            toast.error("Email atau password salah")
            setIsLogin(false)
            setUser(null)
            setIsLoading(false)
        }
    }

    return (
        <section className="signin">
            <form onSubmit={handleSignin}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="head-text">Masuk ke Jcode</div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={emailElement} required />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" ref={passwordElement} required />
                </div>
                {
                    isLoading ?
                    <div className="loader">
                        <div className="spinner"></div>
                    </div> :
                    <button type="submit">Masuk</button>
                }
                <div className="extra">
                    Belum punya akun? <Link to={"/signup"}>Daftar</Link>
                </div>
            </form>
        </section>
    )
}