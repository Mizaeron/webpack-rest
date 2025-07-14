export function about () {
    const content = document.querySelector("#content");
    const mainInfo = document.createElement("div");
    const heading = document.createElement("h2");
    const block = document.createElement("div");

    mainInfo.classList.add("info");
    block.classList.add("block");

    heading.textContent = "ABOUT US";
    mainInfo.textContent = "Welcome to Burger Bonanza, where juicy, handcrafted burgers steal the show! Nestled in the heart of the city, our cozy eatery serves up mouthwatering classics and bold creations, made with fresh, locally sourced ingredients. From our sizzling beef patties to our crispy veggie delights, every bite bursts with flavor. Pair your burger with golden fries, a creamy milkshake, or a craft beer from our curated selection. Our friendly staff and vibrant atmosphere make every visit a treat. Come hungry, leave happy—Burger Bonanza is your go-to spot for burger bliss! Open daily, 11 AM–10 PM.";

    content.append(block);
    block.append(heading, mainInfo);

}