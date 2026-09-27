var firstName = ""; // Variable zur Speicherung des Namens

// FunKtion, um das Overlay beim Laden der Seite automatisch anzuzeigen
window.onload = function() {
    document.querySelector('.overlay').style.display = 'flex';
};

function closeEnd (){
    document.querySelector('.endSequenz').style.display = 'none';
    resetGame();
    nameField.value = ""; // Leere das Input-Feld
}

// Game-Over-Fenster mit der Anzahl der erratenen Wörter anzeigen
function zeigeGameOver(score) {
    document.getElementById('endScore').textContent = score;
    document.getElementById('endSequenz').style.display = 'flex';
    document.getElementById('input').blur(); // Keine Eingaben mehr hinter dem Fenster
}

var aktuellerHinweis = ""; // Hinweis zum aktuellen Wort, damit er erneut angezeigt werden kann
var aktuelleKategorie = "";

// Hinweis samt Kategorie im Popup anzeigen
function showHint(hinweis, kategorie) {
    aktuellerHinweis = hinweis;
    aktuelleKategorie = kategorie;
    document.getElementById('hinweisButton').disabled = false;
    document.getElementById('hinweisKategorie').textContent = "Kategorie: " + kategorie;
    document.getElementById('hinweisText').textContent = hinweis;
    document.getElementById('hinweisOverlay').style.display = 'flex';
    document.getElementById('input').blur(); // Keine Eingaben hinter dem Popup
}

// Hinweis-Popup schließen und direkt weiterspielen
function closeHint() {
    document.getElementById('hinweisOverlay').style.display = 'none';
    document.getElementById('input').focus();
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

    // Erstelle ein neues Audio-Element
    let audio = new Audio('sounds/mixkit-player-recharging-in-video-game-2041.wav'); // Passe den Pfad zur MP3-Datei an
    
    // Spiele das Audio ab, wenn die Herzen wieder aufgefüllt werden
    audio.play();

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
    
    clearDisplay(); // Leert das Display
    refillHearts(); // Füllt alle Herzen wieder auf
    sortContainersByScore();
}


// Clear Display 
function clearDisplay() {
    var display = document.querySelector('.anzeige');
    var inputField = document.getElementById('input');
    var nameDisplay = document.querySelector('.anzeigeNamen');

    display.innerHTML = ''; // Leert den HTML-Inhalt des Anzeigebereichs
    inputField.value = ''; // Leert den Inhalt des Input-Feldes
    nameDisplay.innerHTML = ''; // Leert den Inhalt des Namensfeldes

    aktuellerHinweis = ""; // Ohne Wort gibt es auch keinen Hinweis
    document.getElementById('hinweisButton').disabled = true;
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
    console.log("High Score Count: " + highScoreCount)

    // Fügen Sie den neuen Highscore zur Liste hinzu
    highScores.push(highScore);
    highScores.sort((a, b) => b - a); // Sortiere das Array absteigend
    highScores = highScores.slice(0, Names.length); // Kürze das Array auf die Länge von Names
    console.log(highScores)

    if (highScoreCount === 1) {
        document.getElementById("score1").innerHTML = `High Score: ${highScores[0]}`;
    } 
    else if (highScoreCount === 2) {
        document.getElementById("score2").innerHTML = `High Score: ${highScores[1]}`;
    } 
    else {
        document.getElementById("score3").innerHTML = `High Score: ${highScores[2]}`;
    }
}


function sortContainersByScore() {
    // Array mit den IDs der Container in der gewünschten Reihenfolge
    const containerIds = ["cont1", "cont2", "cont3"];

    // Erstellen eines Arrays von Objekten, das die Container-IDs und ihre entsprechenden Punktzahlen enthält
    const containerScores = containerIds.map(id => {
        const scoreElement = document.getElementById("score" + id.substring(4)); // Die ID des Punktzahl-Elements
        const score = parseInt(scoreElement.textContent.split(":")[1].trim()); // Die Punktzahl extrahieren und in eine Zahl umwandeln
        return { id, score };
    });

    // Sortieren des Arrays nach den Punktzahlen in absteigender Reihenfolge
    containerScores.sort((a, b) => b.score - a.score);

    // Aktualisieren der Reihenfolge der Container im DOM entsprechend der sortierten Reihenfolge
    containerScores.forEach((container, index) => {
        const containerElement = document.getElementById(container.id);
        const textContainer = document.querySelector('.textContainer');
        textContainer.appendChild(containerElement); // Verschieben des Containers ans Ende der .textContainer
    });
}



async function fetchData1 (){
    try{

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander")

        if(!response.ok) {
            throw new Error("konnte nicht fetch");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("Image3");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"
    }
    catch(error){
        console.log(error);
    }
}

async function fetchData2 (){
    try{

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmeleon")

        if(!response.ok) {
            throw new Error("konnte nicht fetch");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("Image2");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"
    }
    catch(error){
        console.log(error);
    }
}

async function fetchData3 (){
    try{

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard")

        if(!response.ok) {
            throw new Error("konnte nicht fetch");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("Image1");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"
    }
    catch(error){
        console.log(error);
    }
}