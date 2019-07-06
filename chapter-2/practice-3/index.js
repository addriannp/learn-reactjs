const students = [{
    id: 1,
    name: 'Budi',
    grade: 90
},{
    id: 2,
    name: 'Gorge',
    grade: 74
},{
    id: 3,
    name: 'Shiva',
    grade: 24
},{
    id: 4,
    name: 'James',
    grade: 50
}]

let longGrades = students.filter(student => student.grade < 55);
console.log('below 55 is ', longGrades)


const maleStudents1 = students.map(student => {
    student.gender = 'male';
    return student
})
console.log(' Budi Gorge and James are', maleStudents1)

students.forEach( student => {
    // const grade = student.grade;
    // const name = student.name;
    const{ grade, name } = student;
    console.log(`hi im ${name}, im in ${grade} grade`);
})

maleStudents1.push(
    {
        name: 'Jolie',
        grade: 99,
        gender: 'female'

    }
)

console.group(maleStudents1)

maleStudents1.sort(function(studentA, studentB) {
    return studentA.name - studentB.name
})

console.log(maleStudents1);

maleStudents1.sort(function(studentA, studentB){
    return studentB.name - studentA.name
})

console.log(maleStudents1);

const studentGradeuate = maleStudents1.filter(student=> {
    return student.grade >= 55
})
console.log(studentGradeuate)