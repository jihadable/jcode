import { IconCircleCheck } from "@tabler/icons-react"
import { getIdCurrency } from "../utils/getIdCurrency"

export default function Pricing(){

    const pricingData = [
        {
            title: "Basic",
            month: 3,
            price: [300000, 600000]
        },
        {
            title: "Advanced",
            month: 6,
            price: [600000, 900000]
        },
        {
            title: "Premium",
            month: 12,
            price: [900000, 1500000]
        }
    ]

    const pricingBenefits = ["Akses unlimited", "Pengajar Expert", "Pembelajaran interaktif", "Sertifikat", "Forum Komunitas", "Materi Up-To-Date", "Webinar Gratis", "Konsultasi Saran Karir"]

    return (
        <section className="pricing">
            <div className="title">Pricing</div>
            <div className="pricing-items">
            {
                pricingData.map((item, index) => (
                    <div className="item" key={index}>
                        <div className="title">{item.title}</div>
                        <div className="month">{item.month} Bulan</div>
                        <div className="price">{getIdCurrency(item.price[0])} - {getIdCurrency(item.price[1])}</div>
                        <div className="benefits">
                        {
                            pricingBenefits.map((benefit, index) => (
                                <div className="benefit" key={index}>
                                    <IconCircleCheck stroke={1.5} />
                                    <span>{benefit}</span>
                                </div>
                            ))
                        }
                        </div>
                        <button type="button">Join</button>
                    </div>
                ))
            }
            </div>
        </section>
    )
}