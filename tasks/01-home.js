console.clear();

console.log('----kintamuju iniciavimas-----')
const as = 1;
const bs = 2;
const cs = 3;
console.log('Kintamieji su skaiciaus tipo reiksmemis: ', as, bs, cs);

const at = 'tekstas';
const bt = 'tekstui';
const ct = 'teksto';
console.log('Kintamieji su testo tipo reiksmemis: ', at, bt, ct);

const buildings = [25, 35, 27, 45, 68];
const postCodes = [05213, 25871, 36524, 25698, 01254];
const flatsNo = [56, 58, 47, 23, 45];
console.log('Building Numbers: ', buildings);
console.log('Post Codes: ', postCodes);
console.log('Flats Numbers: ', flatsNo);

const fruits = ['apple', 'orange', 'blueberry', 'lemon', 'kiwi'];
const vegetables = ['carrot', 'onion', 'potato', 'cabbage', 'pumpkin'];
const nuts = ['greek', 'coconut', 'walnut', 'hazelnut', 'nutmeg'];
console.log('Fruits: ', fruits);
console.log('Vegetables: ', vegetables);
console.log('Nuts: ', nuts);


console.log('-------Veiksmai su kintamaisiais-------');
const sumNumbers = as + bs + cs;
console.log('Susumuoti skaiciu kintamieji ', sumNumbers);
const textConcat = at + ' ' + bt + ' ' + ct;
console.log('Sujungti teksto kintamieji: ', textConcat);
let buildingsValue = 0;
let vegetablesValue = 0;
let nutsValue = 0;
buildingsValue = buildings[0] - buildings[1] + buildings[2] - buildings[3] + buildings[4];
postCodesValue = postCodes[0] - postCodes[1] + postCodes[2] - postCodes[3] + postCodes[4];
flatsNoValue = flatsNo[0] - flatsNo[1] + flatsNo[2] - flatsNo[3] + flatsNo[4];
console.log('Building Array Value: ', buildingsValue);
console.log('Post Codes Array Value: ', postCodesValue);
console.log('Flats Numbers Array Value: ', flatsNoValue);
const kablTarpas = ', ';
const fruitsList = fruits[0] + kablTarpas + fruits[1] + kablTarpas + fruits[2] + kablTarpas + fruits[3] + kablTarpas + fruits[4];
const vegetablesList = vegetables[0] + kablTarpas + vegetables[1] + kablTarpas + vegetables[2] + kablTarpas + vegetables[3] + kablTarpas + vegetables[4];
const nutsList = nuts[0] + kablTarpas + nuts[1] + kablTarpas + nuts[2] + kablTarpas + nuts[3] + kablTarpas + nuts[4];
console.log('Fruits List: ', fruitsList);
console.log('Vegetables List: ', vegetablesList);
console.log('Nuts List: ', nutsList);

console.log('--------Kintamuju palyginimas---------');
if (as > bs) {
    console.log(`Pomidoras: ${as} daugiau uz ${bs}.`);
} else {
    console.log(`Bandykite kita karta: ${as} maziau uz ${bs}.`);
}

if (as < bs) {
    console.log(`Pomidoras: ${as} maziau uz ${bs}.`);
} else {
    console.log(`Bandykite kita karta: ${as} daugiau uz ${bs}.`);
}

if (as === bs) {
    console.log(`Pomidoras: ${as} yra lygu ${bs}.`);
} else {
    console.log(`Bandykite kita karta: ${as} nera lygu ${bs}.`);
}

if (as !== bs) {
    console.log(`Pomidoras: ${as} nera lygu ${bs}.`);
} else {
    console.log(`Bandykite kita karta: ${as} yra lygu ${bs}.`);
}

if (as >= bs) {
    console.log(`Pomidoras: ${as} daugiau arba lygu ${bs}.`);
} else {
    console.log(`Bandykite kita karta: ${as} maziau uz ${bs}.`);
}

