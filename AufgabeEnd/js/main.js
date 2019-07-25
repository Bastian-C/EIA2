var Aufgabe12;
(function (Aufgabe12) {
    document.addEventListener("DOMContentLoaded", init);
    let theRightFishArray = [];
    let theLeftFishArray = [];
    let playerFishArray = [];
    let playerNameArray = [];
    let playerScoreArray = [];
    let bubbleArray = [];
    let foodArray = [];
    let bottomFoodArray = [];
    let fps = 30;
    let imageData;
    let gameInProgress = true;
    function init() {
        let playerNumberString = prompt("Please enter the amount of Players (1 or 2)", "1");
        while (playerNumberString != "1" && playerNumberString != "2") {
            alert("Either chose Singleplayer (1) or Multiplayer (2)");
            playerNumberString = prompt("Please enter the amount of Players (1 or 2)", "1");
        }
        let playerNumber = parseInt(playerNumberString, 10);
        let person1 = prompt("Player 1: Please enter your name(Maximum limit 12)", "Player1");
        while (person1.length > 12) {
            alert("Keep the Playername to 12 chars or less");
            person1 = prompt("Player 1: Please enter your name(Maximum limit 12)", "Player1");
        }
        playerNameArray.push(person1);
        playerScoreArray.push(0);
        if (playerNumber == 2) {
            let person2 = prompt("Player 2: Please enter your name(Maximum limit 12)", "Player2");
            while (person2.length > 12) {
                alert("Keep the message length to 12 chars or less");
                person2 = prompt("Player 2: Please enter your name(Maximum limit 12)", "Player2");
            }
            playerNameArray.push(person2);
            playerScoreArray.push(0);
        }
        Aufgabe12.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe12.crc = Aufgabe12.canvas.getContext("2d");
        Aufgabe12.canvas.addEventListener("click", placeFood);
        addEventListener("keydown", activateAcc);
        addEventListener("keyup", deactivateAcc);
        drawBackground();
        imageData = Aufgabe12.crc.getImageData(0, 0, Aufgabe12.canvas.width, Aufgabe12.canvas.height);
        for (let i = 0; i < 14; i++) {
            let x = Aufgabe12.canvas.width;
            let y = Math.random() * Aufgabe12.canvas.height;
            let s = (Math.random() * 3 + 4) / 10;
            let rightFish = new Aufgabe12.theRightFish(x, y, s);
            theRightFishArray.push(rightFish);
            rightFish.draw();
        }
        for (let i = 0; i < 10; i++) {
            let x = Aufgabe12.canvas.width;
            let y = Math.random() * Aufgabe12.canvas.height;
            let s = (Math.random() * 4 + 8) / 10;
            let leftFish = new Aufgabe12.theLeftFish(x, y, s);
            theLeftFishArray.push(leftFish);
            leftFish.draw();
        }
        for (let i = 0; i < playerNumber; i++) {
            let x = Aufgabe12.canvas.width / 2;
            let y = Aufgabe12.canvas.height / 2;
            let s = 0.8;
            let thePlayerFish = new Aufgabe12.playerFish(x, y, s);
            playerFishArray.push(thePlayerFish);
            thePlayerFish.draw();
        }
        for (let i = 0; i < 30; i++) {
            let bubble = new Aufgabe12.theBubble();
            bubbleArray.push(bubble);
            bubble.draw();
        }
        update();
    }
    function update() {
        if (playerFishArray.length > 0 || (theLeftFishArray.length != 0 && theLeftFishArray.length != 0)) {
            window.setTimeout(update, 1000 / fps);
            Aufgabe12.crc.clearRect(0, 0, Aufgabe12.canvas.width, Aufgabe12.canvas.height);
            Aufgabe12.crc.putImageData(imageData, 0, 0);
        }
        for (let i = 0; i < theRightFishArray.length; i++) {
            theRightFishArray[i].update();
        }
        for (let i = 0; i < theLeftFishArray.length; i++) {
            theLeftFishArray[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        for (let i = 0; i < foodArray.length; i++) {
            if (foodArray[i].y > Aufgabe12.canvas.height) {
                bottomFoodArray.push(i);
            }
            foodArray[i].update();
        }
        for (let i = bottomFoodArray.length; i > 0; i--) {
            let r = i - 1;
            foodArray.splice(bottomFoodArray[r], 1);
        }
        bottomFoodArray = [];
        for (let i = 0; i < playerFishArray.length; i++) {
            playerScoreArray[i] = playerFishArray[i].size * 100;
            playerFishArray[i].update();
        }
        colide();
        if ((playerFishArray.length == 0 || (theLeftFishArray.length == 0 && theLeftFishArray.length == 0)) && gameInProgress == true) {
            insert();
            refresh();
            gameInProgress = false; //Verhindert multible Speicherung
        }
    }
    function colide() {
        for (let i = 0; i < playerFishArray.length; i++) {
            let deletionArray = [];
            for (let n = 0; n < theRightFishArray.length; n++) {
                let distance = Math.sqrt(((playerFishArray[i].x - theRightFishArray[n].x) * (playerFishArray[i].x - theRightFishArray[n].x)) + ((playerFishArray[i].y - theRightFishArray[n].y) * (playerFishArray[i].y - theRightFishArray[n].y)));
                let sizeDif = ((playerFishArray[i].size * 25) + (theRightFishArray[n].size * 25));
                if (distance < sizeDif) {
                    deletionArray.push(n);
                }
            }
            if (deletionArray.length > 0) {
                for (let d = deletionArray.length; d > 0; d--) {
                    let r = d - 1;
                    if (playerFishArray[i].size >= theRightFishArray[deletionArray[r]].size) {
                        playerFishArray[i].size += theRightFishArray[deletionArray[r]].size / 10;
                        theRightFishArray.splice(deletionArray[r], 1);
                    }
                    else {
                        console.log("Game OVER!");
                    }
                }
            }
            deletionArray = [];
            for (let n = 0; n < theLeftFishArray.length; n++) {
                let distance = Math.sqrt(((playerFishArray[i].x - theLeftFishArray[n].x) * (playerFishArray[i].x - theLeftFishArray[n].x)) + ((playerFishArray[i].y - theLeftFishArray[n].y) * (playerFishArray[i].y - theLeftFishArray[n].y)));
                let sizeDif = ((playerFishArray[i].size * 25) + (theLeftFishArray[n].size * 25));
                if (distance < sizeDif) {
                    deletionArray.push(n);
                }
            }
            if (deletionArray.length > 0) {
                for (let d = deletionArray.length; d > 0; d--) {
                    let r = d - 1;
                    if (playerFishArray[i].size >= theLeftFishArray[deletionArray[r]].size) {
                        playerFishArray[i].size += theLeftFishArray[deletionArray[r]].size / 10;
                        theLeftFishArray.splice(deletionArray[r], 1);
                    }
                    else {
                        playerFishArray.splice(i, 1);
                        console.log("Game OVER!");
                    }
                }
            }
            deletionArray = [];
        }
    }
    function drawBackground() {
        drawWater();
        drawGround();
        drawRock(30, 400);
        drawRock(500, 460);
        for (let i = 0; i < 1000; i++) {
            let x = Math.random() * Aufgabe12.canvas.width;
            let y = Math.random() * 600 + 400;
            drawStones(x, y);
        }
        for (let i = 0; i < 102; i++) {
            let p = Math.random() * Aufgabe12.canvas.width;
            let l = Math.random() * 500 + 450;
            drawPlants(p, l);
        }
    }
    function drawStones(_x, _y) {
        let stones = new Path2D();
        stones.ellipse(_x, _y, Math.random() * 5 + 2, 8, 1.7, 0, 2 * Math.PI);
        Aufgabe12.crc.fillStyle = "#383532ef";
        Aufgabe12.crc.fill(stones);
    }
    function drawPlants(_x, _y) {
        let plant1 = new Path2D();
        plant1.moveTo(_x - 20, _y + 80);
        plant1.lineTo(_x - 20, _y + 40);
        plant1.lineTo(_x - 90, _y - 160);
        plant1.closePath();
        Aufgabe12.crc.fillStyle = "#76b67fef";
        Aufgabe12.crc.fill(plant1);
        Aufgabe12.crc.strokeStyle = "#416345ef";
        Aufgabe12.crc.stroke(plant1);
    }
    function drawWater() {
        Aufgabe12.crc.rect(0, 0, 900, 500);
        Aufgabe12.crc.fillStyle = "#573FFF";
        Aufgabe12.crc.fill();
    }
    function drawGround() {
        let ground = new Path2D();
        ground.rect(0, 400, 900, 100);
        Aufgabe12.crc.fillStyle = "#614f3fef";
        Aufgabe12.crc.fill(ground);
    }
    function drawRock(_x, _y) {
        let theRock = new Path2D();
        theRock.moveTo(_x + 80, _y + 35);
        theRock.bezierCurveTo(_x + 300, _y + 30, _x + 300, _y + 10, _x + 100, _y + 5);
        theRock.bezierCurveTo(_x + 5, _y + 30, _x + 95, _y + 45, _x + 60, _y + 35);
        Aufgabe12.crc.strokeStyle = "#181818";
        Aufgabe12.crc.stroke(theRock);
        Aufgabe12.crc.fillStyle = "#504f4f";
        Aufgabe12.crc.fill(theRock);
    }
    function placeFood(_event) {
        console.log("Click");
        let xClick = _event.clientX;
        let yClick = _event.clientY;
        let food = new Aufgabe12.theFood(xClick, yClick);
        foodArray.push(food);
        food.draw();
    }
    function activateAcc(_event) {
        let key_press = _event.which;
        if (key_press == 87) {
            playerFishArray[0].dUp = true;
        }
        if (key_press == 65) {
            playerFishArray[0].dLeft = true;
        }
        if (key_press == 83) {
            playerFishArray[0].dDown = true;
        }
        if (key_press == 68) {
            playerFishArray[0].dRight = true;
        }
        if (key_press == 38 && playerNameArray.length == 2) {
            playerFishArray[1].dUp = true;
        }
        if (key_press == 37 && playerNameArray.length == 2) {
            playerFishArray[1].dLeft = true;
        }
        if (key_press == 40 && playerNameArray.length == 2) {
            playerFishArray[1].dDown = true;
        }
        if (key_press == 39 && playerNameArray.length == 2) {
            playerFishArray[1].dRight = true;
        }
    }
    function deactivateAcc(_event) {
        let key_lift = _event.which;
        if (key_lift == 87) {
            playerFishArray[0].dUp = false;
        }
        if (key_lift == 65) {
            playerFishArray[0].dLeft = false;
        }
        if (key_lift == 83) {
            playerFishArray[0].dDown = false;
        }
        if (key_lift == 68) {
            playerFishArray[0].dRight = false;
        }
        if (key_lift == 38 && playerNameArray.length == 2) {
            playerFishArray[1].dUp = false;
        }
        if (key_lift == 37 && playerNameArray.length == 2) {
            playerFishArray[1].dLeft = false;
        }
        if (key_lift == 40 && playerNameArray.length == 2) {
            playerFishArray[1].dDown = false;
        }
        if (key_lift == 39 && playerNameArray.length == 2) {
            playerFishArray[1].dRight = false;
        }
    }
    //--------------------------------------------------------------------------- DATABASE --------------------------------------------------------------------------------
    let serverAddress = "https://server-eia2-bc.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        for (let i = 0; i < playerNameArray.length; i++) {
            query += "&player" + i + "=" + playerNameArray[i];
            query += "&score" + i + "=" + playerScoreArray[i];
        }
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=main.js.map