                                          //  Topic ARRAYS & LOOP
// QNO 1 & 2
// Declare and initialize an empty multidimensional array. (Array of arrays)
// Declare and initialize a multidimensional array representing the following matrix:
let matrix = [[0 , 1 , 2 , 3],[1 , 0 , 1 , 2],[2 , 1 , 0 , 1]
]

// QNO3
// Write a program to print numeric counting from 1 to 10.
let numeric = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
for(let i = 0; i < numeric.length; i++) {
    console.log(numeric[i])
}

// Question 05
// Write a program to print items of the following array using for loop:
let Items = ["chairs","Table","WashingMachine"]
for(let i = 0; i < Items.length; i++) {
    console.log(Items[i]);
}

// QNO7
// Write a program to identify the largest number in the given array.
let lName = [100,200,300,400,500]
let largest = Math.max(...lName)
console.log(`Largets Number = ${largest}`);

// QNO8
// Write a program to identify the smallest number in the given array.
let sName =  [100,200,300,400,500]
let small = Math.min(...sName)
console.log(`Smallest Number = ${small}`);

