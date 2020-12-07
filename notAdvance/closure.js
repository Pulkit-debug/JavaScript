// function init() {
//     var firstName = "pulkit";
//     console.log("We are init");

//     function getFirstName() {
//         console.log(`First name is: ${firstName}`);
//     }
//     return getFirstName;
//     // In closure what we do is we pass on the reference (kind off) instead of the function and we can store the returned function in
//     // a variable and we can call it. YES We can call it. ;>
// }

// var func = init();

// func();

function add(x) {
  return function (y) {
    return x + y;
  };
}

var addNumbers = add(5);
// here addNumbers is holding the reference to the second function so it is there present in the memory
console.log(addNumbers(5)); 

console.log(add(5)(10));
// one other way of doing it
