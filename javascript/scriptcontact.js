document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    var nom = document.getElementById("nom").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var formMessage = document.getElementById("form-message");

    if (nom === "" || email === "" || message === "") {
        formMessage.textContent = "Tous les champs sont requis.";
        formMessage.style.color = "red";
        return false;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = "Veuillez entrer un email valide.";
        formMessage.style.color = "red";
        return false;
    }

    formMessage.textContent = "Message envoyé avec succès!";
    formMessage.style.color = "green";
    return true;
}

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
