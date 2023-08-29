//////////////////////////////////////////////
//------------------PART 1------------------//
//////////////////////////////////////////////
/*
const js = "amazing";
const test = document.querySelector("h1");
const firstName = "Mukul";
const country = "India";
const continent = "Asia";
let popuplation = 400;
let language;
language = "hindi";
const isIsland = false;


const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

const wait = async () => {
  await delay(2000);
};

const addText = async () => {
  await wait();
  test.innerHTML += " Test";
};

const printText = async () => {
  await addText();
  await wait();
  console.log(firstName);
};

printText();

let emptyVariable;
let nullVariable = null;

console.log(typeof country);
console.log(typeof varUndefined);
console.log(continent);
console.log(popuplation);
console.log(emptyVariable);
console.log(typeof emptyVariable);
console.log(nullVariable);
console.log(typeof nullVariable);



console.log(isIsland);
console.log(popuplation);
console.log(country);
console.log(language);

// country = "Japan";
const popuplationFinland = 6;
const avgpopuplation = 33;

const countrySplit = popuplation / 2;
console.log(countrySplit);

console.log(popuplation++);
console.log(popuplation > popuplationFinland);
console.log(popuplation < avgpopuplation);

console.log(
  country +
    " is in " +
    continent +
    ", and its " +
    popuplation +
    " million people speak " +
    language
);



console.log(
  `${country} is in ${continent}, and its ${popuplation} million people speak ${language}.`
);

const age = 12;
const legalAge = 18;

if (age >= legalAge) console.log("Can drive 🚗");
else {
  const yearsLeft = legalAge - age;
  console.log(`Cannot drive. Wait another ${yearsLeft} years.`);
}

let birthYear = 2077;
let yearCalc = Math.trunc(birthYear / 100);

if (birthYear % 100 === 0) {
  console.log(`${yearCalc} century`);
} else {
  console.log(`${yearCalc + 1} century`);
}

// popuplation = 130;
if (popuplation > avgpopuplation)
  console.log(`${country}'s population is above average.`);
else {
  let populationDifference = Math.abs(popuplation - avgpopuplation);
  console.log(
    `${country}'s population is ${populationDifference} million below average.`
  );
}
*/

/*const heightMark = 2.1;
const massMark = 75;
const heightJohn = 1.8;
const massJohn = 65;

function calcBMI(mass, height) {
  let bmi = mass / height ** 2;
  return bmi;
}

const bmiMark = parseFloat(calcBMI(massMark, heightMark)).toFixed(2);
const bmiJohn = parseFloat(calcBMI(massJohn, heightJohn)).toFixed(2);

console.log(bmiMark > bmiJohn);

console.log(bmiMark);
console.log(bmiJohn);

if (bmiMark > bmiJohn)
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
else console.log(`John's (${bmiJohn}) BMI is higher than Mark's (${bmiMark})!`);


const numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);

if (numNeighbours === 1) {
  console.log("Only one neighor");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");


if (language === "English" && popuplation < 50 && !isIsland) {
  console.log("You should live in India 😊");
} else console.log("India does not meet your criteria 😭");
}

function avg() {
  let args = new Array();
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  sum = args.reduce((a, b) => a + b);
  const avgScore = sum / arguments.length;
  return avgScore;
}

avgScoreDolphins = avg(97, 112, 101);
avgScoreKoalas = avg(109, 95, 106);
const minScore = 100;

console.log(avgScoreDolphins);
console.log(avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= minScore) {
  console.log("Dolphins is the winner");
} else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= minScore) {
  console.log("Koalas is the winner");
} else if ((avgScoreDolphins && avgScoreKoalas) < minScore) {
  console.log("No draw, no one wins");
} else {
  console.log("Draw");
}

const day = "friday";

switch (day) {
  case "monday":
    console.log("Gather material");
    console.log("Plan a schedule for learning");
    break;
  case "tuesday":
    console.log("Learn something new");
    break;
  case "wednesday":
  case "thursday":
    console.log("Revise what I learned");
    break;
  case "friday":
    console.log("Learn more and decide on what to learn next");
    break;
  case "saturday":
  case "sunday":
    console.log("Study and have some fun");
    break;
  default:
    console.log("Not a valid day!");
}
const day = "tuesday";
if (day === "monday") {
  console.log("Gather material");
  console.log("Plan a schedule for learning");
} else if (day === "tuesday") {
  console.log("Learn something new");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Revise what I learned");
} else if (day === "friday") {
  console.log("Learn more and decide on what to learn next");
} else if (day === "saturday" || day === "sunday") {
  console.log("Study and have some fun");
} else {
  console.log("Not a valid day!");
}


switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log(
  `India's population is ${popuplation > 33 ? "above" : "below"} average`
);

const bill = 430;
let tip;

console.log(
  `The bill was ${bill}, the tip was ${(tip =
    bill <= 300 && bill >= 50
      ? bill * 0.15
      : bill * 0.2)}, and the total value ${bill + tip}`
);
*/

//////////////////////////////////////////////
//------------------PART 2------------------//
//////////////////////////////////////////////
