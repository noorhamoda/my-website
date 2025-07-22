const btn = document.querySelector(".header .container .header-links .btn");
const links = document.querySelector(".header .container .header-links .links");
btn.onclick = (e) => {
    e.stopPropagation();
    links.classList.toggle("open");
}
document.addEventListener('click' , (e) => {
    if (e.target !== btn && e.target !== links) {
        if (links.classList.contains("open")) {
            links.classList.toggle("open")
        }
    }
})
