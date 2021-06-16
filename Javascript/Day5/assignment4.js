const number = (Number) => {
    const arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    for (let i = 1; i <= arrayList.length; i++) {
        if (i % 15 === 0) {
            console.log(i + " " + "FizzBuzz");
        } else if (i % 3 === 0) {
            console.log(i + " " + "Fizz");
        } else if (i % 5 === 0) {
            console.log(i + " " + "Buzz");
        } else { console.log(i); }

    }
}
number(20);