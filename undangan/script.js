document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;

    let message;
    if (attending === 'yes') {
        message = `Terima kasih, ${name}! Kami senang Anda akan hadir❤️😁`;
    } else {
        message = `Terima kasih, ${name}! Kami akan merindukan Anda😢😊`;
    }
        

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = message;
    responseMessage.classList.remove('hidden');

    // Mengosongkan form
    document.getElementById('rsvpForm').reset();
});


const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated, true");
    });
}

