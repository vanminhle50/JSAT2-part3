// ---------------------------------------------------------------------
// Part 3: String Manipulation and Files
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen institute, VIC , Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------
//Step 1: Create a string with the given strings
/**
 * @let {string} myString - A string with the value "This is a string"
 * @let {string} anotherString - A string with the value "   Another string"
 * @let {string} hello - A string with the value "Hello there!"
 * @let {string} myName - A string with the value "van minh"
 */
let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "van minh";
//Display the strings
console.log(`myString: [${myString}]`);
console.log(`anotherString: [${anotherString}]`);
console.log(`hello: [${hello}]`);
console.log(`myName: [${myName}]`);
//Display the strings in the HTML page
document.getElementById("input-strings").innerHTML = `<span class="note">myString: [</span>${myString}<span class="note">]<br>anotherString: [</span>${anotherString}<span class="note">]<br>hello: [</span>${hello}<span class="note">]<br>myName: [</span>${myName}<span class="note">]</span>`;
document.getElementById("input-strings").style.whiteSpace = "pre-wrap";

//Step 2: 
/**
 * @let {number} myStringLength - The length of myString
 * @let {string} firstCharMyString - The first character of myString
 * @let {string} eleventhCharMyString - The 11th character of myString
 */
// Find out the length of myString
let myStringLength = myString.length;

//Print the length of myString
console.log(`Length of myString : ${myStringLength}`);
// Display the length of myString
document.getElementById("lenght-string").innerHTML = `Length of myString : <span class="note"> ${myStringLength} </span>`;

// Find out the first character of myString
let firstCharMyString = myString[0];

//Print the first character of myString
console.log(`First Character of myString : ${firstCharMyString}`);
// Display the first character of the strings
document.getElementById("first-character").innerHTML = `First Character of myString : <span class="note"> ${firstCharMyString}</span>`;

//Find out the 11th character of myString
let eleventhCharMyString = myString[10];

//Print the 11th character of myString
console.log(`11th Character of myString : ${eleventhCharMyString}`);
// Display the 11th character of the strings
document.getElementById("eleventh-character").innerHTML = `11th Character of myString : <span class="note"> ${eleventhCharMyString}</span>`;