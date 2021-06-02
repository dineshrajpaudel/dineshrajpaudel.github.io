const Inventory_Data = {
    mask: 999,
    sanitizer: 500,
    paracetamol: 900
}
const Inventory_Price = {
    mask: 20,
    sanitizer: 100,
    paracetamol: 50
}

const Mask_Quantity = 3;
const Mask_Price = Mask_Quantity * Inventory_Price.mask;
const Total = Mask_Price + Inventory_Price["paracetamol"] + Inventory_Price["sanitizer"];
console.log("Total :" + Total);


const Mask_Price2 = Mask_Quantity * Inventory_Price["mask"];
const Total2 = Mask_Price2 + Inventory_Price["paracetamol"] + Inventory_Price["sanitizer"];
console.log("Total :" + Total2);