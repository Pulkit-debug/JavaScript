// import User from "./01Classesjs"

const User = require("./01Classesjs");


const pulkit = new User("pullu", "pullu@dev");

console.log(pulkit.getInfo());

pulkit.enrollCourse("React Course");
pulkit.enrollCourse("MERN Course");

console.log(pulkit.totalCourses());

let courses = pulkit.totalCourses();

courses.forEach(c => console.log(c));