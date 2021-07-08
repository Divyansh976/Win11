let taskbar = document.getElementsByClassName("taskbar")[0]
let btn = document.getElementsByClassName("btn")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let startbutton = document.getElementsByClassName("startbutton")[0]
let headerbutton = document.getElementsByClassName("headerbutton")[0]
let iconcard = document.getElementsByClassName("icon-card")[0]

btn.addEventListener("click", () => {
    if(startmenu.style.bottom ==  "50px") {
        startmenu.style.bottom = "-748px"
    } else {
        startmenu.style.bottom = "50px"
    }
})

btn.addEventListener("mousedown", () => {
    startbutton.style.height = "20px"
})

btn.addEventListener("mouseup", () => {
    startbutton.style.height = "25px"
})

headerbutton.addEventListener("click", () => {
    headerbutton.style.height = "20px"
})

iconcard.addEventListener("click", () => {
    img.style.width = "30px"
    img.style.height = "30px"
})