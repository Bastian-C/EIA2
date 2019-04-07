function NameCheck():void {
    var name:string = prompt("Bitte fügen Sie ihren Namen unten ein.");
    if (name != null) {
      document.getElementById("Greetings").innerHTML =
      "Hallo " + name + "!";
    }
    console.info("Hallo " + name + "!");
  }