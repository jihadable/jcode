import axios from "axios";
import { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthContext";
import "../style/Account.css";
import NotFound from "./NotFound";

export default function Account(){

    const { isLogin, user, setUser } = useContext(AuthContext)

    const bioInput = useRef(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSave = async() => {
        const bio = bioInput.current.value

        try {
            setIsLoading(true)
            const usersAPIEndpoint = import.meta.env.VITE_USERS_API_ENDPOINT
            const token = localStorage.getItem("token")

            await axios.patch(usersAPIEndpoint, 
                { bio },
                {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }
            )

            setUser(user => ({...user, bio}))
            setIsLoading(false)
            toast.success("Berhasil memperbarui data pengguna")
        } catch (error) {
            toast.error("Gagal memperbarui data pengguna")
            setIsLoading(false)
        }
    }

    if (isLogin === false){
        return <NotFound />
    }

    if (isLogin === true){
        document.title = "Jcode | Akun"

        return (
            <>
            <Navbar />
            <section className="account-section">
                <div className="img">
                    <img src={`${import.meta.env.VITE_AVATAR_GENERATOR}name=${user.username}`} alt="" />
                </div>
                <div className="desc">
                    <div className="username">
                        <div className="label">Username</div>
                        <div className="value">{user.username}</div>
                    </div>
                    <div className="email">
                        <div className="label">Email</div>
                        <div className="value">{user.email}</div>
                    </div>
                    <div className="bio">
                        <div className="label">Bio</div>
                        <textarea defaultValue={user.bio || ""} rows={5} className="value" ref={bioInput}></textarea>
                    </div>
                    {
                        isLoading ?
                        <div className="loader">
                            <div className="spinner"></div>
                        </div> :
                        <button type="button" onClick={handleSave}>Simpan</button>
                    }
                </div>
            </section>
            <Footer />
            </>
        )
    }
}