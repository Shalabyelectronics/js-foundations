console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

/*
My prediction is : 
A
C
D
B
Because javascript is asyncronous that mean it will not wait for any statments or expression that takes time (please remind me te different between the statments and expression ),But after
checking the console I did see that A, D, C, B I thought the promise will force js engin to wait until is execute the promise then function.
------------------------
What I learned is in JS engin there is an event loop where it aranging the code in to 3 categories:
1- call stack queue ==> here asynchronous code run immediately.
2- Microtask queue ==> here promises (then), async .. await wait here until call stack finish.
3-Macrotask queue ==> here setTimeoutm setInterval wait here until call stack queue done the Microtask queue done.

console.log("A");                          // Call Stack → runs NOW
setTimeout(() => console.log("B"), 0);    // → goes to Macrotask Queue
Promise.resolve().then(() => console.log("C")); // → goes to Microtask Queue
console.log("D");                          // Call Stack → runs NOW

The 0ms in setTimeout doesn't mean "run immediately" — it means "run as soon as possible, but only after the call stack AND all microtasks are clear." Promises always cut the line ahead of setTimeout.

 statements vs expressions

 I understand that expression is any code produce a new value and can use = after it, statements it not produce a new value and can't use = after it for example:
 const name = "Shalaby" ==>statment (decleration)
 if (5 > 10) ==> this statment because it not produce new value and can't add = after it.
 5 + 3          // expression → produces 8
"hello"        // expression → produces "hello"
greet("Mo")    // expression → produces a return value
if (x > 0) { }      // statement
for (let i...) { }  // statement
const x = 5;        // statement (declaration)
So expression anything produces value and Statement = an instruction that does something but doesn't produce a value.

// The expression is the PART that produces a value
const x = 5 + 3;
//        ↑↑↑↑↑
//        this part is the expression (produces 8)
//  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//  the whole line is the statement

A statement often contains expressions inside it. But the statement itself is the full instruction.
Simple analogy: think of a sentence in English.

"Ahmed" → just a word, like an expression — it has meaning but isn't a complete instruction
"Ahmed went to work" → a full sentence, like a statement — it's a complete instruction with meaning
*/

// ------------------------------------
/*
Exercise 2 — Build a Promise
Write a function checkAge(age) that returns a Promise. If age is 18 or above, resolve with "Access granted".
 If below 18, reject with "Access denied".

*/
/*
My First attempt :
const checkAge = new Promise((resolve, reject) => {
  if (age >= 18) {
    resolve("Access granted");
  } else {
    reject("Access denied");
  }
});
checkAge(age=5).then(resolve => console.log(resolve)).catch(err=> console.log(err))
*/

const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Access granted");
    } else {
      reject("Access denied");
    }
  });
};

checkAge(18)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

checkAge(15)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

/*
Exercise 3 — Async/Await with real data
Use fetch and async/await to get a user from this free API:
I used the below instead of user because it wont work.
https://jsonplaceholder.typicode.com/todos/1
I logged the userId, title and status

{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

*/

/*
const getUserTaskData = async (todoID = 1) => {
  try {
    const userDataRequest = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoID}`,
    );
    const userData = await userDataRequest.json();
    console.log("Task ID : ",userData.id);
    console.log("todo title : ",userData.title);
    console.log("todo status : ",userData.completed ? "Done" : "Not done yet.");
  } catch (err) {
    console.log("Error: ", err);
  }
};

getUserTaskData(1);
getUserTaskData(2);

*/
/*
Exercise 4 — Error handling
Copy your Exercise 3 function but change the URL to something broken:
https://jsonplaceholder.typicode.com/todosfd/${todoID}
What happens? Handle it gracefully so the app doesn't crash — log a friendly message instead.
*/

const getUserTaskData = async (todoID = 1) => {
  try {
    const userDataRequest = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoID}`,
    );
    if (!userDataRequest.ok) {
      throw new Error(`Request failed with status: ${userDataRequest.status}`);
    }
    const userData = await userDataRequest.json();
    console.log("Task ID : ", userData.id);
    console.log("todo title : ", userData.title);
    console.log(
      "todo status : ",
      userData.completed ? "Done" : "Not done yet.",
    );
  } catch (err) {
    console.log(
      "Sorry, we couldn't load the task. Please check your connection and try again.",
      `For more details : \n${err}`,
    );
  }
};

getUserTaskData(1);
getUserTaskData(2);

//Error Error:  TypeError: Failed to fetch at getUserTaskData (week1-day4.js:138:35) at week1-day4.js:151:1
