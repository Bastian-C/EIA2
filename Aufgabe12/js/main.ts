namespace Aufgabe11 {
document.addEventListener("DOMContentLoaded", init);

export let crc: CanvasRenderingContext2D;
export let canvas: HTMLCanvasElement;
let theRightFishArray: theRightFish[] = [];
let theLeftFishArray: theLeftFish[] = [];
let bubbleArray: theBubble[] = [];
let fps: number = 30;
let imageData: ImageData;



function init(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");

    drawBackground()

    imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

    for (let i: number = 0; i < 10; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let rightFishSpeed: number = (Math.random() * 4 + 3);

        let rightFish: theRightFish;
        rightFish = new theRightFish();
        rightFish.x = x;
        rightFish.y = y;
        rightFish.dx = rightFishSpeed;
        theRightFishArray.push(rightFish);
        rightFish.draw();
    }

    for (let i: number = 0; i < 7; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let leftFishSpeed: number = Math.random() * -5 - 2  ;

        let leftFish: theLeftFish;
        leftFish = new theLeftFish();
        leftFish.x = x;
        leftFish.y = y;
        leftFish.dx = leftFishSpeed;
        theLeftFishArray.push(leftFish);
        leftFish.draw();
    }

                                
    for (let i: number = 0; i < 30; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let bubbleSpeed: number = Math.random() * -3 - 1;

        let bubble: theBubble;
        bubble = new theBubble();
        bubble.x = x;
        bubble.y = y;
        bubble.dy = bubbleSpeed;
        bubbleArray.push(bubble);
        bubble.draw();
    }
    update()
}

function update(): void {
    window.setTimeout(update, 1000 / fps);
    crc.clearRect(0, 0, canvas.width, canvas.height);
    crc.putImageData(imageData, 0, 0);

    for (let i: number = 0; i < theRightFishArray.length; i++) {
        theRightFishArray[i].update();
    }

    for (let i: number = 0; i < theLeftFishArray.length; i++) {
        theLeftFishArray[i].update();
    }

    for (let i: number = 0; i < bubbleArray.length; i++) {
        bubbleArray[i].update();
    }
}

function drawBackground(){
    drawWater();
    drawGround();
    drawRock(30, 400);
    drawRock(500, 460);

    for (let i: number = 0; i < 1000; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * 600 + 400;
        drawStones(x, y);
    }

    for (let i: number = 0; i < 102; i++) {
        let p: number = Math.random() * canvas.width;
        let l: number = Math.random() * 500+450; 
        drawPlants(p, l);
    }

}


function drawStones(_x: number, _y: number): void {
    let stones: Path2D = new Path2D();
    stones.ellipse(_x, _y, Math.random() * 5+2, 8, 1.7, 0, 2 * Math.PI);
    crc.fillStyle = "#383532ef";
    crc.fill(stones);
}

function drawPlants(_x: number, _y: number): void {
    let plant1: Path2D = new Path2D();
    plant1.moveTo(_x - 20, _y + 80);
    plant1.lineTo(_x - 20, _y + 40);
    plant1.lineTo(_x - 90, _y - 160);
    plant1.closePath();
    crc.fillStyle = "#76b67fef";
    crc.fill(plant1);
    crc.strokeStyle = "#416345ef";
    crc.stroke(plant1);
}

function drawWater(): void {
    let water: Path2D = new Path2D();
    crc.rect(0, 0, 900, 500);
    crc.fillStyle = "#573FFF";
    crc.fill();
}

function drawGround(): void {
    let ground: Path2D = new Path2D();
    ground.rect(0, 400, 900, 100);
    crc.fillStyle = "#614f3fef";
    crc.fill(ground);
}


function drawRock(_x: number, _y: number): void {
    let theRock: Path2D = new Path2D();
    theRock.moveTo(_x + 80, _y + 35);
    theRock.bezierCurveTo(_x + 300, _y + 30, _x + 300, _y + 10, _x + 100, _y + 5);
    theRock.bezierCurveTo(_x + 5, _y + 30, _x + 95, _y + 45, _x + 60, _y + 35);
    crc.strokeStyle = "#181818";
    crc.stroke(theRock);
    crc.fillStyle = "#504f4f";
    crc.fill(theRock);
}

}