let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset_btn");
let turnO = true;
let newGameBtn = document.querySelector(".new_btn");
let msgCont = document.querySelector(".msg_container")
let msg = document.querySelector(".msg");


const win = [[0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [3,4,5],
            [6,7,8]];

const showWinner = (win) => {
    msg.innerText = `Congratulation, ${(win==="O")?"first player":"second player"} is the winner`;
    msgCont.classList.remove("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
});
});

const checkWinner = ()=>{
    for(let pat of win){
        posVal1 = boxes[pat[0]].innerText;
        posVal2 = boxes[pat[1]].innerText;
        posVal3 = boxes[pat[2]].innerText;
        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                boxes.forEach((box)=>{
                    box.disabled = true;
                })
                showWinner(posVal1);
            }
        }
    }
};

const resetGame = () => {
    turnO =  true;
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    })
    msgCont.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
