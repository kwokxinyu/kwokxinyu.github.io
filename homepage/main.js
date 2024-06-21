// Select the element where you want to display the date and time
const localDateTimeElement = document.getElementById('localDateTime');

// Function to update the local date and time
function updateLocalDateTime() {
    const now = new Date();
    
    // Format the date and time as desired
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    
    // Update the element text content
    localDateTimeElement.textContent = formattedDateTime;
}

// Call the function once to update immediately
updateLocalDateTime();

// Optionally, update the time periodically (every second in this case)
setInterval(updateLocalDateTime, 1000);