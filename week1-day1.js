//Add array methods exercises: map, filter, reduce
const prices = [100, 250, 80, 420, 55];
// Expected result: [115, 287.5, 92, 483, 63.25]
const test = prices.map((number) => number + (number * 15) / 100);
console.log(test);

const students = [
  { name: "Ahmed", score: 72 },
  { name: "Sara", score: 45 },
  { name: "Mohamed", score: 91 },
  { name: "Layla", score: 38 },
  { name: "Karim", score: 55 },
];
// Expected: Ahmed, Mohamed, Karim
const studentPassedExam = students.filter((student) => student.score >= 50);
console.log(studentPassedExam);

const expenses = [200, 85, 310, 50, 175];
// Expected result: 820
const total = expenses.reduce((acc, num) => acc + num, 0);
console.log(total);

const products = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: false },
  { name: "Keyboard", inStock: true },
  { name: "Monitor", inStock: false },
  { name: "Headphones", inStock: true },
];
// Expected: ["Laptop", "Keyboard", "Headphones"]

const inStockProducts = products
  .filter((product) => product.inStock)
  .map((product) => product.name);
console.log(inStockProducts);

const orders = ["Cairo", "Alex", "Cairo", "Giza", "Alex", "Cairo"];
// Expected: { Cairo: 3, Alex: 2, Giza: 1 }

const cityRepeats = orders.reduce((acc, city) => {
  acc[city] = (acc[city] || 0) + 1;
  return acc;
}, {});
console.log(cityRepeats);
