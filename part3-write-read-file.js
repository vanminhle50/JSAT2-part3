// ---------------------------------------------------------------------
// Part 3: Working with files
// ---------------------------------------------------------------------
// Certificate IV in Information Technology
// Holmesglen institute, VIC , Australia
// Student Name: Van Minh Le
// Student ID: 100693330
// ---------------------------------------------------------------------

//Step 07: Write a text file using Node.js
// Import the 'fs' module from Node.js to work with the file system
const fs = require('node:fs');
// Define a string that will be written to the file
const data = "This is a string that we are going to write to file.";
// Log a message to the console to indicate that we are writing to a file
console.log("Writing to file");
// Use the 'writeFile' function to write the data to 'output.txt'
fs.writeFile('./file-text/output.txt', data, (err) => {
    // Check for errors during writing
    if (err) {
        // Log the error if any occurs
        console.log(err);
    } else {
        // Confirm successful writing
        console.log("File written successfully");
    }
});