// he switch statement is used as a more concise way to write a series of if-else statements when you need to compare a value against multiple possible cases. It can make your code more readable and efficient in certain situations. Here's how it works

// the syntax

switch (expression) {
    case value1:
      // code block to be executed if expression equals value1
      break;
    case value2:
      // code block to be executed if expression equals value2
      break;
    // you can have as many cases as you need
    default:
      // code block to be executed if expression doesn't match any case
  }

  

// Example 1: Handling different weekdays
let day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's a weekend day.");
    break;
  default:
    console.log("Invalid day.");
}

// 

//Example 2: Checking grade ranges

let score = 85;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log("Your grade is:", grade);

