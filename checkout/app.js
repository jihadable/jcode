const out = console.log.bind(document)

// add class to basket
const classes = document.querySelectorAll(".classes-grid .class")
const imgClass = document.querySelector(".class-img")
const courseName = document.querySelector(".course-name")
const coursePrice = document.querySelector(".course-price")
const totalPrice = document.querySelector(".total-price")
const selectMonths = document.querySelector("select")

// click class
let index = 0
classes.forEach(function(course,i){
    course.addEventListener("click",function(){
        let name = course.children[0].innerHTML
        let month = selectMonths.value
        let price = course.getAttribute(`data-price-${month}`)
        let img = course.children[1].children[0].src

        imgClass.src = img
        courseName.innerHTML = name
        coursePrice.innerHTML = `$${price}`
        totalPrice.innerHTML = coursePrice.innerHTML

        index = i

        document.location = "./#checkout"
    })
})

// change month of duration
selectMonths.addEventListener("change",function(){
    let value = selectMonths.value
    
    let price = classes[index].getAttribute(`data-price-${value}`)

    coursePrice.innerHTML = `$${price}`
    totalPrice.innerHTML = coursePrice.innerHTML
})

// dark to light function
function darkToLight(){
    
    // body
    document.body.style.backgroundColor = "#eee"

    // logo
    document.querySelectorAll(".j-logo").forEach(function(el){
        el.style.color = "black"
    })

    // checkout background
    document.querySelector(".checkout").style.backgroundColor = "#fff"

    // classes
    document.querySelector(".classes").style.setProperty("--whiteRGB", "rgb(255,255,255,.3")

    document.querySelector(".classes-header").style.color = "black"

    document.querySelectorAll(".class .header").forEach(function(el){
        el.style.color = "black"
    })

    document.querySelectorAll(".class").forEach(function(el){
        el.style.setProperty("--white", "#fff")
    })

    document.querySelectorAll(".class-info-item").forEach(function(el){
        el.style.color = "black"
    })

    // footer
    document.querySelector(".footer").style.backgroundColor = "#ddd"
    document.querySelector(".footer").style.color = "black"

    document.querySelector(".medsos").style.setProperty("--black", "black")

    document.querySelectorAll(".footer-link").forEach(function(el){
        el.style.setProperty("--black", "black")
    })

    // add to localstorage
    localStorage.setItem("onmode", "light")
}

// responsive footer
const footerList1 = document.querySelectorAll(".footer-list")[0]
const footerList2 = document.querySelectorAll(".footer-list")[1]

if (window.matchMedia("(max-width: 600px)").matches){
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