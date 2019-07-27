namespace Aufgabe12 {
document.addEventListener("DOMContentLoaded", init);
export let crc: CanvasRenderingContext2D;
export let canvas: HTMLCanvasElement;
let theRightFishArray: theRightFish[] = [];
let theLeftFishArray: theLeftFish[] = [];
let playerFishArray: playerFish[] = [];
let playerNameArray: string[] = [];
let playerScoreArray: Number[] = [];
let bubbleArray: theBubble[] = [];
let foodArray: theFood[] = [];
let bottomFoodArray:number[] = [];
let fps: number = 30;
let imageData: ImageData;
let gameInProgress: boolean=true;

interface PlayerScore {
    playerName: string;
    score: number;
}


function init(): void {
    refresh();
    let playerNumberString:string = prompt("Please enter the amount of Players (1 or 2)","1");
    while(playerNumberString!="1"&&playerNumberString!="2"){
        alert("Either chose Singleplayer (1) or Multiplayer (2)")
        playerNumberString = prompt("Please enter the amount of Players (1 or 2)","1");
       }
    let playerNumber:Number = parseInt(playerNumberString, 10);

    let person1=prompt("Player 1: Please enter your name(Maximum limit 12)","Player1");
    while(person1.length > 12){
       alert("Keep the Playername to 12 chars or less")
       person1 = prompt("Player 1: Please enter your name(Maximum limit 12)","Player1");
      }
    playerNameArray.push(person1);  
    playerScoreArray.push(0);

    if (playerNumber == 2){
        let person2=prompt("Player 2: Please enter your name(Maximum limit 12)","Player2");
        while(person2.length > 12){
           alert("Keep the message length to 12 chars or less")
           person2 = prompt("Player 2: Please enter your name(Maximum limit 12)","Player2");
            }
        playerNameArray.push(person2)
        playerScoreArray.push(0);
    }

    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    canvas.addEventListener("click", placeFood);
    addEventListener("keydown", activateAcc);
    addEventListener("keyup", deactivateAcc);
    drawBackground()

    imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

    for (let i: number = 0; i < 14; i++) {
        let x:number = canvas.width;
        let y:number = Math.random() * canvas.height;
        let s:number = (Math.random() * 3+4)/10;
        let rightFish: theRightFish = new theRightFish(x,y,s);
        theRightFishArray.push(rightFish);
        rightFish.draw();
    }

    for (let i: number = 0; i < 10; i++) {
        let x:number = canvas.width;
        let y:number = Math.random() * canvas.height;
        let s:number = (Math.random() * 4+8)/10;
        let leftFish: theLeftFish = new theLeftFish(x,y,s);
        theLeftFishArray.push(leftFish);
        leftFish.draw();
    }

    for (let i: number = 0; i < playerNumber; i++) {
        let x:number = canvas.width/2;
        let y:number = canvas.height/2;
        let s:number = 0.8;
        let thePlayerFish: playerFish = new playerFish(x,y,s);
        playerFishArray.push(thePlayerFish);
        thePlayerFish.draw();
    }
                     
    for (let i: number = 0; i < 30; i++) {
        let bubble: theBubble = new theBubble();
        bubbleArray.push(bubble);
        bubble.draw();
    }
    update()
}

function update(): void {
    if (gameInProgress==true){
        window.setTimeout(update, 1000 / fps);
    }

    crc.clearRect(0, 0, canvas.width, canvas.height);
    crc.putImageData(imageData, 0, 0);

    for (let i: number = 0; i < theRightFishArray.length; i++) {
        theRightFishArray[i].update();
    }

    for (let i: number = 0; i < theLeftFishArray.length; i++) {
        theLeftFishArray[i].update();
    }

    for (let i: number = 0; i < bubbleArray.length; i++) {
        bubbleArray[i].update();
    }

    for (let i: number = 0; i < foodArray.length; i++) {
        if (foodArray[i].y > canvas.height){
            bottomFoodArray.push(i);
        }
        foodArray[i].update();
    }

    for (let i: number = bottomFoodArray.length; i > 0; i--) {

        let r:number = i - 1;
        foodArray.splice(bottomFoodArray[r], 1);
    }

    bottomFoodArray = [];

    for (let i: number = 0; i < playerFishArray.length; i++) {
        playerScoreArray[i]=playerFishArray[i].size*100;
        playerFishArray[i].update();
    }

    colide()

    let playerDead:number = 0;

    for (let i: number = 0; i < playerFishArray.length; i++) {
        if(playerFishArray[i].alife==false){
            playerDead+=1;
        }
    }

    if ((playerDead==playerFishArray.length||(theLeftFishArray.length==0&&theRightFishArray.length==0))&&gameInProgress==true){
        insert0();
        if(playerFishArray.length==2){
            insert1();
        }
        refresh();
        gameInProgress=false; //Verhindert multible Speicherung
    } 
}

function colide(){
    for (let i: number = 0; i < playerFishArray.length; i++) {
        let deletionArray:number[]=[];
        for (let n: number = 0; n < theRightFishArray.length; n++) {
            let distance:number = Math.sqrt( ( (playerFishArray[i].x-theRightFishArray[n].x) * (playerFishArray[i].x-theRightFishArray[n].x) ) + ( (playerFishArray[i].y-theRightFishArray[n].y) * (playerFishArray[i].y-theRightFishArray[n].y) ) )
            let sizeDif:number = ( (playerFishArray[i].size * 25)+(theRightFishArray[n].size * 25) );
            if (distance < sizeDif && playerFishArray[i].alife==true)
            {
                deletionArray.push(n);
            }
        }
        if (deletionArray.length>0){
            for (let d: number = deletionArray.length; d > 0; d--) {
                let r:number = d - 1;
                if(playerFishArray[i].size>=theRightFishArray[deletionArray[r]].size){
                    playerFishArray[i].size += theRightFishArray[deletionArray[r]].size/10;
                    theRightFishArray.splice(deletionArray[r], 1);
                }
                else{
                    playerFishArray[i].alife=false;
                    console.log("Game OVER!");
                }
            }    
        }
        deletionArray=[];
        for (let n: number = 0; n < theLeftFishArray.length; n++) {
            let distance:number = Math.sqrt( ( (playerFishArray[i].x-theLeftFishArray[n].x) * (playerFishArray[i].x-theLeftFishArray[n].x) ) + ( (playerFishArray[i].y-theLeftFishArray[n].y) * (playerFishArray[i].y-theLeftFishArray[n].y) ) )
            let sizeDif:number = ( (playerFishArray[i].size * 25)+(theLeftFishArray[n].size * 25) );
            if (distance < sizeDif && playerFishArray[i].alife==true)
            {
                deletionArray.push(n);
            }
        }
        if (deletionArray.length>0){
            for (let d: number = deletionArray.length; d > 0; d--) {
                let r:number = d - 1;
                if(playerFishArray[i].size>=theLeftFishArray[deletionArray[r]].size){
                    playerFishArray[i].size += theLeftFishArray[deletionArray[r]].size/10;
                    theLeftFishArray.splice(deletionArray[r], 1);
                }
                else{
                    playerFishArray[i].alife=false;
                    console.log("Game OVER!");
                }
            }    
        }
        deletionArray=[];
    }
}

function drawBackground(){
    drawWater();
    drawGround();
    drawRock(30, 400);
    drawRock(500, 460);

    for (let i: number = 0; i < 1000; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * 600 + 400;
        drawStones(x, y);
    }

    for (let i: number = 0; i < 102; i++) {
        let p: number = Math.random() * canvas.width;
        let l: number = Math.random() * 500+450; 
        drawPlants(p, l);
    }

}


function drawStones(_x: number, _y: number): void {
    let stones: Path2D = new Path2D();
    stones.ellipse(_x, _y, Math.random() * 5+2, 8, 1.7, 0, 2 * Math.PI);
    crc.fillStyle = "#383532ef";
    crc.fill(stones);
}

function drawPlants(_x: number, _y: number): void {
    let plant1: Path2D = new Path2D();
    plant1.moveTo(_x - 20, _y + 80);
    plant1.lineTo(_x - 20, _y + 40);
    plant1.lineTo(_x - 90, _y - 160);
    plant1.closePath();
    crc.fillStyle = "#76b67fef";
    crc.fill(plant1);
    crc.strokeStyle = "#416345ef";
    crc.stroke(plant1);
}

function drawWater(): void {
    crc.rect(0, 0, 900, 500);
    crc.fillStyle = "#573FFF";
    crc.fill();
}

function drawGround(): void {
    let ground: Path2D = new Path2D();
    ground.rect(0, 400, 900, 100);
    crc.fillStyle = "#614f3fef";
    crc.fill(ground);
}


function drawRock(_x: number, _y: number): void {
    let theRock: Path2D = new Path2D();
    theRock.moveTo(_x + 80, _y + 35);
    theRock.bezierCurveTo(_x + 300, _y + 30, _x + 300, _y + 10, _x + 100, _y + 5);
    theRock.bezierCurveTo(_x + 5, _y + 30, _x + 95, _y + 45, _x + 60, _y + 35);
    crc.strokeStyle = "#181818";
    crc.stroke(theRock);
    crc.fillStyle = "#504f4f";
    crc.fill(theRock);
}

function placeFood(_event: MouseEvent): void {
    console.log("Click");
    let xClick: number =  _event.clientX;
    let yClick: number =  _event.clientY;
    let food: theFood = new theFood(xClick,yClick);

    foodArray.push(food);
    food.draw();
}


function activateAcc (_event:KeyboardEvent){
    let key_press:number  = _event.which;
    if(key_press==87){
        playerFishArray[0].dUp=true;
    }
    if(key_press==65){
        playerFishArray[0].dLeft=true;
    }
    if(key_press==83){
        playerFishArray[0].dDown=true;
    }
    if(key_press==68){
        playerFishArray[0].dRight=true;
    }
    if(key_press==38&&playerNameArray.length==2){
        playerFishArray[1].dUp=true;
    }
    if(key_press==37&&playerNameArray.length==2){
        playerFishArray[1].dLeft=true;
    }
    if(key_press==40&&playerNameArray.length==2){
        playerFishArray[1].dDown=true;
    }
    if(key_press==39&&playerNameArray.length==2){
        playerFishArray[1].dRight=true;
    }
}
function deactivateAcc (_event:KeyboardEvent){
    let key_lift:number  = _event.which;
    if(key_lift==87){
        playerFishArray[0].dUp=false;
    }
    if(key_lift==65){
        playerFishArray[0].dLeft=false;
    }
    if(key_lift==83){
        playerFishArray[0].dDown=false;
    }
    if(key_lift==68){
        playerFishArray[0].dRight=false;
    }
    if(key_lift==38&&playerNameArray.length==2){
        playerFishArray[1].dUp=false;
    }
    if(key_lift==37&&playerNameArray.length==2){
        playerFishArray[1].dLeft=false;
    }
    if(key_lift==40&&playerNameArray.length==2){
        playerFishArray[1].dDown=false;
    }
    if(key_lift==39&&playerNameArray.length==2){
        playerFishArray[1].dRight=false;
    }
}

//--------------------------------------------------------------------------- DATABASE --------------------------------------------------------------------------------

let serverAddress: string = "https://server-eia2-bc.herokuapp.com/";

    function insert0(): void {  // Make 2 Inserts!!!
        let query: string = "command=insert0";
            query += "&player0=" + playerNameArray[0];
            query += "&score0=" + playerScoreArray[0];
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function insert1(): void {  // Make 2 Inserts!!!
        let query: string = "command=insert1";
            query += "&player1=" + playerNameArray[1];
            query += "&score1=" + playerScoreArray[1];
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }


    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let allPlayersArray: PlayerScore[] = JSON.parse(xhr.response);
            for (let i: number = 0; i < allPlayersArray.length; i++) {
                allPlayersArray.sort(sortPlayers);
            }

            document.getElementById("leaderboard").innerHTML = "";

            for (let i: number = 0; i < 10; i++) {
                let newPlayer = document.createElement("div");
                document.getElementById("leaderboard").appendChild(newPlayer);
                newPlayer.setAttribute("id", i.toString());
                newPlayer.innerHTML = `${i + 1}.Place: ${allPlayersArray[i].playerName} : ${allPlayersArray[i].score}`;
            }
            /* let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson); */
        }
    }
    function sortPlayers(_1: PlayerScore, _2: PlayerScore): number {

        if (_1.score < _2.score) {
            return 1;
        }
        if (_1.score > _2.score) {
            return -1;
        }
        return 0;
    }
}