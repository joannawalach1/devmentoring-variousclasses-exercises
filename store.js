class Order {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    display() {
    console.log(`${this.name} `);
}
}

const orders = new Map();
orders.set(1, new Order(1, 'TV', 2000002));
orders.set(2, new Order(2, 'Radio', 213456)),
orders.set(3, new Order(3, 'Computer', 76823)),
orders.set(4, new Order(4, 'Laptop', 123900)),
orders.set(5, new Order(5, 'Wardrobe', 12345))

for (let i = 1; i <= orders.size; i++) {
console.log(`Zamówienie: id: ${orders.get(i).id} produkt: ${orders.get(i).name} cena: ${orders.get(i).price}`);
}
