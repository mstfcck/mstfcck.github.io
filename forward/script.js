const urlMappings = new Map([
    ["mstfcckofficial-youtube", "https://www.youtube.com/@mstfcckofficial"],
    ["mstfcckofficial-instagram", "https://www.instagram.com/mstfcckofficial"],
    ["mstfcckofficial-tiktok", "https://www.tiktok.com/@mstfcckofficial"],
    ["mstfcckofficial-facebook", "https://www.facebook.com/mstfcckofficial"],
    ["mstfcckofficial-twitter", "https://twitter.com/mstfcckofficial"],
    ["mstfcckofficial-threads", "https://www.threads.net/@mstfcckofficial"],
]);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('to')) {

    const toValue = urlParams.get('to');

    if (urlMappings.has(toValue)) {
        const redirectTo = urlMappings.get(toValue);

        // Display the countdown before redirecting
        let countdownValue = 3;
        const countdownElement = document.getElementById('countdown');

        const countdownInterval = setInterval(() => {
            countdownElement.textContent = countdownValue + " second(s)" ;
            countdownValue--;

            if (countdownValue < 1) {
                clearInterval(countdownInterval);
                window.location.replace(redirectTo)
            }
        }, 1000);
    } else {
        alert("No matching URL found for the given 'to' value.");
    }
}
