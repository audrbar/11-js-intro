console.clear();
// Rest operator - surenka likusias nepaimtas reiksmes destrukturizuojant

const marks = [10, 2, 8, 4, 6];
const [first, second, ...visiKiti] = marks;

console.log(marks);
console.log(first);
console.log(second);
console.log(visiKiti);

console.log('--------------------------------');
const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    favorite: {
        color: 'red',
        number: 13,
        artist: 'Spice Girls'
    }
}
const { age, isMarried, ...other } = person;
console.log(age, isMarried);
console.log(other);

console.log('--------Du parametrai---------');

function sum(a, b) {
    console.log('ARGS', a, b, arguments, [...arguments]);
    return a + b;
}

const s1 = sum(7, 5);
console.log(s1);

console.log('--------Vienas parametras---------');

function arraySum(list) {
    let totalSum = 0;

    for (let i = 0; i <list.lenght; i++) {
        totalSum += list[i];
    }

    return totalSum;
}

const s2 = arraySum([10, 2, 8, 4, 6]);
console.log(s2);

console.log('--------Kitas---------');

function sudetis(...args) {
    let total = 0;

    for (let i = 0; i <args.lenght; i++) {
        totalSum += args[i];
    }

    return total;
}

const s3 = sudetis(10, 2, 8, 4, 6);
console.log(s3);

console.log('--------Dar kitas---------');

function product() {
    let total = 1;
    
    for (let i = 0; i <[...arguments].lenght; i++) {
        totalSum *= [...arguments][i];
    }

    return total;
}

const s4 = product(10, 2, 8, 4, 6);
console.log(s4);