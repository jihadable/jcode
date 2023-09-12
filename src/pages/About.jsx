import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../style/About.css"
import AboutHero from "../components/AboutHero"
import TargetAndHistory from "../components/TargetAndHistory"
import OurTeam from "../components/OurTeam"

export default function About(){

    document.title = "Jcode | About"

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