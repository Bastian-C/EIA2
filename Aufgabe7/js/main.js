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
            document.getElementById("check").addEventListener("click", createURL);
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
                write += `<input type="${category[b].type}" name="${category[b].called}" id="${category[b].called}" price="${category[b].price}" min="${category[b].min}" max="${category[b].max}" step="${category[b].step}" value="${category[b].value}">
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
            if (input[w].value == "Container" && input[w].checked == true) {
                let location = document.createElement("li");
                location.innerHTML = `${input[w].id}`;
                document.getElementById("Conta").appendChild(location);
            }
            ;
            if (input[w].type == "number") {
                let location = document.createElement("li");
                if (input[w].value != "0") {
                    location.innerHTML = `${input[w].value}x ${input[w].id} ${Number(Number(input[w].value) * Number(input[w].getAttribute("price"))).toFixed(2)} €`;
                    sum += Number(input[w].value) * Number(input[w].getAttribute("price"));
                    document.getElementById("Flavo").appendChild(location);
                }
                ;
            }
            ;
            if (input[w].value == "Topping" && input[w].checked == true) {
                let location = document.createElement("li");
                location.innerHTML = `${input[w].id} ${Number(input[w].getAttribute("price")).toFixed(2)} €`;
                sum += Number(input[w].getAttribute("price"));
                document.getElementById("Toppi").appendChild(location);
            }
            ;
            if (input[w].value == "Delivery" && input[w].checked == true) {
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
        let error = "";
        let flavourchecked = 0;
        let containerCheck = 0;
        let adressCheck = 0;
        let optionChecked = 0;
        let adressChecked = 0;
        for (let t = 0; t < input.length; t++) {
            if (input[t].name == "Name" && input[t].value != "") {
                adressCheck += 1;
            }
            if (input[t].name == "Street" && input[t].value != "") {
                adressCheck += 1;
            }
            if (input[t].name == "HouseID" && input[t].value != "") {
                adressCheck += 1;
            }
            if (input[t].name == "Postle" && input[t].value != "") {
                adressCheck += 1;
            }
            if (input[t].name == "Town" && input[t].value != "") {
                adressCheck += 1;
            }
            if (adressCheck == 5) {
                adressChecked = 1;
            }
            else {
                adressChecked = 0;
            }
            if (input[t].value == "Container" && input[t].checked == true) {
                containerCheck = 1;
            }
            if (input[t].type == "number" && Number(input[t].value) > 0) {
                flavourchecked = 1;
            }
            if (input[t].value == "Delivery" && input[t].checked == true) {
                optionChecked = 1;
            }
        }
        if (adressChecked == 0) {
            error += "Adress" + String.fromCharCode(13);
        }
        if (flavourchecked == 0) {
            error += "Flavour " + String.fromCharCode(13);
        }
        if (containerCheck == 0) {
            error += "Container " + String.fromCharCode(13);
        }
        if (optionChecked == 0) {
            error += "Delivery " + String.fromCharCode(13);
        }
        if (error != "") {
            alert("Missing Values: " + String.fromCharCode(13) + error);
        }
        else {
            alert("Thanks for your Order");
        }
    }
    function createURL() {
        let custonOrder = document.getElementsByTagName("input");
        let url = "https://server-eia2-bc.herokuapp.com/?";
        for (let i = 0; i < custonOrder.length; i++) {
            if (custonOrder[i].name == "Container" && custonOrder[i].checked == true) {
                url += `${custonOrder[i].name}:${custonOrder[i].value}&`;
            }
            if (custonOrder[i].name == "Delivery" && custonOrder[i].checked == true) {
                url += `${custonOrder[i].name}:${custonOrder[i].value}&`;
            }
            if (custonOrder[i].type == "number" && Number(custonOrder[i].value) > 0) {
                url += `${custonOrder[i].value}scoops of:${custonOrder[i].name}&`;
            }
            if (custonOrder[i].type == "checkbox" && custonOrder[i].checked == true) {
                url += `${custonOrder[i].name}:${custonOrder[i].value}&`;
            }
        }
        sendRequestWithCustomData(url);
    }
    function sendRequestWithCustomData(_url) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", _url, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("recievedOrder").innerHTML = xhr.response;
        }
    }
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=main.js.map