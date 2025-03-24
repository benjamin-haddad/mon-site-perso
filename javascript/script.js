// Matrix Effect
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const matrixContainer = document.querySelector('.matrix');

    const numberOfColumns = Math.floor(window.innerWidth / 20);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+=-';

    function createColumn(xPosition) {
        const column = document.createElement('div');
        column.classList.add('matrix-column');
        column.style.left = `${xPosition * 20}px`;

        const numberOfLetters = Math.floor(Math.random() * 10) + 10;
        for (let i = 0; i < numberOfLetters; i++) {
            const char = document.createElement('span');
            char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
            char.style.animationDelay = `${Math.random() * 5}s`;
            column.appendChild(char);
        }

        matrixContainer.appendChild(column);
    }

    for (let i = 0; i < numberOfColumns; i++) {
        createColumn(i);
    }
});

// Slider functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 3000); // Change slide every 3 seconds

// Console hacker effect
function simulateHackerEffect() {
    const messages = [
        'Connecting to network...',
        'Scanning IP addresses...',
        'Bypassing firewall...',
        'Access granted.',
        'Command: root access.',
        'Executing script...',
        'System compromised.',
        'Encrypting files...',
        'Deleting logs...'
    ];

    let i = 0;
    const interval = setInterval(() => {
        console.log('%c' + messages[i], 'color: #00FF00; font-size: 14px; font-family: "Courier New", monospace;');
        i++;
        if (i >= messages.length) {
            clearInterval(interval);
            console.log('%c[END OF SEQUENCE] Hack complete.', 'color: #FF0000; font-size: 14px; font-family: "Courier New", monospace;');
        }
    }, 1000);
}

simulateHackerEffect(); // Trigger the hacker sequence
