namespace Aufgabe11 {
    export class theRightFish {
        x: number;
        y: number;
        dx: number;
    
        update(): void {
            this.move();
            this.draw();
            }
    
        move(): void {
            this.x += this.dx;
            if (this.x > canvas.width + 80) {
                this.x = 0;
            }
        }
    
        draw(): void {
            let theBody: Path2D = new Path2D();
            theBody.ellipse(this.x, this.y, 20, 35, 1.7, 0, 2 * Math.PI);
            crc.fillStyle = "#55BE84";
            crc.fill(theBody);
            crc.strokeStyle = "#209F5D";
            crc.stroke(theBody);
    
            let fin: Path2D = new Path2D();
            fin.moveTo(this.x - 35, this.y - 5);
            fin.lineTo(this.x - 75, this.y + 15);
            fin.lineTo(this.x - 70, this.y - 10);
            crc.fillStyle = "#CA2146";
            crc.fill(fin);
            crc.strokeStyle = "#80223B";
            crc.stroke(fin);
    
            let eye: Path2D = new Path2D();
            eye.arc(this.x + 20, this.y - 1, 6, 0, 2 * Math.PI);
            crc.fillStyle = "#E6FFDA";
            crc.fill(eye);
            }
        }
}