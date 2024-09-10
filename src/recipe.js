import { makeElement } from "./elementMaker";
import image1 from "./assets/1.webp"
import image2 from "./assets/2.webp"
import image3 from "./assets/3.webp"
import image4 from "./assets/4.webp"




const recipe = () => {
    document.getElementById("content").replaceChildren();
    const noOfCards = 4;
    // create parent div
    const main = makeElement("div", "mx-auto grid max-w-2xl grid-rows-4 gap-x-16 gap-y-10 lg:max-w-6xl lg:grid-cols-2 lg:grid-rows-2", "main");
    document.getElementById("content").appendChild(main);

    const images = [image1, image2, image3, image4];
    
    for (let index = 0; index < noOfCards; index++) 
        main.appendChild(createCard(images[index]));
        
}

const createCard = (imageSrc) => {
    // card parent
    const card = makeElement("div", "card grid-column-start 1 grid-column-end 3 grid-row-start 1 grid-row-end 2 h-[500px] md:h-[650px]", "card");
    const card_content = makeElement("div", "card__content relative transition-transform duration-1000", "card_content");
    const card_front = makeElement("div", "card__front absolute w-full drop-shadow-9xl", "card_front");
    const img = makeElement("img", "block h-full w-full object-cover", "saladImg");
    img.src = imageSrc;
    img.alt = "salad";

    const card_back = makeElement("div", "card__back absolute left-0 right-0 top-0 flex flex-col items-center justify-center p-20 text-white", "card_back");
    // inside card back
    const heading = makeElement("h2", "text-2xl", "heading");
    heading.innerText = "Panzanella Bread Salad";
    const ingredients = makeElement("p", "py-6 text-lg text-yellow-400", "ingredients");
    ingredients.innerText = "Ingredients";
    const ulList = makeElement("ul", "list-disc", "ingredients-list");
    const Lists = `<li>4 cups tomatoes, cut into large chunks</li>
                <li>
                  4 cups day old (somewhat dry and hard) crusty bread (Italian
                  or French loaf), cut into chunks the same size as the tomatoes
                </li>
                <li>1 cucumber, skinned and seeded, cut into large chunks</li>
                <li>1/2 red onion, chopped</li>
                <li>1 bunch fresh basil, torn into little pieces</li>
                <li>1/4 to 1/2 cup high-quality extra virgin olive oil</li>
                <li>Salt and pepper to taste</li>`
    // appending
    ulList.innerHTML = Lists;
    card_back.appendChild(heading);
    card_back.appendChild(ingredients);
    card_back.appendChild(ulList);
    card_front.appendChild(img);
    card_content.appendChild(card_front);
    card_content.appendChild(card_back);
    card.appendChild(card_content);
    return card;
}


export default recipe;