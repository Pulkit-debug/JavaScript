
// var array = [1, 2, 3, 4, 5, 6, 7, 8].fill(0, 2, 7);
// console.log(array);


var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var result = numbers.filter((num) => {
    return num % 2 != 0;
});
console.log(result);