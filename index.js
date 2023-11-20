const input = document.querySelectorAll(".input");

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const data = [
  { id: 1, title: "abs" },
  { id: 2, title: "Upper body" },
  { id: 3, title: "leg day" },
  { id: 4, title: "arm" },
];
const getUsername = () => {
  return input[0].value;
};

const getage = () => {
  return input[1].value;
};
const incrementAge = (number) => {
  const parserdnumber = parseInt(number);
  return parserdnumber + 1;
};
// debugger;
btn.addEventListener("click", (e) => {
  console.log("clicked");
  e.preventDefault();
  debugger;
  const userN = getUsername();
  const age = getage();
  const incrementedAge = incrementAge(age);
  console.log(userN);
  result.textContent = `${userN} ${age} the incremented age ${incrementedAge}`;
});
input.addEventListener("change", (e) => {
  e.preventDefault();
  const userN = getUsername();
  const newInput = userN.toLowercase();
  const filterd = data.filter((item) =>
    item.title.toLowerCase().includes(newInput)
  );
});
