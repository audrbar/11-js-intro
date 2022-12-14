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
        name: 'Bananas',
        price: 2,
        inStock: 10
    },
    {
        name: 'Agurkas',
        price: 3,
        inStock: 10
    },
    {
        name: 'Pomidoras',
        price: 1.57,
        inStock: 30
    }
];
console.log('MUSU PARDUOTUVE:');
console.log('----------------');
const i = 0;
let sumGoods = 0;
function shop (goods) {
    const count = goods.length;
    for (let i = 0; i < count; i++) {
        console.log(`${i +1}\) ${goods[i].name} kainuoja ${goods[i].price} ${currency} ir turime ju ${goods[i].inStock} vienetu.`);
        sumGoods += goods[i].price * goods[i].inStock;
    }
    return sumGoods;
}
shop (goods);
console.log('----------------');
console.log(`Viso asortimento kaina: ${sumGoods} ${currency}`);