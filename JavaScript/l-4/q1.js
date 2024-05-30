// for a given array with marks of students [85,94,23,54,23,65] find the average marks of the entire class


let marks = [85,94,23,54,23,65];
// finding the average of the marks
let sum = 0;
for(let mark of marks){
    sum = sum+mark;
}
console.log(sum/marks.length);