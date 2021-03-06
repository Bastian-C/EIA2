/**
 * Simple server managing between client and database
 * @author: Jirka Dell'Oro-Friedl
 * @adapted: Bastian Culig
 */

import * as Http from "http";
import * as Url from "url";
import * as Database from "./Database";

console.log("Server starting");

let port: number = Number(process.env.PORT);
if (!port)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);

function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    let query: Leaderboard = <Leaderboard> Url.parse(_request.url, true).query;
    let command: string = query["command"];
    switch (command) {
        case "insert0":     
            let player0: PlayerScore = {
                playerName: query["player0"],
                score: parseInt(query["score0"])
            };
            Database.insert(player0);
                respond(_response, "storing data");
            break;

            case "insert1":     //2. insert for Multiplayer
            let player1: PlayerScore = {
                playerName: query["player1"],
                score: parseInt(query["score1"])
                };
                Database.insert(player1);
                respond(_response, "storing data");
            break;
        case "refresh":
            Database.findAll(findCallback);
            break;
        default:
            respond(_response, "unknown command: " + command);
            break;
            
    }
    function findCallback(json: string): void {
        respond(_response, json);
    }
}

function respond(_response: Http.ServerResponse, _text: string): void {
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.end();
}