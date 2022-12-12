/*TYPEOF - nustato teiksmes tipa */

const n = 5; // number
const s = 'hi'; // string
const b = true; // boolean

const nType = typeof n;
const sType = typeof s;
const bType = typeof b;

console.log(n, nType);
console.log(s, sType);
console.log(b, bType);

console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 3.14);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof 'oiidrd');

const marks = [10, 2, 8];
const marksType = typeof marks;
console.log(marks, marksType);