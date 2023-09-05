/*
  Mark and John trying to compare their BMI(Body mass index),
  Which is calculatd using the formula:
  BMI = mass / height ** 2 = mass / (height * height),
  (mass in kg and height in meter)

  1. Store mark and john mass and height in variable 
  2. Calculate both their BMIs using the formula
  3. Create a boolean variable 'markHigherBMI' containing information about 
    whether Mark has a higher BMI than John.

    TEST DATA1: marks weight 78kg and height 1.69m tail
    John weight 92kg and is height 1.95m tail
     GOOD LUCK
*/
  const massMark = 78;
  const markHeight = 1.69;
  const massJohn = 92;
  const johnHeight = 1.95;

  const BMIMark = massMark / markHeight ** 2;
  const BMIJohn = massJohn / (johnHeight * johnHeight);
  const markHigherBMI = BMIMark > BMIJohn;
  console.log(BMIMark, BMIJohn, markHigherBMI);

  const liyaFarm = [ // loop through an array 
    'Liya',
    'La Flame Jnr',
    2037 - 1991,
    'teacher',
     ['Angela', 'Tosin', 'Amaka']
  ];

  console.log(liyaFarm);

  let liyaObject = { // retrieve an information from an object
    firstName: 'Liya',
    lastName: 'La Flame Jnr',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Angela', 'Tosin', 'Amaka']
  };
  console.log(liyaObject.lastName);
  console.log(liyaObject['firstName']);

 const interestedIn = prompt('What do you want to know about liya? Choose between firstName, lastName, age, job, and friends');
 console.log(liyaObject[interestedIn]);

 if (liyaObject[interestedIn]) { 
    console.log([interestedIn]);
 } else {
   console.log("Wrong request!  Choose between firstName, lastName, age, job, and friends");
 }

 liyaObject.location = 'Spain'; // dot notation for adding values to the object
 liyaObject['instagram'] = '@liyaflame'; // brackets for adding values to the object
  console.log(liyaObject);

  // Challenge
  // Write a sentence just like in a dynamic way
  // "Liya has 3 friends and her best friend is called Angela"
  console.log(`${liyaObject.firstName} has ${liyaObject.friends.length} friends and her best friend is called ${liyaObject.friends[0]}`);

