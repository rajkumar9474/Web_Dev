// we are given array of marks of students. filter out of the amrks of students that scored 90+.

marks = [45,86,94,90,69,84,99,50,87];
const filtered = marks.filter((val)=>{
    return val>90 ;
})

console.log(filtered);

// take a number n as input from user. create an array of numbers from 1 to n. use the reduce method to calculate sum of all numbers in the array. use the reduce method to calculate product of all numbers in the array.

let n = prompt("enter a number: ");
let arr=[];
for(let i = 1;i<=n;i++){
    arr.push(i);
}

console.log(arr);
let sum = arr.reduce((pre,curr)=>{
    return pre+curr;
})
console.log(sum);

let prod = arr.reduce((pre,curr)=>{
    return pre*curr;
})
console.log(prod);