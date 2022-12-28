console.clear();
console.log('Class ...');
// Objektinis kodo rasymo budas
// import Student from "./Student";
// const Student = require('./Student');
// import Studentas from './Student.js';
// import * as x from './Student.js';
// then use x.Student
import { Student as Studentas } from './Student.js';

const petras = new Studentas('Petras', 2000);

petras.addMarks(0, 2, 22, 10);
petras.addMark(8);
petras.addMark(10);
petras.addMark(7);
petras.addMark(-9);
petras.addMark(3.14);
petras.addMark(9);
petras.addMark(0);
petras.addMark(NaN);

petras.marks = [10];
console.log(petras.name, petras.getName());
console.log(petras);
console.log(petras.marks);
console.log(petras.marksAverage());