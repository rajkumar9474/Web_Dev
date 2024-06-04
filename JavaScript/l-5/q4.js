// create a H2 heading element with text - "hello javascript". append "from apna college students" to the text using Js

let h2 = document.querySelector("h2");
console.dir(h2.innerText)
h2.innerText = h2.innerText + " from apna college student";

// create 3 divs with common class name = "box" . Access them and add some unique text to each of them.

let divs = document.querySelectorAll(".box");
console.dir(divs);
divs[0].innerHTML = "div box 1";
divs[1].innerHTML = "div box 2";
divs[2].innerHTML = "div box 3";