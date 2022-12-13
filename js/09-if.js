/*
IF sablonai
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} else if () {} ...  else if () {}
if () {} else if () {} ...  else if () {} else {}
Palyginimo operatoriai:
    Naudotini: <, >, >=, =<, ===, !== (tikrina tipa ir reiksme)
    Nenaudotini: ==, != (tikrina tipa)
*/

const a = 7;
const b = 5;

console.log('start');
if (a > b) {
    console.log(`${a} daugiau us ${b}`);
} else {
    console.log(`${a} nera daugiau us ${b}`);
}
console.log('end');

console.log('start');
if (a == b) {
    console.log(`${a} yra lygu ${b}`);
} else {
    console.log(`${a} nera lygu ${b}`);
}
console.log('end');

console.log('start');
if (a != b) {
    console.log(`${a} ne lygu ${b}`);
} else {
    console.log(`${a} lygu ${b}`);
}
console.log('end');
console.log('--------------<<<>>>----------------');
const c = 11;
const d = 13;

console.log('start');
if (c > d) {
    console.log(`C daugiau uz D`);
} else if (c < d) {
    console.log(`C maziau uz D`);
} else if (c == d) {
        console.log(`C lygu D`);
}
console.log('end');
console.log('--------------<<<>>>----------------');
console.log('start');
if (c > d) {
    console.log(`C daugiau uz D`);
} else if (c < d) {
    console.log(`C maziau uz D`);
} else if (c == d) {
        console.log(`C lygu D`);
}
console.log('end');
console.log('--------------<<<>>>----------------');
console.log('start');
if ('labas' === 'Labas') {
    console.log('vienodi');
} else {
    console.log('skirtingi');
}
console.log('end');

console.log('--------------<<<>>>----------------');
const suma = '5';
if (typeof suma === 'number') {
    console.log('Pavedinmas');
} else {
    console.log('Jokio pavedimo');
}
