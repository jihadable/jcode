const out = console.log.bind(document)

// change image header animation
const img = document.querySelector(".img-header")

let index = 1
setInterval(() => {
    index++
    if(index == 4){
        index = 1
    }
    img.src = `../asset/images/img${index}-header.jpg`
}, 5000);

// change image path animation
const pathItem = document.querySelectorAll(".path-item")
const pahtImg = document.querySelector(".path-img")

pathItem[0].style.border = "2px solid rgba(255, 255, 255, .5)"

let borderLight = "rgba(255, 255, 255, .03)"

let pathIndex = 1
setInterval(() => {
    pathIndex++
    if (pathIndex == 5){
        pathIndex = 1
    }

    pathItem[pathIndex - 1].style.border = "2px solid rgba(255, 255, 255, .5)"

    for (let i = 0 ; i < 4 ; i++){
        if (i != pathIndex - 1){
            pathItem[i].style.border = `2px solid ${borderLight}`
        }
    }

    pahtImg.src = `../asset/images/path-${pathIndex}.jpg`
}, 3000);

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