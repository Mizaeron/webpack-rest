export function menu () {
    const content = document.querySelector("#content");
    const headline = document.createElement("div");
    const item1 = document.createElement("div");
    const menuContainer = document.createElement("div");

    headline.classList.add("menu");
    item1.classList.add("item1");

    headline.textContent = "Menu";
    item1.textContent = "Omega Triple Cheese Burger";

    content.append(menuContainer);
    menuContainer.append(headline, item1);
}

