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
console.log(Mask_Price);


const Mask_Price2 = Mask_Quantity * Inventory_Price["mask"];
console.log(Mask_Price2);