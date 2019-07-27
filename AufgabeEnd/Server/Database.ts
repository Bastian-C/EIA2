/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 * @adapted: Bastian Culig
 */
 

import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "Test";
let db: Mongo.Db;
let players: Mongo.Collection;

if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://FishConnect:connected@scorecluster-ixwp9.gcp.mongodb.net/FishTank";
    databaseName = "FishTank";
}

Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        players = db.collection("players");
    }
}

export function insert(_doc: PlayerScore): void {
    players.insertOne(_doc, handleInsert);
}

function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

export function findAll(_callback: Function): void {
    var cursor: Mongo.Cursor = players.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e: Mongo.MongoError, playerScoreArray: PlayerScore[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(playerScoreArray));
    }
}