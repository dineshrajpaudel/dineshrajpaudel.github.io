console.log("//Object hardcore");
const person1 = {
    firstName: "Ram ",
    lastName: "Yadav",
    birthYear: "2000",
    Address: "New Baneshwor",
    Disease: ["High Blood pressure"]

}
const person2 = {
    firstName: "Krishna ",
    lastName: "Maharjan",
    birthYear: "1995",
    Address: "Old Baneshwor ",
    Disease: ["Sugar", "Cough"]

}
const person3 = {
    firstName: "Hari ",
    lastName: "Acharya",
    birthYear: "1990",
    Address: "Putalisadak",
    Disease: ["Sick"]

}
const age = (birthYear) => {
    return 2021 - Number(birthYear);
}
console.log(person1, "Age:" + age(person1.birthYear));
console.log(person2, "Age:" + age(person2.birthYear));
console.log(person3, "Age:" + age(person3.birthYear));
//console.log(person1, person2, person3);
console.log("//Normal Function");
const person = (firstName, lastName, birthYear, Address, Disease) => {
    return {
        FirstName: firstName,
        LastName: lastName,
        BirthYear: birthYear,
        Address: Address,
        Disease: Disease,
        Age: 2021 - Number(birthYear)
    }
}
let Person4 = person("Dinesh Raj", "Paudel", 2000, "lamki", "No");
console.log(Person4);
let Person5 = person("Dhurva", "Oli", 1999, "Baneshwor", "Sick");
console.log(Person5);
let Person6 = person("Arun", "Kushuwaha", 1990, "Koteshwor", "Cough");
console.log(Person6);
let Person7 = person("Raj", "Kumar", 1999, "Baneshwor", "Sugar");
console.log(Person7);
let Person8 = person("Amit", "Yadav", 1995, "Kalanki", "Sick");
console.log(Person8);
let Person9 = person("Tara", "D.c", 1998, "Sitapaila", "No");
console.log(Person9);
let Person10 = person("Anil", "Oli", 1998, "Tikapur", "Bloodpresuure");
console.log(Person10);
let Person11 = person("Sanjay", "Thakur", 1996, "Kritipur", "Pressure");
console.log(Person11);
let Person12 = person("Bishnu", "Chaudhary", 1998, "Bhaktapur", "Sugar");
console.log(Person12);




console.log("//Constructor function");

function Persons(firstName, lastName, birthYear, Address, Disease) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.Address = Address;
    this.Disease = Disease;
    this.Age = (2021 - Number(this.birthYear));
}
let Person13 = new Persons("Ram", "Yadav", 1988, "Baneshwor", ["Sick", "Headache"]);
console.log(Person13);
let Person14 = new Persons("Dinesh Raj", "Paudel", 2000, "lamki", "No");
console.log(Person14);
let Person15 = new Persons("Dhurva", "Oli", 1999, "Baneshwor", "Sick");
console.log(Person15);
let Person16 = new Persons("Arun", "Kushuwaha", 1990, "Koteshwor", "Cough");
console.log(Person16);
let Person17 = new Persons("Raj", "Kumar", 1999, "Baneshwor", "Sugar");
console.log(Person17);
let Person18 = new Persons("Amit", "Yadav", 1995, "Kalanki", "Sick");
console.log(Person18);
let Person19 = new Persons("Tara", "D.c", 1998, "Sitapaila", "No");
console.log(Person19);
let Person20 = new Persons("Anil", "Oli", 1998, "Tikapur", "Bloodpresuure");
console.log(Person20);
let Person21 = new Persons("Sanjay", "Thakur", 1996, "Kritipur", "Pressure");
console.log(Person21);
let Person22 = new Persons("Bishnu", "Chaudhary", 1998, "Bhaktapur", "Sugar");
console.log(Person22);