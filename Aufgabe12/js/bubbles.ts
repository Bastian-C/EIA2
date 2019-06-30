namespace Aufgabe12 {
    export class theBubble {
        x: number;
        y: number;
        dy: number;
    
        update(): void {
            this.move();
            this.draw();
            }
        
        move(): void {
            this.y += this.dy;
            if (this.y + 10 < 0){
                this.y = canvas.height;
                }
            }
        
        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(this.x, this.y, Math.random() * 2+8, 0, 2 * Math.PI);
            crc.strokeStyle = "#bfecffef";
            crc.stroke(bubble);
            crc.fillStyle = "#8494FF61";
            crc.fill(bubble);
        }          
    }
}
