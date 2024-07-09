console.log(
  "=====================================  if Statement==============================="
);

let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
console.log(
  "=====================================  else Statement==============================="
);

let age2 = 16;
if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

console.log(
  "=====================================  else if  Statement==============================="
);

let age3 = 20;
if (age3 < 13) {
  console.log("You are a child.");
} else if (age3 >= 13 && age3 < 20) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

console.log(
  "=====================================  Switch  Statement==============================="
);

let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
