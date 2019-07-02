namespace Aufgabe12 {
document.addEventListener("DOMContentLoaded", init);

export let crc: CanvasRenderingContext2D;
export let canvas: HTMLCanvasElement;
let theRightFishArray: theRightFish[] = [];
let theLeftFishArray: theLeftFish[] = [];
let bubbleArray: theBubble[] = [];
let foodArray: theFood[] = [];
let fps: number = 30;
let imageData: ImageData;



function init(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    canvas.addEventListener("click", placeFood);

    drawBackground()

    imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

    for (let i: number = 0; i < 10; i++) {
        let rightFish: theRightFish = new theRightFish();
        theRightFishArray.push(rightFish);
        rightFish.draw();
    }

    for (let i: number = 0; i < 7; i++) {
        let leftFish: theLeftFish = new theLeftFish();
        theLeftFishArray.push(leftFish);
        leftFish.draw();
    }
                     
    for (let i: number = 0; i < 30; i++) {
        let bubble: theBubble = new theBubble();
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

        let bottomFoodArray:number[] = [];

    for (let i: number = 0; i < foodArray.length; i++) {
        if (foodArray[i].y = canvas.height){
            bottomFoodArray.push(i);
        }
        foodArray[i].update();
    }

    for (let i: number = bottomFoodArray.length; i > 0; i--) {

        let r:number = i - 1;
        foodArray.splice(bottomFoodArray[r], 1);
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

function placeFood(_event: MouseEvent): void {
    console.log("Click");
    let xClick: number =  _event.clientX;
    let yClick: number =  _event.clientY;
    let food: theFood;
    food = new theFood();

    food.x = xClick;
    food.y = yClick;

    foodArray.push(food);
    food.draw();
}

}

