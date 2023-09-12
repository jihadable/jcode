import pathImg from "../assets/path.jpg"

export default function Path(){

    const pathData = [
        {
            title: "Introducing to code",
            text: "In this introductory module, you'll embark on a coding journey, exploring the basics of programming languages. Gain a solid foundation and unlock the world of coding."
        },
        {
            title: "How to write code effectively",
            text: "Learn the art of writing efficient and clean code. Discover best practices, coding styles, and tools to make your code not only functional but also elegant and maintainable."
        },
        {
            title: "Practice to build projects",
            text: "Dive into hands-on coding projects that challenge and enhance your skills. From small scripts to full-scale applications, you'll build a portfolio showcasing your coding prowess."
        },
        {
            title: "Apply your dream job",
            text: "Your coding skills are now ready to shine in the job market. Explore tips for acing technical interviews, creating a standout resume, and landing your dream job in the programming field."
        }
    ]

    return (
        <section className="path">
            <div className="path-items">
            {
                pathData.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="title">{item.title}</div>
                            <p className="text">{item.text}</p>
                        </div>
                    )
                })
            }
            </div>
            <div className="img">
                <img src={pathImg} alt="Coding" />
            </div>
        </section>
    )
}