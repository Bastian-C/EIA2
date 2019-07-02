var Aufgabe12;
(function (Aufgabe12) {
    class theFood extends Aufgabe12.moving {
        constructor() {
            super();
            this.dy = Math.random() * 3 + 1;
            this.dx = 0;
        }
        move() {
            this.y -= this.dy;
            if (this.y >= Aufgabe12.canvas.height) {
                this.y = Aufgabe12.canvas.height;
            }
        }
        draw() {
            let crisps = new Path2D();
            crisps.arc(this.x, this.y, 7, Math.PI, 2 * Math.PI);
            Aufgabe12.crc.strokeStyle = "red";
            Aufgabe12.crc.fillStyle = "red";
            Aufgabe12.crc.fill(crisps);
            Aufgabe12.crc.stroke(crisps);
        }
    }
    Aufgabe12.theFood = theFood;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=food.js.map