export function pageLoad () {

const content = document.querySelector("#content");
const headline = document.createElement("header");

headline.textContent = "Amazing Burger Restaurant"

content.appendChild(headline);

}