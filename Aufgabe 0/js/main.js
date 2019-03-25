function NameCheck() {
    var name = prompt("Bitte fügen Sie ihren Namen unten ein.");
    if (name != null) {
        document.getElementById("Greetings").innerHTML =
            "Hallo " + name + "!";
    }
    console.info("Hallo " + name + "!");
}
//# sourceMappingURL=main.js.map