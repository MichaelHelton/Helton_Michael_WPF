/**
 Mike Helton
 06/12/2014
 */

//Placing my weekly grocery bills for five months
var myArray = new Array();
myArray[0] = "$153.96";
myArray[1] = "$162.39";
myArray[2] = "$154.53";
myArray[3] = "$167.98";
myArray[4] = "$155.88";

//Placing them in the console
console.log("Week 1 = " + myArray[0]);
console.log("Week 2 = " + myArray[1]);
console.log("Week 3 = " + myArray[2]);
console.log("Week 4 = " + myArray[3]);
console.log("Week 5 = " + myArray[4]);

//Adding my weekly grocery bills to find my average

var Total = (153.96+162.39+154.53+167.98+155.88);
console.log(Total+ " Total spent on groceries in 5 weeks.");

answer = (Total / 5+ " Average spent per week." );
console.log(answer);