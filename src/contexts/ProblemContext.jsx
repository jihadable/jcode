import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const ProblemContext = createContext()

export default function ProblemProvider({ children }){
    const { isLogin } = useContext(AuthContext)

    const [problems, setProblems] = useState(null)

    useEffect(() => {
        const getAllProblems = async() => {
            try {
                const problemsAPIEndpoint = import.meta.env.VITE_PROBLEMS_API_ENDPOINT

                const { data } = await axios.get(problemsAPIEndpoint)

                setProblems(data.problems)
            } catch(error){
                console.log(error)
                setProblems(null)
            }
        }

        getAllProblems()
    }, [isLogin])
    return (
        <ProblemContext.Provider value={{ problems, setProblems }}>
            {children}
        </ProblemContext.Provider>
    )
}