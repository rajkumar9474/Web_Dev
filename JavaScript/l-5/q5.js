// create a new button Element . give it a text "click me", background color of red and text color of white. insert the button as the first eleemnt inside the body tag.

let btn = document.createElement("button");
btn.setAttribute("Class","button_class");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

document.querySelector("body").append(btn);


// create a p tag in h tml, give it a class and some styling. now create a new class in CSS and try to append this class to the p elemet 
