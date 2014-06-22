/*
 Mike Helton
 06/19/2014
 Conditionals_worksheet
 */


//Converting Celsius to Fahrenheit
var C = prompt("What temperature would you like to convert to Fahrenheit?");
answer = ((C * 9) / 5 + 32);
alert(C + " Degrees Celsius is " + answer + " Degrees Fahrenheit");
console.log(answer + " Degrees Fahrenheit");

//Converting Fahrenheit to Celsius
var F = prompt("What temperature would you like to convert to Celsius?");
answer = ((F - 32) * 5 / 9);
alert(F + " Degrees Fahrenheit is " + answer + " Degrees Celsius");
console.log(answer + " Degrees Celsius")