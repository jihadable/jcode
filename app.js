const out = console.log.bind(document)

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

// close mobile menu
document.addEventListener("click", function(e){
    if (!menuMObile.contains(e.target) && !navMid.contains(e.target)){
        navMid.classList.remove("active")
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