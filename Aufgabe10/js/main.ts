document.addEventListener("DOMContentLoaded", init);
let crc: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;

function init(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");

    water();
    ground();
    rock(30, 400);
    rock(500, 460);

    for (let i: number = 0; i < 1000; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * 600 + 400;
        stones(x, y);
    }

    for (let i: number = 0; i < 51; i++) {
        let p: number = Math.random() * canvas.width;
        let l: number = Math.random() * 500+450; 
        plants(p, l);
    }

    for (let i: number = 0; i < 5; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        RightFish(x, y);
    }

    for (let i: number = 0; i < 5; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        LeftFish(x, y);
    }


    for (let i: number = 0; i < 15; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        bubbles(x, y);
    }

    for (let i: number = 0; i < 51; i++) {
        let p: number = Math.random() * canvas.width;
        let l: number = Math.random() * 500+450; 
        plants(p, l);
    }
}


function stones(_x: number, _y: number): void {
    let stones: Path2D = new Path2D();
    stones.ellipse(_x, _y, Math.random() * 5+2, 8, 1.7, 0, 2 * Math.PI);
    crc.fillStyle = "#383532ef";
    crc.fill(stones);
}

function plants(_x: number, _y: number): void {
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

function water(): void {
    let water: Path2D = new Path2D();
    crc.rect(0, 0, 900, 500);
    crc.fillStyle = "#573FFF";
    crc.fill();
}

function ground(): void {
    let ground: Path2D = new Path2D();
    ground.rect(0, 400, 900, 100);
    crc.fillStyle = "#614f3fef";
    crc.fill(ground);
}

function bubbles(_x: number, _y: number): void {
    let bubble: Path2D = new Path2D();
    bubble.arc(_x, _y, Math.random() * 7+3, 0, 2 * Math.PI);
    crc.strokeStyle = "#bfecffef";
    crc.stroke(bubble);
    crc.fillStyle = "#8494FF61";
    crc.fill(bubble);
}

function rock(_x: number, _y: number): void {
    let theRock: Path2D = new Path2D();
    theRock.moveTo(_x + 80, _y + 35);
    theRock.bezierCurveTo(_x + 300, _y + 30, _x + 300, _y + 10, _x + 100, _y + 5);
    theRock.bezierCurveTo(_x + 5, _y + 30, _x + 95, _y + 45, _x + 60, _y + 35);
    crc.strokeStyle = "#181818";
    crc.stroke(theRock);
    crc.fillStyle = "#504f4f";
    crc.fill(theRock);
}

function RightFish(_x: number, _y: number): void {
    let theBody: Path2D = new Path2D();
    theBody.ellipse(_x, _y, 20, 35, 1.7, 0, 2 * Math.PI);
    crc.fillStyle = "#55BE84";
    crc.fill(theBody);
    crc.strokeStyle = "#209F5D";
    crc.stroke(theBody);

    let fin: Path2D = new Path2D();
    fin.moveTo(_x - 35, _y - 5);
    fin.lineTo(_x - 75, _y + 15);
    fin.lineTo(_x - 70, _y - 10);
    crc.fillStyle = "#CA2146";
    crc.fill(fin);
    crc.strokeStyle = "#80223B";
    crc.stroke(fin);

    let eye: Path2D = new Path2D();
    eye.arc(_x + 20, _y - 1, 6, 0, 2 * Math.PI);
    crc.fillStyle = "#E6FFDA";
    crc.fill(eye);

}

function LeftFish(_x: number, _y: number): void {
    let theBody: Path2D = new Path2D();
    theBody.ellipse(_x, _y, 20, 35, 1.7, 0, 2 * Math.PI);
    crc.fillStyle = "#e27948ef";
    crc.fill(theBody);
    crc.strokeStyle = "#eca17fef";
    crc.stroke(theBody);

    let fin: Path2D = new Path2D();
    fin.moveTo(_x + 35, _y + 3);
    fin.lineTo(_x + 75, _y - 15);
    fin.lineTo(_x + 70, _y + 30);
    crc.fillStyle = "#E7D900";
    crc.fill(fin);
    crc.strokeStyle = "#BEA500";
    crc.stroke(fin);

    let eye: Path2D = new Path2D();
    eye.arc(_x - 20, _y - 3, 3, 0, 2 * Math.PI);
    crc.fillStyle = "#3C0038";
    crc.fill(eye);

}