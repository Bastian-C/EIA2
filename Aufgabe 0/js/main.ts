function NameCheck() {
    var name:string = prompt("Bitte fügen Sie ihren Namen unten ein.");
    if (name != null) {
      document.getElementById("PromptText").innerHTML =
      "Hallo " + name + "!";
    }
    console.info("Hallo " + name + "!");
  }