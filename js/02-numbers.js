/* 
NUMBERS
 - tikri/netikri (skaiciaus tipas, bet ne tikras skiacius)
 -- Infinity
 -- NaN (not-a-number)
 - sveikieji/desimtainiai
 - teigiami/neigiami

INICIJAVIMAS
const - nekeiciama reiksme (default)
let - kintama reiksme (sekantis tinkamas pasirinkimas)
var - seniena, niekada nenaudoti
*/
const PI = 3.14;
console.log(PI);

const wallet = 0;
console.log(wallet);

let wallett = 0;
console.log(wallett);

wallett = 4;
console.log(wallett);

const negative = -888;
console.log(negative);

const max = Infinity;
const min = -Infinity;

console.log(Infinity);
console.log(-Infinity);

console.log(NaN);
console.log('------------------kintamuju pavadinimai---------------------------')
const vienas = 1;
const antrasskacius = 2;
const antraSkacius = 2;
const AntrasSkacius = 2;
const antras_skacius = 2;

const a = 5;
const b = 7;
console.log('------------------matematines operacijos---------------------------')
// suma
const suma = a + b;
console.log(a, b, suma);
// skirtumas
const skirtumas = a - b;
console.log(a, b, skirtumas);
// dalmuo
const dalmuoAB = a / b;
const dalmuoBA = b / a;
console.log(a, b, dalmuoAB);
console.log(a, b, dalmuoBA);
//sandauga
const sandauga = a * b;
console.log(a, b, sandauga);
// liekana (kas liko 7 padalinus is 5 = 2)
const liekanaAB = a % b;
const liekanaBA = b % a;
console.log(a, b, liekanaAB);
console.log(a, b, liekanaBA);
// laipsnis
const laipsnisAB = a ** b; // a pakelta b
const laipsnisBA = b ** a; // b pakelta a
console.log(a, b, laipsnisAB);
console.log(a, b, laipsnisBA);
console.log('------------------kita tema---------------------------')
let pazymiuSuma = 0;
console.log('pazymiuSuma: ', pazymiuSuma);
const p1 = 10;
const p2 = 2;
const p3 = 8;
const p4 = 4;
pazymiuSuma = pazymiuSuma + p1;
console.log('pazymiuSuma: ', pazymiuSuma);
pazymiuSuma = pazymiuSuma + p2;
console.log('pazymiuSuma: ', pazymiuSuma);
pazymiuSuma = pazymiuSuma + p3;
console.log('pazymiuSuma: ', pazymiuSuma);
pazymiuSuma = pazymiuSuma + p4;
console.log('pazymiuSuma: ', pazymiuSuma);

const islaida1 = 10;
const islaida2 = 20;
const islaida3 = 25;
const islaida4 = 30;

let saskaita = 100;
saskaita -= islaida1;
console.log('isleidau:', islaida1, 'saskaitoje liko:', saskaita);

saskaita -= islaida2;
console.log('isleidau:', islaida2, 'saskaitoje liko:', saskaita);

saskaita -= islaida3;
console.log('isleidau:', islaida3, 'saskaitoje liko:', saskaita);

saskaita -= islaida4;
console.log('isleidau:', islaida4, 'saskaitoje liko:', saskaita);
console.log('------------------sutrumpinimai---------------------------')
/*
x = x + 1 -> 
*/
let index = 0;
index = index + 1;
console.log('index:', index);

index++;
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);

let index2 = 0;
console.log('index2:', ++index2);
console.log('index2', ++index2);
console.log('index2:', ++index2);
console.log('index2:', ++index2);
console.log('index2:', ++index2);