class User {
    #id;
    username;
    email;
    #password;
    #createdAt;
    #isLoggedIn;
    constructor(id, username, email, password, createdAt, isLoggedIn) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.isLoggedIn = isLoggedIn;
    }

    getId() {
        return this.#id;
    }

    getPassword() {
        return this.#password;
    }

    getCreatedAt() {
        return this.#createdAt;
    }

    getIsLoggedIn() {
        return this.#isLoggedIn;
    }

    setId(id) {
        this.#id = id;
    }
    setPassword(password) {
        this.#password = password;
    }
    setCreatedAt(createdAt) {
        this.#createdAt = createdAt;
    }
    setIsLoggedIn(isLoggedIn) {
        this.#isLoggedIn = isLoggedIn;
    }

}

var users = [
    new User('ab12ex', 'Alex', 'alex@alex.com', '123123'),
    new User('fg12cy', 'Asab', 'asab@asab.com', '123456'),
    new User('zwf8md', 'Brook', 'brook@brook.com', '13111'),
    new User('eefamr', 'Martha', 'martha@martha.com', '123222'),
    new User('ghderc', 'Thomas', 'thomas@thomas.com', '123333')
];

var products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

function signIn(email, password) {
    for (i = 0; i < users.length; i++) {
        if ((email == users[i].email) && (password == users[i].password)) {
            console.log("You are logged in");
            console.log(`You are ${users[i].username}`);
            console.log(`You are ${users[i].email}`);
            console.log(`You are ${users[i].password}`);
            User.isLoggedIn = true;
            return;
        }
    } return console.log("Nie ma takiego użytkownika");
};


function countLikes(id) {
    for (i = 0; i < products.length; i++) {
        if (id == products[i].likes) {
            console.log(` Zamówienie ${products[i].name}, ${products[i].description}, ${products[i].price} zł`);
        } 
    } 
}; 

function ratingProduct(id) {
    for (let i = 0; i < products.length; i++) {
        for (let product = 0; product < products[i].ratings.length; product++) {
            if ((id == products[i].ratings[product].userId)) {
                console.log(`Nazwa produktu ${products[i].name}`);
                console.log(`ocena produktu ${products[i].ratings[product].rate}`);
            } 
        } 
    } 
};

signIn('asab@asab.com', '123456');
countLikes('fg12cy');
ratingProduct('fg12cy');
