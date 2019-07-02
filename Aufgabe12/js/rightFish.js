var Aufgabe12;
(function (Aufgabe12) {
    class theRightFish extends Aufgabe12.moving {
        constructor() {
            super();
            this.x = Math.random() * Aufgabe12.canvas.width;
            this.y = Math.random() * Aufgabe12.canvas.height;
            this.dx = (Math.random() * 4 + 3);
            this.dy = 0;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x > Aufgabe12.canvas.width + 80) {
                this.x = 0;
            }
        }
        draw() {
            let theBody = new Path2D();
            theBody.ellipse(this.x, this.y, 20, 35, 1.7, 0, 2 * Math.PI);
            Aufgabe12.crc.fillStyle = "#55BE84";
            Aufgabe12.crc.fill(theBody);
            Aufgabe12.crc.strokeStyle = "#209F5D";
            Aufgabe12.crc.stroke(theBody);
            let fin = new Path2D();
            fin.moveTo(this.x - 35, this.y - 5);
            fin.lineTo(this.x - 75, this.y + 15);
            fin.lineTo(this.x - 70, this.y - 10);
            Aufgabe12.crc.fillStyle = "#CA2146";
            Aufgabe12.crc.fill(fin);
            Aufgabe12.crc.strokeStyle = "#80223B";
            Aufgabe12.crc.stroke(fin);
            let eye = new Path2D();
            eye.arc(this.x + 20, this.y - 1, 6, 0, 2 * Math.PI);
            Aufgabe12.crc.fillStyle = "#E6FFDA";
            Aufgabe12.crc.fill(eye);
        }
    }
    Aufgabe12.theRightFish = theRightFish;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=rightFish.js.map