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



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

document.addEventListener('DOMContentLoaded', buildNavMenu); //trying to tackle the feature "Adding more sections will automatically populate nav."

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

function buildNavMenu () {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < sections.length; i++) {
        let newElement = document.createElement('li');
        let newLink = document.createElement("a");
        newLink.classList.add("menu__link");
        newLink.innerText = sections[i].dataset.nav;
        newElement.appendChild(newLink);
        fragment.appendChild(newElement);
    }
    navbarList.appendChild(fragment);
};

// Scroll to section on link click

// Set sections as active


