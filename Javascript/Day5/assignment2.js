const number = (Number) => {
    for (let i = 0; i <= Number; i++) {
        if (i === 0 || i % 3 === 0) {
            console.log(i + " " + "Fizz");
        }
        if (i === 0 || i % 5 === 0) {
            console.log(i + " " + "Buzz");
        }
        if (i === 0 || i === 15) {
            console.log(i + " " + "FizzBuzz");
        }
    }
}
number(15);