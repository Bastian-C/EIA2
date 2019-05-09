var EisDealer;
(function (EisDealer) {
    /*
        Aufgabe: Aufgabe 5, Eis Dealer reloaded
        Name: (Bastian Culig)
        Matrikel: (3612802046414452)
        Datum: (28.04.2019) Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
    EisDealer.theBoxes = {
        "Container": [
            { called: "Waffle", price: 0, type: "radio", category: "Container", min: 0, max: 0, step: 0, value: "Container" },
            { called: "Cup", price: 0, type: "radio", category: "Container", min: 0, max: 0, step: 0, value: "Container" },
            { called: "Wafflecup", price: 0, type: "radio", category: "Container", min: 0, max: 0, step: 0, value: "Container" }
        ],
        "Flavours": [
            { called: "Strawberry", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" },
            { called: "Banana", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" },
            { called: "Citrus", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" },
            { called: "Melon", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" },
            { called: "Mango", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" },
            { called: "Rasberry", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" },
            { called: "Chocolate", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" },
            { called: "Vanilla", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" },
            { called: "Coconut", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" },
            { called: "Oreo", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" },
            { called: "Cinamon", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" },
            { called: "Rumpunch", price: 0.8, type: "number", category: "Flavours", min: 0, max: 5, step: 1, value: "0" }
        ],
        "Topping": [
            { called: "Cream", price: 0.50, type: "checkbox", category: "Topping", min: 0, max: 0, step: 0, value: "Topping" },
            { called: "Chocolate Chips", price: 0.30, type: "checkbox", category: "Topping", min: 0, max: 0, step: 0, value: "Topping" },
            { called: "Vanila Sauce", price: 0.40, type: "checkbox", category: "Topping", min: 0, max: 0, step: 0, value: "Topping" },
            { called: "Chocolate Sauce", price: 0.40, type: "checkbox", category: "Topping", min: 0, max: 0, step: 0, value: "Topping" },
        ],
        "Delivery": [
            { called: "Immediately", price: 1.00, type: "radio", category: "Delivery", min: 0, max: 0, step: 0, value: "Delivery" },
            { called: "To take", price: 0.00, type: "radio", category: "Delivery", min: 0, max: 0, step: 0, value: "Delivery" },
            { called: "On time", price: 1.50, type: "radio", category: "Delivery", min: 0, max: 0, step: 0, value: "Delivery" }
        ]
    };
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=data.js.map