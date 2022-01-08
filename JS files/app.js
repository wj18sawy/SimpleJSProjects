const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu"); 
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const stopwatchMenu = document.querySelector('#stopwatch-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);
    // adds 'highlight' class to menu items
    //TODO: If not on mobile (width < 960) 

    // Home is 0 -> 600 px... etc.
    if(window.innerWidth > 960 && scrollPos < 120){ 
        homeMenu.classList.add('highlight');
        stopwatchMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 120 && scrollPos < 1400){ 
        homeMenu.classList.remove('highlight');
        stopwatchMenu.classList.add('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile nav menu when selecting a section
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth < 960 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);