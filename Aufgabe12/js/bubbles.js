var Aufgabe12;
(function (Aufgabe12) {
    class theBubble extends Aufgabe12.moving {
        constructor() {
            super();
            this.x = Math.random() * Aufgabe12.canvas.width;
            this.y = Math.random() * Aufgabe12.canvas.height;
            this.dy = Math.random() * -3 - 1;
            this.dx = 0;
        }
        move() {
            this.y += this.dy;
            if (this.y + 10 < 0) {
                this.y = Aufgabe12.canvas.height;
            }
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, Math.random() * 2 + 8, 0, 2 * Math.PI);
            Aufgabe12.crc.strokeStyle = "#bfecffef";
            Aufgabe12.crc.stroke(bubble);
            Aufgabe12.crc.fillStyle = "#8494FF61";
            Aufgabe12.crc.fill(bubble);
        }
    }
    Aufgabe12.theBubble = theBubble;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=bubbles.js.map