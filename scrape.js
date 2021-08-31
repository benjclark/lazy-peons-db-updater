function scrape() {
    const url = window.document.location.href;
    console.log(url.indexOf('www.youtube.com/watch'));
    if (url.indexOf('www.youtube.com/watch') === -1) {
        alert('The Lazy Peons Browser Extension only works on youtube video pages');
    }

    const videoDescription = document.querySelector('#description') ? document.querySelector('#description').textContent : null ;
    if (videoDescription) {
        // Player
        const playerStart = videoDescription.split("Player:")[1];
        const player = playerStart?.split("|")[0].trim();
        console.log(player);
        // Class
        const charClassStart = videoDescription.split("Class:")[1];
        const charClass = charClassStart?.split("|")[0].trim();
        console.log(charClass);
        // Spec
        const specStart = videoDescription.split("Spec:")[1];
        const spec = specStart?.split("|")[0].trim();
        console.log(spec);
        // Level
        const levelStart = videoDescription.split("Level:")[1];
        const level = levelStart?.split("|")[0].trim();
        console.log(level);
        // URL
        const url = window.location.href;
        console.log(url);
        // Timestamp
        const currentTime = document.querySelector(".ytp-time-current").textContent;
        const timestampSplitArray = currentTime.split(":");
        const count = (currentTime.match(/:/g) || []).length;
        if (count === 1) {
            // mins and secs
            const minsConvertedToSeconds = Number.parseInt(timestampSplitArray[0], 10) * 60;
            const secs = Number.parseInt(timestampSplitArray[1], 10) + minsConvertedToSeconds;
        }
        if (count === 2) {
            // hours, mins and secs
            const hoursConvertedToSeconds = Number.parseInt(timestampSplitArray[0],10) * 60 * 60;
            const minsConvertedToSeconds = Number.parseInt(timestampSplitArray[0],10) * 60;
            const secs = Number.parseInt(timestampSplitArray[1],10) + minsConvertedToSeconds + hoursConvertedToSeconds;
        }
        console.log(secs);
    }

}

const scrapeButton = document.querySelector('[data-lp-scrape]');
if (scrapeButton) {
    scrapeButton.addEventListener('click', (event) => {
        event.preventDefault();
        scrape();
    });
}
