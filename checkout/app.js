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
        price = parseInt(course.getAttribute(`data-price-${month}`))
        let img = course.children[1].children[0].src

        imgClass.src = img
        courseName.innerHTML = name
        handleTotalPrice(price, discount)

        index = i

        document.location = "./#checkout"
    })
})

// change month of duration
selectMonths.addEventListener("change",function(){
    let value = selectMonths.value
    
    price = classes[index].getAttribute(`data-price-${value}`)

    handleTotalPrice(price, discount)
})

// discount
const discountInput = document.querySelector(".discount-input")
const discountCheckBtn = document.querySelector(".discount-check")
const discountValue = document.querySelector(".discount-value")

let price = 45
let discount = 0

discountCheckBtn.addEventListener("click", function(){
    if (discountInput.value == "umar"){
        discount = 25
    }
    else if (discountInput.value == "jihad"){
        discount = 25
    }
    else if (discountInput.value == "umarjihad"){
        discount = 50
    }

    discountValue.innerHTML = `${discount}%`

    handleTotalPrice(price, discount)
})

// change total price according to discount
function handleTotalPrice(price, discount){
    coursePrice.innerHTML = `$${price}`
    totalPrice.innerHTML = `$${Math.round(price - price*(discount/100))}`
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