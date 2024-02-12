
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
    const zufälligesWort = ausgewählteListe[wortIndex].toLowerCase();
    
    return zufälligesWort;
}

// Liste aller Themen und Kategorien 
const Früchte = [
    "Apfel",
    "Banane",
    "Orange",
    "Kiwi",
    "Ananas",
    "Mango",
    "Pfirsich",
    "Birne",
    "Kirsche",
    "Erdbeere"
];

const Sport = [
    "Fußball",
    "Karate",
    "Golf",
    "Boxen",
    "Rudern",
    "Jogging",
    "Tanzen",
    "Hockey",
    "Klettern",
    "Volley"
];

const Automarke = [
    "Toyota",
    "BMW",
    "Audi",
    "Honda",
    "Lexus",
    "Nissan",
    "Subaru",
    "Suzuki",
    "Dacia",
    "Mazda"
];

const Musikrichtung = [
    "Klassik",
    "Reggae",
    "Jazz",
    "Rock",
    "Pop",
    "Folk",
    "Blues",
    "Indie",
    "Metal",
    "Techno"
];