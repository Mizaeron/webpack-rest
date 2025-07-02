export function pageLoad () {

const content = document.querySelector("#content");
const headline = document.createElement("div");
const description = document.createElement("div");
const container = document.createElement("div");

container.classList.add("container");

headline.classList.add("headline");
headline.textContent = "Amazing Burger Restaurant";

description.classList.add("description");
description.textContent = "Premier burger restaurant in town, only 9.99$ for burger and fries";

content.append(container);
container.append(headline, description);

}