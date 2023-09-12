import logo from "../assets/logo-black.png"
import google from "../assets/google.png"
import "../style/Login-Signup.css"
import { Link } from "react-router-dom"

export default function LoginSignup({ page }){

    document.title = "Jcode | " + page

    return (
        <section  className={`${page === "login" ? "login" : "signup"}`}>
            <form action="">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="head-text">{page === "login" ? "Sign In to Jcode" : "Sign Up to Jcode"}</div>
                <div className="username">
                    <label htmlFor="username">Username {page === "login" ? "or email address" : ""}</label>
                    <input type="text" id="username" />
                </div>
                {
                    page === "signup" &&
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                }
                <div className="password">
                    <div className="info">
                        <label htmlFor="password">Password</label>
                    {
                        page === "login" &&
                        <a href="#">Forgot password?</a>
                    }
                    </div>
                    <input type="password" id="password" />
                </div>
                {
                    page === "signup" &&
                    <div className="confirm-password">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input type="email" id="confirm-password" />
                    </div>
                }
                <div className="bottom">
                {
                    page === "login" &&
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                }
                    <button type="submit">{page === "login" ? "Login" : "Sign up"}</button>
                </div>
                <div className="google">
                    <img src={google} alt="Google" />
                    <span>{page === "login" ? "Sign in" : "Sign up"} with Google</span>
                </div>
                <div className="already">
                    New to Jcode? <Link to={`${page === "login" ? "/signup" : "/login"}`}>{page === "login" ? "Sign up" : "Login"}</Link>
                </div>
            </form>
        </section>
    )
}