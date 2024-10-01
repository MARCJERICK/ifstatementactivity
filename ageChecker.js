//prompt sync
const ps = require("prompt-sync");
const prompt = ps();
//prompt the user to enter their age
let age = prompt("Enter your age: ");
age = parseInt(age); // Convert input to an integer
//ifelse statement to determine the user if child,teenager or an adult
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
};
