var Names = [];

document.addEventListener("DOMContentLoaded", function() {
    // Hier kommt der gesamte Code hin, den Sie beim Laden des DOM ausführen möchten
    
    fetchData1()
    fetchData2()
    fetchData3()

    let Lives = 10;
    let highScore = 0;
    let Wort = "";
    let resetButtonPressed = false;
    let eingabe = "";

    document.getElementById('endSequenz').style.display = 'none';

    let nameCount = 0; // Zählvariable für die Anzahl der erstellten Namen
    var button = false;

    var nameField = document.getElementById('nameField');
    var anzeigeBuchstaben = document.querySelector('.anzeigeNamen');
    var button = document.getElementById("closeButton");
    var buttonClicked = false; // Initialer Zustand des Buttons: nicht geklickt

        // Füge einen Event-Listener für den Button hinzu
    button.addEventListener("click", function() {
        // Setze den Zustand von buttonClicked auf true, wenn der Button geklickt wurde
            buttonClicked = true;
            console.log("Button wurde geklickt.");
            let name = nameField.value.trim(); // Hole den eingegebenen Namen
            Names.push(name); // Füge den Namen zur Liste hinzu
            nameCount++; // Erhöhe die Anzahl der Namen um eins
            // Aktualisiere die Anzeige im ".anzeigeNamen" Element
            anzeigeBuchstaben.textContent = name;
            if (nameCount === 1) {
                document.getElementById("name1").innerHTML = `Name: ${Names[0]}`;
            } else if (nameCount === 2) {
                document.getElementById("name2").innerHTML = `Name: ${Names[1]}`;
            } else {
                document.getElementById("name3").innerHTML = `Name: ${Names[2]}`;
            }
            console.log(Names);    
    });

    // Aufrufen des Wortes nachdem der Start button gedrückt wurde oder das Wort erraten wurde und input in Disyplay setzen
    document.getElementById('startButton').addEventListener('click', function () {
        let audio = new Audio ('sounds/mixkit-player-select-notification-2037.mp3');
        audio.play()
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
                    let audio = new Audio ('sounds/mixkit-achievement-bell-600.wav')
                    audio.play()
                    
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
                        let audio = new Audio('sounds/mixkit-completion-of-a-level-2063.wav');
                        audio.play();
                        console.log("Wort wurde erraten");
                        highScore++; // Erhöhe den Highscore, wenn das Wort richtig geraten wurde
                        console.log("HighScore ist: " + highScore);
                        HighScoreSet(highScore);
                        var display = document.querySelector('.anzeige');
                        display.innerHTML = ''; // Leert den HTML-Inhalt des Anzeigebereichs
                        Wort = zufälligesWort();
                        console.log (Wort)
                        appendWortToScreen(Wort);
                        var inputField = document.getElementById('input');
                        inputField.value = ''; // Leert den Inhalt des Input-Feldes
                        sortContainersByScore();
                    }
                    
                    // Warte 2 Sekunden und setze dann die Box-Schatten-Eigenschaft zurück
                    setTimeout(function() {
                        gameArea.style.boxShadow = ""; // Setze die Box-Schatten-Eigenschaft zurück
                    }, 1000);

                } else { 
                    gameArea.style.boxShadow = "0 8px 6px 6px red";
                    liveLost(event);
                    let audio = new Audio('sounds/mixkit-failure-arcade-alert-notification-240.wav');
                    audio.play()
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
            document.getElementById('endSequenz').style.display = 'block';
            // Aufrufen der Funktion zum Laden der Kartendaten
            fetchData();
            let audio1 = new Audio ('sounds/Voicy_Pokemon theme song .mp3')
            audio1.play()
            resetGame1();
        }
    });

    // Reset Button == alles zurücksetzen 
    document.getElementById("resetButton").addEventListener("click", function(event){
        var nameField = document.getElementById("nameField");
        nameField.value = ""; // Leere das Input-Feld
        resetGame(); // Setze das Spiel zurück 
    });
});
