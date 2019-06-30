var Aufgabe12;
(function (Aufgabe12) {
    var theBubble = /** @class */ (function () {
        function theBubble() {
        }
        theBubble.prototype.update = function () {
            this.move();
            this.draw();
        };
        theBubble.prototype.move = function () {
            this.y += this.dy;
            if (this.y + 10 < 0) {
                this.y = Aufgabe12.canvas.height;
            }
        };
        theBubble.prototype.draw = function () {
            var bubble = new Path2D();
            bubble.arc(this.x, this.y, Math.random() * 2 + 8, 0, 2 * Math.PI);
            Aufgabe12.crc.strokeStyle = "#bfecffef";
            Aufgabe12.crc.stroke(bubble);
            Aufgabe12.crc.fillStyle = "#8494FF61";
            Aufgabe12.crc.fill(bubble);
        };
        return theBubble;
    }());
    Aufgabe12.theBubble = theBubble;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=bubbles.js.map