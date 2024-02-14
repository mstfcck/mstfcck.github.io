const urlMappings = new Map([
    ["mstfcckofficial-youtube", "https://www.youtube.com/@mstfcckofficial"],
    ["mstfcckofficial-instagram", "https://www.instagram.com/mstfcckofficial"],
    ["mstfcckofficial-tiktok", "https://www.tiktok.com/@mstfcckofficial"],
    ["mstfcckofficial-facebook", "https://www.facebook.com/mstfcckofficial"],
    ["mstfcckofficial-twitter", "https://twitter.com/mstfcckofficial"],
    ["mstfcckofficial-threads", "https://www.threads.net/@mstfcckofficial"],

    ["jobs-in-belgium-actiris-most-demand-and-shortage-occupations", "https://www.actiris.brussels/lijst-beroepen-die-rekruteren/jobs"],
    
    ["jobs-in-belgium-vdab-most-demand-and-shortage-occupations", "https://www.vdab.be/trends/knelpuntberoepen"],
    ["jobs-in-belgium-vdab-most-demand-and-shortage-occupations-list-2024-pdf", "https://www.vdab.be/sites/default/files/media/files/Knelpuntberoepen2024.pdf"],
    ["jobs-in-belgium-vdab-nl-vind-een-job", "https://www.vdab.be/vindeenjob/vacatures"],
    
    ["jobs-in-belgium-forem-most-demand-and-shortage-occupations", "https://emploi.wallonie.be/home/travailleurs-etrangers/permis-de-travail/metiers-en-penurie-pour-travailleurs-etrangers.html"],
    ["jobs-in-belgium-forem-most-demand-and-shortage-occupations-list-2024", "https://emploi.wallonie.be/home/travailleurs-etrangers/permis-de-travail/liste-des-metiers-en-penurie.html"],
    ["jobs-in-belgium-forem-fr-rechercher-un-metier", "https://www.leforem.be/infos-metiers/metiers"],
    
    ["jobs-in-belgium-adg-most-demand-and-shortage-occupations", "https://adg.be/desktopdefault.aspx/tabid-5401/9347_read-50919"],
    ["jobs-in-belgium-adg-most-demand-and-shortage-occupations-list-2024-pdf", "https://adg.be/PortalData/46/Resources/dokumente/artikel-dokumente/Mangelberufe_fuer_2023-2024a.pdf"],
    ["jobs-in-belgium-adg-de-arbeitsuche", "https://adg.be/desktopdefault.aspx/tabid-6166"],
]);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const linkElement = document.getElementById('content-link');
const linkTextElement = document.getElementById('content-text');

if (urlParams.has('go')) {

    const goValue = urlParams.get('go');

    if (urlMappings.has(goValue)) {

        const redirectTo = urlMappings.get(goValue);

        let countdownValue = 10;

        const countdownInterval = setInterval(() => {
            
            countdownValue--;
            
            if (countdownValue <= 0) {
                
                clearInterval(countdownInterval);
                
                linkElement.setAttribute("href", redirectTo);
                
                linkTextElement.style.transform = 'scale(1)';
                linkTextElement.style.animation = 'gradient 5s infinite alternate';
                linkTextElement.style.backgroundImage = 'linear-gradient(45deg, #00d77d, #00c9ff, #00c9ff, #00d77d)';
                linkTextElement.textContent = 'Click here to go :)';

            }

        }, 1000);

    } else {

        linkElement.removeAttribute("href");

        linkTextElement.textContent = "Wrong link :(";
        linkTextElement.style.backgroundImage = 'linear-gradient(90deg, #ff0080, #ff5555, #ff8a00, #ff5555)';
    }
}
else {
    linkElement.removeAttribute("href");

    linkTextElement.textContent = "Wrong link :(";
    linkTextElement.style.backgroundImage = 'linear-gradient(90deg, #ff0080, #ff5555, #ff8a00, #ff5555)';
}
