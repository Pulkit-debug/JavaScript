var user = {
    firstName: "Pulkit",
    lastName: "verma",
    role: "Admin",
    isSignedIn: true,
    courses: [],
    // method inside the object
    buyCourse: function (courseName) {
        if(!this.courses.includes(courseName)) {
            this.courses.push(courseName);
        }
        
    },
    getCourseCount: function () {
        return `${this.firstName} has ${this.courses.length} number of courses!`;
    },
    getInfo: function () {
        return user;
    }
};

// console.log(user);
console.log(user.getCourseCount());
user.buyCourse("mern course");
user.buyCourse("react course");
user.buyCourse("react course");
console.log(user.getCourseCount());