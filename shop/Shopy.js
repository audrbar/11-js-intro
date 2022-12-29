class Shopy {
    constructor(pavadinimas, valiuta) {
        this.name = pavadinimas;
        this.valiuta = valiuta;
        this.goods = [{"item": '', "price": 0}];
    }
    intro(shop) {
        return console.log(`Hi, we are "${this.name}".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`);
    };
    addItem(item, price) {
        this.goods.push(item, price);
     return this.goods;
    }
}

export { Shopy };