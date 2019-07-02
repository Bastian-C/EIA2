var Aufgabe12;
(function (Aufgabe12) {
    document.addEventListener("DOMContentLoaded", init);
    let theRightFishArray = [];
    let theLeftFishArray = [];
    let bubbleArray = [];
    let foodArray = [];
    let fps = 30;
    let imageData;
    function init() {
        Aufgabe12.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe12.crc = Aufgabe12.canvas.getContext("2d");
        Aufgabe12.canvas.addEventListener("click", placeFood);
        drawBackground();
        imageData = Aufgabe12.crc.getImageData(0, 0, Aufgabe12.canvas.width, Aufgabe12.canvas.height);
        for (let i = 0; i < 10; i++) {
            let rightFish = new Aufgabe12.theRightFish();
            theRightFishArray.push(rightFish);
            rightFish.draw();
        }
        for (let i = 0; i < 7; i++) {
            let leftFish = new Aufgabe12.theLeftFish();
            theLeftFishArray.push(leftFish);
            leftFish.draw();
        }
        for (let i = 0; i < 30; i++) {
            let bubble = new Aufgabe12.theBubble();
            bubbleArray.push(bubble);
            bubble.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe12.crc.clearRect(0, 0, Aufgabe12.canvas.width, Aufgabe12.canvas.height);
        Aufgabe12.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < theRightFishArray.length; i++) {
            theRightFishArray[i].update();
        }
        for (let i = 0; i < theLeftFishArray.length; i++) {
            theLeftFishArray[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        let bottomFoodArray = [];
        for (let i = 0; i < foodArray.length; i++) {
            if (foodArray[i].y = Aufgabe12.canvas.height) {
                bottomFoodArray.push(i);
            }
            foodArray[i].update();
        }
        for (let i = bottomFoodArray.length; i > 0; i--) {
            let r = i - 1;
            foodArray.splice(bottomFoodArray[r], 1);
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
        let food;
        food = new Aufgabe12.theFood();
        food.x = xClick;
        food.y = yClick;
        foodArray.push(food);
        food.draw();
    }
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=main.js.map