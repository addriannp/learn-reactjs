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

let maleStudents = ['Budi, Gorge, James'];

const maleStudents1 = maleStudents.map(x = male);
console.log(' Budi Gorge and James are', maleStudents1)