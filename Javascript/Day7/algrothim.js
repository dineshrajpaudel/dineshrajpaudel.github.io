let students = "Dinesh Arun Bikash Anil";
let games = "Dinesh anu sanu Anil Bikash Arun hooky djn jkjedh jkhiueheiu jkheduheibkjb Dinesh Dinesh hjgiduwhjb";
let studentsArray = students.split(" ");
let gamesArray = games.split(" ");
let gamesObject = {};
let result = true;

const getStudent = (students, games) => {
    gamesArray.forEach((value) => {
        if (!gamesObject[value]) {
            gamesObject[value] = 0;
        }
        gamesObject[value]++;
    });
    return checkStudent(studentsArray);
}

const checkStudent = (studentsArray) => {
    studentsArray.forEach((element) => {
        if (!gamesObject[element]) {
            result = false;
        }
    });
    return result;
}
console.log(getStudent(students, games));