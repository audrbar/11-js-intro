console.log('---------Marks Average Count Function--------');

const currency = 'EUR';
const prekes = [
    {
        name: 'bananas',
        price: 2,
        inStock: 10
    },
    {
        name: 'agurkas',
        price: 3,
        inStock: 5
    },
    {name: 'pomidoras',
        price: 1.57,
        inStock: 13
    }
]

function shop() {

};
shop (prekes, currency);

console.log('Musu Parduotuve:')
console.log('----------------')
console.log(`1) Bananas kainuoja 2 EUR ir turime ju 10 vienetu.`)
console.log(`2) Agurkas kainuoja 3 EUR ir turime ju 10 vienetu.`)
console.log(`3) Pomidoras kainuoja 1.57 EUR ir turime ju 10 vienetu.`)
console.log('----------------')
console.log(`Viso asortiomento kaina: 97.10.`)