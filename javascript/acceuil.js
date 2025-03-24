// script.js

// Fonction pour ouvrir une modale
function openModal(projetId) {
    const modal = document.getElementById('modal-' + projetId);
    if (modal) {
        modal.style.display = 'flex';
        console.log('%c[OPEN MODAL] Projet ' + projetId, 'color: #00FF00; font-size: 16px; font-family: "Courier New", monospace;');
    }
}

// Fonction pour fermer une modale
function closeModal(projetId) {
    const modal = document.getElementById('modal-' + projetId);
    if (modal) {
        modal.style.display = 'none';
        console.log('%c[CLOSE MODAL] Projet ' + projetId, 'color: #FF0000; font-size: 16px; font-family: "Courier New", monospace;');
    }
}

// Fermer la modale lorsqu'on clique à l'extérieur de celle-ci
document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            console.log('%c[MODAL CLOSE] Click outside modal', 'color: #FF0000; font-size: 16px; font-family: "Courier New", monospace;');
        }
    });
});

// Fermer la modale lorsqu'on appuie sur la touche Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
            console.log('%c[ESC PRESSED] Modal closed via escape key', 'color: #FF0000; font-size: 16px; font-family: "Courier New", monospace;');
        });
    }
});

// Simulation d'un effet hacker dans la console
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
    }, 1000); // Simulation d'animation de texte chaque seconde
}

// Appel d'une fonction pour afficher l'effet hacker dans la console
simulateHackerEffect();
