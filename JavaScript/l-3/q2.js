let guess = 30;

let num = prompt("enter the number");
while(guess != num){
    if(num>guess){
        console.log("entered number is big");
        num = prompt("enter the number");
    }
    else{
        console.log("entered number is small");
        num = prompt("enter the number");
    }
}

console.log("congratulation! you got the right number");