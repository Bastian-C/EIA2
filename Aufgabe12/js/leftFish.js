var Aufgabe12;
(function (Aufgabe12) {
    var theLeftFish = /** @class */ (function () {
        function theLeftFish() {
        }
        theLeftFish.prototype.update = function () {
            this.move();
            this.draw();
        };
        theLeftFish.prototype.move = function () {
            this.x += this.dx;
            if (this.x + 80 < 0) {
                this.x = Aufgabe12.canvas.width;
            }
        };
        theLeftFish.prototype.draw = function () {
            var theBody = new Path2D();
            theBody.ellipse(this.x, this.y, 20, 35, 1.7, 0, 2 * Math.PI);
            Aufgabe12.crc.fillStyle = "#e27948ef";
            Aufgabe12.crc.fill(theBody);
            Aufgabe12.crc.strokeStyle = "#eca17fef";
            Aufgabe12.crc.stroke(theBody);
            var fin = new Path2D();
            fin.moveTo(this.x + 35, this.y + 3);
            fin.lineTo(this.x + 75, this.y - 15);
            fin.lineTo(this.x + 70, this.y + 30);
            Aufgabe12.crc.fillStyle = "#E7D900";
            Aufgabe12.crc.fill(fin);
            Aufgabe12.crc.strokeStyle = "#BEA500";
            Aufgabe12.crc.stroke(fin);
            var eye = new Path2D();
            eye.arc(this.x - 20, this.y - 3, 3, 0, 2 * Math.PI);
            Aufgabe12.crc.fillStyle = "#3C0038";
            Aufgabe12.crc.fill(eye);
        };
        return theLeftFish;
    }());
    Aufgabe12.theLeftFish = theLeftFish;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=leftFish.js.map