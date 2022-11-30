const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.nlinks');
const subLinks = document.querySelectorAll('.links li');


hamburger.addEventListener("click",()=>{
    links.classList.toggle("open");
});