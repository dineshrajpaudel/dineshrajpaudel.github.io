let myString = "hi hi hi hello hello hello hello  ram ram ram ram ram ram ram shyam  shyam shyam";
const myAry = myString.split(" ");
let myObj = {};
for (var i = 0; i < myAry.length; i++) {
    if (!myObj[myAry[i]]) {
        myObj[myAry[i]] = 0;
    }
    myObj[myAry[i]]++;
}
console.log(myObj);