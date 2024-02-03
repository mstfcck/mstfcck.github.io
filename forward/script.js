const urlMappings = new Map([
    ["mstfcckofficial-youtube", "https://www.youtube.com/@mstfcckofficial"],
    ["mstfcckofficial-instagram", "https://www.instagram.com/mstfcckofficial"],
    ["mstfcckofficial-tiktok", "https://www.tiktok.com/@mstfcckofficial"],
    ["mstfcckofficial-facebook", "https://www.facebook.com/mstfcckofficial"],
    ["mstfcckofficial-twitter", "https://twitter.com/mstfcckofficial"],
    ["mstfcckofficial-threads", "https://www.threads.net/@mstfcckofficial"],
]);

// Check for the "to" parameter in the query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('to')) {
    // Get the value of the "to" parameter
    const toValue = urlParams.get('to');

    // Check if the "to" value is in the cache
    if (urlMappings.has(toValue)) {
        const redirectTo = urlMappings.get(toValue);

        // Display the countdown before redirecting
        let countdownValue = 3;
        const countdownElement = document.getElementById('countdown');

        const countdownInterval = setInterval(() => {
            countdownElement.textContent = "Please wait " + countdownValue + " second(s)." ;
            countdownValue--;

            if (countdownValue < 0) {
                // Redirect to the matched URL when countdown reaches 0
                clearInterval(countdownInterval);
                window.location.replace(redirectTo)
            }
        }, 1000);
    } else {
        // Display an alert if no match found
        alert("No matching URL found for the given 'to' value.");
    }
}
