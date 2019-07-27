namespace Aufgabe12 {
    export class moving {
        x: number;
        y: number;
        dx: number;
        dy: number;
        size:number;
        alife: Boolean = true;
        dLeft: Boolean;
        dRight: Boolean;
        dUp: Boolean;
        dDown: Boolean;

        constructor(){
        }

        draw(): void {
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
        }
    }
}
