
var even = (element) => {
    return element % 2 == 0;
}

// console.log(even(2));


var result = [2, 4, 7, 8].every((e) => {
    e % 2 == 0;
});

console.log(result);