if (as <= bs) {
    console.log(`Pomidoras: ${as} maziau arba lygu ${bs}.`);
} else {
    console.log(`Bandykite kita karta: ${as} daugiau uz ${bs}.`);
}

const lenght1 = at.length;
const lenght2 = bt.length;
const lenght3 = ct.length;
console.log('Teksto tipo kintamuju ilgiai: ' , lenght1, lenght2, lenght3);

if (at > bt) {
    console.log('Teksto kintamojo at ilgis daugiau uz bt.');
} else {
    console.log('Teksto kintamojo at ilgis mazesnis uz bt.');
}

if (at < bt) {
    console.log('Teksto kintamojo at ilgis mazesnis uz bt.');
} else {
    console.log('Teksto kintamojo at ilgis didesnis uz bt.');
}

if (at === bt) {
    console.log('Teksto kintamojo at ilgis yra lygus bt.');
} else {
    console.log('Teksto kintamojo at ilgis nera lygus bt.');
}

if (at !== bt) {
    console.log('Teksto kintamojo at ilgis nera lygus bt.');
} else {
    console.log('Teksto kintamojo at ilgis yra lygus bt.');
}

if (at >= bt) {
    console.log('Teksto kintamojo at ilgis didesnis arba lygus bt.');
} else {
    console.log('Teksto kintamojo at ilgis mazesnis uz bt.');
}


if (at <= bt) {
    console.log('Teksto kintamojo at ilgis mazesnis arba lygus bt.');
} else {
    console.log('Teksto kintamojo at ilgis didesnis uz bt.');
}

const fruitsLenght1 = fruits[0].length;
const fruitsLenght2 = fruits[1].length;
const fruitsLenght3 = fruits[2].length;
const fruitsLenght4 = fruits[3].length;
const fruitsLenght5 = fruits[4].length;
console.log('Saraso tipo kintamuju ilgiai: ', fruitsLenght1, fruitsLenght2, fruitsLenght3, fruitsLenght4, fruitsLenght5);

if (fruitsLenght1 > fruitsLenght2) {
    console.log(`Pavadinimo ${fruits[0]} ilgis didesnis uz ${fruits[1]}`);
} else {
    console.log(`Pavadinimo ${fruits[0]} ilgis mazesnis uz ${fruits[1]}`);
}

if (fruitsLenght1 < fruitsLenght2) {
    console.log(`Pavadinimo ${fruits[0]} ilgis mazesnis uz ${fruits[1]}`);
} else {
    console.log(`Pavadinimo ${fruits[0]} ilgis didesnis uz ${fruits[1]}`);
}

if (fruitsLenght1 === fruitsLenght2) {
    console.log(`Pavadinimo ${fruits[0]} ilgis lygus ${fruits[1]}`);
} else {
    console.log(`Pavadinimo ${fruits[0]} ilgis nera lygus ${fruits[1]}`);
}

if (fruitsLenght1 !== fruitsLenght2) {
    console.log(`Pavadinimo ${fruits[0]} ilgis nera lygus ${fruits[1]}`);
} else {
    console.log(`Pavadinimo ${fruits[0]} ilgis yra lygus ${fruits[1]}`);
}

if (fruitsLenght1 >= fruitsLenght2) {
    console.log(`Pavadinimo ${fruits[0]} ilgis didesnis arba lygus ${fruits[1]}`);
} else {
    console.log(`Pavadinimo ${fruits[0]} ilgis mazesnis uz ${fruits[1]}`);
}

if (fruitsLenght1 <= fruitsLenght2) {
    console.log(`Pavadinimo ${fruits[0]} ilgis mazesnis arba lygus ${fruits[1]}`);
} else {
    console.log(`Pavadinimo ${fruits[0]} ilgis didesnis uz ${fruits[1]}`);
}

console.log('--------Ciklo for panaudojimas---------');
