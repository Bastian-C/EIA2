namespace Aufgabe12 {
    export class theLeftFish extends moving {

        constructor(){    
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * -5 - 2  ;
            this.dy = 0;
        }
    
        move(): void {
            this.x += this.dx;
            if (this.x + 80 < 0) {
                this.x = canvas.width;
                }
            }
    
        draw(): void{
            let theBody: Path2D = new Path2D();
            theBody.ellipse(this.x, this.y, 20, 35, 1.7, 0, 2 * Math.PI);
            crc.fillStyle = "#e27948ef";
            crc.fill(theBody);
            crc.strokeStyle = "#eca17fef";
            crc.stroke(theBody);
    
            let fin: Path2D = new Path2D();
            fin.moveTo(this.x + 35, this.y + 3);
            fin.lineTo(this.x + 75, this.y - 15);
            fin.lineTo(this.x + 70, this.y + 30);
            crc.fillStyle = "#E7D900";
            crc.fill(fin);
            crc.strokeStyle = "#BEA500";
            crc.stroke(fin);
    
            let eye: Path2D = new Path2D();
            eye.arc(this.x - 20, this.y - 3, 3, 0, 2 * Math.PI);
            crc.fillStyle = "#3C0038";
            crc.fill(eye);
            }    
    }
}

