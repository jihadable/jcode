import apple from "../assets/apple.png"
import microsoft from "../assets/microsoft.png"
import google from "../assets/google.png"
import spotify from "../assets/spotify.png"
import amazon from "../assets/amazon.png"
import tiktok from "../assets/tiktok.png"
import meta from "../assets/meta.png"

export default function Company(){

    const companyData = [apple, microsoft, google, spotify, amazon, tiktok, meta]

    return (
        <section className="company">
            <div className="title">More than 4000 Jcode graduates have gotten jobs at tech companies including:</div>
            <div className="company-items">
            {
                companyData.map((img, index) => {
                    return <img src={img} alt="Company" key={index} />
                })
            }
            </div>
        </section>
    )
}