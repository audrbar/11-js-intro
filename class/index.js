console.clear();
console.log('Class ...');
// Objektinis kodo rasymo budas
// import Student from "./Student";
// const Student = require('./Student');
import Studentas from './Student.js';

const petras = new Studentas('Petras', 2000);
const maryte = new Studentas('Maryte', 2003);

console.log(Studentas);
console.log(petras);
console.log(petras.name, petras.birthYear, petras.isMaried);
console.log(maryte);
console.log(maryte.name, maryte.birthYear, maryte.isMaried);