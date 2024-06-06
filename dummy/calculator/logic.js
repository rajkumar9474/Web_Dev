let buttons = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
let sym = "";
let text = "";
let a;
let b;

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.innerText >= 0 && button.innerText <= 9){
            text = text + button.innerText;
            screen.innerText = text;
            if(sym == ""){
                a = Number(text);
            }
            else{
                b = Number(text);
            }
            console.log(a,b,sym,text);
            console.log("number clicked");
        }
        else if(button.getAttribute("id","C") == "C"){
            len = text.length;
            console.log(text.slice(0,len-1));
            text = text.slice(0,len-1);
            screen.innerText = text;
            if(sym == ""){
                a = Number(text);
            }
            else{
                b = Number(text);
            }
            console.log(a,b,sym,text);
        }
        else if(button.getAttribute("id","dot") == "dot"){
            text = text + button.innerText;
            screen.innerText = text;
            console.log(a,b,sym,text);
            console.log("number clicked");
        }
        else if(button.getAttribute("id","AC") == "AC"){
            text = "";
            sym = "";
            a = undefined;
            b = undefined;
            screen.innerText = text;
            console.log(a,b,sym,text);
            console.log("AC clicked");
        }
        else if(button.getAttribute("id","addision") == "addision"){
            if(sym == "+"){
                a = a+b;
            }
            sym = "+";
            screen.innerText = "+";
            text = "";
            console.log(a,b,sym,text);
            console.log("+ clicked");
        }
        else if(button.getAttribute("id","division") == "division"){
            if(sym == "/"){
                a = a/b;
            }
            sym = "/";
            screen.innerText = "/";
            text = "";
            console.log(a,b,sym,text);
            console.log("/ clicked");
        }
        else if(button.getAttribute("id","multiplication") == "multiplication"){
            if(sym == "*"){
                a = a*b;
            }
            sym = "*";
            screen.innerText = "X";
            text = "";
            console.log(a,b,sym,text);
            console.log("* clicked");
        }
        else if(button.getAttribute("id","minus") == "minus"){
            if(sym == "-"){
                a = a-b;
            }
            sym = "-";
            screen.innerText = "-";
            text = "";
            console.log(a,b,sym,text);
            console.log("- clicked");
        }
        else if(button.getAttribute("id","equals_to") == "equals_to"){
            if(sym == "+"){
                a = a+b;
            }
            else if(sym == ""){
                if(a==undefined){
                    a = "";
                }
            }
            else if(sym == "-"){
                a = a-b;
                text = "";
            }
            else if(sym == "*"){
                a = a*b;
            }
            else if(sym == "/"){
                a = a/b;
                text = "";
            }
            screen.innerText = a;
            sym = "=";
            console.log(a,b,sym,text);
            console.log("= clicked");
        }
        else if(button.getAttribute("id","percentage") == "percentage"){
            a = a/100;
            screen.innerText = a;
            console.log("%");
            console.log(a,b,sym,text);
            console.log("+ clicked");
        }
    })  
})