import { Outlet } from "react-router-dom"
import NotFound from "../pages/NotFound"
import { useContext } from "react"
import { ClassesContext } from "../contexts/ClassesContext"
import { useParams } from "react-router-dom"

export default function ClassOutlet(){
    const { slug } = useParams()

    const { classes } = useContext(ClassesContext)
    
    if (classes !== null && !classes.map(item => item.slug).includes(slug)){
        return <NotFound />
    }
    else if (classes !== null && classes.map(item => item.slug).includes(slug)){
        return <Outlet />
    }
}