console.clear();
/*
LOOP - ciklas
tevas - for
vaikai (isvestiniai) - while, for-of, for-on, for-in, foreeach
next level - map, sort, filter, reduce, ...
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