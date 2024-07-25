import axios from "axios"
import { useContext, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import logo from "../assets/logo-black.png"
import { AuthContext } from "../contexts/AuthContext"
import "../style/Signin-Signup.css"

export default function Signup(){

    const { setIsLogin, setUser } = useContext(AuthContext)

    const [
        usernameElement, emailElement, passwordElement, confirmPasswordElement
    ] = [
        useRef(null), useRef(null), useRef(null), useRef(null)
    ]
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSignup = async(e) => {
        e.preventDefault()
        const [username, email, password, confirmPassword] = [
            usernameElement.current.value,
            emailElement.current.value,
            passwordElement.current.value,
            confirmPasswordElement.current.value,
        ]

        if (password !== confirmPassword){
            console.log("Konfirmasi password tidak sesuai")

            return
        }

        try {
            setIsLoading(true)
            const usersAPIEndpoint = import.meta.env.VITE_USERS_API_ENDPOINT

            const { data } = await axios.post(`${usersAPIEndpoint}/register`, {
                username, email, password
            })

            localStorage.setItem("token", data.token)
            setIsLogin(true)
            setUser(data.user)
            setIsLoading(false)
            navigate("/")
        } catch(error){
            toast.error("Pendaftaran gagal")
            setIsLogin(false)
            setUser(null)
            setIsLoading(false)
        }
    }

    return (
        <section  className="signup">
            <form onSubmit={handleSignup}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="head-text">Daftar Jcode</div>
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" required ref={usernameElement} />
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required ref={emailElement} />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required ref={passwordElement} />
                </div>
                <div className="confirm-password">
                    <label htmlFor="confirm-password">Konfirmasi password</label>
                    <input type="password" id="confirm-password" required ref={confirmPasswordElement} />
                </div>
                {
                    isLoading ?
                    <div className="loader">
                        <div className="spinner"></div>
                    </div> :
                    <button type="submit">Daftar</button>
                }
                <div className="extra">
                    Sudah punya akun? <Link to={"/signin"}>Masuk</Link>
                </div>
            </form>
        </section>
    )
}