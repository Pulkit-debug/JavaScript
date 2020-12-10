class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }

  enrollCourse(courseName) {
    this.courseList.push(courseName);
  }

  static totalCourses() {
    // to make the function private I can go with static it will not give the function to anyone.
    return this.courseList;
  }

  login() {
    return "I am logged in!";
  }
}

module.exports = User;

class Gullu extends User {
  constructor(name, email) {
    super(name, email);
  }
  getGulluInfo() {
    return "I am gullu";
  }
  sup() {
    return super.login() + " so get lost";
  }
}

const gallu = new Gullu("gappu", "gilli@com");
console.log(gallu.getGulluInfo());
console.log(gallu.getInfo());
console.log(gallu.sup());
