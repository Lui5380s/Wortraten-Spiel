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
const Früchte = [
    "Apfel",
    "Banane",
    "Kirsche",
    "Orange",
    "Erdbeere",
    "Blaubeere",
    "Himbeere",
    "Kiwi",
    "Ananas",
    "Mango"
];


const Sport = [
    "Fußball",
    "Basketball",
    "Tennis",
    "Karate",
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
    "Mercedes",
    "Volkswagen",
    "Audi",
    "Ford",
    "Ferrari",
    "Honda",
    "Porsche",
    "Tesla"
];

const Musikrichtung = [
    "Pop",
    "Rock",
    "Hip-Hop",
    "Klassik",
    "Jazz",
    "Elektronik",
    "Reggae",
    "Metal",
    "Indie",
    "Rap"
];

// Funktion, um eine zufällige Liste auszuwählen und ein zufälliges Wort aus dieser Liste zu wählen
function zufälligesWort() {
    // Zufällige Liste auswählen
    const listenIndex = Math.floor(Math.random() * 4);
    let ausgewählteListe;

    switch (listenIndex) {
        case 0:
            ausgewählteListe = Früchte;
            break;
        case 1:
            ausgewählteListe = Sport;
            break;
        case 2:
            ausgewählteListe = Automarke;
            break;
        case 3:
            ausgewählteListe = Musikrichtung;
            break;
        default:
            ausgewählteListe = Automarke; // Falls ein ungültiger Index generiert wird, wähle Wissenschaft als Standard
            break;
    }

    // Zufälliges Wort aus der ausgewählten Liste wählen
    const wortIndex = Math.floor(Math.random() * ausgewählteListe.length);
    const zufälligesWort = ausgewählteListe[wortIndex];
    
    return zufälligesWort;
}

// Aufrufen des Wortes nachdem der Start button gedrückt wurde oder das Wort erraten wurde 
document.getElementById('startButton').addEventListener('click', function () {
    var Wort = zufälligesWort();
    console.log(Wort);

    // Schleife zum Erstellen der input-Elemente für jeden Buchstaben des zufälligen Wortes
    for (let i = 0; i < Wort.length; i++) {
        // Neues input-Element erstellen
        var inputElement = document.createElement("input");

        // Attribute zuweisen
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("id", "wordInput" + i); // ID anpassen, um eindeutige IDs zu erhalten
        inputElement.setAttribute("class", "word");
        inputElement.setAttribute("disabled", "true");
        inputElement.value = Wort[i]; // Buchstabe als Wert einfügen

        // Element zur Anzeige hinzufügen
        document.querySelector('.anzeige').appendChild(inputElement);
    }
});


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

