// Function to update the digital clock display
function updateClock() {
    const now = new Date(); // Get the current date and time
    let hours = now.getHours(); // Extract the current hour
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Extract and format the minutes (2 digits)
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Extract and format the seconds (2 digits)
    const amPm = hours >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM

    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format (handle midnight as 12)
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}:${amPm}`; // Update the clock display
}

// Call updateClock every second to keep the clock updated
setInterval(updateClock, 1000);

// Variables for stopwatch functionality
let stopwatchInterval; // Holds the interval ID for the stopwatch
let stopwatchTime = 0; // Tracks the elapsed time in seconds

// Function to update the stopwatch display
function updateStopwatchDisplay() {
    const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0'); // Calculate and format hours
    const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0'); // Calculate and format minutes
    const seconds = String(stopwatchTime % 60).padStart(2, '0'); // Calculate and format seconds
    document.getElementById('stopwatchDisplay').textContent = `${hours}:${minutes}:${seconds}`; // Update the stopwatch display
}

// Start button functionality
document.getElementById('startBtn').addEventListener('click', () => {
    clearInterval(stopwatchInterval); // Clear any existing interval to avoid multiple intervals
    stopwatchInterval = setInterval(() => {
        stopwatchTime++; // Increment the stopwatch time by 1 second
        updateStopwatchDisplay(); // Update the stopwatch display
    }, 1000); // Run the interval every second
});

// Stop button functionality
document.getElementById('stopBtn').addEventListener('click', () => {
    clearInterval(stopwatchInterval); // Stop the stopwatch by clearing the interval
});

// Reset button functionality
document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(stopwatchInterval); // Stop the stopwatch
    stopwatchTime = 0; // Reset the stopwatch time to 0
    updateStopwatchDisplay(); // Update the display to show the reset time
});

// Initialize the clock display immediately when the page loads
updateClock();
