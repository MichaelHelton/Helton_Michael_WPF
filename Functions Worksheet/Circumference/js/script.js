/**
 Mike Helton
 06/24/2014
 Functions_Worksheet_Circumference
 */

//prompting the user to input the size of their circle
var radius = prompt("What is the size of your circle?");
//writing to the console
console.log("Your circle is " + radius);
//pi
var pi = 3.14;
//diameter
var diameter = 2;
//amount
var amount = calculateCirc(diameter, radius, pi);
//writing to the console
console.log("The circumference of the circle is " + amount);