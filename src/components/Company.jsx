import amazon from "../assets/amazon.png"
import apple from "../assets/apple.png"
import google from "../assets/google.png"
import meta from "../assets/meta.png"
import microsoft from "../assets/microsoft.png"
import spotify from "../assets/spotify.png"
import tiktok from "../assets/tiktok.png"

export default function Company(){

    const companyData = [apple, microsoft, google, spotify, amazon, tiktok, meta]

    return (
        <section className="company">
            <div className="title">Lebih dari 4000 Alumni Jcode mendapatkan pekerjaan di perusahaan teknologi terkenal seperti:</div>
            <div className="company-items">
            {
                companyData.map((img, index) => (
                    <img src={img} alt="Company" key={index} />
                ))
            }
            </div>
        </section>
    )
}