class User {
    constructor(name, surname, email, gender, password, date_joined) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.gender = gender;
        this.password = password;
        this.date_joined = date_joined;
    }
    validateName(name) {
        let firstName = name;
        let regex = /[A-Z]/gm;
        let firstNameMatching = firstName.match(regex);
        if (firstNameMatching) {
            console.log(`Wpisany string jest imieniem`);
        } else console.log(`Podany string nie jest imieniem`)
    }

    validateSurname(surname) {
        let lastName = surname;
        let regex = /[A-Z][a-z]{1,10}/gm;
        let lastNameMatching = lastName.match(regex);
        if (lastNameMatching) {
            console.log(`Wpisany string jest nazwiskiem`);
        } else console.log(`Podany string nie jest nazwiskiem`);
    }

    validateEmail(email) {
        let emailAddress = email;
        let regex = /[a-z]{1,15}@[a-z]{1,10}.[a-z]{1,5}/m;
        let emailAddressMatching = emailAddress.match(regex);
        if (emailAddressMatching) {
            console.log(`Wpisany string jest adresem email`);
        } else console.log(`Podany string to nie adres email`);
    }

    validatePassword(password) {
        let secretWord = password;
        if (secretWord.length > 8) {
            console.log(`Podane hasło ma odpowiednią długość`);
        } else console.log(`Podane hasło jest za krótkie`);
    }

    validateGender(gender) {
        let sex = gender;
        if ((sex == "female") || (sex == "male")) {
            console.log(`Wpisano poprawną płeć`);
        } else console.log(`Taka płeć nie istnieje`);
    }

    validateDate() {
        let day = Date();
        let regex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/m;
        let dates = day.match(regex);
        if (!dates) {
            console.log(`Podana data ma nieprawidłowy format`);
            console.log(day);
        } else console.log(`Podana data jest prawidłowa`)
    }
}
name1 = new User("Ania", "Kowalska", "kasia@open.pl", "female", "secretwordaaaaaaaaaaa", 2021 - 12 - 13);
name1.validateName(name1.name);
name1.validateSurname(name1.surname);
name1.validateEmail(name1.email);
name1.validatePassword(name1.password);
name1.validateGender(name1.gender);
name1.validateDate(name1.date_joined)

