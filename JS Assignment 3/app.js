            
            //  Topic USER INPUT & CONDITIONAL STATEMENT
// Q:1
// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
let cityName = prompt("Please enter your city name:");
if (cityName === "karachi") {
    console.log("A warm welcome to the City of Lights");
} else {
    console.log("Greetings from Pakistan, enjoy your stay");
}


// Q:2
// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

let gender = prompt("Please enter your gender:");

if (gender === "male") {
    alert("Good morning Sir ");
} else if (gender === "female") {
    alert("Good morning, Ma’am");
} else {
    alert("Hello! Hope you have a great day.");
}






// Q:3
// Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

let remainingFuel = parseFloat(prompt("Enter remaining fuel in your car (litres):"))

if (remainingFuel < 0.25) {
    alert("Warning! Your fuel is running low. Please refill soon.");
} else {
    alert("You're good to go! Enough fuel for the journey.");
}


// Q:4
// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

let userInput = prompt("Enter a number to check divisibility by 3:");
let num = parseFloat(userInput);

if (isNaN(num)) {
    alert("Oops! That doesn't seem like a valid number. Please try again.");
} else if (num % 3 === 0) {
    alert(`Yes ${num} is perfectly divisible by 3.`);
} else {
    alert(`No ${num} is not divisible by 3.`);
}


// Q:5
// Write a program that checks whether the given input is an even number or an odd number.
let number = +prompt("Enter a random number");
if (isNaN(number)) {
    console.log("Invalid input! Please enter a valid number.");
} else if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


                 // Topic IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

// Q:1
// This if/else statement does not work. Try to fix it:
let greetng;
let hour = 13;
if (hour < 18) {
  greetng = "Good day";
  console.log(greetng);
} else {
  greetng = "Good evening";
  console.log(greetng);
}



// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements


let time = parseInt(prompt("Enter the time in 24-hour format (0000 - 2359):").trim());

if (isNaN(time) || time < 0 || time > 2359) {
    console.log("Invalid input! Please enter a valid time between 0000 and 2359.");
} else if (time >= 0 && time < 1200) {
    console.log("Good Morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
} else {
    console.log("Good Night");
}
