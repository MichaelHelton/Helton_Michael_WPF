/*
 Mike Helton
 06/22/2014
 Conditionals_Wacky.
 */


//writing var for meters to feet
var metersToFeet = prompt("Convert meters to feet");
//answer to the conversion
answer = (metersToFeet * 3.2808 + " Feet");
//writing to the console
console.log(answer);
//alerting the user
alert ("Enter the number you received from the console.");

//writing var for feet to kilometers
var feetToKilometers = prompt("Enter the feet you received from the console to covert to Kilometers.");
//answer to the conversion
answer = (feetToKilometers * 0.0003048 + " Kilometers");
//writing to console
console.log(answer);
//alerting the user
alert ("Enter the number you received from the console.");

//writing var for kilometers to miles
var kilometersToMiles = prompt("Enter the kilometers you received from the console to see if you traveled more than a mile.");
//answer to the conversion
answer = (kilometersToMiles * 1.60934 + " Miles");
//writing to console
console.log(answer);

//if statement
if(kilometersToMiles > 1.60934){
    //writing to console
    console.log("You have passed a mile.");
    //writing tp the document
    document.write("You have passed a mile.");
}else{
    //writing to console
    console.log("You have to get to 1.60934 Kilometers to reach a mile.");
    //writing tp the document
    document.write("You have to get to 1.60934 Kilometers to reach a mile.");
}

//alert the user
alert ("Thank you for playing");