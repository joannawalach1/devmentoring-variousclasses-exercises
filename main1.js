async function fetchApi() {
    const countriesAPI = 'https://restcountries.com/v2/all/';
    await fetch(countriesAPI)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            for (let i = 0; i < 30; i++) {
                console.log(data[i]);
                var wrapper = document.querySelector(".wrapper");
                var card = document.createElement("div");
                card.className = "card";
                wrapper.appendChild(card);
                    var name = document.createElement("p");
                    card.appendChild(name);
                    name.innerText = data[i].name;
                    var capital = document.createElement("p");
                    card.appendChild(capital);
                    capital.innerText = data[i].capital;
                    var area = document.createElement("p");
                    card.appendChild(area);
                    area.innerText = data[i].area;
                    var languages = document.createElement("p");
                    card.appendChild(languages);
                    languages.innerText = data[i].languages[0].name;
                    var population = document.createElement("p");
                    card.appendChild(population);
                    population.innerText = data[i].population;
            }
        })
        .catch((err) => {
            console.log(err)
        });
}
 
fetchApi();
