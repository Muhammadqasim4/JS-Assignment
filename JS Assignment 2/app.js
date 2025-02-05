                   
          // Topic Variable Names:Legal & Illegal
//Q:1          
// Declare 3 variables in one statement. 
let a1 = 10, b2 = 20, c3 = 30;


//Q:2
//Declare 5 legal & 5 illegal variable names. 

//✅ Legal Variable Names:
myVariable
_userName
$priceTag
camelCaseExample
number123

//❌ Illegal Variable Names:
//123number (Cannot start with a number)
//my-var (Hyphen - is not allowed)
//let (Reserved keyword)
//first name (Spaces are not allowed)
//@amount (Special characters other than _ and $ are not allowed)

//Q:3
//Display in the browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write(" <h6> Variable names can only contain numbers,$ and _. For example $my_1stVariable </h6>");
document.write(" <h6> Variables must begin with a letter,$ and _. For example $name, _name or name </h6>");
document.write(" <h6> Variable names are case sensitive </h6>");
document.write(" <h6> Variable names should not be JS keyword </h6>");


                          //  Topic Math Expressions
// Q:1
// Write a program that take two numbers & add them in a new variable. Show the result in your browser.
let n1 = 50
let n2 = 100
let additionResult = n1 + n2
document.write(`Sum of ${n1} and ${n2} is ${additionResult}<br>`);


// Q:2
// Repeat task1 for subtraction, multiplication, division & modulus.
// Subtraction
let n3 = 200
let n4 = 70
let subtractionResult = n3 - n4
document.write(`Subtract of ${n3} and ${n4} is ${ subtractionResult}<br>`);
// Multiplication
let n5 = 20
let n6 = 5
let multiplicationResult = n5 * n6
document.write(`Multiplication of ${n5} and ${n6} is ${multiplicationResult}<br>`);

// Division
let n7 = 100
let n8 = 5
let divisionResult = n7 / n8
document.write(`Division of ${n5} and ${n6} is ${ divisionResult}<br>`)


// Modulus
let n9 = 100;
let n10 = 5;
let modulusResult = n9 % n10
document.write(`Modulus of ${n9} and ${n10} is ${modulusResult}`);


// Q:4
// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
let ticketPrice = 600
let ticket_price_total = 600 * 5
document.write(`total cost to buy 5 tickets to a movie is ${ticket_price_total} PKR.`)




                          //  Topic Math Expressions
// Q:1                          
//	What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: 
//--a;
//--a - --b; 
//--a - --b + ++b; 
//--a - --b + ++b + b--; 
let a = 2, b = 1;
let  result = --a - --b + ++b + b--;
document.write( a);   
document.write( b);     
document.write( result); 

//Q:2
//Write a program that takes input a name from user & greet the user          
let userName = prompt("Ali");
alert("Hello, " + userName + "Welcome!");
                                    