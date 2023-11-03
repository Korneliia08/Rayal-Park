
AOS.init();let nav=document.querySelector(".blockForLogoAndNav");let emptyDiv=document.querySelector(".emptyDiv");let burger=document.querySelector(".imgBurger");let blockForLogoAndBurger=document.querySelector(".blockForLogoAndBurger");let blockForLogoAndNav=document.querySelector(".blockForLogoAndNav");let navBurger=document.querySelector('.navBurger')
let closeButton=document.querySelector('.closeButton')
let aHrefInNav=document.querySelectorAll('.navBurger nav a')
document.addEventListener("scroll",()=>{nav.classList.add("fixedNav");emptyDiv.style.display="block";blockForLogoAndBurger.classList.add("fixedNavBurger")
if(window.scrollY===0){nav.classList.toggle("fixedNav");blockForLogoAndBurger.classList.toggle("fixedNavBurger")
emptyDiv.style.display="none";}})
burger.addEventListener("click",()=>{navBurger.style.top='0px'})
closeButton.addEventListener('click',()=>{navBurger.style.top='-200px'})
Array.from(aHrefInNav).forEach(element=>{console.log(2);element.addEventListener('click',()=>{navBurger.style.top='-200px'
console.log(1);})})