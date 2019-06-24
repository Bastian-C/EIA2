var Aufgabe11;
(function (Aufgabe11) {
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
                this.x = Aufgabe11.canvas.width;
            }
        };
        theLeftFish.prototype.draw = function () {
            var theBody = new Path2D();
            theBody.ellipse(this.x, this.y, 20, 35, 1.7, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#e27948ef";
            Aufgabe11.crc.fill(theBody);
            Aufgabe11.crc.strokeStyle = "#eca17fef";
            Aufgabe11.crc.stroke(theBody);
            var fin = new Path2D();
            fin.moveTo(this.x + 35, this.y + 3);
            fin.lineTo(this.x + 75, this.y - 15);
            fin.lineTo(this.x + 70, this.y + 30);
            Aufgabe11.crc.fillStyle = "#E7D900";
            Aufgabe11.crc.fill(fin);
            Aufgabe11.crc.strokeStyle = "#BEA500";
            Aufgabe11.crc.stroke(fin);
            var eye = new Path2D();
            eye.arc(this.x - 20, this.y - 3, 3, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#3C0038";
            Aufgabe11.crc.fill(eye);
        };
        return theLeftFish;
    }());
    Aufgabe11.theLeftFish = theLeftFish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=leftFish.js.map