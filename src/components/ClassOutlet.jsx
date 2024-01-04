import { Outlet } from "react-router-dom"
import NotFound from "../pages/NotFound"
import { useParams } from "react-router-dom"
import { classesData } from "./ClassesData"

export default function ClassOutlet(){
    const { slug } = useParams()
    
    if (classesData.filter(item => item.slug == slug)[0] === undefined){
        return <NotFound />
    }
    else{
        return <Outlet />
    }
}