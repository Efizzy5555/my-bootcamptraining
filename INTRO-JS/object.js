const listInformation  = [ // loop
    'liya', 
    'La Flame Jnr',
    2037 - 1991,
    'teacher', 
    ['Angela', 'Tomisola', 'Tesla']
];
console.log(listInformation)

// Objects
let liya = { // retrieve
  firstName: "Liya",
  lastName: "La Flame Jnr",
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Angela', 'Tomisola', 'Tayo'] 
};
//console.log(liya.age); 
//console.log(liya['job']); // brackets 
const nameKey = 'Name';
console.log(liya['first' + nameKey]);
console.log(liya['last' + nameKey]);

const interestedIn = prompt('What do you want to know  about liya? Choose between firstNam, lastName, age, job, and friends');
console.log(liya[interestedIn]);

if (liya[interestedIn]) { 
  console.log(liya[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

// let add data into the element properties
liya.location = 'Portugal';
liya['twitter'] = '@liyaflame';
console.log(liya);

// Challenge 
// "Liya has 3 friends and her best friend is Angela"
console.log(`${liya.firstName} has  ${liya.friends.length} friends, her best friend is called ${liya.friends[0]}`);
// Challenge 2
// liya lives in portugal and her twitter handle is 


// Assignment 
// create an object of your personality
// 1) firstname,
// 2) lastname
//  3) hobbies
// 4) favorite food
// 5) movies
// 6) friends
// 7) location
// 8) socialmedai handle
// 9) moodswing
// 10 age 
// Retrieve the firstname, favorite food and location using the dot notation
// print a statement to the console saying i have 8 friends and my best friend is ...
// print a statement to the console saying i always switch to from been happy to