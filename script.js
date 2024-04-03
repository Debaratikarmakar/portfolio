const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

menu.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

var typed6 = new Typed('#typed6', {
    strings: ['npm install^1000\n `installing components...` ^1000\n `Fetching from source...`'],
    typeSpeed: 40,
    backSpeed: 0,
    loop: true
  });