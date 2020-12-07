const pulkit = {
  firstName: "pulkit",
  lastName: "verma",
  role: "Admin",
  courseCount: 2,
  getInfo: function () {
    console.log(`The firstName is: ${this.firstName}
    LastName is: ${this.lastName}
    role is: ${this.role}
    course count is: ${this.courseCount}`);
  },
};


const gullu = {
    firstName: "gullu",
    lastName: "tripathi",
    role: "madman",
    courseCount: 100,
}

// here comes the binding

var someVar = pulkit.getInfo.bind(gullu); // this always returns a reference

// someVar();

// same other method "call"

var anotherVar = pulkit.getInfo.call(gullu);    // this didrectly calls it.

