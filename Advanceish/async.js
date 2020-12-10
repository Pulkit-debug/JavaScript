const uno = () => {
  console.log("I am one");
};

const dos = () => {
    setTimeout(() => {
        console.log("Walla Biaradar!");
    }, 3000);
  console.log("I am Two");
};

const tres = () => {
  console.log("I am three");
};


uno();
dos();
tres();