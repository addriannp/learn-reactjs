class Circle {
    constructor (radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * 2 * this.radius;
    }
}

let circle = new Circle(10);
let circle2 = new Circle(3);
let totalArea = circle.getArea();
console.log(`this totalArea is ${totalArea}`)

const object = {
    name: 'Budi',
    gender:'Male',
    live:'Batam',
}
console.log(object);

// const {name, gender, live} = object;
// console.log(name, gender, live)

const simpleFunction = ({ name, gender}) => `hi my name is ${name} with gender ${gender}`
const greeting = simpleFunction(object)
console.log(greeting)

const { name, ...newObject } = object;
console.log(name);
console.log(newObject);

const person1 = {
    name: 'Omni Knight',
    class: 'Support',
    level: 21
};

const person2 = {
    ...person1,
    name: 'Tide Hunter'
};
console.log(`person1 is`, person1)
console.log(`person2 is`, person2)

const App = {
    start() {
        console.log('running')
    },
    end() {
        console.log('stop')
    }
}

App.end();