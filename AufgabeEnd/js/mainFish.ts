namespace Aufgabe12 {
    export class playerFish extends moving {

        constructor(_x:number,_y:number,_size:number){    
            super();
            this.x = _x;
            this.y = _y;
            this.dx = 0;
            this.dy = 0;
            this.size = _size;
        }
    
        move(): void {
            this.x += this.dx;
            if (this.x + 80 < 0) {
                this.x = canvas.width;
                }
            }
    
        draw(): void{
            let theBody: Path2D = new Path2D();
            theBody.ellipse(this.x, this.y, 20*this.size, 35*this.size, 1.7, 0, 2 * Math.PI);
            crc.fillStyle = "#e27948ef";
            crc.fill(theBody);
            crc.strokeStyle = "#eca17fef";
            crc.stroke(theBody);
            
            if(this.dx<0){
                let fin: Path2D = new Path2D();
                fin.moveTo(this.x + 35*this.size, this.y + 3*this.size);
                fin.lineTo(this.x + 75*this.size, this.y - 15*this.size);
                fin.lineTo(this.x + 70*this.size, this.y + 30*this.size);
                crc.fillStyle = "#E7D900";
                crc.fill(fin);
                crc.strokeStyle = "#BEA500";
                crc.stroke(fin);
    
                let eye: Path2D = new Path2D();
                eye.arc(this.x - 20*this.size, this.y - 3*this.size, 3*this.size, 0, 2 * Math.PI);
                crc.fillStyle = "#3C0038";
                crc.fill(eye);
            }

            if(this.dx<0){
                let fin: Path2D = new Path2D();
                fin.moveTo(this.x - 35*this.size, this.y + 3*this.size);
                fin.lineTo(this.x - 75*this.size, this.y - 15*this.size);
                fin.lineTo(this.x - 70*this.size, this.y + 30*this.size);
                crc.fillStyle = "#E7D900";
                crc.fill(fin);
                crc.strokeStyle = "#BEA500";
                crc.stroke(fin);
    
                let eye: Path2D = new Path2D();
                eye.arc(this.x + 20*this.size, this.y - 3*this.size, 3*this.size, 0, 2 * Math.PI);
                crc.fillStyle = "#3C0038";
                crc.fill(eye);
            }

            let hit: Path2D = new Path2D();
            hit.arc(this.x, this.y, 25*this.size, 0, 2 * Math.PI);
            crc.strokeStyle = "#8494FF61";
            crc.stroke(hit);
            }    
    }
}

