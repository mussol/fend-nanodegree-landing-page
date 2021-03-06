/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport (el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top > 0 &&
        rect.left > 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
// help for function above: https://knowledge.udacity.com/questions/124306 and https://tinyurl.com/yd3b3oy6


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavMenu () {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < sections.length; i++) {
        let newElement = document.createElement('li');
        let newLink = document.createElement("a");
        newLink.classList.add("menu__link");
        newLink.innerText = sections[i].dataset.nav;
        //new data attribute to use when clicking to scroll to appropriate section
        newLink.dataset.dest = sections[i].id;
        newElement.appendChild(newLink);
        fragment.appendChild(newElement);
    }
    navbarList.appendChild(fragment);
};

// Add class 'active' to section when near top of viewport
function activateSection () {
    for (let i = 0; i < sections.length; i++) {
        let matchingNavLink = document.querySelector(`[data-dest=${sections[i].id}`);
        if (isInViewport(sections[i])) {
            sections[i].classList.add("your-active-class");
            matchingNavLink.classList.add('menu__link-hovered');
        } else {
            sections[i].classList.remove("your-active-class");
            matchingNavLink.classList.remove('menu__link-hovered');
        }
    }
};

// Scroll to anchor ID using scrollTO event
function scrollUntil (event) {
    if (event.target.nodeName.toLowerCase() === "a" ) {
        let destination = document.getElementById(event.target.dataset.dest);
        destination.scrollIntoView({behavior: "smooth"});
    }
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavMenu);

// Scroll to section on link click
navbarList.addEventListener("click", scrollUntil);

// Set sections as active
document.addEventListener("scroll", activateSection);

