let arr = [1,2,3,4,5,6,5,6,7,8,9];

function uniqueItems(arr){
    let newSet = new Set(arr);
   return [...newSet]
}
let result = uniqueItems(arr);
console.log(result)