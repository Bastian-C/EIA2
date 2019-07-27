namespace Aufgabe12 {
    export class playerFish extends moving {

        constructor(_x:number,_y:number,_size:number){    
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
    
        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            
            if (this.x + 80 < 0) {
                this.x = canvas.width;
                }

            if (this.x > canvas.width + 80) {
                this.x = 0;
            }    

            if (this.y < 0) {
                this.y = 0;
                }

            if (this.y +50 > canvas.height) {
                this.y = canvas.height - 50;
                }    

            if (this.dLeft == true && this.dx> -6) {
                this.dx -= 0.5;
                }
            if (this.dRight == true && this.dx< 6) {
                this.dx += 0.5;
                }
            if (this.dDown == true && this.dy< 4) {
                this.dy += 0.1;
                }
            if (this.dUp == true && this.dy> -4) {
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
    
        draw(): void{
            if(this.alife==true){
                let theBody: Path2D = new Path2D();
                theBody.ellipse(this.x, this.y, 20*this.size, 35*this.size, 1.7, 0, 2 * Math.PI);
                crc.fillStyle = "#64E5EBef";
                crc.fill(theBody);
                crc.strokeStyle = "#21BCC4ef";
                crc.stroke(theBody);
                
                if(this.dx<0){
                    let fin: Path2D = new Path2D();
                    fin.moveTo(this.x + 35*this.size, this.y + 3*this.size);
                    fin.lineTo(this.x + 75*this.size, this.y - 15*this.size);
                    fin.lineTo(this.x + 70*this.size, this.y + 30*this.size);
                    crc.fillStyle = "#CF2FBAef";
                    crc.fill(fin);
                    crc.strokeStyle = "#6A1E60ef";
                    crc.stroke(fin);
        
                    let eye: Path2D = new Path2D();
                    eye.arc(this.x - 20*this.size, this.y - 3*this.size, 3*this.size, 0, 2 * Math.PI);
                    crc.fillStyle = "#3C0038";
                    crc.fill(eye);
                }

                if(this.dx>=0){
                    let fin: Path2D = new Path2D();
                    fin.moveTo(this.x - 35*this.size, this.y + 3*this.size);
                    fin.lineTo(this.x - 75*this.size, this.y - 15*this.size);
                    fin.lineTo(this.x - 70*this.size, this.y + 30*this.size);
                    crc.fillStyle = "#CF2FBAef";
                    crc.fill(fin);
                    crc.strokeStyle = "#6A1E60ef";
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
            if(this.alife==false){
                let theBody: Path2D = new Path2D();
                theBody.ellipse(this.x, this.y, 20*this.size, 35*this.size, 1.7, 0, 2 * Math.PI);
                crc.fillStyle = "#FFF1F261";
                crc.fill(theBody);
                crc.strokeStyle = "#FFE6EDF2";
                crc.stroke(theBody);
                
                if(this.dx<0){
                    let fin: Path2D = new Path2D();
                    fin.moveTo(this.x + 35*this.size, this.y + 3*this.size);
                    fin.lineTo(this.x + 75*this.size, this.y - 15*this.size);
                    fin.lineTo(this.x + 70*this.size, this.y + 30*this.size);
                    crc.fillStyle = "#F2F1F261";
                    crc.fill(fin);
                    crc.strokeStyle = "#EEE6EDF2";
                    crc.stroke(fin);
        
                    let eye: Path2D = new Path2D();
                    eye.arc(this.x - 20*this.size, this.y - 3*this.size, 3*this.size, 0, 2 * Math.PI);
                    crc.fillStyle = "#3C0038F2";
                    crc.fill(eye);
                }

                if(this.dx>=0){
                    let fin: Path2D = new Path2D();
                    fin.moveTo(this.x - 35*this.size, this.y + 3*this.size);
                    fin.lineTo(this.x - 75*this.size, this.y - 15*this.size);
                    fin.lineTo(this.x - 70*this.size, this.y + 30*this.size);
                    crc.fillStyle = "#F2F1F261";
                    crc.fill(fin);
                    crc.strokeStyle = "#EEE6EDF2";
                    crc.stroke(fin);
        
                    let eye: Path2D = new Path2D();
                    eye.arc(this.x + 20*this.size, this.y - 3*this.size, 3*this.size, 0, 2 * Math.PI);
                    crc.fillStyle = "#3C0038F2";
                    crc.fill(eye);
                }
            } 
        }      
    }
}

