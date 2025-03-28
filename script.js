// Function to append a value to the calculator's display input field
function appendToDisplay(value) {
    // Retrieve the display input element from the HTML document
    const display = document.getElementById('display');
    
    // Logic to handle display input:
    // - If current display value is '0', replace it with the new value
    // - Otherwise, concatenate the new value to the existing display content
    display.value = (display.value === '0') ? value : display.value + value;
    
    // Optional: Update result preview (currently commented out in original code)
    // updateResult(display.value);
}

// Function to reset the calculator display to its initial state
function clearDisplay() {
    // Select the display input element
    const display = document.getElementById('display');
    
    // Reset display value to '0'
    display.value = '0';
    
    // Reset the custom data attribute 'data-result' to '0'
    // This can be used to store calculation results separately from display
    display.setAttribute('data-result', '0');
}

// Function to calculate the mathematical result of the expression in the display
function calculateResult() {
    // Retrieve the display input element
    const display = document.getElementById('display');
    
    try {
        // Use JavaScript's eval() function to calculate the mathematical expression
        // WARNING: eval() can be dangerous if used with untrusted input
        const result = eval(display.value);
        
        // Store the calculated result in a custom data attribute
        display.setAttribute('data-result', result);
        
        // Update the display with the calculated result
        display.value = result;
    } catch (e) {
        // Error handling: If calculation fails (invalid expression)
        // Set both the data attribute and display value to 'Error'
        display.setAttribute('data-result', 'Error');
        display.value = 'Error';
    }
}

// Function to update result preview in real-time
function updateResult(value) {
    // Retrieve the display input element
    const display = document.getElementById('display');
    
    try {
        // Attempt to evaluate the current display value
        const result = eval(display.value);
        
        // Note: There's a typo in the original code ('data-reuslt' instead of 'data-result')
        // This has been corrected in the comments and implementation
        display.setAttribute('data-result', result);
        
        // Update display with calculated result
        display.value = result;
    } catch (e) {
        // Error handling: Set error state if calculation fails
        display.setAttribute('data-result', 'Error');
        display.value = 'Error';
    }
}

