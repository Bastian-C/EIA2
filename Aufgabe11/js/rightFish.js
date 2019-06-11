var Aufgabe11;
(function (Aufgabe11) {
    var theRightFish = /** @class */ (function () {
        function theRightFish() {
        }
        theRightFish.prototype.update = function () {
            this.move();
            this.draw();
        };
        theRightFish.prototype.move = function () {
            this.x += this.dx;
            if (this.x > Aufgabe11.canvas.width + 80) {
                this.x = 0;
            }
        };
        theRightFish.prototype.draw = function () {
            var theBody = new Path2D();
            theBody.ellipse(this.x, this.y, 20, 35, 1.7, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#55BE84";
            Aufgabe11.crc.fill(theBody);
            Aufgabe11.crc.strokeStyle = "#209F5D";
            Aufgabe11.crc.stroke(theBody);
            var fin = new Path2D();
            fin.moveTo(this.x - 35, this.y - 5);
            fin.lineTo(this.x - 75, this.y + 15);
            fin.lineTo(this.x - 70, this.y - 10);
            Aufgabe11.crc.fillStyle = "#CA2146";
            Aufgabe11.crc.fill(fin);
            Aufgabe11.crc.strokeStyle = "#80223B";
            Aufgabe11.crc.stroke(fin);
            var eye = new Path2D();
            eye.arc(this.x + 20, this.y - 1, 6, 0, 2 * Math.PI);
            Aufgabe11.crc.fillStyle = "#E6FFDA";
            Aufgabe11.crc.fill(eye);
        };
        return theRightFish;
    }());
    Aufgabe11.theRightFish = theRightFish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=rightFish.js.map