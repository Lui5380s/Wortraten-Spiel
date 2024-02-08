var Lives = 10;
var highScore = 0;
var Wort = "";
var resetButtonPressed = false;


// Aufrufen des Wortes nachdem der Start button gedrückt wurde oder das Wort erraten wurde und input in Disyplay setzen
document.getElementById('startButton').addEventListener('click', function () {
    var Wort = zufälligesWort();
    console.log(Wort);
    
    Lives = 10; 
    highScore = 0;

    console.log("Leben: " + Lives)
    console.log("HighScore: " + highScore)

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
});

document.getElementById("input").addEventListener("input", function(event){
    if (Lives !== 0 && !resetButtonPressed) {
        // Speichern des aktuellen Werts des Inputs
        let eingabe = this.value;

        if (eingabe !== "") {
            if (istBuchstabeRichtig(eingabe, Wort)) {
                // Ändere die Randfarbe der gameArea auf Grün
                inputElement.setAttribute("type", "text");
                gameArea.style.boxShadow = "0 8px 6px 6px green";
            
                // Warte 2 Sekunden und setze dann die Box-Schatten-Eigenschaft zurück
                setTimeout(function() {
                    gameArea.style.boxShadow = ""; // Setze die Box-Schatten-Eigenschaft zurück
                }, 2000);
            }
            else { 
                gameArea.style.boxShadow = "0 8px 6px 6px red";
                liveLost(event);
                Lives = Lives - 1;
                console.log(Lives);

                setTimeout(function() {
                    gameArea.style.boxShadow = ""; // Setze die Box-Schatten-Eigenschaft zurück
                }, 2000);
            }
        }

        // Input-Feld leeren nach 1 Sekunde
        setTimeout(function() {
            event.target.value = ""; // Leeren des Input-Feldes
        }, 1000);
    }
});


// Reset Button == alles zurücksetzten 
document.getElementById("resetButton").addEventListener("click", function(event){
    resetButton(event);
})


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

