// window aufpoppen lassen bevor alles startet um Instructions zu geben 
// JavaScript, um das Overlay beim Laden der Seite automatisch anzuzeigen
window.onload = function() {
    document.querySelector('.overlay').style.display = 'flex';
};

// JavaScript-Funktion, um das Overlay zu schließen
function closeOverlay() {
    document.querySelector('.overlay').style.display = 'none';
}


document.addEventListener("DOMContentLoaded", function() {
    var nameField = document.getElementById('nameField');
    var closeButton = document.getElementById('closeButton');
    var anzeigeBuchstaben = document.querySelector('.anzeigeBuchstaben');
    var name = ""; // Variable zur Speicherung des Namens initialisieren

    nameField.addEventListener("input", function (event) {
        name = nameField.value; // Aktualisiere den Wert des Namens bei jeder Eingabe
        console.log(name);
    });

    closeButton.addEventListener("click", function (event) {
        if (name !== "") {
            var firstName = name;
            console.log(firstName);
            anzeigeBuchstaben.textContent = firstName; // Aktualisiere den Textinhalt der anzeigeBuchstaben Div
        }
    });
});
