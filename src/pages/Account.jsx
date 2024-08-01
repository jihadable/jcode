import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import BirthInput from "../components/BirthInput";
import Footer from "../components/Footer";
import GenderInput from "../components/GenderInput";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthContext";
import "../style/Account.css";
import NotFound from "./NotFound";

export default function Account(){

    const { isLogin, user, setUser } = useContext(AuthContext)

    const usernameInput = useRef(null)
    const [birth, setBirth] = useState(new Date())
    const [gender, setGender] = useState("")

    useEffect(() => {
        if (isLogin === true){
            setGender(user.gender === 1 ? "Laki-laki" : "Perempuan")
        }
    }, [isLogin, user])

    const bioInput = useRef(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSave = async() => {
        const username = usernameInput.current.value
        const bio = bioInput.current.value === "" ? null : bioInput.current.value
        const binaryGender = gender === "Laki-laki" ? 1 : 0 

        try {
            setIsLoading(true)
            const usersAPIEndpoint = import.meta.env.VITE_USERS_API_ENDPOINT
            const token = localStorage.getItem("token")

            await axios.patch(usersAPIEndpoint, 
                { username, birth, gender: binaryGender, bio },
                {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }
            )

            setUser(user => ({...user, username, birth, gender: binaryGender , bio}))
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
                        <input type="text" className="value" defaultValue={user.username} required ref={usernameInput} />
                    </div>
                    <div className="email">
                        <div className="label">Email</div>
                        <div className="value">{user.email}</div>
                    </div>
                    <BirthInput birth={new Date(user.birth)} setBirth={setBirth} />
                    <GenderInput gender={gender} setGender={setGender} />
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