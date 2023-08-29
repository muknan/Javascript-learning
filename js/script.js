/*const js = "amazing";
const test = document.querySelector("h1");
const firstName = "Mukul";
const country = "India";
const continent = "Asia";
let popuplation = 400;
let language;
language = "Hindi";

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

const isIsland = false;

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

/////////////////////////////////////////////////////////////////////////////
//--------------------------- CODING CHALLENGES ---------------------------//
/////////////////////////////////////////////////////////////////////////////

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
*/

const numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);

if (numNeighbours === 1) {
  console.log("Only one neighor");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
