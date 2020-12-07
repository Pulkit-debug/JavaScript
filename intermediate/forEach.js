var array = ["gullu", "ramu", "kaka", "chameli", "guddu", "munna"];

// array.forEach((element) => {
//     console.log(element+1);
// });



// for of loops

// for(const n of array) {
    // console.log(n);
// }

// for in loops used for objects

var user = {
    firstName: "Pulkit",
    lastName: "verma",
    role: "Admin",
    isSignedIn: true,
    courses: []
};


for(const n in user) {
    console.log(`Keys are: ${n} and values are: ${user[n]}`);
}