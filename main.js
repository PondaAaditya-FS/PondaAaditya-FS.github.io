/* Variables to hold the area and various parameters */
let shapeType;
let radius;
let side;
let length;
let base;
let height;
let width;
/* Array to determine the shape */
let shapes = ["Circle", "Square", "Rectangle", "Triangle"];
let area;
let wins = 0;
let totaltries = 0;
let continueTheGame = "Y";

/* Till user selects N or n continue the game */
while (continueTheGame) {

    /* Randomly select the shape */
    shapeType = Math.floor(Math.random() * 4);
    if (shapes[shapeType] == "Circle") {
        areaCircle();
    }
    else if (shapes[shapeType] == "Square") {
        areaSquare();
    }
    else if (shapes[shapeType] == "Rectangle") {
        areaRectangle();
    }
    else if (shapes[shapeType] == "Triangle") {
        areaTriangle();
    }

    /* Increment number of tries */
    totaltries++;

    /* At the end of the iteration evaluate whether user wants to play again */
    continueTheGame = prompt("Would you like to play again!! Y/y for Yes and N/n for No");
    while (!(continueTheGame == "Y" || continueTheGame == "y" || continueTheGame == "N" || continueTheGame == "n")) {
        continueTheGame = prompt("Please enter valid choice. Would you like to play again!!  Y/y for Yes and N/n for No");
    }
    if (continueTheGame == "N" || continueTheGame == "n") {
        break;
    }
}

/* Show the summary result */
displayPrompt();

/* Display Prompt */
function displayPrompt() {
    console.log("**** Area Quiz ****")
    console.log('This application will check your knowlege on the Areas for various geometric shapes');
    console.log("You have won " + wins + " out of total " + totaltries + " Tries !!!")
    alert("You have won " + wins + " out of total " + totaltries + " Tries !!!")
    console.log("************************")
}

/* Function to capture a number from user. This validates the data as well to ensure number is captured */
function inputNumber(label) {
    let input = Number(prompt(label))
    while (isNaN(input)) {
        input = prompt("Please enter valid input!! " + label);
    }
    return input;
}

/* Compares whether the area calculated and captured from the user is correct or not and displays the result */
function validateArea(area, areaInput) {
    if (area == areaInput) {
        console.log("Congratulations!! Your guess " + areaInput + " is right");
        alert("Congratulations!! Your guess " + areaInput + " is right")
        wins++;
    }
    else {
        console.log("Your guess " + areaInput + " is incorrect, and the correct area is " + area);
        alert("Your guess " + areaInput + " is incorrect, and the correct area is " + area);
    }
}

/* Function for the circle */
function areaCircle() {
    radius = Math.floor(Math.random() * 100);
    area = calculateAreaCircle(radius);
    areaInput = inputNumber("Please enter area for the Circle with radius " + radius + ". Note - please use 3.1415 for PI and round the area to nearest integer");
    validateArea(area, areaInput);
}

/* Function for the square */
function areaSquare() {
    side = Math.floor(Math.random() * 100);
    area = calculateAreaSquare(side);
    areaInput = inputNumber("Please enter area for the Square with side " + side + ". Note - Please round area to the nearest integer");
    validateArea(area, areaInput);
}

/* Function for the rectangle */
function areaRectangle() {
    length = Math.floor(Math.random() * 100);
    width = Math.floor(Math.random() * 100);
    area = calculateAreaRectangle(length, width);
    areaInput = inputNumber("Please enter area for the Rectangle with length " + length + " and width " + width + ". Note - Please round area to the nearest integer");
    validateArea(area, areaInput);
}

/* Function for the triangle */
function areaTriangle() {
    base = Math.floor(Math.random() * 100);
    height = Math.floor(Math.random() * 100);
    area = calculateAreaTriangle(base, height);
    areaInput = inputNumber("Please enter area for the Triangle with base " + base + " and height " + height + ". Note - Please round area to the nearest integer");
    validateArea(area, areaInput);
}

/* Function for calculating the area for circle */
function calculateAreaCircle(r) {
    return Math.round(3.1415 * r * r);
}

/* Function for calculating the area for square */
function calculateAreaSquare(s) {
    return Math.round(s * s);
}

/* Function for calculating the area for rectangle */
function calculateAreaRectangle(l, w) {
    return Math.round(l * w);
}

/* Function for calculating the area for triangle */
function calculateAreaTriangle(b, h) {
    return Math.round(1 / 2 * b * h);
}