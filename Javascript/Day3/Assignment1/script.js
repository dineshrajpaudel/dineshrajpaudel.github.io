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



function T_shirt(name, discount, price, PRICEAFTERDISCOUNT) {

    var name = "T-shirt",
        price = 500,
        discount = price * 20 / 100,

        PRICEAFTERDISCOUNT = price - discount;
    console.log("Name:" + name + "  Discount:" + discount + "    Price:" + price + "    PRICEAFTERDISCOUNT :" + PRICEAFTERDISCOUNT);

    alert("Name:" + name + "  Discount:" + discount + "    Price:" + price + "    PRICEAFTERDISCOUNT :" + PRICEAFTERDISCOUNT);
}

function Pant(name, discount, price, PRICEAFTERDISCOUNT) {

    var name = "pant",
        price = 600,
        discount = price * 30 / 100,

        PRICEAFTERDISCOUNT = price - discount;

    console.log("Name:" + name + "  Discount:" + discount + "    Price:" + price + "    PRICEAFTERDISCOUNT :" + PRICEAFTERDISCOUNT);
    alert("Name:" + "Pant" + "  Discount:" + discount + "    Price:" + price + "    PRICEAFTERDISCOUNT :" + PRICEAFTERDISCOUNT);
}

function Ball(name, discount, price, PRICEAFTERDISCOUNT) {

    var name = Ball,
        price = 677,
        discount = price * 2 / 100,

        PRICEAFTERDISCOUNT = price - discount;

    console.log("Name:" + name + "  Discount:" + discount + "    Price:" + price + "    PRICEAFTERDISCOUNT :" + PRICEAFTERDISCOUNT);
    alert("Name:" + "Ball" + "  Discount:" + discount + "    Price:" + price + "    PRICEAFTERDISCOUNT :" + PRICEAFTERDISCOUNT);
}

function Volleyball(name, discount, price, PRICEAFTERDISCOUNT) {

    var name = Volleyball,
        price = 500,
        discount = price * 0 / 100,

        PRICEAFTERDISCOUNT = price - discount;

    console.log("Name:" + name + "  Discount:" + discount + "    Price:" + price + "    PRICEAFTERDISCOUNT :" + PRICEAFTERDISCOUNT);
    alert("Name:" + "Volleyball" + "  Discount:" + discount + "    Price:" + price + "    PRICEAFTERDISCOUNT :" + PRICEAFTERDISCOUNT);
}