const Fruits_Inventory = {
    Name: {
        Apple: {
            Quantity: 200,
            Price: 100
        },
        Mango: {
            Quantity: 300,
            Price: 200
        },

        Orange: {
            Quantity: 555,
            Price: 50
        },
        Banana: {
            Quantity: 645,
            Price: 25
        },
        Grapes: {
            Quantity: 799,
            Price: 100
        }
    }
}
const Priceof_Applle = Fruits_Inventory["Name"]["Apple"]["Price"];
const Priceof_Mango = Fruits_Inventory["Name"]["Mango"]["Price"];
const Priceof_Orange = Fruits_Inventory["Name"]["Orange"]["Price"];
const Quantityof_Applle = 4;
const Quantityof_Mango = 3;
const Quantityof_Orange = 2;
const Total = Priceof_Applle * Quantityof_Applle + Priceof_Mango * Quantityof_Mango + Priceof_Orange * Quantityof_Orange;

const { Name } = Fruits_Inventory;
console.log("Toatal Cost :" + Total);
console.log(Name);