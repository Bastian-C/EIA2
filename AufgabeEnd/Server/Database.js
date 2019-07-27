"use strict";
/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 * @adapted: Bastian Culig
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "Test";
let db;
let players;
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://FishConnect:connected@scorecluster-ixwp9.gcp.mongodb.net/FishTank";
    databaseName = "FishTank";
}
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        players = db.collection("players");
    }
}
function insert(_doc) {
    players.insertOne(_doc, handleInsert);
}
exports.insert = insert;
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
function findAll(_callback) {
    var cursor = players.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, playerScoreArray) {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(playerScoreArray));
    }
}
exports.findAll = findAll;
//# sourceMappingURL=Database.js.map