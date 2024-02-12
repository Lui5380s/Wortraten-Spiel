
// FunKtion, um das Overlay beim Laden der Seite automatisch anzuzeigen
window.onload = function() {
    document.querySelector('.overlay').style.display = 'flex';
};

// Funktion, um das Overlay zu schließen, wenn ein Name eingegeben wurde
function closeOverlay() {
    var name = document.getElementById('nameField').value;
    if (name !== "") {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.endSequenz').style.display = 'none';
    } else {
        alert("Bitte geben Sie einen Namen ein.");
    }
}


// Funnktion wenn Leben veloren ist 
function liveLost() {
    for (let i = 1; i <= 10; i++) {
        let heart = document.getElementById("heart" + i);
        if (heart && !heart.classList.contains('lost')) {
            heart.style.transition = "transform 1s";
            heart.style.transform = "scale(0.1)";
            heart.classList.add('lost'); // Markiere das Herz als verloren
            break; // Beende die Schleife nach dem Schrumpfen eines Herzens
        }
    }
}

// Herzen wieder auffüllen
function refillHearts() {
    for (let i = 1; i <= 10; i++) {
        let heart = document.getElementById("heart" + i);
        if (heart && heart.classList.contains('lost')) {
            heart.style.transition = "transform 1s";
            heart.style.transform = "scale(1)"; // Zurücksetzen auf normale Größe
            heart.classList.remove('lost'); // Entferne die Markierung als verloren
        }
    }
}

// Funktion um game zu reseten
function resetGame() {
    Lives = 10;
    highScore = 0;

    clearDisplay(); // Leert das Display
    refillHearts(); // Füllt alle Herzen wieder auf
    document.querySelector('.overlay').style.display = 'flex';

}

// Funktion um game zu beenden
function resetGame1() {
    Lives = 10;
    highScore = 0;
    
    // Name ändern und an das Element mit der ID 'name1' anhängen
    let name1Element = document.getElementById('name1');
    let newName = firstName; // Setze den neuen Namen hier ein
    name1Element.textContent = 'Name: ' + newName;


    clearDisplay(); // Leert das Display
    refillHearts(); // Füllt alle Herzen wieder auf
}


// Clear Display 
function clearDisplay() {
    var display = document.querySelector('.anzeige');
    var inputField = document.getElementById('input');
    var nameDisplay = document.querySelector('.anzeigeNamen');

    display.innerHTML = ''; // Leert den HTML-Inhalt des Anzeigebereichs
    inputField.value = ''; // Leert den Inhalt des Input-Feldes
    nameDisplay.innerHTML = ''; // Leert den Inhalt des Namensfeldes
} 


// Funktion um zu überprüfen, ob der eingegebene Buchstabe im Wort enthalten ist
function istBuchstabeRichtig(buchstabe, Wort) {
    
    // Überprüfe, ob der eingegebene Buchstabe im Wort enthalten ist
    for (let i = 0; i < Wort.length; i++) {
        if (Wort[i] === buchstabe) {
            console.log('Buchstabe gefunden:', buchstabe);
            return true;
        }
    }
    console.log('Buchstabe nicht gefunden:', buchstabe);
    return false;
}

        
// Fügt das Wort in einen HTML-Container ein
function appendWortToScreen(Wort) {
  // Schleife zum Erstellen der input-Elemente für jeden Buchstaben des zufälligen Wortes
    for (let i = 0; i < Wort.length; i++) {
        // Neues input-Element erstellen
        var inputElement = document.createElement("input");

        // Attribute zuweisen
        inputElement.setAttribute("type", "password"); // Password um die Eingabe von Buchstaben zu verbergen
        inputElement.setAttribute("id", "wordInput" + i); // ID anpassen, um eindeutige IDs zu erhalten
        inputElement.setAttribute("class", "word");
        inputElement.setAttribute("disabled", "true");
        inputElement.value = Wort[i]; // Buchstabe als Wert einfügen

        // Stileigenschaften zuweisen
        inputElement.style.boxShadow = "0 8px 6px 6px #000";
        inputElement.style.borderRadius = "5px";
        inputElement.style.border = "none";
        inputElement.style.backgroundColor = "white";
        inputElement.style.height = "40px";
        inputElement.style.width = "30px";
        inputElement.style.marginLeft = "0.5rem";
        inputElement.style.marginRight = "0.5rem";
        inputElement.style.fontFamily = "'Honk'";
        inputElement.style.textAlign = "center";
        inputElement.style.fontSize = "35px";

        // Element zur Anzeige hinzufügen
        document.querySelector('.anzeige').appendChild(inputElement);
    }
}

// Laden des Highscores aus dem Local Storage
function loadHighScore() {
    return parseInt(localStorage.getItem('highScore')) || 0;
}

// Speichern des Highscores im Local Storage
function saveHighScore(score) {
    localStorage.setItem('highScore', score);
}

function updateHighScoreDisplay(scores, currentName) {
    // Überprüfen, ob scores ein Array ist, andernfalls ein leeres Array initialisieren
    if (!Array.isArray(scores)) {
        scores = [];
    }
    
    // Sortiere die Highscores nach absteigenden Punktzahlen
    scores.sort((a, b) => b.score - a.score);

    // Selektiere alle Highscore-Elemente im HTML
    const highscoreElements = document.querySelectorAll('.textContainer .score');

    // Prüfe, ob der Name bereits in den Highscores vorhanden ist
    let nameIndex = scores.findIndex(entry => entry.name === currentName);

    if (nameIndex !== -1) {
        // Wenn der Name bereits vorhanden ist, aktualisiere den entsprechenden Eintrag
        scores[nameIndex].score++; // Hier kann die Punktzahl aktualisiert werden
    } else {
        // Wenn der Name nicht vorhanden ist, füge einen neuen Eintrag hinzu
        scores.push({ name: currentName, score: 1 }); // Hier wird die Punktzahl auf 1 gesetzt, da es sich um einen neuen Eintrag handelt
    }

    // Iteriere über die sortierten Highscores und aktualisiere die Anzeige im HTML
    scores.forEach((entry, index) => {
        if (index < highscoreElements.length) {
            const highscoreElement = highscoreElements[index];
            highscoreElement.textContent = `High Score: ${entry.score}`;
            highscoreElement.previousElementSibling.textContent = `Name: ${entry.name}`;
        }
    });
}

// Funktion zur Generierung einer eindeutigen ID
function generateUniqueID() {
    return Math.random().toString(36).substr(2, 9); // Beispiel: "0n4g5t0y8"
}
