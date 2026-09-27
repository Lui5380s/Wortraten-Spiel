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

    var nameField = document.getElementById('nameField');
    var anzeigeBuchstaben = document.querySelector('.anzeigeNamen');

    // Start-Button im Anleitungsfenster: Namen übernehmen und direkt das Spiel starten
    function starteSpiel() {
        let name = nameField.value.trim(); // Hole den eingegebenen Namen

        // Ohne Namen geht es nicht los – Eingabefeld rot markieren
        if (name === "") {
            nameField.classList.add('fehlt');
            nameField.focus();
            return;
        }
        nameField.classList.remove('fehlt');

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

        document.querySelector('.overlay').style.display = 'none';

        let audio = new Audio ('sounds/mixkit-player-select-notification-2037.mp3');
        audio.play()

        Lives = 10;
        highScore = 0;

        // Zufälliges Wort wählen und als verdeckte Felder anzeigen
        document.querySelector('.anzeige').innerHTML = '';
        Wort = zufälligesWort();
        console.log(Wort);
        appendWortToScreen(Wort);
    }

    document.getElementById('startButton').addEventListener('click', starteSpiel);

    // Rote Markierung verschwindet, sobald ein Name getippt wird
    nameField.addEventListener('input', function() {
        nameField.classList.remove('fehlt');
    });

    // Enter im Namensfeld startet ebenfalls das Spiel
    nameField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            starteSpiel();
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

                    // Letztes Herz verloren: Spiel sofort beenden
                    if (Lives === 0) {
                        zeigeGameOver(highScore);
                        resetGame1();
                    }
                }
            }


            // Input-Feld leeren nach 1 Sekunde
            setTimeout(function() {
                event.target.value = ""; // Leeren des Input-Feldes
            }, 1000);

        } else {
            event.target.value = ""; // Spiel ist vorbei, keine weiteren Eingaben
        }
    });

    // Hinweis zum aktuellen Wort erneut anzeigen
    document.getElementById("hinweisButton").addEventListener("click", function() {
        if (aktuellerHinweis !== "") {
            showHint(aktuellerHinweis, aktuelleKategorie);
        }
    });

    // Enter schließt das Hinweis-Fenster
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter" && document.getElementById('hinweisOverlay').style.display === 'flex') {
            closeHint();
        }
    });

    // Reset Button == alles zurücksetzen 
    document.getElementById("resetButton").addEventListener("click", function(event){
        var nameField = document.getElementById("nameField");
        nameField.value = ""; // Leere das Input-Feld
        resetGame(); // Setze das Spiel zurück 
    });
});
