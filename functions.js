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
        console.log(eingabe);
        if (!istBuchstabeRichtig(eingabe)) {
            liveLost(); // Wenn der eingegebene Buchstabe falsch ist, ein Herz verkleinern
        }
    });
}


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


function resetButton () {
    Lives = 10;
    highScore = 0;
    
    // HighScore aktualisieren und in Highscore Container schreiben + namen Anhängen 
    document.getElementById('highscore-container').innerHTML = `High Score: ${highScore}`;

    Wort = ""; 

    document.querySelector('.overlay').style.display = 'flex';
}



function istBuchstabeRichtig(buchstabe, Wort, inputElement) {
    const kleinerBuchstabe = buchstabe.toLowerCase();
    const kleinesWort = Wort.toLowerCase();
    // Überprüfe, ob der eingegebene Buchstabe im Wort enthalten ist
    for (let i = 0; i < Wort.length; i++) {
        if (kleinesWort.includes(kleinerBuchstabe)) {
            inputElement.setAttribute("type", "text");
            return true // Wenn der Buchstabe richtig ist, gib true zurück
        }
    }
    return false; // Wenn der Buchstabe falsch ist, gib false zurück
}

/* Funktion zu erkennen der richtigen Buchstaben 
function überprüfeBuchstabe(buchstabe, Wort) {
    let container = document.querySelector('.container');
    let richtig = false;

    // Überprüfe, ob der eingegebene Buchstabe im Wort enthalten ist
    for (let i = 0; i < Wort.length; i++) {
        if (Wort[i].toLowerCase() === buchstabe.toLowerCase()) {
            richtig = true;
            break;
        }
    }

    if (richtig) {
        // Setze den Typ des korrekten Buchstabens auf 'text'
        let inputElement = document.querySelector('.anzeige input[value="' + buchstabe.toLowerCase() + '"]');
        inputElement.setAttribute('type', 'text');

        // Ändere die Randfarbe der Container auf Grün
        container.style.borderColor = 'green';

        // Sound abspielen
        // playSound('correct.mp3');
    } else {
        // Ändere die Randfarbe der Container auf Rot
        container.style.borderColor = 'red';

        // Sound abspielen
        // playSound('incorrect.mp3');

        // Ein Leben verloren
        liveLost();
    }
}*/


/* Funktion zum Hinzufügen des richtigen Buchstabens zur Anzeige
function addToDisplay(buchstabe) {
    let anzeige = document.querySelector('.anzeige');
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "word");
    inputElement.setAttribute("value", buchstabe);
    inputElement.setAttribute("disabled", "true");
    anzeige.appendChild(inputElement);
} */
