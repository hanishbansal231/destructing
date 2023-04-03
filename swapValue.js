function swapArray(x, y) {
    [x, y] = [y, x];
    return [x, y];
}
let x = 10;
let y = 5;
let result = swapArray(x, y);
console.log(result);