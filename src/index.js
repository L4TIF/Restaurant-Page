import './style.css';
import home from "./home.js";
import recipe from './recipe.js';

home(); //initializing first time
let icon = document.getElementById("logo");
let homeBTn = document.getElementById("home");
let menuBtn = document.getElementById("recipe");
let contactBtn = document.getElementById("contact-us");

icon.addEventListener("click",home);
homeBTn.addEventListener("click",home);
menuBtn.addEventListener("click",recipe);


