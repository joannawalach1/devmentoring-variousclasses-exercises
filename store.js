class Order {
    constructor(id, price, name) {
        this.id = id;
        this.price = price;
        this.name = name;
        return Order;
    }}

const Orders = new Map(this.id,this.name, this.price);

Orders.set(1, {name: 'TV', price: 2000});
Orders.set(2, {name: 'Radio', price: 21000});
Orders.set(3, {name: 'Bag', price: 213});
Orders.set(4, {name: 'Computer', price: 324});
Orders.set(5, {name: "Laptop", price: 5467});
console.log("Zakupiono:");
for (let order = 1; order < 6; order++) {
console.log(`${order} Produkt : ${Orders.get(order).name}, cena:  ${Orders.get(order).price} zł`);
}
