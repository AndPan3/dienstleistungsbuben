function copyToClipboard() {
    var emailElement = document.getElementById("email");

    navigator.clipboard.writeText("info@dienstleistungsbuben.ch");

    emailElement.textContent = "E-Mail-Adresse kopiert!";
    setTimeout(() => {
        emailElement.textContent = "Hier klicken, um die E-Mail-Adresse zu kopieren";
    }, 2000);
}