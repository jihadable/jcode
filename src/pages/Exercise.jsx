import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExerciseSection from "../components/ExerciseSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ProblemContext } from "../contexts/ProblemContext";
import "../style/Exercise.css";
import NotFound from "./NotFound";

export default function Exercise(){

    const { problems } = useContext(ProblemContext)

    const { slug } = useParams()

    const [problem, setProblem] = useState(null)

    useEffect(() => {
        if (problems !== null){
            setProblem(problems.filter(problem => problem.slug === slug)[0])
        }
    }, [slug, problems])

    if (problems !== null && problem === undefined){
        return <NotFound />
    }

    if (problems !== null && problem){
        document.title = "Jcode | " + problem.title

        return (
            <>
            <Navbar page={"Codex"} />
            <ExerciseSection problem={problem} />
            <Footer />
            </>
        )
    }
}

