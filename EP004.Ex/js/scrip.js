// Prompt the user to choose a number and store it in the variable 'num'
let num = Number(prompt('Please choose a number'));

// Manipulate the h1 element in the HTML
let numTitle = document.getElementById('numero-titulo');

// Manipulate the div element in the HTML
let textDiv = document.getElementById('texto');

// Show the chosen number in the h1 element
numTitle.innerHTML = num;

// Clear the buffer
textDiv.innerHTML = '';

// Check if the number is an integer
textDiv.innerHTML += `<p>${num} is an integer? ${Number.isInteger(num)}. <br /> </p>`;

// Check if the number is NaN (Not a Number)
textDiv.innerHTML += `<p>Is NaN? ${isNaN(num)}. <br /> </p>`;

// Round the number down
textDiv.innerHTML += `<p>Round the number down: ${Math.floor(num)}. <br /> </p>`;

// Round the number up
textDiv.innerHTML += `<p>Round the number up: ${Math.ceil(num)}. <br /> </p>`;

// Format the number to two decimal places
textDiv.innerHTML += `<p>With two decimal places: ${num.toFixed(2)}. <br /> </p>`;

// Calculate the square root of the number
textDiv.innerHTML += `<p>Square root: ${num ** 0.5}. </p>`;
