var Aufgabe12;
(function (Aufgabe12) {
    document.addEventListener("DOMContentLoaded", init);
    var theRightFishArray = [];
    var theLeftFishArray = [];
    var bubbleArray = [];
    var foodArray = [];
    var fps = 30;
    var imageData;
    function init() {
        Aufgabe12.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe12.crc = Aufgabe12.canvas.getContext("2d");
        Aufgabe12.canvas.addEventListener("click", placeFood);
        drawBackground();
        imageData = Aufgabe12.crc.getImageData(0, 0, Aufgabe12.canvas.width, Aufgabe12.canvas.height);
        for (var i = 0; i < 10; i++) {
            var x = Math.random() * Aufgabe12.canvas.width;
            var y = Math.random() * Aufgabe12.canvas.height;
            var rightFishSpeed = (Math.random() * 4 + 3);
            var rightFish = void 0;
            rightFish = new Aufgabe12.theRightFish();
            rightFish.x = x;
            rightFish.y = y;
            rightFish.dx = rightFishSpeed;
            theRightFishArray.push(rightFish);
            rightFish.draw();
        }
        for (var i = 0; i < 7; i++) {
            var x = Math.random() * Aufgabe12.canvas.width;
            var y = Math.random() * Aufgabe12.canvas.height;
            var leftFishSpeed = Math.random() * -5 - 2;
            var leftFish = void 0;
            leftFish = new Aufgabe12.theLeftFish();
            leftFish.x = x;
            leftFish.y = y;
            leftFish.dx = leftFishSpeed;
            theLeftFishArray.push(leftFish);
            leftFish.draw();
        }
        for (var i = 0; i < 30; i++) {
            var x = Math.random() * Aufgabe12.canvas.width;
            var y = Math.random() * Aufgabe12.canvas.height;
            var bubbleSpeed = Math.random() * -3 - 1;
            var bubble = void 0;
            bubble = new Aufgabe12.theBubble();
            bubble.x = x;
            bubble.y = y;
            bubble.dy = bubbleSpeed;
            bubbleArray.push(bubble);
            bubble.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe12.crc.clearRect(0, 0, Aufgabe12.canvas.width, Aufgabe12.canvas.height);
        Aufgabe12.crc.putImageData(imageData, 0, 0);
        for (var i = 0; i < theRightFishArray.length; i++) {
            theRightFishArray[i].update();
        }
        for (var i = 0; i < theLeftFishArray.length; i++) {
            theLeftFishArray[i].update();
        }
        for (var i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        var bottomFoodArray = [];
        for (var i = 0; i < foodArray.length; i++) {
            if (foodArray[i].y = Aufgabe12.canvas.height) {
                bottomFoodArray.push(i);
            }
            foodArray[i].update();
        }
        for (var i = bottomFoodArray.length; i > 0; i--) {
            var r = i - 1;
            foodArray.splice(bottomFoodArray[r], 1);
        }
    }
    function drawBackground() {
        drawWater();
        drawGround();
        drawRock(30, 400);
        drawRock(500, 460);
        for (var i = 0; i < 1000; i++) {
            var x = Math.random() * Aufgabe12.canvas.width;
            var y = Math.random() * 600 + 400;
            drawStones(x, y);
        }
        for (var i = 0; i < 102; i++) {
            var p = Math.random() * Aufgabe12.canvas.width;
            var l = Math.random() * 500 + 450;
            drawPlants(p, l);
        }
    }
    function drawStones(_x, _y) {
        var stones = new Path2D();
        stones.ellipse(_x, _y, Math.random() * 5 + 2, 8, 1.7, 0, 2 * Math.PI);
        Aufgabe12.crc.fillStyle = "#383532ef";
        Aufgabe12.crc.fill(stones);
    }
    function drawPlants(_x, _y) {
        var plant1 = new Path2D();
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
        var water = new Path2D();
        Aufgabe12.crc.rect(0, 0, 900, 500);
        Aufgabe12.crc.fillStyle = "#573FFF";
        Aufgabe12.crc.fill();
    }
    function drawGround() {
        var ground = new Path2D();
        ground.rect(0, 400, 900, 100);
        Aufgabe12.crc.fillStyle = "#614f3fef";
        Aufgabe12.crc.fill(ground);
    }
    function drawRock(_x, _y) {
        var theRock = new Path2D();
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
        var xClick = _event.clientX;
        var yClick = _event.clientY;
        var speedFood = Math.random() * -3 - 1;
        var crisp = new Aufgabe12.theFood(xClick, yClick, speedFood);
        foodArray.push(crisp);
        crisp.draw();
        update();
    }
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=main.js.map