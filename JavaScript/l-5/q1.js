// function helo(){
//     console.log("hay there ");
//     console.log("hello wolrd");
// }

// helo();

// const sum = (a,b)=>{
//     return a+b;
// }

// console.log(sum(2,4));

// arrow function of multiplication
// const mult=(a,b)=>{
//     console.log(a*b);
// }

// create a function using the function keyword that takes a ZString as an argument and returns th enuber of vowels i nthe string.

function vowels(str){
    let count = 0;
    for(s of str){
        if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u'){
            count++;
        }
    }
    return count;
}

console.log(vowels("rajkumar"));


// create an arrow function to perform the same task;

const vow = (str)=>{
    let count = 0;
    for(s of str){
        if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u'){
            count++;
        }
    }
    return count;
}

    console.log(vow("rajkumar"))
