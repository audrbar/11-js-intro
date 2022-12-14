console.clear();
/*
Revers revrite text
*/

function reverseString(str) {
    if (typeof str !== 'string') {
        return `ERROR: duok stringa, o ne ${typeof str}!`;
    }
    // if (str === undefined) {
    //     return 'ERROR: duok stringa, o ne undefined!';
    // if (typeof str === 'number') {
    //     return 'ERROR: duok stringa, o ne number!';
    // if (typeof str === 'boolean') {
    //     return 'ERROR: duok stringa, o ne boolean!';
    // if (typeof str === 'object') {
    //     return 'ERROR: duok stringa, o ne object!';
    // if (typeof str === 'function') {
    //     return 'ERROR: duok stringa, o ne function!';
    // }

    let text = '';

    // 1) eiti is teksto galo, imti simboli
    // for (let i = str.length - 1; i >= 0; i--) {
    //     const symbol = str[i];
    //     text += symbol;
    // }

    // 2) eini is teksta priekio ir imti simboli is galo
    // for (let i = 0; i < str.length; i++) {
    //     const symbol = str[str.length - i - 1];
    //     text += symbol;
    // }

    // 3) eini is teksta priekio ir imti simboli is priekio
    for (let i = 0; i < str.length; i++) {
        const symbol = str[i];
        text = symbol + text;
    }

    return text;
}

console.log(reverseString());
console.log(reverseString(undefined));
console.log(reverseString(5));
console.log(reverseString(true));
console.log(reverseString(false));
console.log(reverseString(null));
console.log(reverseString([]));
console.log(reverseString({}));
console.log(reverseString(function () { }));
console.log(reverseString(''), '-->', '');

console.log(reverseString('a'), '-->', 'a');
console.log(reverseString('g'), '-->', 'g');
console.log(reverseString('fff'), '-->', 'fff');
console.log(reverseString('asdsa'), '-->', 'asdsa');
console.log(reverseString('sedek uzu kedes'), '-->', 'sedek uzu kedes');
console.log(reverseString('sula'), '-->', 'alus');
console.log(reverseString('abcdef'), '-->', 'fedcba');
console.log(reverseString('qwerty'), '-->', 'ytrewq');
