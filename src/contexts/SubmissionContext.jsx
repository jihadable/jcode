import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const SubmissionContext = createContext()

export default function SubmissionProvider({ children }){
    const { isLogin } = useContext(AuthContext)
    
    const [submissions, setSubmissions] = useState([])

    useEffect(() => {
        if (isLogin === true){
            const getAllUserSubmissions = async() => {
                try {
                    const submissionsAPIEndpoint = import.meta.env.VITE_SUBMISSIONS_API_ENDPOINT
                    const token = localStorage.getItem("token")
    
                    const { data } = await axios.get(submissionsAPIEndpoint, {
                        headers: {
                            "Authorization": "Bearer " + token
                        }
                    })
    
                    setSubmissions(data.submissions)
                } catch (error) {
                    console.log(error)
                    setSubmissions(null)
                }
            }
    
            getAllUserSubmissions()
        }
    }, [isLogin])

    return (
        <SubmissionContext.Provider value={{ submissions, setSubmissions }}>
            {children}
        </SubmissionContext.Provider>
    )
}