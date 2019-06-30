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