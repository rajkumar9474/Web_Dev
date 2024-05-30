// for a given array with prices of 5 items 
// [250,645,300,900,50] all items have an offer of 10%
// on them. changes the array to store final price after applying offer.

let arr = [250,645,300,900,50];
for(num in arr){
    arr[num] = arr[num]-(arr[num]*(1/10));
}

console.log(arr);