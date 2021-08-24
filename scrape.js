function scrape() {
    const url = window.document.location.href;
    console.log(url.indexOf('www.youtube.com/watch'));
    if (url.indexOf('www.youtube.com/watch') === -1) {
        alert('The Lazy Peons Browser Extension only works on youtube video pages');
    }

    const videoDescription = document.querySelector('#description') ? document.querySelector('#description').textContent : null ;
    if (videoDescription) {
        const playerStart = videoDescription.indexOf('Player:');
        const playerEnd = videoDescription.slice(playerStart).indexOf(' |');
        const player = videoDescription.substring(playerStart, playerEnd);
        console.log(player);
    }
}

const scrapeButton = document.querySelector('[data-lp-scrape]');
if (scrapeButton) {
    scrapeButton.addEventListener('click', (event) => {
        event.preventDefault();
        scrape();
    });
}
