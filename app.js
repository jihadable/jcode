const out = console.log.bind(document)

// code textarea
const languageHeader = document.querySelector(".languages-header")
const languageValue = document.querySelector(".languages-header span")
// out(languageValue)
const languages = document.querySelectorAll(".language")
const lines = document.querySelector(".lines")
const codeContainer = document.querySelector(".code-container")
const code = document.querySelector(".syntaks")

const programs = {
//     "javascript": 
// `<span class="purple">function</span> <span class="blue">fibonacci</span><span class="orange">(</span><span class="red">n</span><span class="orange">)</span><span class="orange">{</span>
//     <span class="purple">if</span> <span class="purple">(</span><span class="red">n</span> <span class="fontainBlue"><=</span> <span class="orange">2</span><span class="purple">)</span><span class="purple">{</span>
//         <span class="purple">return</span> <span class="orange">1</span>
//     <span class="purple">}</span>
//     <span class="purple">else</span> <span class="purple">{</span>
//         <span class="purple">return</span> <span class="blue">fibonacci(</span><span class="red">n</span> <span class="fontainBlue">-</span> <span class="orange">1</span><span class="blue">)</span> <span class="fontainBlue">+</span> <span class="blue">fibonacci(</span><span class="red">n</span> <span class="fontainBlue">-</span> <span class="orange">2</span><span class="blue">)</span>
//     <span class="purple">}</span>
// <span class="orange">}</span>

// <span class="yellow">console</span>.<span class="span blue">log</span><span class="orange">(</span><span class="blue">fibonacci</span><span class="purple">(</span><span class="orange">7</span><span class="purple">)</span><span class="orange">)</span>`,

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

code.innerHTML = programs["java"]
setLines(programs["java"])

// open languages menu
languageHeader.addEventListener("click", function(){
    languageHeader.nextElementSibling.classList.toggle("active")
    terminal.classList.remove("active")

    codeContainer.classList.remove("closeScroll")
})

// close languages menu

languages.forEach(function(language){
    language.addEventListener("click", function(){
        terminal.classList.remove("active")

        languageValue.innerText = language.innerText

        let lowerCaseLanguage = languageValue.innerText.toLowerCase()
        code.innerHTML = programs[lowerCaseLanguage]

        setLines(code.innerText)
    })
})

function setLines(program){
    program = program.split("\n")

    lines.innerHTML = ""

    for (let i = 1 ; i <= program.length ; i++){

        lines.innerHTML += `<div>${i}</div`
    }
}

// run code
const runBtn = document.querySelector(".run-btn")
const terminal = document.querySelector(".terminal")
const fileName = document.querySelector(".filename")
const closeTerminalBtn = document.querySelector(".terminal .close")

runBtn.addEventListener("click", function(){

    terminal.classList.add("active")

    codeContainer.classList.add("closeScroll")

    codeContainer.scrollLeft = 0

    let extension;
    if (languageValue.innerText == "Java"){
        extension = "java"
    }
    else if (languageValue.innerText == "C++"){
        extension = "cpp"
    }
    else {
        extension = "py"
    }

    fileName.innerText = `${languageValue.innerText == "Java" ? "Fibonacci" : "fibonacci"}.${extension}`
})

closeTerminalBtn.addEventListener("click", function(){
    terminal.classList.remove("active")

    codeContainer.classList.remove("closeScroll")
})

// open faqs item
const faqsHeader = document.querySelectorAll(".faqs-content .item .item-header")

faqsHeader.forEach(function(btn){
    btn.addEventListener("click", function(){
        btn.querySelector("svg").classList.toggle("active")
        btn.nextElementSibling.classList.toggle("active")
    })
})

// humberger click
const navMid = document.querySelector(".nav-mid")
const menuMObile = document.querySelector(".mobile-menu")

// open mobile menu
menuMObile.addEventListener("click", function() {
    navMid.classList.toggle("active")
})

// close mobile menu and languages menu
document.addEventListener("click", function(e){
    if (!menuMObile.contains(e.target) && !navMid.contains(e.target)){
        navMid.classList.remove("active")
    }

    if (!languageHeader.contains(e.target)){
        languageHeader.nextElementSibling.classList.remove("active")
    }
})

document.addEventListener("scroll", function(){
    navMid.classList.remove("active")
})

// responsive line
const footerList1 = document.querySelectorAll(".footer-list")[0]
const footerList2 = document.querySelectorAll(".footer-list")[1]

if (window.matchMedia("(max-width: 600px)").matches) {

    let ul1 = document.createElement("ul")
    ul1.classList.add("footer-list")
    let ul2 = document.createElement("ul")
    ul2.classList.add("footer-list")

    ul1.appendChild(footerList1.children[2])
    ul1.appendChild(footerList2.children[2])
    ul2.appendChild(footerList1.lastElementChild)
    ul2.appendChild(footerList2.lastElementChild)

    footerList1.insertBefore(footerList2.firstElementChild, footerList1.children[1])
    footerList2.insertBefore(footerList1.lastElementChild, footerList2.children[0])

    footerList1.parentElement.appendChild(ul1)
    footerList1.parentElement.appendChild(ul2)
}