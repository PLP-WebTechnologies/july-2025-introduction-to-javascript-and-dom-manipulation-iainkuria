// Part 1: Variables and Conditionals

// Variable declarations
let userName = "JavaScript Learner";
const userId = 12345;
var userStatus = "Active";

// Function to check if a number is positive, negative, or zero
function checkNumber() {
    const input = document.getElementById('userInput').value;
    const num = parseFloat(input);
    let resultText = '';
    
    // Conditional statements
    if (isNaN(num)) {
        resultText = 'Please enter a valid number';
    } else if (num > 0) {
        resultText = `${num} is a positive number`;
    } else if (num < 0) {
        resultText = `${num} is a negative number`;
    } else {
        resultText = 'The number is zero';
    }
    
    document.getElementById('conditionalResult').textContent = resultText;
}

// Part 2: Functions

// Function 1: Calculate area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

// Function 2: Convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to display area calculation result
function showArea() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(width) || isNaN(height)) {
        document.getElementById('functionResult').textContent = 'Please enter valid numbers for width and height';
        return;
    }
    
    const area = calculateArea(width, height);
    document.getElementById('functionResult').textContent = `The area is: ${area}`;
}

// Function to convert temperature and display result
function convertTemperature() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    
    if (isNaN(celsius)) {
        document.getElementById('functionResult').textContent = 'Please enter a valid temperature';
        return;
    }
    
    const fahrenheit = celsiusToFahrenheit(celsius);
    document.getElementById('functionResult').textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}

// Part 3: Loops

// Function to demonstrate for and while loops
function runLoops() {
    const num = parseInt(document.getElementById('loopNumber').value);
    
    if (isNaN(num) || num < 1 || num > 10) {
        document.getElementById('loopResult').textContent = 'Please enter a number between 1 and 10';
        return;
    }
    
    // For loop example
    let forLoopResult = 'For loop: ';
    for (let i = 1; i <= num; i++) {
        forLoopResult += i + ' ';
    }
    
    // While loop example
    let whileLoopResult = 'While loop: ';
    let count = 1;
    while (count <= num) {
        whileLoopResult += count + ' ';
        count++;
    }
    
    document.getElementById('loopResult').innerHTML = `
        <p>${forLoopResult}</p>
        <p>${whileLoopResult}</p>
    `;
}

// Part 4: DOM Manipulation

// Function to change text content
function changeText() {
    const textElement = document.getElementById('textContent');
    textElement.textContent = 'The text has been changed using DOM manipulation!';
    textElement.style.color = '#6a11cb';
    textElement.style.fontWeight = 'bold';
}

// Function to change background color
function changeColor() {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('colorBox').style.backgroundColor = randomColor;
}

// Function to toggle content visibility
function toggleContent() {
    const content = document.getElementById('toggledContent');
    content.classList.toggle('hidden');
}

// Function to add item to list
function addToList() {
    const newItemText = document.getElementById('newItem').value;
    
    if (newItemText.trim() === '') {
        alert('Please enter an item');
        return;
    }
    
    const newItem = document.createElement('li');
    newItem.textContent = newItemText;
    document.getElementById('itemList').appendChild(newItem);
    
    // Clear the input
    document.getElementById('newItem').value = '';
}