const My_Button1 = document.createElement('button');
document.body.appendChild(My_Button1);
My_Button1.innerHTML = "T-shirt 20% off";
var Br1 = document.createElement('br');
document.body.appendChild(Br1);

const My_Button2 = document.createElement('button');
document.body.appendChild(My_Button2);
My_Button2.innerHTML = "Pant 30% off";
var Br2 = document.createElement('br');
document.body.appendChild(Br2);

const My_Button3 = document.createElement('button');
document.body.appendChild(My_Button3);
My_Button3.innerHTML = "Ball 2% off";
let Br3 = document.createElement('br');
document.body.appendChild(Br3);

const My_Button4 = document.createElement('button');
document.body.appendChild(My_Button4);
My_Button4.innerHTML = "Volleyball 0% off";


My_Button1.addEventListener('click', T_shirt);
My_Button2.addEventListener('click', Pant);
My_Button3.addEventListener('click', Ball);
My_Button4.addEventListener('click', Volleyball);




function T_shirt(name, discount, price, PAD) {

    var name, price = 500,
        discount = price * 20 / 100,

        PAD = price - discount;

    console.log("Name:" + "T-shirt" + "  Discount:" + discount + "    Price:" + price + "    PAD :" + PAD);
    alert("Name:" + "T-shirt" + "  Discount:" + discount + "    Price:" + price + "    PAD :" + PAD);
}


function Pant(name, discount, price, PAD) {

    var name, price = 600,
        discount = price * 30 / 100,

        PAD = price - discount;

    console.log("Name:" + "Pant" + "  Discount:" + discount + "    Price:" + price + "    PAD :" + PAD);
    alert("Name:" + "Pant" + "  Discount:" + discount + "    Price:" + price + "    PAD :" + PAD);
}

function Ball(name, discount, price, PAD) {

    var name, price = 677,
        discount = price * 2 / 100,

        PAD = price - discount;

    console.log("Name:" + "Ball" + "  Discount:" + discount + "    Price:" + price + "    PAD :" + PAD);
    alert("Name:" + "Ball" + "  Discount:" + discount + "    Price:" + price + "    PAD :" + PAD);
}

function Volleyball(name, discount, price, PAD) {

    var name, price = 500,
        discount = price * 0 / 100,

        PAD = price - discount;

    console.log("Name:" + "Volleyball" + "  Discount:" + discount + "    Price:" + price + "    PAD :" + PAD);
    alert("Name:" + "Volleyball" + "  Discount:" + discount + "    Price:" + price + "    PAD :" + PAD);
}