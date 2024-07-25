import BestClasses from "../components/BestClasses";
import Career from "../components/Career";
import Company from "../components/Company";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Why from "../components/Why";
import "../style/Home.css";

export default function Home(){
    return (
        <>
        <Navbar page={"Home"} />
        <HomeHero />
        <Career />
        <Why />
        <BestClasses />
        <Faqs />
        <Testimonials />
        <Company />
        <Footer />
        </>   
    )
}