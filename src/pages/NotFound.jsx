import { Link } from "react-router-dom";
import img404 from "../assets/404.png"
import "../style/NotFound.css"

export default function NotFound(){
    return (
        <div className="not-found-container">
            <div className="not-found">
                <p>Page Not Found</p>
                <div className="img">
                    <img src={img404} alt="404" />
                </div>
                <Link to={"/"}>Back to Home</Link>
            </div>
        </div>
    )
}