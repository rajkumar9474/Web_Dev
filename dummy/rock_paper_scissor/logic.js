let choices = document.querySelectorAll(".uchoice");
let choices_c = document.querySelectorAll(".cchoice");
let user_score = 0;
let comp_score = 0;
let lebel = document.querySelector(".lebel");
let user_s = document.querySelector("#user");
let comp_s = document.querySelector("#comp");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        user_choice = choice.getAttribute("id");
        console.log("your choice ",user_choice);
        playgame(user_choice);
    })
})

const playgame = (user_choice)=>{
    let cmp_c = comp_choice();
    choices_c.forEach((choice)=>{
        if(choice.getAttribute("id") === cmp_c){
            choice.classList.add("highlight");
        }
        else{
            choice.classList.remove("highlight");
        }
    })
    if (cmp_c === user_choice){
        lebel.innerText = "it's a draw";
        console.log("it's a draw");
        lebel.classList.remove("lose");
        lebel.classList.remove("win");
    }
    else{
        if(user_choice === "rock"){
            if(cmp_c === "paper"){
                console.log("computer won");
                lebel.innerText = `computer won! ${cmp_c} beats your ${user_choice}`;
                comp_score++;
                lebel.classList.remove("win");
                lebel.classList.add("lose");
            }
            else{
                console.log("you won");
                lebel.innerText = `you won! your ${user_choice} beats ${cmp_c}`;
                user_score++;
                lebel.classList.remove("lose");
                lebel.classList.add("win");
            }
        }
        else if(user_choice === "paper"){
            if(cmp_c === "scissor"){
                console.log("computer won");
                lebel.innerText = `computer won! ${cmp_c} beats your ${user_choice}`;
                comp_score++;
                lebel.classList.remove("win");
                lebel.classList.add("lose");
            }
            else{
                console.log("you won");
                lebel.innerText = `you won! your ${user_choice} beats ${cmp_c}`;
                user_score++;
                lebel.classList.remove("lose");
                lebel.classList.add("win");
            }
        }
        else if(user_choice === "scissor"){
            if(cmp_c === "rock"){
                console.log("computer won");
                lebel.innerText = `computer won! ${cmp_c} beats your ${user_choice}`;
                comp_score++;
                lebel.classList.remove("win");
                lebel.classList.add("lose");
            }
            else{
                console.log("you won");
                lebel.innerText = `you won! your ${user_choice} beats ${cmp_c}`;
                user_score++;
                lebel.classList.remove("lose");
                lebel.classList.add("win");
            }
        }
        user_s.innerText = user_score;
        comp_s.innerText = comp_score;
    }
    
}

const comp_choice = ()=>{
    let indx = Math.floor(Math.random()*3);
    console.log("computer choice",choices[indx].getAttribute("id"));
    return choices[indx].getAttribute("id");
}