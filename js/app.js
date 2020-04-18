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
const navbarContainer = document.querySelector("#navbar__list");
const sectionList = document.querySelectorAll("section");


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
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < sectionList.length; i++) {
        const newElement = document.createElement('li');
        newElement.innerText = sectionList[i].dataset.nav;

        fragment.appendChild(newElement);
    }

    navbarContainer.appendChild(fragment);
};

// Scroll to section on link click

// Set sections as active


