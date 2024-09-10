import './style.css';
import home from "./home.js";
import recipe from './recipe.js';

home(); //initializing first time
let icon = document.getElementById("logo");
let homeBTn = document.getElementById("home");
let menuBtn = document.querySelectorAll("#recipe");
let contactBtn = document.getElementById("contact-us");

icon.addEventListener("click",home);


homeBTn.addEventListener("click", () => {
    home();
    menuBtn = document.querySelectorAll("#recipe")
    menuBtn.forEach((b) => {
        b.addEventListener("click", () => {
            recipe();
            console.log("clicked")
        })
    })

});
menuBtn.forEach((b) => {
    b.addEventListener("click", () => {
        recipe();
        console.log("clicked")
    })
})


console.log("hello")
