//Date and time start
function updateDateTime() {
                const now = new Date();
                const options = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                };
                const formattedDateTime = now.toLocaleDateString('en-US', options);
                document.getElementById('currentDateTime').textContent = formattedDateTime;
            }
 
            // Call the function once immediately to display the time on page load
            updateDateTime();
 
            // Update the time every second
            setInterval(updateDateTime, 1000);
//Date and time end
