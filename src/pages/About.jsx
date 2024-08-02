import AboutHero from "../components/AboutHero"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OurTeam from "../components/OurTeam"
import TargetAndHistory from "../components/TargetAndHistory"
import "../style/About.css"

export default function About(){

    document.title = "Jcode | Tentang"

    return (
        <>
        <Navbar page={"About"} />
        <AboutHero />
        <TargetAndHistory />
        <OurTeam />
        <Footer />
        </>
    )
}