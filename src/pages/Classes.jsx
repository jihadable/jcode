import ClassesHero from "../components/ClassesHero"
import ClassesSection from "../components/ClassesSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Path from "../components/Path"
import Pricing from "../components/Pricing"
import "../style/Classes.css"

export default function Classes(){

    document.title = "Jcode | Kelas"

    return (
        <>
        <Navbar page={"Kelas"} />
        <ClassesHero />
        <Path />
        <ClassesSection />
        <Pricing />
        <Footer />
        </>
    )
}