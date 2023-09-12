import { IconBrandAsana } from "@tabler/icons-react";
import { IconProgressCheck } from "@tabler/icons-react";
import { IconMessage2 } from "@tabler/icons-react";

export default function Why(){
    return (
        <section className="why">
            <div className="title">Why Choose Us</div>
            <div className="content">
                <div className="item">
                    <div className="svg">
                        <IconMessage2 stroke={1.5} />
                    </div>
                    <div className="title">COMMUNICATION</div>
                    <div className="text">We prioritize effective communication with responsive mentors and an active online community. This ensures you always receive the support you need on your programming journey.</div>
                </div>
                <div className="item">
                    <div className="svg">
                        <IconProgressCheck stroke={1.5} />
                    </div>
                    <div className="title">PROGRESSION</div>
                    <div className="text">We've crafted a structured curriculum, allowing you to progress step by step. With clear milestones, you can track your advancement and achieve your goals with confidence.</div>
                </div>
                <div className="item">
                    <div className="svg">
                        <IconBrandAsana stroke={1.5} />
                    </div>
                    <div className="title">PRACTICE</div>
                    <div className="text">At Jcode, we emphasize hands-on practice. Our interactive coding exercises and projects give you the practical experience needed to excel in programming.</div>
                </div>
            </div>
        </section>
    )
}