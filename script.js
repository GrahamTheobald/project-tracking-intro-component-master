const menuOpen = document.querySelector(".menu-open")
const menuClose = document.querySelector(".menu-close")
const menu = document.querySelector(".menu")

menuOpen.addEventListener("click", menuChange)
menuClose.addEventListener("click", menuChange)

function menuChange() {
    menu.classList.toggle("hidden")
    menuOpen.classList.toggle("hidden")
    menuClose.classList.toggle("hidden")
}
