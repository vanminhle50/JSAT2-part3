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