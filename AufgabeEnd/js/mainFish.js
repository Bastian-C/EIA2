var Aufgabe12;
(function (Aufgabe12) {
    class playerFish extends Aufgabe12.moving {
        constructor(_x, _y, _size) {
            super();
            this.x = _x;
            this.y = _y;
            this.dx = 0;
            this.dy = 0;
            this.alife = true;
            this.size = _size;
            this.dLeft = false;
            this.dRight = false;
            this.dUp = false;
            this.dDown = false;
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x + 80 < 0) {
                this.x = Aufgabe12.canvas.width;
            }
            if (this.x > Aufgabe12.canvas.width + 80) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = 0;
            }
            if (this.y + 50 > Aufgabe12.canvas.height) {
                this.y = Aufgabe12.canvas.height - 50;
            }
            if (this.dLeft == true && this.dx > -6) {
                this.dx -= 0.5;
            }
            if (this.dRight == true && this.dx < 6) {
                this.dx += 0.5;
            }
            if (this.dDown == true && this.dy < 4) {
                this.dy += 0.1;
            }
            if (this.dUp == true && this.dy > -4) {
                this.dy -= 0.1;
            }
            if (this.dRight == false && this.dx > 0) {
                this.dx -= 0.03;
            }
            if (this.dLeft == false && this.dx < 0) {
                this.dx += 0.03;
            }
            if (this.dUp == false && this.dy < 0) {
                this.dy += 0.03;
            }
            if (this.dDown == false && this.dy > 0) {
                this.dy -= 0.03;
            }
        }
        draw() {
            if (this.alife == true) {
                let theBody = new Path2D();
                theBody.ellipse(this.x, this.y, 20 * this.size, 35 * this.size, 1.7, 0, 2 * Math.PI);
                Aufgabe12.crc.fillStyle = "#64E5EBef";
                Aufgabe12.crc.fill(theBody);
                Aufgabe12.crc.strokeStyle = "#21BCC4ef";
                Aufgabe12.crc.stroke(theBody);
                if (this.dx < 0) {
                    let fin = new Path2D();
                    fin.moveTo(this.x + 35 * this.size, this.y + 3 * this.size);
                    fin.lineTo(this.x + 75 * this.size, this.y - 15 * this.size);
                    fin.lineTo(this.x + 70 * this.size, this.y + 30 * this.size);
                    Aufgabe12.crc.fillStyle = "#CF2FBAef";
                    Aufgabe12.crc.fill(fin);
                    Aufgabe12.crc.strokeStyle = "#6A1E60ef";
                    Aufgabe12.crc.stroke(fin);
                    let eye = new Path2D();
                    eye.arc(this.x - 20 * this.size, this.y - 3 * this.size, 3 * this.size, 0, 2 * Math.PI);
                    Aufgabe12.crc.fillStyle = "#3C0038";
                    Aufgabe12.crc.fill(eye);
                }
                if (this.dx >= 0) {
                    let fin = new Path2D();
                    fin.moveTo(this.x - 35 * this.size, this.y + 3 * this.size);
                    fin.lineTo(this.x - 75 * this.size, this.y - 15 * this.size);
                    fin.lineTo(this.x - 70 * this.size, this.y + 30 * this.size);
                    Aufgabe12.crc.fillStyle = "#CF2FBAef";
                    Aufgabe12.crc.fill(fin);
                    Aufgabe12.crc.strokeStyle = "#6A1E60ef";
                    Aufgabe12.crc.stroke(fin);
                    let eye = new Path2D();
                    eye.arc(this.x + 20 * this.size, this.y - 3 * this.size, 3 * this.size, 0, 2 * Math.PI);
                    Aufgabe12.crc.fillStyle = "#3C0038";
                    Aufgabe12.crc.fill(eye);
                }
                let hit = new Path2D();
                hit.arc(this.x, this.y, 25 * this.size, 0, 2 * Math.PI);
                Aufgabe12.crc.strokeStyle = "#8494FF61";
                Aufgabe12.crc.stroke(hit);
            }
            if (this.alife == false) {
                let theBody = new Path2D();
                theBody.ellipse(this.x, this.y, 20 * this.size, 35 * this.size, 1.7, 0, 2 * Math.PI);
                Aufgabe12.crc.fillStyle = "#FFF1F261";
                Aufgabe12.crc.fill(theBody);
                Aufgabe12.crc.strokeStyle = "#FFE6EDF2";
                Aufgabe12.crc.stroke(theBody);
                if (this.dx < 0) {
                    let fin = new Path2D();
                    fin.moveTo(this.x + 35 * this.size, this.y + 3 * this.size);
                    fin.lineTo(this.x + 75 * this.size, this.y - 15 * this.size);
                    fin.lineTo(this.x + 70 * this.size, this.y + 30 * this.size);
                    Aufgabe12.crc.fillStyle = "#F2F1F261";
                    Aufgabe12.crc.fill(fin);
                    Aufgabe12.crc.strokeStyle = "#EEE6EDF2";
                    Aufgabe12.crc.stroke(fin);
                    let eye = new Path2D();
                    eye.arc(this.x - 20 * this.size, this.y - 3 * this.size, 3 * this.size, 0, 2 * Math.PI);
                    Aufgabe12.crc.fillStyle = "#3C0038F2";
                    Aufgabe12.crc.fill(eye);
                }
                if (this.dx >= 0) {
                    let fin = new Path2D();
                    fin.moveTo(this.x - 35 * this.size, this.y + 3 * this.size);
                    fin.lineTo(this.x - 75 * this.size, this.y - 15 * this.size);
                    fin.lineTo(this.x - 70 * this.size, this.y + 30 * this.size);
                    Aufgabe12.crc.fillStyle = "#F2F1F261";
                    Aufgabe12.crc.fill(fin);
                    Aufgabe12.crc.strokeStyle = "#EEE6EDF2";
                    Aufgabe12.crc.stroke(fin);
                    let eye = new Path2D();
                    eye.arc(this.x + 20 * this.size, this.y - 3 * this.size, 3 * this.size, 0, 2 * Math.PI);
                    Aufgabe12.crc.fillStyle = "#3C0038F2";
                    Aufgabe12.crc.fill(eye);
                }
            }
        }
    }
    Aufgabe12.playerFish = playerFish;
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=mainFish.js.map