let nav = document.querySelector(".blockForLogoAndNav");
let emptyDiv = document.querySelector(".emptyDiv");

let burger = document.querySelector(".imgBurger");
let blockForLogoAndBurger = document.querySelector(".blockForLogoAndBurger");
let blockForLogoAndNav = document.querySelector(".blockForLogoAndNav");


document.addEventListener("scroll", () => {
    nav.classList.add("fixedNav");
    emptyDiv.style.display = "block";
    if (window.scrollY === 0) {
        nav.classList.toggle("fixedNav");
        emptyDiv.style.display = "none";
    }
})

burger.addEventListener("click", () => {
    blockForLogoAndBurger.style.display = "none";
    blockForLogoAndNav.style.display = "flex";
    blockForLogoAndNav.classList.add("navBurger");
    document.querySelector(".imageLogo").style.display = "none";
    document.querySelector(".btnBookNow").style.display = "none";
})
