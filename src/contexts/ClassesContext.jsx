import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ClassesContext = createContext()

export default function ClassesProvider({ children }){
    const [classes, setClasses] = useState(null)
    
    useEffect(() => {
        const getClassesData = async() => {
            const classes_api_endpoint = import.meta.env.VITE_CLASSES_API_ENDPOINT
            
            let response = await fetch(classes_api_endpoint)
            response = await response.json()
            response = response.map(item => ({...item, topic_list: JSON.parse(item.topic_list)}))
            
            setClasses(response)
        }

        getClassesData()
    }, [])

    return (
        <ClassesContext.Provider value={{ classes }}>
            {children}
        </ClassesContext.Provider>
    )
}