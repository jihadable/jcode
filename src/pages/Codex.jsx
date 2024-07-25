import AboutCodex from "../components/AboutCodex"
import CodexSection from "../components/CodexSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../style/Codex.css"

export default function Codex(){

    document.title = "Jcode | Codex"
    
    return (
        <>
        <Navbar page={"Codex"} />
        <AboutCodex />
        <CodexSection />
        <Footer />
        </>
    )
}

