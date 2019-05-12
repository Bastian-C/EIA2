"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // Importiere alle Inhalte aus "http" als Typ Http.
const Url = require("url");
{ // Erstelle Namespace "L05 Server"
    console.log("Starting server"); // "Starting server" wird auf der Console ausgegeben.
    let port = Number(process.env.PORT); // Variable "port" vom typ number wird erstellt und der Port zugewiesen, auf welchen der Server hören soll.
    if (!port) // Wenn port nicht der Fall sein soll, führe nächste Zeile aus.
        port = 8100; // port wird zu 8100
    let server = Http.createServer(); // Variable "server" vom Typ Http.Server erstellen und dieser Variable wird die Funktion createServer() zugewiesen. createServer() befindet sich in dem importierten Code.
    server.addListener("request", handleRequest); // "server" wird ein listener hinzugefügt. Der Listener hört auf einen request und führt handleRequest aus.
    server.addListener("listening", handleListen); // "server" wird ein listener hinzugefügt. Der Listener hört auf listening und führt handleListen aus.
    server.listen(port); // Listener wird erstellt. Er hört auf die oben definierte Variable "port".
    function handleListen() {
        console.log("Listening"); // "Listening" wird an die Console ausgegeben.
    } // Funktion handleListen schließen
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // "I hear voices!" wird an die Console ausgegeben.
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Header-Werte für ein Header-Objekt wird festgelegt. Preexistierender Header-Wert wird ersetzt 
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Header-Wert für Access Control wird festgelet. "*" lässt jeden Origin zu (anstelle von <origin> für spezifische Origins oder "null" für keinen möglichen Origin)
        _response.write("<h2>Order Recieved:</h2>");
        let url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write("<p>" + key + url.query[key] + "</p> <br>");
        //_response.end();									// Der Server erhält eine Bestätigung, dass der request vollständig ist.
    } // Funktion handleRequest schließen
} // Namespace "L05 Server" schließen
//# sourceMappingURL=Server.js.map