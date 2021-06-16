const number = (Number) => {
    for (let i = 1; i <= Number; i++) {
        switch (true) {
            case (i % 15 === 0):
                console.log("FizzBuzz");
                break;
            case (i % 3 === 0):
                console.log("Fizz");
                break;
            case (i % 5 === 0):
                console.log("Buzz");
                break;
            default:
                console.log(i);

        }



        /* if (i % 15 === 0) console.log("FizzBuzz");
         else if (i % 3 === 0) console.log("Fizz");
         else if (i % 5 === 0) console.log("Buzz");
         else console.log(i);*/

    }
}
number(20);