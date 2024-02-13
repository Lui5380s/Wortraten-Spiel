
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
    //highScore = 0;

    clearDisplay(); // Leert das Display
    refillHearts(); // Füllt alle Herzen wieder auf
    document.querySelector('.overlay').style.display = 'flex';

}

// Funktion um game zu beenden
function resetGame1() {
    Lives = 10;
    //highScore = 0;
    
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

let highScores = [];

function HighScoreSet(highScore) {
    let highScoreCount = Names.length - 1;
    highScoreCount++; // Inkrementiere den Zähler
    console.log(highScoreCount)

    // Fügen Sie den neuen Highscore zur Liste hinzu
    highScores.push(highScore);
    highScores.sort((a, b) => b - a); // Sortiere das Array absteigend
    highScores = highScores.slice(0, 3); // Halte nur die ersten drei Highscores

    if (highScoreCount === 1) {
        document.getElementById("score1").innerHTML = `High Score: ${highScores[0]}`;
    } else if (highScoreCount === 2) {
        document.getElementById("score2").innerHTML = `High Score: ${highScores[1]}`;
    } else {
        document.getElementById("score3").innerHTML = `High Score: ${highScores[2]}`;
    }
}