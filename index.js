const navBar= document.querySelector("button");
const nav= document.querySelector("nav");
navBar.addEventListener('click', action);
function action(){
    navBar.classList.toggle("cross");
    nav.classList.toggle("overlay");
}
document.querySelectorAll(".link").forEach(n => n.addEventListener('click',() => {
    navBar.classList.remove("cross");
    nav.classList.remove("overlay");
}))