// Liste aller Themen und Kategorien
// Regeln für neue Wörter: 3–9 Buchstaben (mehr passen nicht ins Anzeigefeld),
// keine Umlaute oder ß, und der Hinweis darf das Wort selbst nicht enthalten
const Kategorien = [
    {
        name: "Früchte",
        woerter: [
            { wort: "Apfel", hinweis: "Hängt rot oder grün am Baum und hält angeblich den Doktor fern." },
            { wort: "Banane", hinweis: "Krumm, gelb und bei Affen besonders beliebt." },
            { wort: "Orange", hinweis: "Eine Zitrusfrucht, deren Name gleichzeitig eine Farbe ist." },
            { wort: "Kiwi", hinweis: "Außen braun und pelzig, innen grün mit kleinen schwarzen Kernen." },
            { wort: "Ananas", hinweis: "Tropische Frucht mit schuppiger Schale und einer Blätterkrone." },
            { wort: "Mango", hinweis: "Tropische Steinfrucht mit orangem, süßem Fruchtfleisch." },
            { wort: "Pfirsich", hinweis: "Samtige Haut, großer Kern – eng verwandt mit der Nektarine." },
            { wort: "Birne", hinweis: "Obst mit der Form einer altmodischen Glühlampe." },
            { wort: "Kirsche", hinweis: "Klein, rot, mit Stein – hängt oft paarweise am Stiel." },
            { wort: "Erdbeere", hinweis: "Rote Frucht, die ihre kleinen Samen außen trägt." },
            { wort: "Zitrone", hinweis: "Gelb und so sauer, dass man das Gesicht verzieht." },
            { wort: "Melone", hinweis: "Groß, rund und sehr wasserreich – perfekt für den Sommer." }
        ]
    },
    {
        name: "Sportarten",
        woerter: [
            { wort: "Tennis", hinweis: "Zwei Schläger, ein Netz und ein gelber Filzball." },
            { wort: "Karate", hinweis: "Japanische Kampfkunst, in der man farbige Gürtel erreicht." },
            { wort: "Golf", hinweis: "Mit möglichst wenigen Schlägen den Ball ins Loch bringen." },
            { wort: "Boxen", hinweis: "Kampfsport im Ring, bei dem man dicke Handschuhe trägt." },
            { wort: "Rudern", hinweis: "Wassersport, bei dem man rückwärts sitzt und trotzdem vorwärtskommt." },
            { wort: "Handball", hinweis: "Hallensport, bei dem sieben Spieler pro Team den Ball ins Tor werfen." },
            { wort: "Hockey", hinweis: "Mit einem gebogenen Schläger wird ein Ball oder Puck ins Tor gespielt." },
            { wort: "Klettern", hinweis: "Mit Seil und Gurt geht es die Wand hinauf." },
            { wort: "Surfen", hinweis: "Auf einem Brett die Welle reiten." },
            { wort: "Schwimmen", hinweis: "Kraul, Brust oder Rücken – Hauptsache im Wasser." },
            { wort: "Reiten", hinweis: "Sport, bei dem ein Pferd dein Partner ist." },
            { wort: "Fechten", hinweis: "Kampfsport mit Degen, Florett oder Säbel." }
        ]
    },
    {
        name: "Automarken",
        woerter: [
            { wort: "Toyota", hinweis: "Größter japanischer Autohersteller, bekannt für den Hybrid Prius." },
            { wort: "BMW", hinweis: "Deutsche Marke aus München mit blau-weißem Logo." },
            { wort: "Audi", hinweis: "Deutsche Marke aus Ingolstadt – das Logo besteht aus vier Ringen." },
            { wort: "Porsche", hinweis: "Sportwagenbauer aus Stuttgart, berühmt für den 911." },
            { wort: "Ferrari", hinweis: "Rote Sportwagen aus Italien mit einem springenden Pferd im Logo." },
            { wort: "Tesla", hinweis: "US-Hersteller von Elektroautos, benannt nach einem Erfinder." },
            { wort: "Volvo", hinweis: "Schwedische Marke, die besonders für Sicherheit bekannt ist." },
            { wort: "Fiat", hinweis: "Italienische Marke, deren kleiner 500er Kultstatus hat." },
            { wort: "Opel", hinweis: "Deutsche Marke aus Rüsselsheim mit einem Blitz im Logo." },
            { wort: "Mercedes", hinweis: "Deutsche Luxusmarke mit einem Stern als Logo." },
            { wort: "Dacia", hinweis: "Rumänische Marke, bekannt für günstige Autos wie den Duster." },
            { wort: "Mazda", hinweis: "Japanische Marke, deren Roadster MX-5 weltweit Kult ist." }
        ]
    },
    {
        name: "Musikrichtungen",
        woerter: [
            { wort: "Klassik", hinweis: "Die Musik von Mozart, Beethoven und Bach." },
            { wort: "Reggae", hinweis: "Entspannte Musik aus Jamaika – Bob Marley ist ihr größter Star." },
            { wort: "Jazz", hinweis: "Improvisierte Musik mit Saxofon, entstanden in New Orleans." },
            { wort: "Rock", hinweis: "Laute E-Gitarren und Schlagzeug – wie bei AC/DC oder den Rolling Stones." },
            { wort: "Pop", hinweis: "Eingängige Chart-Hits, wie sie Taylor Swift oder Dua Lipa singen." },
            { wort: "Blues", hinweis: "Melancholische Musik aus den Südstaaten der USA, Vorläufer des Rock." },
            { wort: "Metal", hinweis: "Verzerrte Gitarren, Headbangen und Bands wie Iron Maiden." },
            { wort: "Techno", hinweis: "Elektronische Musik mit stampfendem Beat – Berlin gilt als ihre Hauptstadt." },
            { wort: "Rap", hinweis: "Sprechgesang über einen Beat, Teil der Hip-Hop-Kultur." },
            { wort: "Schlager", hinweis: "Deutsche Stimmungsmusik – Helene Fischer ist die Königin des Genres." },
            { wort: "Punk", hinweis: "Schnell, laut und rebellisch – mit Iro, Lederjacke und den Sex Pistols." },
            { wort: "Country", hinweis: "Musik mit Cowboyhut und Gitarre aus dem Süden der USA." }
        ]
    },
    {
        name: "Tiere",
        woerter: [
            { wort: "Elefant", hinweis: "Das größte Landtier, mit Rüssel und Stoßzähnen." },
            { wort: "Giraffe", hinweis: "Das höchste Tier der Welt mit einem sehr langen Hals." },
            { wort: "Pinguin", hinweis: "Schwarz-weißer Vogel, der nicht fliegen, aber toll schwimmen kann." },
            { wort: "Delfin", hinweis: "Kluges Meeressäugetier, das sich mit Klicklauten verständigt." },
            { wort: "Tiger", hinweis: "Die größte Raubkatze der Welt, mit orange-schwarzen Streifen." },
            { wort: "Koala", hinweis: "Australisches Beuteltier, das fast nur Eukalyptus frisst." },
            { wort: "Eule", hinweis: "Nachtaktiver Vogel, der seinen Kopf sehr weit drehen kann." },
            { wort: "Zebra", hinweis: "Afrikanisches Wildpferd mit schwarz-weißen Streifen." },
            { wort: "Krokodil", hinweis: "Gepanzertes Reptil mit starkem Gebiss, das im Wasser lauert." },
            { wort: "Hamster", hinweis: "Kleines Nagetier, das Futter in seinen Backentaschen hortet." },
            { wort: "Papagei", hinweis: "Bunter Vogel, der menschliche Wörter nachsprechen kann." },
            { wort: "Kamel", hinweis: "Wüstentier mit Höckern, das lange ohne Wasser auskommt." }
        ]
    },
    {
        name: "Länder",
        woerter: [
            { wort: "Spanien", hinweis: "Land von Flamenco und Paella, Hauptstadt Madrid." },
            { wort: "Italien", hinweis: "Stiefelförmiges Land, Heimat von Pizza und Pasta." },
            { wort: "Japan", hinweis: "Inselstaat in Asien mit dem Berg Fuji und Sushi." },
            { wort: "Brasilien", hinweis: "Größtes Land Südamerikas, bekannt für Karneval und Samba." },
            { wort: "Kanada", hinweis: "Zweitgrößtes Land der Welt, mit einem Ahornblatt auf der Flagge." },
            { wort: "Mexiko", hinweis: "Land von Tacos, Sombreros und Maya-Pyramiden." },
            { wort: "Norwegen", hinweis: "Skandinavisches Land mit Fjorden und Polarlichtern." },
            { wort: "Indien", hinweis: "Bevölkerungsreichstes Land der Welt, Heimat des Taj Mahal." },
            { wort: "Polen", hinweis: "Östliches Nachbarland Deutschlands, Hauptstadt Warschau." },
            { wort: "Irland", hinweis: "Die Grüne Insel, bekannt für Kobolde und den St. Patrick's Day." },
            { wort: "Kenia", hinweis: "Ostafrikanisches Land, berühmt für Safaris und Langstreckenläufer." },
            { wort: "Portugal", hinweis: "Westlichstes Land des europäischen Festlands, Hauptstadt Lissabon." }
        ]
    }
];

let letztesWort = ""; // Verhindert, dass dasselbe Wort zweimal hintereinander kommt

// Funktion, um eine zufällige Kategorie und daraus ein zufälliges Wort zu wählen
function zufälligesWort() {
    let kategorie;
    let eintrag;

    do {
        kategorie = Kategorien[Math.floor(Math.random() * Kategorien.length)];
        eintrag = kategorie.woerter[Math.floor(Math.random() * kategorie.woerter.length)];
    } while (eintrag.wort === letztesWort);

    letztesWort = eintrag.wort;

    // Hinweis nach 1 Sekunde ausgeben
    setTimeout(function() {
        showHint(eintrag.hinweis, kategorie.name);
        let audio = new Audio ('sounds/mixkit-arcade-bonus-alert-767.wav');
        audio.play();
    }, 1000);

    return eintrag.wort.toLowerCase();
}
