import { Editor } from "@monaco-editor/react";
import { IconChecks, IconChevronDown, IconCircleCheck, IconX } from "@tabler/icons-react";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { SubmissionContext } from "../contexts/SubmissionContext";
import "../style/Exercise.css";

export default function ExerciseSection({ problem }){

    const { isLogin } = useContext(AuthContext)
    const { submissions, setSubmissions } = useContext(SubmissionContext)

    const [submissionStatus, setSubmissionStatus] = useState(null)

    useEffect(() => {
        if (submissions.length > 0){
            submissions.forEach(submission => {
                if (submission.problem_id == problem.id){
                    setSubmissionStatus(submission.status == 1 ? true : false)

                    return
                }
            })
        }
    }, [submissions, problem])

    const [testCases, setTestCases] = useState([])
    const [defaultCodes, setDefaultCodes] = useState([])

    const langs = [
        {
            lang: "javascript",
            version: "18.15.0"
        },
        {
            lang: "python",
            version: "3.10.0"
        }
    ]
    const [selectedLang, setSelectedLang] = useState(langs[0])
    const [isShowLangMenu, setIsShowLangMenu] = useState(false)
    const showLangBtn = useRef(null)

    const [code, setCode] = useState("")
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        defaultCodes.forEach(defaultCode => {
            if (defaultCode.language == selectedLang.lang){
                setCode(defaultCode.default_code)

                return
            }
        })
    }, [defaultCodes, selectedLang])

    const handleSelectLang = (lang) => {
        if (lang.lang != selectedLang.lang){
            setSelectedLang(lang)
        }
    }

    useEffect(() => {
        const getDefaultCodesByProblem = async() => {
            try {
                const defaultCodesAPIEndpoint = import.meta.env.VITE_DEFAULT_CODES_API_ENDPOINT

                const { data } = await axios.get(`${defaultCodesAPIEndpoint}/${problem.id}`)

                setDefaultCodes(data.defaultCodes)
            } catch (error) {
                setDefaultCodes([])
            }
        }

        getDefaultCodesByProblem()

        if (isLogin === true){
            const getTestCasesByProblem = async() => {
                try {
                    const testCasesAPIEndpoint = import.meta.env.VITE_TEST_CASES_API_ENDPOINT
                    const token = localStorage.getItem("token")
    
                    const { data } = await axios.get(`${testCasesAPIEndpoint}/${problem.id}`, {
                        headers: {
                            "Authorization": "Bearer " + token
                        }
                    })
    
                    setTestCases(data.test_cases)
                } catch(error){
                    setTestCases([])
                }
            }
    
            getTestCasesByProblem()
        }
    }, [problem, isLogin])

    useEffect(() => {
        document.addEventListener("click", function(e){
            if (!showLangBtn.current?.contains(e.target)){
                setIsShowLangMenu(false)
            }
        })
    })

    const handleRun = async() => {

        if (code === ""){
            return
        }

        try {
            setIsLoading(true)
            const runCodeAPIEndpoint = import.meta.env.VITE_RUN_CODE_API_ENDPOINT
            
            let codeRunner = ""

            testCases.forEach(testCase => {
                let output

                if (selectedLang.lang == "javascript"){
                    output = `console.log(${problem.function_name}(${testCase.input}), "~")`
                }
                else if (selectedLang.lang == "python"){
                    output = `print(${problem.function_name}(${testCase.input}), "~")`
                }

                codeRunner += "\n" + output
            })

            const { data } = await axios.post(runCodeAPIEndpoint, {
                language: selectedLang.lang,
                version: selectedLang.version,
                files: [
                    {
                        content: code + "\n" + codeRunner
                    }
                ]
            })

            const outputs = data.run.output.split("~").map(item => item.replaceAll("\n", "").replaceAll(" ", "")).filter(output => output != "").slice(-testCases.length)

            const codeResults = []
            
            testCases.forEach((testCase, index) => {

                codeResults.push(outputs[index] == testCase.expected_output.replaceAll(" ", ""))
            })
            
            setResults(codeResults)
            
            const status = codeResults.includes(false) ? false : true
            
            if (submissionStatus === null){
                await storeSubmission(status)
            }
            else if (submissionStatus === false){
                await updateSubmission(status)
            }

            if (status){
                toast.success("Accepted")
            }
            else {
                toast.error("Wrong Answer")
            }

            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setResults([])
        }
    }

    const storeSubmission = async(status) => {
        const prevSubmissions = [...submissions]

        try {
            const submissionsAPIEndpoint = import.meta.env.VITE_SUBMISSIONS_API_ENDPOINT
            const token = localStorage.getItem("token")

            await axios.post(submissionsAPIEndpoint, 
                { 
                    problem_id: problem.id,
                    language: selectedLang.lang,
                    status: status ? 1 : 0
                },
                {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }
            )

            setSubmissions(submissions => ([...submissions, { problem_id: problem.id, language: selectedLang.lang, status }]))
        } catch (error) {
            setSubmissions([...prevSubmissions])
        }
    }

    const updateSubmission = async(status) => {
        const prevSubmissions = [...submissions]

        try {
            const submissionsAPIEndpoint = import.meta.env.VITE_SUBMISSIONS_API_ENDPOINT
            const token = localStorage.getItem("token")

            await axios.patch(submissionsAPIEndpoint, 
                {
                    problem_id: problem.id,
                    language: selectedLang.lang,
                    status: status ? 1 : 0
                },
                {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }
            )

            setSubmissions(submissions.map(submission => {
                if (submission.problem_id == problem.id){
                    return {...submission, language: selectedLang.lang, status}
                }
                else {
                    return submission
                }
            }))
        } catch (error) {
            setSubmissions([...prevSubmissions])
        }
    }

    return (
        <section className="exercise-section">
            <div className="title">
                <h2>{problem.title}</h2>
            {
                submissionStatus &&
                <IconCircleCheck stroke={1.5} />
            }
            </div>
            <div className="description" dangerouslySetInnerHTML={{__html: problem.description}} />
            <div className="code">
                <div className="code-section">
                    <div className="lang">
                        <div className="lang-btn" onClick={() => setIsShowLangMenu(!isShowLangMenu)} ref={showLangBtn}>
                            <span>{selectedLang.lang}</span>
                            <IconChevronDown stroke={1.5} width={16} height={16} />
                        </div>
                        <div className={`lang-menu ${isShowLangMenu ? "active" : ""}`}>
                        {
                            langs.map((item, index) => (
                                <div key={index} onClick={() => handleSelectLang(item)}>{item.lang}</div>
                            ))
                        }
                        </div>
                    </div>
                    <Editor height={"75vh"} theme="vs-dark" language={selectedLang.lang} value={code} onChange={(value) => setCode(value)} />
                </div>
            {
                isLogin === true &&
                <div className="run-code">
                    {
                        isLoading ?
                        <div className="loader">
                            <div className="spinner"></div>
                        </div> :
                        <button type="button" className="run-code-btn" onClick={handleRun}>Run Code</button>
                    }
                    {
                        results.length > 0 &&
                        <div className="result">
                            <div className="test-cases">
                                <b>Test Case ({testCases.length})</b>
                            {
                                results.map((result, index) => (
                                    <div key={index} className="test-case">
                                    {
                                        result ?
                                        <IconChecks stroke={1.5} width={20} height={20} className="ac" /> :
                                        <IconX stroke={1.5} width={20} height={20} className="wa" />
                                    }
                                        <span>{result ? "Accepted" : "Wrong Answer"}</span>
                                    </div>
                                )) 
                            }
                            </div>
                        </div>
                    }
                </div>
            }
            </div>
        </section>
    )
}