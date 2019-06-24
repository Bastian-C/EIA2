var Aufgabe11;
(function (Aufgabe11) {
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
                this.y = Aufgabe11.canvas.height;
            }
        };
        theBubble.prototype.draw = function () {
            var bubble = new Path2D();
            bubble.arc(this.x, this.y, Math.random() * 2 + 8, 0, 2 * Math.PI);
            Aufgabe11.crc.strokeStyle = "#bfecffef";
            Aufgabe11.crc.stroke(bubble);
            Aufgabe11.crc.fillStyle = "#8494FF61";
            Aufgabe11.crc.fill(bubble);
        };
        return theBubble;
    }());
    Aufgabe11.theBubble = theBubble;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=bubbles.js.map