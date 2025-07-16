import "./styles.css";
import { menu } from "./menu";
import { pageLoad } from "./page-load";
import { about } from "./about";
import restore from "./restore.jpg";

pageLoad();

document.querySelector("nav").addEventListener("click", (e) => {
    if(e.target.className === "load-menu") {
        reset();
        menu();
    }
    if(e.target.className === "load-home") {
        reset();
        pageLoad();
    }
    if(e.target.className === "load-about") {
        reset();
        about();
    }
});

function reset () {
    const content = document.getElementById("content");

   content.innerHTML = "";
   
   const image = document.createElement("img");
   image.src = restore;

   content.append(image);

}

