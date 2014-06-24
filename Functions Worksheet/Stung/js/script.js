/**
 *Mike Helton
 * 06/24/2014
 * Functions_Worksheet_Stung
 */

//prompting user for the weight of their animal
var weight = prompt("What is the weight of your animal?");
console.log("Your animal weighs " + weight + " pounds.");

//number of bee stings
var stings = 8.666666667;

//amount of stings calculated against weight
var amount = calculateStings(weight, stings);