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
const countdownElement = document.getElementById('countdown');

if (urlParams.has('go')) {

    const goValue = urlParams.get('go');

    if (urlMappings.has(goValue)) {

        const redirectTo = urlMappings.get(goValue);

        let countdownValue = 3;

        const countdownInterval = setInterval(() => {
            countdownElement.textContent = countdownValue + " second(s)" ;
            countdownValue--;

            if (countdownValue < 0) {
                clearInterval(countdownInterval);
                window.location.replace(redirectTo)
            }
        }, 1000);
        
    } else {
        alert("No matching URL found for the given 'go' value.");
    }
}
else {
    countdownElement.textContent = "Wrong link!";
}