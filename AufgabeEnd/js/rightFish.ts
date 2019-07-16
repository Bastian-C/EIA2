namespace Aufgabe12 {
    export class theRightFish extends moving {

        constructor(_x:number, _y:number, _size:number){
            super();
            this.dx = (Math.random() * 4 + 3);
            this.x = _x;
            this.y = _y;
            this.dy = 0;
            this.size = _size;
        }
    
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
            theBody.ellipse(this.x, this.y, 20*this.size, 35*this.size, 1.7, 0, 2 * Math.PI);
            crc.fillStyle = "#55BE84";
            crc.fill(theBody);
            crc.strokeStyle = "#209F5D";
            crc.stroke(theBody);
    
            let fin: Path2D = new Path2D();
            fin.moveTo(this.x - 35*this.size, this.y - 5*this.size);
            fin.lineTo(this.x - 75*this.size, this.y + 15*this.size);
            fin.lineTo(this.x - 70*this.size, this.y - 10*this.size);
            crc.fillStyle = "#CA2146";
            crc.fill(fin);
            crc.strokeStyle = "#80223B";
            crc.stroke(fin);
    
            let eye: Path2D = new Path2D();
            eye.arc(this.x + 20*this.size, this.y - 1*this.size, 6*this.size, 0, 2 * Math.PI);
            crc.fillStyle = "#E6FFDA";
            crc.fill(eye);

            let hit: Path2D = new Path2D();
            hit.arc(this.x, this.y, 25*this.size, 0, 2 * Math.PI);
            crc.strokeStyle = "#8494FF61";
            crc.stroke(hit);
            }
        }
}