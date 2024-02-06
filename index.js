// FunKtion, um das Overlay beim Laden der Seite automatisch anzuzeigen
window.onload = function() {
    document.querySelector('.overlay').style.display = 'flex';
};

// Funktion, um das Overlay zu schließen
function closeOverlay() {
    document.querySelector('.overlay').style.display = 'none';
}

// Funktion um den input abzufangen 
function getInput () {
    document.getElementById("input").addEventListener("input", function(){
        let eingabe = document.getElementById("input").value;
        console.log(eingabe)
});
}

// Liste aller Themen und Kategorien 
const Wissenschaft = [
    "Quantenmechanik",
    "Astrophysik",
    "Molekularbiologie",
    "Neurologie",
    "Klimaforschung",
    "Genetik",
    "Nanotechnologie",
    "Astronomie",
    "Psychologie",
    "Robotik"
];

const Sport = [
    "Fußball",
    "Basketball",
    "Tennis",
    "Leichtathletik",
    "Schwimmen",
    "Golf",
    "Rugby",
    "Boxen",
    "Formel 1",
    "Volleyball"
];

const Automarke = [
    "Toyota",
    "BMW",
    "Mercedes-Benz",
    "Volkswagen",
    "Audi",
    "Ford",
    "Ferrari",
    "Honda",
    "Hyundai",
    "Tesla"
];

const Musikrichtung = [
    "Pop",
    "Rock",
    "Hip-Hop",
    "Klassik",
    "Jazz",
    "Elektronische Musik",
    "Reggae",
    "Metal",
    "Indie",
    "Rap"
];



// Funktionen um den userName zu speichern und
document.addEventListener("DOMContentLoaded", function() {
    var nameField = document.getElementById('nameField');
    var closeButton = document.getElementById('closeButton');
    var anzeigeBuchstaben = document.querySelector('.anzeigeNamen');
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

