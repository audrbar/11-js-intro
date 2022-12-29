class Shopy {
    constructor(pavadinimas, valiuta) {
        this.name = pavadinimas;
        this.currency = valiuta;
        this.items = [];
        this.prices = [];
        this.goods = [{"item": '', "price": 0}];
    }
    intro() {
        return console.log(`Hi, we are "${this.name}".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`);
    };
    addItem(item, price) {
        this.items.push(item);
        this.prices.push(price);
        return console.log(`"${this.name}" sells ${item} for ${(price / 100).toFixed(2)} ${this.currency} now!`);
    }
    itemss() {
        let count = 1;
        console.log(`Items for sale at "${this.name}":`);
        console.log('====================');
        for (let i = 0; i < this.items.length; i++) {
            console.log(
                `{${count}) ${this.items[i][0].toUpperCase() + this.items[i].slice(1)} - ${(this.prices[i] / 100).toFixed(2)} ${this.currency}}`
            );
            count++;
            // return str.toLowerCase().split(' ').map(function(word) {
            //     return word.replace(word[0], word[0].toUpperCase());
            //   }).join(' ');
        }
        console.log('====================');
    }
}

export { Shopy };