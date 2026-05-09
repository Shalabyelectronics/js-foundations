console.log("Week1-day2")
const city = "Cairo";

function printCity() {
  const city = "Alexandria";
  console.log(city);
}

printCity();
console.log(city);

// ----------------

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100);
}
// 3, 3 , 3

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 100);
}
// 0,1,2

//----------------

const makeGreeting = lang => {
    return function(name){
        if (lang === "arabic"){
            console.log(`أهلاً ${name}`)
        }else if(lang === "english"){
            console.log(`Hello ${name}`)
        }else{
            console.log(`Hello ${name} anyway we are working on this new language😊`)
        }

    }
}

const greetInArabic = makeGreeting("arabic");
const greetInEnglish = makeGreeting("english");


greetInArabic("Mohamed"); // "أهلاً Mohamed"
greetInEnglish("Mohamed"); // "Hello Mohamed"

//-------------
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}