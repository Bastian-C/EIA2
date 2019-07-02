namespace Aufgabe12 {
    export class theFood extends moving{
    
        constructor(){
            super();
            this.dy = Math.random() * 3 + 1;
            this.dx = 0;
        }
        
        move(): void {
            this.y += this.dy;
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
