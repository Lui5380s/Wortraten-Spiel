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

// Funktion um zu überprüfen, ob der eingegebene Buchstabe richtig ist
function istBuchstabeRichtig(buchstabe) {
    // Überprüfe, ob der eingegebene Buchstabe im zufällig ausgewählten Wort enthalten ist
    if (zufälligesWort.includes(buchstabe)) {
        // Wenn der Buchstabe richtig ist, füge ihn der Anzeige hinzu und kehre true zurück
        addToDisplay(buchstabe);
        return true;
    } else {
        // Wenn der Buchstabe falsch ist, kehre false zurück
        liveLost();
        return false;
    }
}


// Funktion Leben verloren 
function liveLost () {
    let Heart = document.getElementById("heart")
    Heart.style.transform = "scale (0.1)"; 
}




// Funktion zu erkennen der richtigen Buchstaben 
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
}


// Funktion zum Hinzufügen des richtigen Buchstabens zur Anzeige
function addToDisplay(buchstabe) {
    let anzeige = document.querySelector('.anzeige');
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "word");
    inputElement.setAttribute("value", buchstabe);
    inputElement.setAttribute("disabled", "true");
    anzeige.appendChild(inputElement);
}
