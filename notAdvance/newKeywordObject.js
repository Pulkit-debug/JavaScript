// this I've created a prototype

var User = function(firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function() {
    console.log(`course count is: ${this.courseCount}`);
  };
};

// if we want to update something then we don't directly go and add it to the main object instead we use a prototype;
User.prototype.getFirstName = function() {
    console.log(`Your first name is: ${this.firstName}`);
}

var pulkit = new User("pulkit", "28");

if(pulkit.hasOwnProperty("firstName")) {
    pulkit.getFirstName();
}
pulkit.getCourseCount();
// console.log(pulkit);