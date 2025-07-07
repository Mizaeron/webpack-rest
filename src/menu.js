export function menu () {
    const content = document.querySelector("#content");
    const headline = document.createElement("div");
    const item1 = document.createElement("div");
    const item2 = document.createElement("div");
    const menuContainer = document.createElement("div");
    const buy = document.createElement("button");

    headline.classList.add("menu");
    item1.classList.add("item1");
    item2.classList.add("item2");
    menuContainer.classList.add("menu-box");

    headline.textContent = "Menu";
    item1.textContent = "Omega Triple Cheese Burger";
    item2.textContent = "Shrimp Mac & Cheese";
    buy.textContent = "BUY 10.99$";

    content.append(menuContainer);
    menuContainer.append(headline, item1, buy, item2);
}


