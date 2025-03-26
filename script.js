// Appends a value to the display input field
function appendToDisplay(value) {
    const display = document.getElementById('display'); // Get the display input element by its ID
    // If the current value is '0', replace it with the new value; otherwise, append the new value
    display.value = (display.value === '0') ? value : display.value + value;
    updateResult(display.value); // Update the result preview based on the current input
}

// Clears the display and resets it to '0'
function clearDisplay() {
    document.getElementById('display').value = '0'; // Reset the display value to '0'
    document.getElementById('display').setAttribute('data-result', '0'); // Reset the result attribute to '0'
}

// Calculates the result of the expression in the display
function calculateResult() {
    const display = document.getElementById('display'); // Get the display input element by its ID
    try {
        const result = eval(display.value); // Evaluate the mathematical expression in the display
        display.setAttribute('data-result', result); // Store the result in a custom data attribute
        display.value = result; // Update the display with the calculated result
    } catch (e) {
        // If an error occurs (e.g., invalid expression), set the result and display to 'Error'
        display.setAttribute('data-result', 'Error');
        display.value = 'Error';
    }
}

// Updates the result preview based on the current input value
function updateResult(value) {
    const display = document.getElementById('display'); // Get the display input element by its ID
    try {
        if (value) { // If the input value is not empty
            const result = eval(value); // Evaluate the mathematical expression
            display.value = result; // Update the display with the calculated result
        }
    } catch (e) {
        // If an error occurs (e.g., invalid expression), keep the current input value
        display.value = value;
    }
}
