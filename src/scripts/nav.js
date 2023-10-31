let nav = document.querySelector(".blockForLogoAndNav");
let emptyDiv = document.querySelector(".emptyDiv");

document.addEventListener("scroll", () => {
    nav.classList.add("fixedNav");
    emptyDiv.style.display = "block";
    if (window.scrollY === 0) {
        nav.classList.toggle("fixedNav");
        emptyDiv.style.display = "none";
    }
})
