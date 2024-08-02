import { Link } from "react-router-dom";
import img404 from "../assets/404.png";
import "../style/NotFound.css";
import goTop from "../utils/goTop";

export default function NotFound(){
    return (
        <div className="not-found-container">
            <div className="not-found">
                <p>Halaman tidak ditemukan</p>
                <div className="img">
                    <img src={img404} alt="404" />
                </div>
                <Link to={"/"} onClick={goTop}>Kembali ke Beranda</Link>
            </div>
        </div>
    )
}