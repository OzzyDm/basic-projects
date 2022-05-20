console.log("hello everyone!!");
let random = Math.random();
if (random < 0.5) {
  console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
  console.log(random);
}

if (random >= 0.5) {
  console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
  console.log(random);
}

const dayOfWeek = "Friday";

if (dayOfWeek === "Monday") {
  console.log("I HATE MONDAYS!");
} else if (dayOfWeek === "Saturday") {
  console.log("I LOVE SATURDAYS!");
} else if (dayOfWeek === "Friday") {
  console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
} else {
  console.log("MEH");
}
