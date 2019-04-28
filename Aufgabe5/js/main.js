var EisDealer;
(function (EisDealer) {
    /*
        Aufgabe: Aufgabe 5, Eis Dealer reloaded
        Name: (Bastian Culig)
        Matrikel: (3612802046414452)
        Datum: (28.04.2019) Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
    window.addEventListener("load", init);
    function init() {
        let fieldsets = document.getElementsByTagName("fieldset");
        writeHTML(EisDealer.theBoxes);
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", theChange);
            document.getElementById("check").addEventListener("click", check);
        }
    }
    function writeHTML(_theboxes) {
        document.getElementById('theBoxes').innerHTML = "";
        document.getElementById('order').innerHTML = ""; // This fixes a bug, that causes the writeHTML to execute the for-loop twice ... somehow
        for (let key in _theboxes) {
            let category = _theboxes[key];
            let div = document.createElement('div');
            div.innerHTML = `<p>${key}</p>
            <ul id="${key.substring(0, 5)}"></ul>`;
            document.getElementById('order').appendChild(div);
            let box = document.createElement('fieldset');
            let write = `<legende>${key}</legende><br>`;
            for (let b = 0; b < category.length; b++) {
                write += `<input type="${category[b].type}" name="${category[b].category}" id="${category[b].called}" price="${category[b].price}" min="${category[b].min}" max="${category[b].max}" step="${category[b].step}" value="0">
                    <label for="${category[b].called}">${category[b].called} ${category[b].price.toFixed(2)} €</label>
                    <br>`;
            }
            box.setAttribute("id", key);
            box.innerHTML = write;
            document.getElementById('theBoxes').appendChild(box);
        }
    }
    let input = document.getElementsByTagName("input");
    function theChange(_event) {
        let sum = 0;
        document.getElementById("Conta").innerHTML = "";
        document.getElementById("Flavo").innerHTML = "";
        document.getElementById("Toppi").innerHTML = "";
        document.getElementById("Deliv").innerHTML = "";
        for (let w = 0; w < input.length; w++) {
            if (input[w].name == "Container" && input[w].checked == true) {
                let location = document.createElement("li");
                location.innerHTML = `${input[w].id}`;
                document.getElementById("Conta").appendChild(location);
            }
            ;
            if (input[w].name == "Flavours") {
                let location = document.createElement("li");
                if (input[w].value != "0") {
                    location.innerHTML = `${input[w].value}x ${input[w].id} ${Number(Number(input[w].value) * Number(input[w].getAttribute("price"))).toFixed(2)} €`;
                    sum += Number(input[w].value) * Number(input[w].getAttribute("price"));
                    document.getElementById("Flavo").appendChild(location);
                }
                ;
            }
            ;
            if (input[w].name == "Topping" && input[w].checked == true) {
                let location = document.createElement("li");
                location.innerHTML = `${input[w].id} ${Number(input[w].getAttribute("price")).toFixed(2)} €`;
                sum += Number(input[w].getAttribute("price"));
                document.getElementById("Toppi").appendChild(location);
            }
            ;
            if (input[w].name == "Delivery" && input[w].checked == true) {
                let location = document.createElement("li");
                location.innerHTML = `${input[w].id} ${Number(input[w].getAttribute("price")).toFixed(2)} €`;
                sum += Number(input[w].getAttribute("price"));
                document.getElementById("Deliv").appendChild(location);
            }
            ;
        }
        ;
        document.getElementById("price").innerHTML = String(sum.toFixed(2)) + " €";
    }
    ;
    function check(_event) {
        let fehler = "";
        let flavourchecked = 0;
        let containerCheck = 0;
        let optionChecked = 0;
        let adressChecked = 1;
        for (let d = 0; d < 6; d++) {
            if (input[d].name == "Postle") {
                if (Number(input[d].value) < 10000 || Number(input[d].value) > 99999) {
                    adressChecked = 0;
                }
            }
            if (input[d].value == "") {
                adressChecked = 0;
            }
        }
        for (let z = 0; z < input.length; z++) {
            if (input[z].name == "Container" && input[z].checked == true) {
                containerCheck = 1;
            }
            if (input[z].name == "Flavours" && Number(input[z].value) > 0) {
                flavourchecked = 1;
            }
            if (input[z].name == "Delivery" && input[z].checked == true) {
                optionChecked = 1;
            }
        }
        if (adressChecked == 0) {
            fehler += "Adress Angaben" + String.fromCharCode(13);
        }
        if (flavourchecked == 0) {
            fehler += "Flavour " + String.fromCharCode(13);
        }
        if (containerCheck == 0) {
            fehler += "Container " + String.fromCharCode(13);
        }
        if (optionChecked == 0) {
            fehler += "Delivery " + String.fromCharCode(13);
        }
        if (fehler != "") {
            alert("Missing Values: " + String.fromCharCode(13) + fehler);
        }
        else {
            alert("Thanks for your Order");
        }
    }
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=main.js.map