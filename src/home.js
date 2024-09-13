import { doc } from "prettier";
import salad from "./assets/salad.webp"
import { makeElement } from "./elementMaker";
import recipe from "./recipe";
const home = () => {
    document.getElementById("content").replaceChildren();

    // parent main div
    let main = makeElement("div", "flex flex-wrap justify-center lg:grid lg:grid-cols-2 lg:grid-rows-2", "main");
    // main to content
    document.getElementById("content").appendChild(main);


    // hero text element creation
    let heroText = makeElement("div", "text-wrap pt-12 lg:py-12 text-6xl sm:text-7xl text-white lg:px-16 lg:text-8xl", "hero-text");
    let heroTextTop = makeElement("div", "animate__animated animate__fadeInUp animate__delay-1s font-thin", "hero-text-top");
    let heroTextBottom = makeElement("div", "animate__animated animate__fadeInUp animate__delay-2s font-thin sm:ml-16 md:my-10 lg:ml-44", "hero-text-bottom")
    let spanTop = makeElement("span", "font-bold", "spanTop");
    let spanBottom = makeElement("span", "font-bold", "spanBottom");
    let spanTop2 = document.createElement("span");
    let spanBottom2 = document.createElement("span");

    spanTop.innerText = "Eat";
    spanTop2.textContent = " healthy";
    spanBottom.innerText = "Stay";
    spanBottom2.textContent = " healthy";

    //appending element  

    heroTextTop.appendChild(spanTop);
    heroTextBottom.appendChild(spanBottom);

    heroTextTop.appendChild(spanTop2);
    heroTextBottom.appendChild(spanBottom2);

    heroText.appendChild(heroTextTop);
    heroText.appendChild(heroTextBottom);

    // hero pic
    let heroPic = makeElement("div", "animate__animated animate__fadeIn animate__delay-1s row-span-2 flex max-w-full items-center align-top", "hero-pic");
    let heroImg = makeElement("img", "block drop-shadow-9xl sm:max-w-lg xl:max-w-3xl object-cover pl-6 mb-10 lg:mb-0 lg:pl-0");
    heroImg.src = salad;
    heroImg.alt = "salad";
    heroPic.appendChild(heroImg);     // append

    // hero desc
    let heroDesc = makeElement("div", "relative animate__animated animate__fadeInUp animate__delay-3s relative md:pr-[36%]", "hero-desc");
    let heroDescText = makeElement("div", "relative h-fit bg-white p-16 text-lg", "hero-desc-text");
    let recipeBtn = makeElement("div", "absolute -bottom-10 left-16 lg:bottom-6 lg:left-36 flex h-20 w-72 items-center justify-between bg-yellow-500 px-12 shadow-2xl hover:bg-yellow-400", "recipe");
    let recipeBtnText = makeElement("div", "text-lg", "recipe-text");
    let recipeBtnArrow = makeElement("div", "text-4xl", "arrow");

    // content

    heroDescText.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quibusdam, aut, similique rerum quisquam quaerat nostrum itaque,
            repudiandae quae magnam necessitatibus sint voluptate modi eum
            dignissimos vel animi soluta tempore.`;

    recipeBtnText.innerText = "Menu";
    recipeBtnArrow.innerText = "\u2192";


    // append
    recipeBtn.appendChild(recipeBtnText);
    recipeBtn.appendChild(recipeBtnArrow);
    heroDesc.appendChild(heroDescText);
    heroDesc.appendChild(recipeBtn);


    // appends in dom 
    main.appendChild(heroText);
    main.appendChild(heroPic);
    main.appendChild(heroDesc);

    recipeBtn.addEventListener("click", recipe);
}


export default home;
