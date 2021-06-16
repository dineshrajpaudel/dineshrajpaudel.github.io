myObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
for (var i in myObj) {
    //  console.log(i + ": " + myObj[i]);
    console.log(`${i}:  ${myObj[i]}`);
}