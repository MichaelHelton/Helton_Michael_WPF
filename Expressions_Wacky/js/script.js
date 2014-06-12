/*
Mike Helton
06/12/2014
Expressions_Wacky
*/

//Finding the width of the room
var roomWidth = prompt("What is the width of the room?");
console.log(roomWidth);

//Finding the length of the room
var roomLength = prompt("What is the length of the room?");
console.log(roomLength);

//Answering in square footage
answer = (roomWidth * roomLength+ " square feet");
console.log(answer);

alert(answer);

//converting square feet into inches
var squareFeet = prompt("What was the square footage of the room?");
console.log(squareFeet);


//Answering the question
answer = (squareFeet / 12+ " inches");

console.log(answer);
document.write(answer);
