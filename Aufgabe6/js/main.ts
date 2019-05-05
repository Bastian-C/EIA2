namespace EisDealer {

    /*
        Aufgabe: Aufgabe 5, Eis Dealer reloaded 
        Name: (Bastian Culig)
        Matrikel: (3612802046414452)
        Datum: (28.04.2019) Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. 
    */

    window.addEventListener("load", init);

    function init():void{
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        writeHTML(theBoxes);
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", theChange);
            document.getElementById("check").addEventListener("click", check);
        }
    }

    function  writeHTML(_theboxes:Category):void{

        document.getElementById('theboxes').innerHTML="";
        document.getElementById('order').innerHTML=""; // This fixes a bug, that causes the writeHTML to execute the for-loop twice ... somehow

        for(let key in _theboxes){
            let category:Produkt[]=_theboxes[key];
            let div:HTMLElement=document.createElement('div');

            div.innerHTML=`<p>${key}</p>
            <ul id="${key.substring(0, 5)}"></ul>`;

            document.getElementById('order').appendChild(div);

            let box:HTMLElement=document.createElement('fieldset');
            
            let write=`<legende>${key}</legende><br>`;
            for(let b:number=0; b<category.length; b++){
               write += `<input type="${category[b].type}" name="${category[b].category}" id="${category[b].called}" price="${category[b].price}" min="${category[b].min}" max="${category[b].max}" step="${category[b].step}" value="0">
                    <label for="${category[b].called}">${category[b].called} ${category[b].price.toFixed(2)} €</label>
                    <br>`;
            }
            box.setAttribute("id", key);
            box.innerHTML=write;
            document.getElementById('theboxes').appendChild(box);
        }
           
    }
    
    let input:HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    
    function theChange(_event:Event):void{

        let sum:number=0;

            document.getElementById("Conta").innerHTML = "";
            document.getElementById("Flavo").innerHTML = "";
            document.getElementById("Toppi").innerHTML = "";
            document.getElementById("Deliv").innerHTML = "";

            for (let w: number = 0; w < input.length; w++){
                    if(input[w].name == "Container" && input[w].checked == true){
                        let location =document.createElement("li");
                        location.innerHTML=`${input[w].id}`;
                        document.getElementById("Conta").appendChild(location);
                    };

                    if(input[w].name == "Flavours"){
                        let location =document.createElement("li");
                        if (input[w].value != "0"){
                            location.innerHTML=`${input[w].value}x ${input[w].id} ${Number(Number(input[w].value) * Number(input[w].getAttribute("price"))).toFixed(2)} €`;
                            sum += Number(input[w].value) * Number(input[w].getAttribute("price"));
                            document.getElementById("Flavo").appendChild(location);
                        };
                    };

                    if(input[w].name == "Topping" && input[w].checked == true){
                        let location =document.createElement("li");
                        location.innerHTML=`${input[w].id} ${Number(input[w].getAttribute("price")).toFixed(2)} €`;
                        sum += Number(input[w].getAttribute("price"));
                        document.getElementById("Toppi").appendChild(location);
                    };

                    if(input[w].name == "Delivery" && input[w].checked == true){
                        let location =document.createElement("li");
                        location.innerHTML=`${input[w].id} ${Number(input[w].getAttribute("price")).toFixed(2)} €`;
                        sum += Number(input[w].getAttribute("price"));
                        document.getElementById("Deliv").appendChild(location);
                    };
            };

            document.getElementById("price").innerHTML = String(sum.toFixed(2)) + " €";

        };

        function check(_event:Event):void{
  
            let  error:string="";
            let flavourchecked:number=0;
            let containerCheck:number=0;
            let adressCheck:number=0;
            let optionChecked:number=0;
            let adressChecked:number=0;
                


                for(let t:number=0; t<input.length;t++){
                    if(input[t].name == "Name" && input[t].value != ""){
                        adressCheck += 1;
                    }
                    if(input[t].name == "Street" && input[t].value != ""){
                        adressCheck += 1;
                    }
                    if(input[t].name == "HouseID" && input[t].value != ""){
                        adressCheck += 1;
                    }
                    if(input[t].name == "Postle" && input[t].value != ""){
                        adressCheck += 1;
                    }
                    if(input[t].name == "Town" && input[t].value != ""){
                        adressCheck += 1;
                    }

                    if (adressCheck == 5){
                        adressChecked = 1;
                    }
                    else{
                        adressChecked = 0;
                    }

                    if(input[t].name == "Container" && input[t].checked == true){
                        containerCheck = 1;
                    }
                    if(input[t].name == "Flavours" && Number(input[t].value) > 0){
                        flavourchecked=1;
                    }
                    if(input[t].name == "Delivery" && input[t].checked == true){
                        optionChecked = 1;
                    }
                }

                if(adressChecked == 0){
                     error += "Adress" + String.fromCharCode(13);
                }

                if(flavourchecked == 0){
                     error += "Flavour "+ String.fromCharCode(13);
                }

                if(containerCheck == 0){
                     error += "Container "+ String.fromCharCode(13);
                }

                if(optionChecked == 0){
                     error += "Delivery "+ String.fromCharCode(13);
                }
                
                if( error!=""){
                alert("Missing Values: "+ String.fromCharCode(13) +  error)
                }

                else{
                alert("Thanks for your Order")
                }
            }    
        
    
        }