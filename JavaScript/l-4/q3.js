let food = ["chips","fruti","sprit"];
console.log(food);

food.push("chili");  //push method
console.log(food);

food.pop();  //pop method
console.log(food);

console.log(food.toString()); //to String method

let num = [12,54,16,77];
console.log(food.concat(num));  // to concat method

num.unshift(23);  // to unshift or to push elements in the front of the array
console.log(num); 

num.shift();  // to shift or to pop element from the front of the array
console.log(num);


let array = [1,2,3,4,5,6,7,8,9];
// slice method
console.log(array.slice(2,4));

// splice method
// adding new element
array.splice(2,0,2.5)
console.log(array);

//deleting an element
array.splice(2,2);
console.log(array);

// replace element
array.splice(2,1,3);
console.log(array);