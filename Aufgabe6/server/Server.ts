import * as Http from "http"; // Importiere alle Inhalte aus "http" als Typ Http.

namespace L05_Server {										// Erstelle Namespace "L05 Server"
	console.log("Starting server");							// "Starting server" wird auf der Console ausgegeben.
	let port: number = Number(process.env.PORT);			// Variable "port" vom typ number wird erstellt und der Port zugewiesen, auf welchen der Server hören soll.
	if (!port)												// Wenn port nicht der Fall sein soll, führe nächste Zeile aus.
		port = 8100;										// port wird zu 8100

	let server: Http.Server = Http.createServer();			// Variable "server" vom Typ Http.Server erstellen und dieser Variable wird die Funktion createServer() zugewiesen. createServer() befindet sich in dem importierten Code.
	server.addListener("request", handleRequest);			// "server" wird ein listener hinzugefügt. Der Listener hört auf einen request und führt handleRequest aus.
	server.addListener("listening", handleListen);			// "server" wird ein listener hinzugefügt. Der Listener hört auf listening und führt handleListen aus.
	server.listen(port);									// Listener wird erstellt. Er hört auf die oben definierte Variable "port".

	function handleListen(): void {							// Funktion handleListen wird definiert. Übergabeparameter: None. Rückgabewert: None. 
		console.log("Listening");							// "Listening" wird an die Console ausgegeben.
	}														// Funktion handleListen schließen

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { 	// Funktion handleRequest wird definiert. Übergabeparameter: _request und _response. Rückgabewert: None. 
		console.log("I hear voices!"); 						// "I hear voices!" wird an die Console ausgegeben.

		_response.setHeader("content-type", "text/html; charset=utf-8");							// Header-Werte für ein Header-Objekt wird festgelegt. Preexistierender Header-Wert wird ersetzt 
		_response.setHeader("Access-Control-Allow-Origin", "*");									// Header-Wert für Access Control wird festgelet. "*" lässt jeden Origin zu (anstelle von <origin> für spezifische Origins oder "null" für keinen möglichen Origin)

		_response.write(_request.url);						// Vom Server wurde eine URL empfangen, die ins _response geschrieben wird 

		_response.end();									// Der Server erhält eine Bestätigung, dass der request vollständig ist.
	}														// Funktion handleRequest schließen
}															// Namespace "L05 Server" schließen