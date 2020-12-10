var courses = [
  {
    name: "PhotoShop Course",
    price: "499",
  },
  {
    name: "Video Editing Course",
    price: "999",
  },
  {
    name: "Typing Course",
    price: "50",
  },
  {
    name: "BodyBuilding Course",
    price: "150",
  },
];

// now I want to loop through the courses and add every course onto the list
// <li class="list-group-item">Course Name
//<span class="float-right">499</span></li>
function addCourse() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode("$" + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

window.addEventListener("load", addCourse);

function sortIncreasing() {
  const button = document.querySelector(".sort-btn");
  button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    addCourse();
  });
}

sortIncreasing();

function sortDecreasing() {
  const button = document.querySelector(".sort-btn2");
  button.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price);
    addCourse();
  });
}

sortDecreasing();
