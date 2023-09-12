import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../style/E-learning.css"
import ELearningHero from "../components/E-learningHero"
import Path from "../components/Path"
import Classes from "../components/Classes"
import Pricing from "../components/Pricing"

export default function ELearning(){
    return (
        <>
        <Navbar page={"E-learning"} />
        <ELearningHero />
        <Path />
        <Classes />
        <Pricing />
        <Footer />
        </>
    )
}