import { makeElement } from "./elementMaker";
const contact = () => {
    document.getElementById("content").replaceChildren();

    // about us section
    const aboutUs = makeElement("div", "mx-auto text-center text-white lg:w-3/6", "about-us");
    const aboutUs_heading = makeElement("h1", "my-6 text-3xl font-bold text-yellow-400", "aboutUs_heading");
    aboutUs_heading.innerText="About us"
    const aboutUs_para = makeElement("p", "md:text-xl", "aboutUs_para");
    aboutUs_para.innerHTML = `<span class="text-2xl">Fresh, Flavorful, and Fast.</span> <br />
          At <span class="text-yellow-400">healthyfy</span>, we believe that
          healthy eating doesn’t have to sacrifice taste. Our salads are crafted
          with the freshest ingredients, vibrant flavors, and a commitment to
          quality. Whether you're looking for a quick lunch or a satisfying
          dinner, we offer a variety of customizable salads to suit your
          preferences. Our mission is to provide delicious, nutritious meals
          that nourish your body and your soul. Come experience the difference
          today!`;
    aboutUs.appendChild(aboutUs_heading);
    aboutUs.appendChild(aboutUs_para);

    // contact section 
    const contactWrapper = makeElement("div", "mx-auto h-full items-center justify-center gap-16 md:flex lg:w-3/5", "contact");
    const addressWrapper = makeElement("div", "w-full text-center text-3xl font-light text-white", "address");
    const addressWrapper_h2 = makeElement("h2", "text-yellow-4096 my-6", "");
    addressWrapper_h2.innerText = "Address";
    const addressWrapper_p = makeElement("p", "address_p", "");
    addressWrapper_p.innerHTML = ` 12345 Oak Street Apartment 4B <br />
            Springfield, IL 62702`;

    const iconsWrapper = makeElement("div", "flex justify-evenly text-4xl mt-10", "");
    iconsWrapper.innerHTML = `<i class="ri-facebook-box-line cursor-pointer"></i>
                              <i class="ri-instagram-line cursor-pointer"></i>
                              <i class="ri-youtube-line cursor-pointer"></i>
                              <i class="ri-twitter-x-line cursor-pointer"></i>`;

    addressWrapper.appendChild(addressWrapper_h2);
    addressWrapper.appendChild(addressWrapper_p);
    addressWrapper.appendChild(iconsWrapper);

    // get in touch form section
    const getInTouch = makeElement("div", "w-full text-center text-white", "get-in-touch-wrapper");
    const getInTouch_h2 = makeElement("h2", "my-14 text-3xl font-bold text-yellow-400", "get-in-touch");
    getInTouch_h2.innerText = "Get In Touch";
    const contactForm = makeElement("form", "text-xl", "contact-form");
    contactForm.action = "mailto:mrlatif598+RestaurantPage@gmail.com";
    contactForm.method = "post";
    contactForm.enctype = "text/plain";
    contactForm.innerHTML = ` 
            <label for="name" class="block">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="my-4 w-96 bg-transparent outline focus:outline-yellow-400"
            />
            <label for="email" class="block">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="my-4 w-96 bg-transparent outline focus:outline-yellow-400"
            />
            <label for="message" class="block">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              cols="40"
              class="my-4 w-96 bg-transparent outline focus:outline-yellow-400"
            ></textarea>
            <br />
            <input
              type="submit"
              value="Submit"
              class="border-2 border-white p-2 px-4 lg:hover:bg-yellow-500 lg:hover:text-white cursor-pointer"
            />`;
    getInTouch.appendChild(getInTouch_h2);
    getInTouch.appendChild(contactForm);

    contactWrapper.appendChild(addressWrapper);
    contactWrapper.appendChild(getInTouch);
    document.getElementById("content").appendChild(aboutUs);
    document.getElementById("content").appendChild(contactWrapper);
}

export default contact;