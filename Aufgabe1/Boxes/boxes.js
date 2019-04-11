var Boxes;
(function (Boxes) {
    let n = 5;
    let c;
    console.log("Zeile 3: c => " + c);
    let x = 0;
    console.log("Zeile 4: x => " + x);
    let y = 0;
    console.log("Zeile 5: y => " + y);
    for (let i = 0; i < n; i++) {
        console.log("Zeile 7: i => " + i);
        console.log("Zeile 7: Kommentar: i=" + i + "<5");
        y += (i == 2) ? 20 : 50;
        console.log("Zeile 8: y => " + y);
        x = (x + 170) % 400;
        console.log("Zeile 9: x => " + x);
        switch (i) {
            case 0:
                c = "#ff0000";
                break;
            case 1:
            case 4:
                c = "#00ff00";
                break;
            case 3:
                continue;
            default:
                c = "#0000ff";
        }
        if (i == 0) {
            console.log("Zeile 11: Kommentar: i==0");
            console.log("Zeile 12: c=" + c);
            console.log("Zeile 13: Kommentar: break");
        }
        if (i == 1) {
            console.log("Zeile 14: Kommentar: i==1, Empty case => Übernehme case 4. c=" + c);
        }
        if (i == 2) {
            console.log("Zeile 20: Kommentar: da i==2, Default Case.");
            console.log("Zeile 21: c=" + c);
        }
        if (i == 3) {
            console.log("Zeile 18: Kommentar: i==3");
            console.log("Zeile 19: Kommentar: Continue");
        }
        if (i == 4) {
            console.log("Zeile 11: Kommentar: i==4");
            console.log("Zeile 12: c=" + c);
            console.log("Zeile 13: Kommentar: break");
        }
        for (let a = 50; a > 0; a -= 20) {
            console.log("Zeile 24: Kommentar: placeDiv(" + c + "," + x + "," + y + "," + a + "," + a + ");");
            console.log("Zeile 23: a=" + a);
            console.log("Zeile 23: Kommentar: a=" + a + ">0");
            placeDiv(c, x, y, a, a);
            if (i == 4) {
                console.log("Zeile 25: Kommentar: i==4");
                console.log("Zeile 26: Kommentar: break");
                break;
            }
        }
        console.log("Zeile 23: Kommentar: a=-10<0, break");
    }
    console.log("Zeile 7: Kommentar: k=5, break");
    function placeDiv(_color, _x, _y, _width, _height) {
        console.log("Zeile 30: _color => " + _color);
        console.log("Zeile 30: _width => " + _width);
        console.log("Zeile 30: _height => " + _height);
        console.log("Zeile 30: _X => " + _x);
        console.log("Zeile 30: _y => " + _y);
        let div = document.createElement("div");
        console.log("Zeile 31: Kommentar: DIV wird erstellt");
        document.body.appendChild(div);
        console.log("Zeile 32: Kommentar: In das DIV wird ein child beigefügt");
        //Diese Art der CSS Zuweisung ist nicht schön und sollte vermieden werden.
        //Eine css Datei anzulegen ist deutlich besser aber in diesem Fall nicht optimal,
        //da jedes Objekt einige individuelle Attribute hat.
        //Was sich gruppieren lässt, sollte stattdessen als css Klasse angelegt werden.
        let s = div.style;
        console.log("Zeile 38: Kommentar: Style 's' wird erstellt");
        s.border = "thin solid black";
        console.log("Zeile 39: s.border => 'thin solid black'");
        s.position = "absolute";
        console.log("Zeile 40: s.position => 'absolute'");
        s.backgroundColor = _color;
        console.log("Zeile 41: s.backgroundColor => " + _color);
        s.width = _width + "px";
        console.log("Zeile 42: s.width => " + _width + "px");
        s.height = _height + "px";
        console.log("Zeile 43: s.height => " + _height + "px");
        s.left = _x + "px";
        console.log("Zeile 44: s.left => " + _x + "px");
        s.top = _y + "px";
        console.log("Zeile 45: s.top => " + _y + "px");
    }
})(Boxes || (Boxes = {}));
//# sourceMappingURL=boxes.js.map