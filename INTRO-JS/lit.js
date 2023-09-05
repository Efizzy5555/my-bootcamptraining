const firstName = 'Prosper';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2023;

// String literals
const prosper = "I'm " + firstName + ', a ' + (currentYear - birthYear) + job + '!';
console.log(prosper);

// Template literals
const ProsperNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console. log(ProsperNew); // straight forward

const age =15; //19 give the first if block

//control Structure
if (age >=18) {// rendering a condition
    // Whatever we write inside of our if else statement are called code block
    console.log('Prosper is elligible to have a driver license');
} else{
    const yearsleft = 18 - age;
    console.log(`Prosper is too young to have a drivers license wait in another ${yearsleft} years`);
    //console.log('Prosper is not elligible to have a driver license');
}


const massMark = 78;
const markHeight = 1.69;
const massJohn = 92;
const johnHeight = 1.95;

const BMIMark = massMark / markHeight ** 2;
const BMIJohn = massJohn / (johnHeight * johnHeight);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) { // condition
    console.log('Mark BMI is greather than John BMI');
} else {
  console.log('John BMI is greather than MarkBMI');
}


if (BMIMark > BMIJohn) {
  console.log(`Mark BMI (${BMIMark}) is greather than John BMI (${BMIJohn})`);
} else {
  console.log(`John BMI (${BMIJohn}) is greather than Mark BMI (${BMIMark})`);
}