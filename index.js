const input = document.querySelectorAll(".input");
const nameinput = document.querySelector(".nameinput");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const data = [
  { id: 1, title: "abs" },
  { id: 2, title: "Upper body" },
  { id: 3, title: "leg day" },
  { id: 4, title: "arm" },
];
const getUsername = () => {
  return nameinput.value;
};

const getage = () => {
  return input.value;
};
const incrementAge = (number) => {
  const parserdnumber = parseInt(number);
  return parserdnumber + 1;
};
// debugger;
btn.addEventListener("click", (e) => {
  console.log("clicked");
  e.preventDefault();
  // debugger;
  const userN = getUsername();
  const age = getage();
  const incrementedAge = incrementAge(age);
  console.log(userN);
  result.textContent = `${userN} ${age} the incremented age ${incrementedAge}`;
});
nameinput.addEventListener("change", (e) => {
  e.preventDefault();
  console.log("change event is fired");
  const userN = getUsername();
  console.log(userN);

  const filterd = data.filter((item) =>
    item.title.toLowerCase().includes(userN.toLowerCase())
  );
  // the reason is this that before u didn't see the value of the variable filterd b/c the break point
  // was set before the filterd was instantiated thats way it says uncaught referenceError

  console.log(filterd);
});
