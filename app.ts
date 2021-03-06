let myname: string = 'Franco'; //my name
const states: number = 50; //number of states in th US
let sum: number = 5 + 4; // the addition of 5 and 4

function sayHello(greeting: string) {
    alert(greeting);
}
sayHello("Hello World");

function checkAge(name: string, age: number) {
    if (age < 21) {
        console.log("sorry " + name + ", you aren't old enough to view this age!")
    }
}

var Charles = {
    name: "Charles",
    age: 21
};

var Abby = {
    name: "abby",
    age: 27
};

var James = {
    name: "James",
    age: 18
};

var John = {
    name: "John",
    age: 17
};

checkAge(Charles.name, Charles.age);
checkAge(Abby.name, Abby.age);
checkAge(James.name, James.age);
checkAge(John.name, John.age);

var veggies = ['lettuce', 'broccoil', 'Asparagus'];

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

interface People {
    name: string, 
    age: number
}

var arrayPeople: Array<People> = [
    {
        name: 'Cole',
        age: 20
    },

    {
        name: 'Blake',
        age: 26
    },

    {
        name: 'Kayla',
        age: 19
    },

    {
        name: 'Mary',
        age: 18
    },

    {
        name: 'Josh',
        age: 21
    }
]

for (var i = 0; i < arrayPeople.length; i++) {
    checkAge(arrayPeople[i].name, arrayPeople[i].age);
}

function getLength(string: string) {
    return string.length;
}

var returned = getLength("Hello World");

function evenOdd() {
    if (returned % 2 === 0) {
        console.log("The world is nice and even!");
    } else {
        console.log("The world is nice and odd!");
    }
}
evenOdd();
