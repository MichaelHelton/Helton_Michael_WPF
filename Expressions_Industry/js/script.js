/*
Mike Helton
 06/12/2014
 Expressions_Industry
*/

//Finding out the Dots Per Inch
//The Dots Per Inch being used
var dotsPerInch = prompt ("What dpi are you using?");
console.log(dotsPerInch);

//Finding out the Pixels Per Inch
//The Pixels Per Inch of the image
var pixelsPerInch = prompt ("What are the pixels per inch of the image?");
console.log(pixelsPerInch);

//The rows and dots per pixel
answer = dotsPerInch / pixelsPerInch +" Pixels = Rows and Dots per Pixel";
console.log(answer);

//Alerting the customer with the square footage
alert(dotsPerInch / pixelsPerInch +" Pixels = Rows and Dots per Pixel");