let ageArray = [10, 2, 23, 45, 67, 99, 43, 52, 20, 5, 13, 14, 18, 46];
const eligible = (ageArray) => {
    for (let i = 0; i < ageArray.length; i++) {
        if (ageArray[i] > 18) {
            console.log(`Eligible for vote . Age : ${ageArray[i]}`);
        } else {
            console.log(`Not eligible for vote . Age : ${ageArray[i]}`);
        }
    }
}
eligible(ageArray);