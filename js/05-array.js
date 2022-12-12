console.log('-------------------Array-------------------');
// list, sarasas, matrix, matrica, masyvas

const emptyArray = [];
console.log(emptyArray);

const marks = [10, 2, 8, 6];
console.log(marks);

const usersNames = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(usersNames);

const boolList = [true, false, true, false];
console.log(boolList);

const combo1 = ['Jonas', 99, true];
const combo2 = ['Maryte', 56, false];
console.log(combo1, combo2);

// nerekomenduotina miksuoti reiksmiu tipus masyve
console.log('-------------------Veiksmai su masyvais-------------------');
const marksCount = marks.length;
console.log(marksCount);

const userCount = usersNames.length;
console.log(userCount);

const boolCount = boolList.length;
console.log(boolCount);

const emtySize = emptyArray.length;
console.log(emtySize);

const money = [5, 10, 20, 5];
let wallet = 0;
console.log('Kupiuros: ', money);

wallet = wallet + money;
console.log('Wallet: ', wallet, 'pinigu');

const marks2 = [10, 2, 8, 4, 6];

let marksSum = 0;
marksSum += marks2[0];
marksSum += marks2[4];
console.log('Marks sum: ', marksSum);

console.log(marks2[5])

const x = 30 + undefined;
console.log(x);

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
const separator = ',';
const ending = '.';
let abcString = 'Abecele: ';
abcString += abc[0] + separator;
abcString += abc[1] + separator;
abcString += abc[2] + separator;
abcString += abc[3] + separator;
abcString += abc[4] + separator;
abcString += abc[5] + ending;
console.log(abcString);

const abcd = ['a', 'b', 'c', 'd', 'e', 'f'];
let abcdString = 'Abecele: ';
let i = 0;
i = i + 1;
abcString += abc[i] + separator;
console.log(abcdString);
