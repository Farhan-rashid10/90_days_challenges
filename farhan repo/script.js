let choice;

while (true) {
    console.log("Menu:");
    console.log("1. Option 1");
    console.log("2. Option 2");
    console.log("3. Option 3");
    console.log("4. Exit");

    if (choice === "1") {
        console.log("You chose Option 1");
    } else if (choice === "2") {
        console.log("You chose Option 2");
    } else if (choice === "3") {
        console.log("You chose Option 3");
    } else if (choice === "4") {
        console.log("Exiting program.");
        break;
    } else {
        console.log("Invalid choice. Please enter a number from 1 to 4.");
    }
}
