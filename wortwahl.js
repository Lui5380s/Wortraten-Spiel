// Liste aller Themen und Kategorien 
const Früchte = [
    { wort: "Apfel", hinweis: "Ein beliebtes Obst." },
    { wort: "Banane", hinweis: "Eine gelbe Frucht." },
    { wort: "Orange", hinweis: "Eine Zitrusfrucht." },
    { wort: "Kiwi", hinweis: "Eine kleine, grüne Frucht." },
    { wort: "Ananas", hinweis: "Eine tropische Frucht mit Stacheln." },
    { wort: "Mango", hinweis: "Eine exotische Frucht mit gelbem Fruchtfleisch." },
    { wort: "Pfirsich", hinweis: "Eine flaumige Frucht mit einem harten Kern." },
    { wort: "Birne", hinweis: "Eine birnenförmige Frucht mit süßem Geschmack." },
    { wort: "Kirsche", hinweis: "Eine kleine, rote Frucht mit einem Stein im Inneren." },
    { wort: "Erdbeere", hinweis: "Eine rote, saftige Frucht mit vielen kleinen Samen." }
];

const Sport = [
    { wort: "Fußball", hinweis: "Eine Ballsportart, die mit den Füßen gespielt wird." },
    { wort: "Karate", hinweis: "Eine Kampfkunst aus Japan." },
    { wort: "Golf", hinweis: "Ein Präzisionssport, bei dem ein Ball in ein Loch geschlagen wird." },
    { wort: "Boxen", hinweis: "Ein Kampfsport, bei dem zwei Personen gegeneinander kämpfen." },
    { wort: "Rudern", hinweis: "Eine Wassersportart, bei der ein Boot mit Rudern fortbewegt wird." },
    { wort: "Jogging", hinweis: "Eine Form des Laufens, oft als Ausdauersport betrieben." },
    { wort: "Tanzen", hinweis: "Eine künstlerische Bewegungsform, oft zur Musik ausgeführt." },
    { wort: "Hockey", hinweis: "Eine Mannschaftssportart, die mit einem Schläger und einem Ball gespielt wird." },
    { wort: "Klettern", hinweis: "Eine Sportart, bei der man auf Felsen oder künstlichen Kletterwänden klettert." },
    { wort: "Skaten", hinweis: "Eine Sportart, bei der man auf einem Brett fährt und Tricks macht." }
];

const Automarke = [
    { wort: "Toyota", hinweis: "Eine japanische Automarke, bekannt für ihre Zuverlässigkeit." },
    { wort: "BMW", hinweis: "Eine deutsche Automarke, die für ihre Luxusautos bekannt ist." },
    { wort: "Audi", hinweis: "Eine deutsche Automarke, die für ihre Premium-Autos bekannt ist." },
    { wort: "Honda", hinweis: "Eine japanische Automarke, die Motorräder und Autos herstellt." },
    { wort: "Lexus", hinweis: "Die Luxusmarke von Toyota, bekannt für ihre komfortablen Autos." },
    { wort: "Nissan", hinweis: "Eine japanische Automarke, die eine breite Palette von Autos anbietet." },
    { wort: "Subaru", hinweis: "Eine japanische Automarke, die für ihre Allradfahrzeuge bekannt ist." },
    { wort: "Suzuki", hinweis: "Eine japanische Automarke, die Motorräder, Autos und Außenbordmotoren herstellt." },
    { wort: "Dacia", hinweis: "Eine rumänische Automarke, die erschwingliche Autos produziert." },
    { wort: "Mazda", hinweis: "Eine japanische Automarke, bekannt für ihre sportlichen und eleganten Autos." }
];

const Musikrichtung = [
    { wort: "Klassik", hinweis: "Eine Musikrichtung, die traditionelle europäische Musik umfasst." },
    { wort: "Reggae", hinweis: "Eine Musikrichtung aus Jamaika, bekannt für ihre entspannten Rhythmen." },
    { wort: "Jazz", hinweis: "Eine improvisierte Musikrichtung, die oft mit Swing und Blues verbunden ist." },
    { wort: "Rock", hinweis: "Eine Musikrichtung, die durch harte Rhythmen und elektrische Gitarren geprägt ist." },
    { wort: "Pop", hinweis: "Eine populäre Musikrichtung, die für ihre eingängigen Melodien und Texte bekannt ist." },
    { wort: "Folk", hinweis: "Eine traditionelle Musikrichtung, die oft Geschichten aus dem täglichen Leben erzählt." },
    { wort: "Blues", hinweis: "Eine Musikrichtung, die aus den afroamerikanischen Arbeitsliedern hervorgegangen ist." },
    { wort: "Indie", hinweis: "Eine alternative Musikrichtung, die unabhängig von großen Plattenlabels produziert wird." },
    { wort: "Metal", hinweis: "Eine harte und laute Musikrichtung, bekannt für ihre verzerrten Gitarren und kraftvolle Vocals." },
    { wort: "Techno", hinweis: "Eine elektronische Musikrichtung, die durch repetitive Beats und Synthesizer-Klänge gekennzeichnet ist." }
];
    
    // Funktion, um eine zufällige Liste auszuwählen und ein zufälliges Wort aus dieser Liste zu wählen
    function zufälligesWort() {
        // Zufällige Liste auswählen
        const listenIndex = Math.floor(Math.random() * 4);
        let ausgewählteListe;
    
        switch (listenIndex) {
            case 0:
                ausgewählteListe = Früchte;
                break;
            case 1:
                ausgewählteListe = Sport;
                break;
            case 2:
                ausgewählteListe = Automarke;
                break;
            case 3:
                ausgewählteListe = Musikrichtung;
                break;
            default:
                ausgewählteListe = Automarke; // Falls ein ungültiger Index generiert wird, wähle Automarke als Standard
                break;
        }
    
        // Zufälliges Wort aus der ausgewählten Liste wählen
        const wortIndex = Math.floor(Math.random() * ausgewählteListe.length);
        const zufälligesWort = ausgewählteListe[wortIndex].wort.toLowerCase();
        const hinweis = ausgewählteListe[wortIndex].hinweis;
        
        // Hinweis nach 1 Sekunde ausgeben
        setTimeout(function() {
            alert(hinweis);
        }, 1000);
                
        return zufälligesWort;
    }
