var Aufgabe12;
(function (Aufgabe12) {
    var theFood = /** @class */ (function () {
        function theFood(_xC, _yC, _dyC) {
            this.x = _xC;
            this.y = _yC;
            this.dy = _dyC;
        }
        theFood.prototype.update = function () {
            this.move();
            this.draw();
        };
        theFood.prototype.move = function () {
            this.y -= this.dy;
            if (this.y >= Aufgabe12.canvas.height) {
                this.y = Aufgabe12.canvas.height;
            }
        };
        theFood.prototype.draw = function () {
            var crisps = new Path2D();
            crisps.arc(this.x, this.y, 7, Math.PI, 2 * Math.PI);
            Aufgabe12.crc.strokeStyle = "red";
            Aufgabe12.crc.fillStyle = "red";
            Aufgabe12.crc.fill(crisps);
            Aufgabe12.crc.stroke(crisps);
        };
        return theFood;
    }());
    Aufgabe12.theFood = theFood;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=food.js.map