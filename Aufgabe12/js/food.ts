namespace Aufgabe12 {
    export class theFood {
        x: number;
        y: number;
        dy: number;

        constructor(_xC: number, _yC: number, _dyC: number) {
            this.x = _xC;
            this.y = _yC;
            this.dy = _dyC;
        }
    
        update(): void {
            this.move();
            this.draw();
            }
        
        move(): void {
            this.y -= this.dy;
            if (this.y >= canvas.height){
                this.y = canvas.height;
                }
            }
        
        draw(): void {
            let crisps: Path2D = new Path2D();
            crisps.arc(this.x, this.y, 7, Math.PI, 2 * Math.PI);
            crc.strokeStyle = "red";
            crc.fillStyle = "red";
            crc.fill(crisps); 
            crc.stroke(crisps);
        }          
    }
}
