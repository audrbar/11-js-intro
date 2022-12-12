/*
Boolean (logine reiksme)
true (vienetas)
false (nulis)
*/

const arSninga = true;
const arLyja = false;

console.log('Ar sninga?', arSninga);
console.log('Ar lyja?', arLyja);

console.log('----------------Idomensi atvejai--------------------');

const luckyNumeber = 13;
const luckuSentence = `My lucky number is ${luckyNumeber}`;
console.log(luckuSentence);

const snowString = `Ar sninga? Ats.: ${arSninga}`;
console.log(snowString);

const rainString = `Ar lyja? Ats.: ${arLyja}`;
console.log(rainString);

const penkiosTiesos = true + true + true + true + true;
console.log('Tiesos: ', penkiosTiesos);

const penkiMelai = false + false + false + false + false;
console.log('Melai: ', penkiMelai);

const combo = 5 * true - 7 * false;
console.log('Combo: ', combo);

console.log('----------------Saknis--------------------');

const Saknis81 = 81 ** 0.5;
console.log('Saknis is 81: ', Saknis81);

const kubineSaknis27 = 27 ** (1 / 3);
console.log(kubineSaknis27);