import './style.css';
import home from "./home.js";
import recipe from './recipe.js';
import contact from './contact.js';

home(); //initializing first time
const icon = document.getElementById("logo");

let homeBTn = document.getElementById("home");
let menuBtn = document.getElementById("recipe");
let contactBtn = document.getElementById("contact-us");

const menubar = document.getElementById("menu-bar");
const hamburgerIcon = document.getElementById("hamburger-icon");

icon.addEventListener("click", home);



homeBTn.addEventListener("click", home);
menuBtn.addEventListener("click", recipe);
contactBtn.addEventListener("click", contact);


menubar.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("hidden");
    if (!hamburgerIcon.classList.contains("hidden")) {
        homeBTn = document.getElementById("hamburger-home");
        menuBtn = document.getElementById("hamburger-menu");
        contactBtn = document.getElementById("hamburger-contact-us");
    }
    homeBTn.addEventListener("click", home);
    menuBtn.addEventListener("click", recipe);
    contactBtn.addEventListener("click", contact);
})
