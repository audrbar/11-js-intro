console.clear();
/*
LOOP - ciklas
tevas - for
vaikai (isvestiniai) - while, for-of, for-on, for-in, foreeach
next level - HOP (hyer order function) map, sort, filter, reduce, ...
*/
const marks = [10, 2, 8, 4, 6];

console.log('-----------FOR--------------');
let sumFor = 0;
for (let iFor = 0; iFor < marks.length; ++iFor) {
    const mark = marks[iFor];
    sumFor += mark;
}
console.log('For: ', sumFor / marks.length);

console.log('-----------WHILE--------------');

let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    const mark = marks[iWhile];
    sumWhile += mark;
    iWhile++;
}
console.log('While:', sumWhile / marks.length);

console.log('-----------FOR-OF--------------');

let = sumForOf = 0;
for (const mark of marks) {
    sumForOf += mark;
}
console.log('For-Of:', sumForOf / marks.length);

console.log('-----------FOREACH--------------');

let sumForeach1 = 0;
marks.forEach(function (mark, iForeach, list) {
    console.log(mark, iForeach, list);
    sumForeach1 += mark
});
console.log('Foreach1:', sumForeach1 / marks.length);

let sumForeach2 = 0;
marks.forEach(mark => { sumForeach2 += mark });
console.log('Foreach2:', sumForeach2 / marks.length);

let sumForeach3 = 0;
function sumavimasForeach(mark) {
    return sumForeach3 += mark;
}
marks.forEach(sumavimasForeach);
console.log('Foreach3:', sumForeach3 / marks.length);

console.log('-----FOR-OBJ-iteruoja per objekta------');

const user = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    favoriteNumber: 13,
    children: 5,
    grandChildren: 25
}

let sumForObj = 0;
const userKeys = Object.keys(user);
console.log(userKeys);
for (let i = 0; i < userKeys.length; i++) {
    const key = userKeys[i];
    const value = user[key];
    console.log(key, ':', user[key]);
    if (typeof value === 'number' && isFinite(value) && value > 0) {
        sumForObj += value;
    }
}
console.log('For-Obj:', sumForObj, '-->', 142);

console.log('--------FOR-IN---------');

let sumForIn = 0;
console.log(userKeys);
for (const key in user) {
    const value = user[key];
    if (typeof value === 'number' && isFinite(value) && value > 0) {
        sumForObj += value;
    }
}
console.log('For-In:', sumForIn, '-->', 142);

console.log('--------MAP---------');

// Map - grazinamas naijas to pacio dydzio masyvas
// su modifikuotomis reiksmemis

