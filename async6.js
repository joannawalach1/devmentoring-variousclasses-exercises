class User {
    #id;
    username;
    email;
    #password;
    #createdAt;
    #isLoggedIn;
    constructor(id, username, email, password, createdAt, isLoggedIn) {
        this.#id = id;
        this.username = username;
        this.email = email;
        this.#password = password;
        this.#createdAt = createdAt;
        this.#isLoggedIn = isLoggedIn;
    }

    getId() {
        return this.#id;
    };

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




