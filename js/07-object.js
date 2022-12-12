/*OBJECT*/
// [vardas, ar vedes, amzius]
const user1 = ['Petras', 99, true];
const user2 = ['Maryte', 87, false];

// Petras yra 99 metu amziaus
// Maryte yta 87 metu amziaus
const user1Name = user1[0];
const user1Age = user1[1];
const user1Intro = `${user1Name} yra ${user1Age} metu amziaus.`;
console.log(user1Intro);

const user2Name = user2[0];
const user2Age = user2[1];
const user2Intro = `${user2Name} yra ${user2Age} metu amziaus.`;
console.log(user2Intro);
console.log('--------------------Empty Object------------------');
const emptyObject = {};
console.log(emptyObject);

const student1 = {
    name: 'Jonas',
    age: 99,
    isMarried: false,
    marks: [10, 2, 8, 4, 6]
};

const student2 = {
    name: 'Maryte',
    age: 87,
    isMarried: true,
    marks: [8, 5, 6, 7, 10]
};

console.log(student1);
console.log(student2);
console.log({}, typeof {});
console.log('--------------------Standart Value Extract from Object------------------');
const stud1Name = student1['name'];
const stud1Age = student1['age'];
const stud1IsMarried = student1['isMarried'];
const stud1Marks = student1['marks'];
console.log(stud1Name, stud1Age, stud1IsMarried, stud1Marks);

const stud2Name = student2['name'];
const stud2Age = student2['age'];
const stud2IsMarried = student2['isMarried'];
const stud2Marks = student2['marks'];
console.log(stud2Name, stud2Age, stud2IsMarried, stud2Marks);
console.log('--------------------Simple Value Extract from Object------------------');
const car = {
    brand: 'Tesla',
    model: 'S',
    priece: 10000,
    currecy: 'EUR',
    color: 'red'
};

console.log('Car: ', car);
console.log('Car brand: ', car['brand']);
console.log('Car brand: ', car.brand);
console.log('Car model: ', car.model);

const obj = {
    simple: 'paprasta reiksme',
    'childe-name': 'Jony boy',
    childeName: 'Jony sun'
};
console.log(obj.simple);
console.log(obj['simple']);
console.log('--------------------Extract from Object------------------');

const student3 = {
    name: 'Ona',
    age: 87,
    isMarried: true,
    marks: [8, 5, 6, 7, 10]
};

const marks = student3.marks;
console.log(marks);

let sum = 0;
sum += marks[0];
sum += marks[1];
sum += marks[2];
sum += marks[3];
sum += marks[4];

const count = marks.length;

const average = sum / count;
console.log('Marks average: ', average);

const person = {
    name: 'Petras',
    age: 99,
    childrenCount: 3,
    child1Name: 'maryte',
    children: [
        {
            name: 'Skaiste',
            age: 43
        },
        {
            name: 'Ajus',
            age: 32
        },
        {
            name: 'Menas',
            age: 25
        }
    ]
};

console.log(person.children[0].name);
console.log(person.children.length);

