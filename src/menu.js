export function menu () {
    const content = document.querySelector("#content");
    const headline = document.createElement("div");
    const item1 = document.createElement("div");
    const item2 = document.createElement("div");
    const item3 = document.createElement("div");
    const menuContainer = document.createElement("div");
    const buy1 = document.createElement("button");
    const buy2 = document.createElement("button");
    const buy3 = document.createElement("button");

    headline.classList.add("menu");
    item1.classList.add("item1");
    item2.classList.add("item2");
    item3.classList.add("item3");
    menuContainer.classList.add("menu-box");

    headline.textContent = "Menu";
    item1.textContent = "Omega Triple Cheese Burger";
    item2.textContent = "Shrimp Mac & Cheese";
    item3.textContent = "Housemade Grandma Burger";
    buy1.textContent = "BUY 10.99$";
    buy2.textContent = "BUY 12.99$";
    buy3.textContent = "Buy 13.99$";

    content.append(menuContainer);
    menuContainer.append(headline, item1, buy1, item2, buy2, item3, buy3);
}


