const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
    "happy"
];

let longWords = words.filter(word => word.length > 6);
console.log('long words are : ', longWords);

let array1 = [1, 4, 9, 16];

const newArray = array1.map(x => x * 2);
console.log('new array are : ', newArray)

let array3 = ["a", "b", "c"];
let text = "";

array3.forEach( element => {
    text += element + ",";
});
console.log('text is :', text);

let stringIBBatam = "Impact Byte Batam";
console.log('char At 0 : ', stringIBBatam.charAt(0))
console.log('char At 7 : ', stringIBBatam.charAt(7))

let resultLength = stringIBBatam.length;
console.log('resultLength is ', stringIBBatam.charAt(resultLength - 1))

let resultToUpperCase = stringIBBatam.toUpperCase();
console.log('resultTopUpperCase is ',resultToUpperCase)

let resultToLowerCase = stringIBBatam.toLowerCase();
console.log('resultToLowerCase is ', resultToLowerCase)

let resultSplit = stringIBBatam.split(" ");
console.log('resultSplit is ', resultSplit)
resultSplit = stringIBBatam.split(" ", 2);
console.log('second resultSplit is ', resultSplit)

let resultReplace = stringIBBatam.replace("Impact Byte Batam", "Ruang Kreasi Kepulauan Riau");
console.log('resultReplace is ', resultReplace)

let resultSubstr = stringIBBatam.substr(3, 6);
console.log('resultSubstr is ', resultSubstr);
resultSubstr = stringIBBatam.substr(resultLength - 4);
console.log('second resultSubstr is ', resultSubstr);

let iBBatamArray = ["Impact", "Byte", "Batam"];

iBBatamArray.sort();
console.log(`iBBatamArray.sort() is `, iBBatamArray)

let object1 = { fname: "Adrian"};
let object2 = { lname: "Pratama"};
let object3 = { age: 24 };

let object4 = {...object1, ...object2, ...object3}
console.log(`object4 value is`, object4)

let object5 = { object1, object2, object3}
console.log(`object5 value is`, object5)

let resultObjectKeys = Object.keys(object4);
console.log(`resultObjectKeys is`, resultObjectKeys)

// function firstFunction() {
//     let count = 0;
//     setInterval (() => {
//         count++;
//         alert(`this is setInterval & already show in ${count} times`);
//     }, 3000);
// }
// firstFunction();

// function secondFunction() {
//     setTimeout ( () => {
//         alert("this is settimeout");
//     }, 3000)
// }
// secondFunction();

let names = ["Budi", "Joni", "Tono", "Jaka"];
let modifiedName = names.map(name => "Mr." + name);
console.log('modifiedName value are', modifiedName)

const funct = name => "Mrs." + name;
modifiedName = names.map(funct);
console.log('second modifiedName value are', modifiedName)

const myFunction = (totalPrice = 0, name="none") => {
    const totalTax = totalPrice * 0.1;
    const detailTax = `pajak untuk ${name} adalah ${totalTax}`;

    return detailTax;
}
const barangDanPajax = myFunction(10000,'Shirt');
console.log(barangDanPajax)
console.log(myFunction(500, 'baju'))
console.log(myFunction(9000, 'sepatu'))
console.log(myFunction())

let carName = 'Toyota';
console.log('carName 1', carName)
function myFuntion() {
    let carName = "Lexus";
    console.log('carName 2', carName)
}

console.log('carName 3', carName)
myFuntion();
console.log('carName 4', carName)

myFunction2();
console.log(`carName 1 is ${carName3}`)

function myFunction2() {
    carName3 = "Volvo";
}
console.log(`carName 2 is ${carName3}`)

let person = {
    firstName : "John",
    lastName  : "Doe",
    id        : 5566,
    fullName  : function() {
        // debugger;
        return this.firstName + " " + this.lastName;
    }
};
console.log(`person fullname is ${person.fullName()}`)


let person1 = {
    fullName: function() {
        // debugger;
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName:"John",
    lastName:"Doe",
}

console.log(person1.fullName.bind(person2)())
console.log(person1.fullName())