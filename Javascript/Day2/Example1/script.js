const student = {
    Name: " Dinesh Raj Paudel",
    Class: "DCOM(III / I)",
    Address: "Baneshwor Kathmandu",
    Grades: {
        quiz1: 90,
        quiz: 95,
        quiz3: 85
    }
}
console.log(student.Name, student.Class, student.Address);
console.log(student["Name"]);
console.log(student["Class"]);
console.log(student["Address"]);
console.log(student.Grades.quiz1);
console.log(student["Grades"]["quiz1"]);
delete student.Address; //remove object property using delete keyword
console.log(student);