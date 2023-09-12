import { IconSelector } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import { IconPlayerPlay } from "@tabler/icons-react";
import { IconCode } from "@tabler/icons-react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const programs = {
    "c++": 
`<span class="purple">#include <</span><span class="orange">iostream</span><span class="purple">></span>
<span class="purple">using namespace</span> <span class="yellow">std</span>;

<span class="purple">int</span> <span class="blue">fibonacci</span><span class="orange">(</span><span class="purple">int</span> <span class="red">n</span><span class="orange">){</span>
    <span class="purple">if (</span><span class="red">n</span> <span class="fontainBlue"><=</span> <span class="orange">2</span><span class="purple">){</span>
        <span class="purple">return</span> <span class="orange">1</span>;
    <span class="purple">}</span>
    <span class="purple">else</span> <span class="purple">{</span>
        <span class="purple">return</span> <span class="blue">fibonacci(</span><span class="red">n</span> <span class="fontainBlue">-</span> <span class="orange">1</span><span class="blue">)</span> <span class="fontainBlue">+</span> <span class="blue">fibonacci(</span><span class="red">n</span> <span class="fontainBlue">-</span> <span class="orange">2</span><span class="blue">)</span>;
    <span class="purple">}</span>
<span class="orange">}</span>

<span class="purple">int</span> <span class="blue">main</span> <span class="orange">(){</span>
    cout <span class="purple"><<</span> <span class="blue">fibonacci</span><span class="purple">(</span><span class="orange">7</span><span class="purple">)</span>;
<span class="orange">}</span>`,

    "python": 
`<span class="purple">def</span> <span class="blue">fibonacci</span><span class="orange">(</span><span class="red">n</span><span class="orange">)</span>:
    <span class="purple">if</span> <span class="red">n</span> <span class="fontainBlue"><=</span> <span class="orange">2</span>:
        <span class="purple">return</span> <span class="orange">1</span>
    <span class="blue">else</span>:
        <span class="purple">return</span> <span class="blue">fibonacci</span><span class="orange">(</span><span class="red">n</span> <span class="fontainBlue">-</span> <span class="orange">1)</span> <span class="fontainBlue">+</span> <span class="blue">fibonacci</span><span class="orange">(</span><span class="red">n</span> <span class="fontainBlue">-</span> <span class="orange">2)</span>

<span class="blue">print</span><span class="orange">(</span><span class="blue">fibonacci</span><span class="purple">(</span><span class="orange">7</span><span class="purple">)</span><span class="orange">)</span>`,

    "java": 
`<span class="purple">public class</span> <span class="yellow">Fibonacci</span> <span class="orange">{</span>
    <span class="purple">public static int</span> <span class="blue">fibonacci</span><span class="purple">(int</span> <span class="red">n</span><span class="purple">) {</span>
        <span class="purple">if</span> <span class="blue">(</span><span class="red">n</span> <span class="fontainBlue"><=</span> <span class="orange">2</span><span class="blue">) {</span>
            <span class="purple">return</span> <span class="orange">1</span>;
        <span class="blue">}</span> 
        <span class="purple">else</span> <span class="blue">{</span>
            <span class="purple">return</span> <span class="blue">fibonacci</span><span class="orange">(</span><span class="red">n</span> <span class="fontainBlue">-</span> <span class="orange">1)</span> <span class="fontainBlue">+</span> <span class="blue">fibonacci</span><span class="orange">(</span><span class="red">n</span> <span class="fontainBlue">-</span> <span class="orange">2)</span>;
        <span class="blue">}</span>
    <span class="purple">}</span>

    <span class="purple">public static void</span> <span class="blue">main</span><span class="purple">(</span><span class="yellow">String</span><span class="blue">[]</span> <span class="red">args</span><span class="purple">) {</span>
        <span class="yellow">System</span>.<span class="red">out</span>.<span class="blue">print(fibonacci</span><span class="orange">(7)</span><span class="blue">)</span>;
    <span class="purple">}</span>
<span class="orange">}</span>`
}

export default function Playground(){

    const [language, setLanguage] = useState(["Java", 14, "Fibonacci.java"])
    const languages = [
        {
            title: "Java",
            lines: 14,
            file: "Fibonacci.java"
        },
        {
            title: "Python",
            lines: 7,
            file: "fibonacci.py"
        },
        {
            title: "C++",
            lines: 15,
            file: "fibonacci.cpp"
        }
    ]

    const [showLanguageMenu, setShowLanguageMenu] = useState(false)
    const showLanguageMenuBtn = useRef(null)

    useEffect(() => {
        document.addEventListener("click", function(e){
            if (!showLanguageMenuBtn.current.contains(e.target)){
                setShowLanguageMenu(false)
            }
        })

    }, [])
    
    
    const [showTerminal, setShowTerminal] = useState(false)

    useEffect(() => {
        if (showTerminal){
            codeContainer.current.scrollLeft = 0;
        }
    }, [showTerminal])

    const codeContainer = useRef(null)
    
    return (
        <section className="playground">
            <div className="code">
                <div className="header">
                    <div className="left">
                        <IconCode stroke={1.5} />
                        <span>Fibonacci</span>
                    </div>
                    <div className="languages-run">
                        <div className="run-btn" onClick={() => setShowTerminal(true)}>
                            <IconPlayerPlay stroke={1.5} width={20} height={20} />
                        </div>
                        <div className="languages">
                            <div className="header" onClick={() => setShowLanguageMenu(!showLanguageMenu)} ref={showLanguageMenuBtn}>
                                <span>{language[0]}</span>
                                <IconSelector stroke={1.5} />
                            </div>
                            <div className={`menu ${showLanguageMenu ? "active" : ""}`} onClick={() => setShowTerminal(false)}>
                            {
                                languages.map((language, index) => {
                                    return <div className="language" key={index} onClick={() => setLanguage([language.title, language.lines, language.file])}>{language.title}</div>
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container ${showTerminal ? "closeScroll" : ""}`} ref={codeContainer}>
                    <div className="content">
                        <Lines lines={language[1]} />
                        <pre dangerouslySetInnerHTML={{__html: programs[language[0].toLowerCase()]}} />
                        <div className={`terminal ${showTerminal ? "active" : ""}`}>
                            <div className="terminal-info">
                                <div className="filename">{language[2]}</div>
                                <div className="output">13</div>
                            </div>
                            <div className="close" onClick={() => setShowTerminal(false)}>
                                <IconX stroke={1.5} width={16} height={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Lines({ lines }){
    const arr = new Array(lines)

    for (let i = 0 ; i < arr.length ; i++){
        arr[i] = i+1
    }

    return (
        <div className="lines">
        {
            arr.map((line, index) => {
                return <div key={index}>{line}</div>
            })
        } 
        </div>
    )
}