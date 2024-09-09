import './style.css';
import home from "./home.js";

// home(); //initializing first time
let homeBTn = document.getElementById("home");
let menuBtn =document.querySelectorAll("#recipe");
let contactBtn =document.getElementById("contact-us");

homeBTn.addEventListener("click",home);

menuBtn.forEach((b)=>{
    b.addEventListener("click",()=>{
        
    })
})


console.log("hello")
