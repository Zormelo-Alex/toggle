//selector
const main = document.querySelector('.main');
const burger = document.querySelector('.burger');

//event listener
burger.addEventListener('click', toggle);

//function
function toggle(){
    main.classList.toggle('active');
}