let firstName = "Robert";
let lastName = "Morales";
let age = 23;
let score = 85.76;

let fullName = firstName + " " + lastName;
let message = "Hello, my name is " + fullName + " and I am " + age + " years old.";
console.log(message);

if (age >= 18) {
    console.log(fullName + " is an adult, ready to play!");
} else {
    console.log(fullName + " is still underage for some games.");
}

switch (age) {
    case 18:
        console.log("Level 1 unlocked!");
        break;
    case 23:
        console.log("You reached Level 5 with high scores!");
        break;
    default:
        console.log("Age doesn't stop the game!");
}

console.log("Uppercase Name: " + fullName.toUpperCase());

console.log("Current Score: " + score.toFixed(2));
