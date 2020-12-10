//  var myObj = {
//      name: "pulkit",
//      age: "28"
//  };

//  Object.assign(myObj, {a: 1, b: 2, c: 3}, {x: 5, y: 6, z: 10});

//  console.log(myObj);


// function addOne(a, b) {
//     return a + b;
// }

// var myA = [4, 5];

// here I don't want to change the function defination so what I do is use "SPREAD" operator
// console.log(addOne(...myA));    // spread op

// spread operator seperates the values to indivisual values



function sumTwo(a, b, ...args) {    // this is "REST" Operator
    /// now this args will be a array
    let sum = 0;
    let mul = a * b;
    args.forEach((e) => {
        sum += e;
    });
    return [mul, sum];
}

console.log(sumTwo(3, 4, 5, 1, 1));

// what rest operator does is that it combines up the indivisual values into an array or an object or something else.

// basically opposite of spread operator.