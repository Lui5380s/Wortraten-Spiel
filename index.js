var Lives = 10;
var highScore = 0;
var Wort = "";
var resetButtonPressed = false;
var wortIstRichtig = false;
var eingabe = "";



document.getElementById('endSequenz').style.display = 'none';


// Aufrufen des Wortes nachdem der Start button gedrückt wurde oder das Wort erraten wurde und input in Disyplay setzen
document.getElementById('startButton').addEventListener('click', function () {
    Wort = zufälligesWort();
    console.log(Wort);
    
    Lives = 10; 
    highScore = 0;

    console.log("Leben: " + Lives)
    console.log("HighScore: " + highScore)

    // Schleife zum Erstellen der input-Elemente für jeden Buchstaben des zufälligen Wortes
    for (let i = 0; i < Wort.length; i++) {
        // Neues input-Element erstellen
        let inputElement = document.createElement("input");

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
});


document.getElementById("input").addEventListener("input", function(event){
    if (Lives !== 0 && !resetButtonPressed) {
        eingabe = document.getElementById("input").value.toLowerCase();

        if (eingabe !== "") {
            if (istBuchstabeRichtig(eingabe, Wort)) { 
                // Ändere die Randfarbe der gameArea auf Grün
                gameArea.style.boxShadow = "0 8px 6px 6px green";
                
                // Durchlaufe das Wort und ändere den Typ jedes passenden Buchstabens auf "text"
                let allInputsText = true; // Initialisiere die Variable
                for (let i = 0; i < Wort.length; i++) {
                    if (Wort[i].toLowerCase() === eingabe.toLowerCase()) {
                        document.getElementById("wordInput" + i).setAttribute("type", "text");
                    }
                    // Überprüfen, ob alle Inputs bereits vom Typ "text" sind
                    if (document.getElementById("wordInput" + i).getAttribute("type") !== "text") {
                        allInputsText = false;
                    }
                }

                // Wenn alle Inputs vom Typ "text" sind, wurde das Wort vollständig erraten
                if (allInputsText) {
                    console.log("Wort wurde erraten");
                    highScore++; // Erhöhe den Highscore, wenn das Wort richtig geraten wurde
                    console.log("HighScore ist: " + highScore);
                    var display = document.querySelector('.anzeige');
                    display.innerHTML = ''; // Leert den HTML-Inhalt des Anzeigebereichs
                    Wort = zufälligesWort();
                    console.log (Wort)
                    appendWortToScreen(Wort);
                }
                
                // Warte 2 Sekunden und setze dann die Box-Schatten-Eigenschaft zurück
                setTimeout(function() {
                    gameArea.style.boxShadow = ""; // Setze die Box-Schatten-Eigenschaft zurück
                }, 1000);

            } else { 
                gameArea.style.boxShadow = "0 8px 6px 6px red";
                liveLost(event);
                Lives--;
                console.log("Verbleibende Leben:", Lives);

                setTimeout(function() {
                    gameArea.style.boxShadow = ""; // Setze die Box-Schatten-Eigenschaft zurück
                }, 1000);
            }
        }
        

        // Input-Feld leeren nach 1 Sekunde
        setTimeout(function() {
            event.target.value = ""; // Leeren des Input-Feldes
        }, 1000);
        
    } else {
        // Anzeige der Endsequenz
        document.getElementById('endSequenz').style.display = 'block';
        addToHighScore(firstName, highScore);
        resetGame1();
    }
});




// Reset Button == alles zurücksetzten 
document.getElementById("resetButton").addEventListener("click", function(event){
    resetGame(); // Setzt das Spiel zurück
});


// Aufrufen des userName um Ihn zu speichern und in den Texthalter zu setzen 
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

