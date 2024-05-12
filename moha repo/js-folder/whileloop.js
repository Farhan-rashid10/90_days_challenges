
// A loop is a programming construct that allows you to repeat a block of code multiple times

// let count = 6;
// while(count <=10){
//     console.log(count)
//     count++;
// }

// let j = 1
// while(j<=50){
//     console.log(j)
//     j++
// }

// let k = 1
// while (k<=10){
//     if(k % 2 ===0)(
//         console.log(k)
//     )
// }


let j = 1
while(j <= 40){
    if(j % 2 ===0)(
        console.log(j)
    )
    j++
}

// let t = 
// while(t <= 20){
//     if(t %5 ===0)
// console.log(t)
//     t++;
// }

// let num = 10; // Starting number

// while (num >= 1) { // Loop until num is greater than or equal to 1
//     console.log(num);
//     num--; // Decrement num by 1
// }



// let j = 1
// while(j<=10){
//     console.log('i am sorry')
    
// }

//let k = "hello world samiraa"
//console.log(k)

let guess = Math.floor(Math.random() * 10); // Random number between 0 and 9

while (guess !== 5) { // Keep looping until user guesses 5
  console.log("Guess a number between 0 and 9:", guess);
  // Simulate user input (replace with actual user input logic)
  guess = parseInt(prompt("Enter your guess:"));
}

console.log("You guessed it right!");
