const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click',function() {
    console.log('click hamburger');

    if(header.classList.contains('open')) {// close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');    
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }else {// open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

document.onscroll = function() {
    const processBar = document.querySelector('.progress-bar')
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    console.log(document.documentElement.clientHeight)

    processBar.style.width = scrollTop > 0 ? (scrollTop/height * 100) + '%' : 0
}