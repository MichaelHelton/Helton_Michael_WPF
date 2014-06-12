/*
Mike Helton
WPF 1406 Section 01
GoTo Training Example Week #2
*/

//alert("Testing 1,2,3");

//Create a js file that will tell us how old we are

//Create a variable to hold the persons name

var name = prompt("Please type in your name");

//Console.log out that name
console.log(name);

//Alert the user and tell him/her Hi

alert("Welcome "+name+"! We have a few more questions for you.");
//Create a variable and prompt user for year of birth

var yearBorn = prompt("What year were you born?");
console.log(yearBorn);

//Ceate a variable for current year
var currentYear = 2014;

//Calculate persons age  - save that calculation a variable

var age = currentYear - yearBorn- 1;
console.log(age);

//Let's tell the user how old they are
alert(name + " you are "+age+" years old.");
//Let's tell the user how old they are
console.log(name + " you are "+age+" years old.");

//Let's make it more complex

//How old you will be  in the future

//prompt user for how many years in the future
var yearsMore = prompt("How many years in the future would you like?");
console.log(yearsMore);


//Prompting returns a STRING!!! Not a number
// "10" not 10

//Cast a variable
//Cast as a number - Number(Variable)

//Cast as a string by String(variable)

//Calculate the future age
var futureAge = age + Number (yearsMore);
console.log(futureAge);

//Make our results pretty
console.log(name + " You will be "+futureAge+" in "+yearsMore+" years");
alert (name  + " you will be "+futureAge+" in "+yearsMore+" years");