let menuicon = document.querySelector(".menu-icon");
let closeicon = document.querySelector(".close-icon");
let body = document.body; // Select the body element or a containing element
let navbar_mobile = document.querySelector(".nav-bar-mobile");

menuicon.addEventListener('click', openfunction);

function openfunction() {
    body.classList.add('mobile-menu-active'); // Add the class to the body element
}

closeicon.addEventListener('click', closefunction);

function closefunction() {
    body.classList.remove('mobile-menu-active'); // Remove the class from the body element
}