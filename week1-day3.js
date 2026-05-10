//Exercise 1 — Hoisting Without running it, predict what happens. Then run and verify.

console.log(double(5));
const triple = (n) => n * 3;
console.log(triple(5));

function double(n) {
  return n * 2;
}

// My prediction
// console.log(double(5)); ==> 10 because declered function have hoisted
// console.log(triple(5)); ==> error triptlr is not defined as arrow function is not hoisted

// After running the code i got an error for the triple as below:
// Uncaught ReferenceError: Cannot access 'triple' before initialization
// That mean Arroe function are not hoisted.

// Exercise 2 — this in objects Fix this code so it logs the correct message. Only change ONE thing.
const car = {
  brand: "Toyota",
  getBrand: function () {
    console.log(`My car is ${this.brand}`);
  },
};

car.getBrand(); // should print "My car is Toyota"

/*
Exercise 3 — Build it yourself
Create an object called bankAccount with:

A property owner (your name)
A property balance starting at 1000
A method deposit(amount) that adds to the balance and logs the new balance
A method withdraw(amount) that subtracts from the balance — but if the amount is more than the balance, log "Insufficient funds" instead
*/
const bankAccount = {
  owner: "Shalaby",
  balance: 1000,
  deposit: function (amount) {
    this.balance += amount;
    console.log(this.balance);
  },
  withdraw: function (amount) {
    if (this.balance - amount < 0) {
      console.log(
        `Sorry ${this.owner} you can't withdraw this amount of money as your current balance is : ${this.balance}.`,
      );
      return;
    }
    this.balance -= amount;
    console.log(this.balance);
  },
};

bankAccount.deposit(500); // "Balance: 1500"
bankAccount.withdraw(200); // "Balance: 1300"
bankAccount.withdraw(2000); // "Insufficient funds"

// Exercise 4 — Arrow vs Regular What will this log? Predict first, then run.
function Timer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}

const t = new Timer();
// My prediction
// I predict that it will log undefined because each decleared function have it own this that why to fix that we need to replace the reguler function inside setinterval to arrow function so it can access the second property from the parent regular function.
// When I see the console there was NaN repeating and I thing that because its adding 1 to undefine that why we got a NaN.
// After fixing it I can see counting number 1,2,3,.....
