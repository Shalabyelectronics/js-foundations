/*
Exercise 1 — Destructuring
Given this API response object, use destructuring to extract name, username, email, and the city from inside address. Log all four.
*/

const apiResponse = {
  id: 1,
  name: "Mohamed Shalaby",
  username: "shalabyelectronics",
  email: "shalabyelectronics@gmail.com",
  address: {
    city: "Cairo",
    country: "Egypt",
  },
  phone: "01000000000",
  website: "github.com/shalabyelectronics",
};

const {
  name,
  username,
  email,
  address: { city },
} = apiResponse;
console.log(name, username, email, city);

/*
Exercise 2 — Spread
You have two arrays of skills. Merge them into one without using .concat(). Then create a new object from an existing one with one property changed.
*/

const frontendSkills = ["HTML", "CSS", "JavaScript"];
const backendSkills = ["Node.js", "Express", "PostgreSQL"];

// merge into one array: allSkills

const allSkills = [...frontendSkills, ...backendSkills];

const developer = { name: "Mohamed", level: "junior", available: false };
// create a new object: seniorDeveloper
// same as developer but level is "senior" and available is true
// don't modify the original developer object
const seniorDeveloper = { ...developer, level: "senior", available: true };

console.log(allSkills);
console.log(seniorDeveloper);

/*
Exercise 3 — Rest Parameters
Write a function buildProfile that takes a name as the first argument and any number of skills after it. Return an object with name and skills array.
*/

const buildProfile = (name, ...skills) => {
  return { name, skills };
};

buildProfile("Mohamed", "JavaScript", "React", "Node.js");
// { name: "Mohamed", skills: ["JavaScript", "React", "Node.js"] }

/*
Exercise 4 — Optional Chaining
Given this data, safely access each property using ?. — some are missing. Log all five without crashing.
*/

const users = [
  { name: "Ahmed", address: { city: "Cairo" }, job: { title: "Developer" } },
  { name: "Sara", address: { city: "Alex" } },
  { name: "Karim" },
];

// Log each user's: name, city, job title
// If property doesn't exist, it should show undefined — not crash

users.forEach((userData) =>
  console.log(
    `user name: ${userData?.name}.`,
    `\nuser city: ${userData?.address?.city}.`,
    `\nuser job title: ${userData?.job?.title}.`,
  ),
);
