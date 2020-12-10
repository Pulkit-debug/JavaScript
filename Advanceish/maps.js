var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "tres");
myMap.set(4, "Cuatro");

console.log(myMap);


// for of loop

// for(let key of myMap.keys()) {
//     console.log(key);
// }

for(let [key, value] of myMap) {
    console.log(`Key is: ${key} and value is : ${value}`);
}