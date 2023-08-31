"use strict";

const js = "amazing";
const test = document.querySelector("h1");
const firstName = "Mukul";
const country = "India";
const continent = "Asia";
let popuplation = 400;
let language;
language = "hindi";
const isIsland = false;

//////////////////////////////////////////////
//------------------PART 1------------------//
//////////////////////////////////////////////
/*



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

//////////////////////////////////////////////
//------------------PART 2------------------//
//////////////////////////////////////////////

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital is ${capitalCity}`;
}

let describeIndia = describeCountry("India", 400, "New Delhi");
let describeUS = describeCountry("United States", 20, "Washington DC");
let describeGermany = describeCountry("Germany", 10, "Frankfurt");

console.log(describeIndia);
console.log(describeUS);
console.log(describeGermany);


function calcAge(birthYear) {
  let currentYear = new Date();
  return currentYear.getFullYear() - birthYear;
}

console.log(calcAge(1993));


const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return parseFloat((population / worldPopulation) * 100).toFixed(1);
}

const percentageOfWorld2 = function (population) {
  return parseFloat((population / worldPopulation) * 100).toFixed(1);
};

const percentageOfWorld3 = (popuplation) =>
  parseFloat((popuplation / worldPopulation) * 100).toFixed(1);

const ratioIndia = percentageOfWorld3(2250);
const ratioChina = percentageOfWorld3(400);
const ratioUSA = percentageOfWorld3(60);

console.log(ratioIndia);
console.log(ratioChina);
console.log(ratioUSA);

const describePopulation = function (country, population) {
  const avgPopulation = percentageOfWorld1(population);
  return `${country} has ${population} million people which is about ${avgPopulation}% of the world.`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("India", 2250));
console.log(describePopulation("USA", 60));  

function calcAverage() {
  let args = new Array();
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  const sum = args.reduce((a, b) => a + b);
  const avgScore = sum / arguments.length;
  return avgScore;
}

const checkWinner = function (avgDolphins, avgKoalas) {
  avgDolphins = calcAverage(85, 54, 41);
  avgKoalas = calcAverage(23, 34, 27);

  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins Wins! (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas Wins! (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

checkWinner();

const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return parseFloat((population / worldPopulation) * 100).toFixed(1);
}

const populations = [2250, 1441, 400];

// populations.length === 4
//   ? console.log("array has 4 elements")
//   : console.log("array does not have 4 elements");

const calcPercentage = function () {
  if (populations.length === 4) {
    let percentages = new Array();
    for (let i = 0; i < populations.length; i++) {
      percentages.push(percentageOfWorld1(populations[i]));
    }
    return percentages;
  } else {
    return "array does not have 4 elements";
  }
};

console.log(calcPercentage());


const neighbours = ["China", "Bhutan", "Nepal"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central europian country 😀");
}

neighbours[neighbours.indexOf("Bhutan")] = "Republic of Bhutan";
console.log(neighbours);


const calcTip = function (bill) {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

console.log(calcTip(100));

const bills = [125, 555, 44];

const calcTips = function () {
  const tips = new Array();
  const total = new Array();
  for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + calcTip(bills[i]));
  }
  return { tips, total };
};

console.log(calcTips());


const mukul = {
  firstName: "Mukul",
  lastName: "Nanda",
  age: 30,
  job: "Student",
  friends: ["Arshdeep", "Rishabh", "Abhishek"],
};

console.log(
  `${mukul.firstName} has ${mukul.friends.length} friends, and his best friend is called ${mukul.friends[0]}`
);


const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 2250,
  neighbours: ["China", "Bhutan", "Nepal"],
};

console.log(
  `${myCountry.country} has ${myCountry.popuplation} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);

myCountry["population"] = myCountry["population"] - 2;
console.log(myCountry["population"]);


const mukul = {
  firstName: "Mukul",
  lastName: "Nanda",
  birthYear: 1993,
  job: "Student",
  friends: ["Arshdeep", "Rishabh", "Abhishek"],
  hasDriversLicence: true,

  // calcAge: function () {
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicence ? "a" : "no"} driver's license`;
  },
};

console.log(mukul.calcAge());
console.log(mukul.age);

console.log(mukul.getSummary());

const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 2250,
  neighbours: ["China", "Bhutan", "Nepal"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  isIsland: function () {
    return this.neighbours.length === 0 ? false : true;
  },
};

// console.log(myCountry.describe());

console.log(myCountry.isIsland());


const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    this.bmi = parseFloat(this.bmi).toFixed(2);
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    this.bmi = parseFloat(this.bmi).toFixed(2);
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`
  );
} else if (mark.calcBMI() < john.calcBMI()) {
  console.log(
    `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`
  );
} else {
  console.log("Mark and John has same BMI.");
}
*/
