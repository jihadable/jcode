import { IconCircleCheck } from "@tabler/icons-react"

export default function Pricing(){

    const pricingData = [
        {
            title: "Basic",
            month: 3,
            price: 200
        },
        {
            title: "Advanced",
            month: 6,
            price: 400
        },
        {
            title: "Premium",
            month: 12,
            price: 800
        }
    ]

    const pricingBenefits = ["Unlimited Access to Courses", "Expert Instructor Support", "Interactive Learning", "Certification", "Community Forum", "Regular Updates", "Free 6-12x Webinar Series", "Job Placement Assistance"]

    return (
        <section className="pricing">
            <div className="title">Pricing</div>
            <div className="pricing-items">
            {
                pricingData.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="title">{item.title}</div>
                            <div className="month">{item.month} Months</div>
                            <div className="price">${item.price}</div>
                            <div className="benefits">
                            {
                                pricingBenefits.map((benefit, index) => {
                                    return (
                                        <div className="benefit" key={index}>
                                            <IconCircleCheck stroke={1.5} />
                                            <span>{benefit}</span>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <a href="/login">Join now</a>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}