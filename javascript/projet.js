// Fonction pour ouvrir un modal
function openModal(projet) {
    const modal = document.getElementById(`modal-${projet}`);
    modal.style.display = "block";
}

// Fonction pour fermer un modal
function closeModal(projet) {
    const modal = document.getElementById(`modal-${projet}`);
    modal.style.display = "none";
}

// Fonction de validation du formulaire de contact
function validateForm() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("form-message");

    if (nom === "" || email === "" || message === "") {
        formMessage.textContent = "Tous les champs doivent être remplis.";
        formMessage.style.color = "red";
        return false;
    }

    formMessage.textContent = "Votre message a été envoyé !";
    formMessage.style.color = "green";
    return true;
}

// Fonction de changement d'images dans le slider
let currentSlide = 0;
const slides = document.querySelectorAll("#slider .slide");
setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}, 5000);
