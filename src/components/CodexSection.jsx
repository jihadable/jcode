import { IconChevronDown, IconCircleCheck, IconX } from "@tabler/icons-react"
import { useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { ProblemContext } from "../contexts/ProblemContext"
import { SubmissionContext } from "../contexts/SubmissionContext"
import "../style/Codex.css"
import goTop from "../utils/goTop"

export default function CodexSection(){

    const { isLogin } = useContext(AuthContext)
    
    const { problems } = useContext(ProblemContext)
    const [filteredProblems, setFilteredProblems] = useState(problems)

    const { submissions } = useContext(SubmissionContext)

    const [submissionsStatus, setSubmissionsStatus] = useState({})

    useEffect(() => {
        submissions.forEach(submission => {
            setSubmissionsStatus(submissionsStatus => ({...submissionsStatus, [submission.problem_id]: submission.status}))
        })
    }, [submissions])

    const statusData = ["Semua", "Sudah diselesaikan", "Belum diselesaikan", "Belum dikerjakan"]
    const [isShowStatusMenu, setIsShowStatusMenu] = useState(false)
    const showStatusBtn = useRef(null)
    const [selectedStatus, setSelectedStatus] = useState("Semua")
    
    const difficulties = ["Semua", "Mudah", "Sedang", "Sulit"]
    const [isShowDifficultyMenu, setIsShowDifficultyMenu] = useState(false)
    const showDifficultyBtn = useRef(null)
    const [selectedDifficulty, setSelectedDifficulty] = useState("Semua")

    useEffect(() => {
        let filtered = problems

        if (selectedDifficulty === "Mudah"){
            filtered = filtered.filter(problem => problem.difficulty === "Easy")
        }
        else if (selectedDifficulty === "Sedang"){
            filtered = filtered.filter(problem => problem.difficulty === "Medium")
        }
        else if (selectedDifficulty === "Sulit"){
            filtered = filtered.filter(problem => problem.difficulty === "Hard")
        }

        if (selectedStatus === "Sudah diselesaikan") {
            filtered = filtered.filter(problem => submissionsStatus[problem.id] === 1)
        } 
        else if (selectedStatus === "Belum diselesaikan") {
            filtered = filtered.filter(problem => submissionsStatus[problem.id] === 0)
        } 
        else if (selectedStatus === "Belum dikerjakan") {
            filtered = filtered.filter(problem => submissionsStatus[problem.id] === undefined)
        }

        setFilteredProblems(filtered)
    }, [selectedDifficulty, selectedStatus, problems, submissionsStatus])

    useEffect(() => {
        document.addEventListener("click", function(e){
            if (!showDifficultyBtn.current?.contains(e.target)){
                setIsShowDifficultyMenu(false)
            }

            if (!showStatusBtn.current?.contains(e.target)){
                setIsShowStatusMenu(false)
            }
        })   
    })

    return (
        <section className="codex-section">
            <div className="filter">
                <div className="status">
                    <div className="label">Status</div>
                    <div className="value" onClick={() => setIsShowStatusMenu(!isShowStatusMenu)} ref={showStatusBtn}>
                        <span>{selectedStatus}</span>
                        <IconChevronDown stroke={1.5} width={16} height={16} />
                    </div>
                    <div className={`menu ${isShowStatusMenu ? "active" : ""}`}>
                    {
                        statusData.map(status => (
                            <div onClick={() => setSelectedStatus(status)} key={status}>{status}</div>
                        ))
                    }
                    </div>
                </div>
                <div className="difficulty">
                    <div className="label">Tingkat kesulitan</div>
                    <div className="value" onClick={() => setIsShowDifficultyMenu(!isShowDifficultyMenu)} ref={showDifficultyBtn}>
                        <span>{selectedDifficulty}</span>
                        <IconChevronDown stroke={1.5} width={16} height={16} />
                    </div>
                    <div className={`menu ${isShowDifficultyMenu ? "active" : ""}`}>
                    {
                        difficulties.map((difficulty, index) => (
                            <div onClick={() => setSelectedDifficulty(difficulty)} key={index}>{difficulty}</div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className="codex-items">
            {
                filteredProblems &&
                <>
                <div>Menampilkan {filteredProblems.length} soal</div>
                <div className="items">
                {
                    filteredProblems.map((problem, index) => (
                        <Link to={`/codex/${problem.slug}`} onClick={goTop} className="item" key={index}>
                        {
                            isLogin &&
                            <div className="status">
                                {
                                    submissionsStatus[problem.id] == 1 &&
                                    <IconCircleCheck stroke={1.5} width={20} height={20} className="ac" />
                                }
                                {
                                    submissionsStatus[problem.id] == 0 &&
                                    <IconX stroke={1.5} width={20} height={20} className="wa" />
                                }
                            </div>
                        }
                            <div className="title">{index + 1}. {problem.title}</div>
                            <div className={`difficulty ${problem.difficulty}`}>{problem.difficulty}</div>
                        </Link>
                    ))
                }
                </div>
                </>
            }
            </div>
        </section>
    )
}