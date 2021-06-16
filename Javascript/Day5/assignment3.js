const number = (Number) => {
    const arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    console.log(arrayList.length)
    for (let i = 1; i < arrayList.length; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else console.log(i);

    }
}
number();