// MUSU PARDUOTUVE:
// ----------------
// 1) Bananas kainuoja 2.00 EUR ir turime ju 10 vienetu.
// 2) Agurkas kainuoja 3.00 EUR ir turime ju 10 vienetu.
// 3) Pomidoras kainuoja 1.57 EUR ir turime ju 30 vienetu.
// ----------------
// Viso asortimento kaina: 97.10 EUR.

console.clear();
const currency = 'EUR';
const goods = [
    {
        name: 'bananas',
        price: 2,
        inStock: 10
    },
    {
        name: 'agurkas',
        price: 3,
        inStock: 10
    },
    {
        name: 'pomidoras',
        price: 1.57,
        inStock: 30
    }
]
const i = 0;
function shop() {

};
shop (goods, currency);

console.log('MUSU PARDUOTUVE:');
console.log('----------------');
console.log(`${i +1}\) ${goods[0].name} kainuoja ${goods[0].price} ${currency} ir turime ju ${goods[0].inStock} vienetu.`);
console.log(`${i +1}\) ${goods[0].name} kainuoja ${goods[1].price} ${currency} ir turime ju ${goods[0].inStock} vienetu.`);
console.log(`${i +1}\) ${goods[0].name} kainuoja ${goods[2].price} ${currency} ir turime ju ${goods[0].inStock} vienetu.`);




console.log('---------Marks Average Count--------');
const marks = [10, 2, 8, 4, 6];
const count = marks.length;
let sum = 0

for (let i = 0; i < count; i++) {
    sum += marks[i];
    console.log(i, marks, marks[i], sum);
}

const average = sum / count;
console.log('Pazymiu vidurkis: ', average);

function marksAverage(marksArray) {
    let sum = 0;
    for (let i = 0; i < marksArray.length; i++) {
        sum += marksArray[i];
    }
    return sum / marksArray.length;
};
console.log('Pazymiu vidurkis: ', average);