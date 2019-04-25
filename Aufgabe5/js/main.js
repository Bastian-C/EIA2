var EisDealer;
(function (EisDealer) {
    document.addEventListener("DOMContentLoaded", init); // Beim laden der Seite wird die Init funktion ausgeführt.
    let amountOfFlavour1 = 0;
    let amountOfFlavour2 = 0;
    let amountOfFlavour3 = 0;
    let amountOfFlavour4 = 0;
    let flavour1 = "noFlavour";
    let flavour2 = "noFlavour";
    let flavour3 = "noFlavour";
    let flavour4 = "noFlavour";
    let totalToppings = 0;
    let topCream = false;
    let topCC = false;
    let topVS = false;
    let topCS = false;
    let scoopCont = "";
    let deliver = "";
    let deliverCost = 0;
    let DelName = "";
    let DelAdress = "";
    let DelPostle = "";
    let DelTown = "";
    let totalCost = 0;
    let theCost = "";
    function init() {
        let containers = document.getElementsByTagName("fieldset"); // Erstelle ein ARRAY mit allen HTML Elementen vom Typ "fieldset".
        for (let i = 0; i < containers.length; i++) {
            containers[i].addEventListener("change", update); // Füge jedem Fieldset ein EventListener hinzu, der bei Änderungen ausgelößt wird. Bsp: Check box oder Radio element. 
            // Lößt die "update" Funktion aus, die in meine Bestellung schreibt, was alles ausgewählt wurde.
            document.getElementById("checkOrder").addEventListener("click", check_Order); //Beim Clicken auf den Button wird die Bestellung überprüft.
        }
    }
    function update(_event) {
        console.log(_event);
        let target = _event.target;
        // Speichere alle nötigen Variablen
        if (target.name == "holder") {
            scoopCont = target.id;
            document.getElementById("Cont").innerHTML = `${scoopCont}`;
        }
        if (target.name == "deli") {
            deliver = target.id;
            document.getElementById("Del").innerHTML = `${deliver}`;
            if (target.value == "4.00") {
                deliverCost = 4;
            }
            else if (target.value == "5.00") {
                deliverCost = 5;
            }
        }
        if (this.id == "Topping") {
            console.log(target.id);
            if (target.id == "CR") {
                if (target.checked == true) {
                    totalToppings += 1;
                    topCream = true;
                    console.log(topCream, topCC, topCS, topVS);
                }
                if (target.checked == false) {
                    totalToppings -= 1;
                    topCream = false;
                    if (totalToppings < 0) {
                        totalToppings = 0;
                    }
                }
            }
            if (target.id == "CC") {
                if (target.checked == true) {
                    totalToppings += 1;
                    topCC = true;
                }
                if (target.checked == false) {
                    totalToppings -= 1;
                    topCC = false;
                    if (totalToppings < 0) {
                        totalToppings = 0;
                    }
                }
            }
            if (target.id == "VS") {
                if (target.checked == true) {
                    totalToppings += 1;
                    topVS = true;
                }
                if (target.checked == false) {
                    totalToppings -= 1;
                    topVS = false;
                    if (totalToppings < 0) {
                        totalToppings = 0;
                    }
                }
            }
            if (target.id == "CS") {
                if (target.checked == true) {
                    totalToppings += 1;
                    topCS = true;
                }
                if (target.checked == false) {
                    totalToppings -= 1;
                    topCS = false;
                    if (totalToppings < 0) {
                        totalToppings = 0;
                    }
                }
            }
            console.log("The amount of Toppings is:" + totalToppings);
        }
        if (target.name == "amountFlavour1") {
            amountOfFlavour1 = parseInt(target.value);
        }
        if (target.name == "amountFlavour2") {
            amountOfFlavour2 = parseInt(target.value);
        }
        if (target.name == "amountFlavour3") {
            amountOfFlavour3 = parseInt(target.value);
        }
        if (target.name == "amountFlavour4") {
            amountOfFlavour4 = parseInt(target.value);
        }
        if (target.name == "TheFlavour1") {
            flavour1 = target.value;
        }
        if (target.name == "TheFlavour2") {
            flavour2 = target.value;
        }
        if (target.name == "TheFlavour3") {
            flavour3 = target.value;
        }
        if (target.name == "TheFlavour4") {
            flavour4 = target.value;
        }
        totalCost = 1.0 * (amountOfFlavour1 + amountOfFlavour2 + amountOfFlavour3 + amountOfFlavour4) + deliverCost + (totalToppings * 0.4);
        theCost = totalCost.toFixed(2);
        console.log(totalCost, theCost);
        if (target.name == "Name") {
            DelName = target.value;
            document.getElementById("DelName").innerHTML = "Full Name: " + DelName;
        }
        if (target.name == "Adress") {
            DelAdress = target.value;
            document.getElementById("DelAdress").innerHTML = "Adress: " + DelAdress;
        }
        if (target.name == "Postle") {
            DelPostle = target.value;
            document.getElementById("DelPostle").innerHTML = "Postle: " + DelPostle;
        }
        if (target.name == "Town") {
            DelTown = target.value;
            document.getElementById("DelTown").innerHTML = "Town: " + DelTown;
        }
        // Ende der Speicherung. Es Folgt das Rendern der Bestellung.
        document.getElementById("price").innerHTML = "" + theCost + " €";
        if (flavour1 != "noFlavour") {
            if (amountOfFlavour1 == 0) {
                document.getElementById("Flavour1").innerHTML = "";
            }
            else if (amountOfFlavour1 == 1) {
                document.getElementById("Flavour1").innerHTML = amountOfFlavour1 + " Scoop " + flavour1;
            }
            else if (amountOfFlavour1 > 1) {
                document.getElementById("Flavour1").innerHTML = amountOfFlavour1 + " Scoops " + flavour1;
            }
        }
        if (flavour1 == "noFlavour") {
            document.getElementById("Flavour1").innerHTML = "";
        }
        if (flavour2 != "noFlavour") {
            if (amountOfFlavour2 == 0) {
                document.getElementById("Flavour2").innerHTML = "";
            }
            else if (amountOfFlavour2 == 1) {
                document.getElementById("Flavour2").innerHTML = amountOfFlavour2 + " Scoop " + flavour2;
            }
            else if (amountOfFlavour2 > 1) {
                document.getElementById("Flavour2").innerHTML = amountOfFlavour2 + " Scoops " + flavour2;
            }
        }
        if (flavour2 == "noFlavour") {
            document.getElementById("Flavour2").innerHTML = "";
        }
        if (flavour3 != "noFlavour") {
            if (amountOfFlavour3 == 0) {
                document.getElementById("Flavour3").innerHTML = "";
            }
            else if (amountOfFlavour3 == 1) {
                document.getElementById("Flavour3").innerHTML = amountOfFlavour3 + " Scoop " + flavour3;
            }
            else if (amountOfFlavour3 > 1) {
                document.getElementById("Flavour3").innerHTML = amountOfFlavour3 + " Scoops " + flavour3;
            }
        }
        if (flavour3 == "noFlavour") {
            document.getElementById("Flavour3").innerHTML = "";
        }
        if (flavour4 != "noFlavour") {
            if (amountOfFlavour4 == 0) {
                document.getElementById("Flavour4").innerHTML = "";
            }
            else if (amountOfFlavour4 == 1) {
                document.getElementById("Flavour4").innerHTML = amountOfFlavour4 + " Scoop " + flavour4;
            }
            else if (amountOfFlavour4 > 1) {
                document.getElementById("Flavour4").innerHTML = amountOfFlavour4 + " Scoops " + flavour4;
            }
        }
        if (flavour4 == "noFlavour") {
            document.getElementById("Flavour4").innerHTML = "";
        }
        let write = "";
        document.getElementById("Top").innerHTML = "";
        if (topCream == true) {
            write += `<li>Cream</li>`;
        }
        if (topCC == true) {
            write += `<li>Chocolate Chips</li>`;
        }
        if (topVS == true) {
            write += `<li>Vanilla Sauce</li>`;
        }
        if (topCS == true) {
            write += `<li>Chocolate Sauce</li>`;
        }
        document.getElementById("Top").innerHTML = `${write}`;
    }
    function check_Order() {
        if (amountOfFlavour1 + amountOfFlavour2 + amountOfFlavour3 + amountOfFlavour4 < 1) {
            alert("Please order at least 1 Scoop.");
        }
        else if (amountOfFlavour1 > 0 && flavour1 == "noFlavour" || amountOfFlavour2 > 0 && flavour2 == "noFlavour" || amountOfFlavour3 > 0 && flavour3 == "noFlavour" || amountOfFlavour4 > 0 && flavour4 == "noFlavour") {
            alert("Please select Flavour");
        }
        else if (deliver == "") {
            alert("Please select delivery Option.");
        }
        else if (DelAdress == "") {
            alert("Please fill out the Delivery Form.");
        }
        else if (DelName == "") {
            alert("Please fill out the Delivery Form.");
        }
        else if (DelTown == "") {
            alert("Please fill out the Delivery Form.");
        }
        else if (DelPostle == "") {
            alert("The Default Postle of 78120 will be selected, if the Field is left Empty.");
        }
        else {
            alert("Order recieved.");
        }
    }
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=main.js.map