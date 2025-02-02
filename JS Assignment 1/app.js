                          // Topic Alerts

// Q:1
// Write a script to greet your website visitor using JS alert box.
alert("This is  my first program realted to JS");

// Q:2
// Write a script to display following message on your web page:
alert("Error! Please enter a valid password");


// Q:3
// Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land...\n Happy Coding!");

// Q:4
// Write a script to display following messages in sequence:
alert("Welcome to JS Land...");
alert("Happy Coding \n Preven this page from creating additional dialogs.")

// Q:5
// Generate the following message through browser’s developer console:
console.log("Hello I can run JS through my web browser's console");

// Q:6
// Make use of alerts in your new/existing HTML & CSS project.
// ok

// Q:7
// Practice placement of <script></script> element in following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)


//a. <head> section (can delay rendering if not deferred).
//b. At the start of <body> (not recommended, may block rendering).
//c. Inside <body> (better for interactivity, but can slow rendering).
//d. At the end of <body> (best practice, ensures full HTML loads first).





                      // Topic Variables For Strings

// Q:1
// Declare a variable called username.
let userName;

// Q:2
// Declare a variable called myName & assign to it a string that represents your Full Name.
let myName = "Muhammad Qasim";

// Q:3
// Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
let message = "Hello World";
alert(message);

// Q:4
// Write a script to save student’s bio data in JS variables and show the data in alert boxes.
let name = "Ali";
let age = 20;
let grade = "A";
let school = "RGS School";



alert(name);
alert(age);
alert(grade);
alert(school);

// Q:5
// Write a script to display the following alert using one JS variab.
let fastfood = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(fastfood)


// Q:6
// Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).Show the blow mentioned message in an alert box.(Hint: use string concatenation)
let email ="qasim@gmail.com"
alert("My Email address is"+" "+ email);
 


// Q:7
// Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
let JSlearn = "A smarter way to learn JavaScript"
alert(`I am trying to learn from the book ${JSlearn}`);


// Q:8
// Write a script to display this in browser through JS
let messages = "Yay! I can write HTML content through JavaScript <br> ";
alert(messages);
document.write(messages); 


// Q:9
// Store following string in a variable and show in alert and browser through JS
let logo= "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ <br>"
alert(logo);
document.write(logo);


                                // Topic Variables For Numbers


// Q:1
// Declare a variable called age & assign to it your age. Show your age in an alert box.
let Age = 25;
alert(Age);



// Q:2
// Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
let Visitors = "20"
alert(`You hav visited this site ${Visitors} times`);


// Q:3
// Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// Declare a variable for birth year;

let birthYear = 2002;
document.write(`My Birth Year is ${birthYear} <br>`);




// Q:4
// A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitors name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
let visitorname = "Ali"
let productname = "T-shirt"
let Quantity = 5
document.write(`${visitorname} ordered ${Quantity} ${productname} on Imtiaz Store`);