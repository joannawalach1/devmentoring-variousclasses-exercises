class WaterVassel {
    constructor(id, volume, water_volume) {
        this.id = id;
        this.volume = volume;
        this.water_volume = water_volume;
    }
}

var newVassels = [
    new WaterVassel(1, Math.floor((Math.random() * 200) + 50), 0),
    new WaterVassel(2, Math.floor((Math.random() * 200) + 50), 0),
    new WaterVassel(3, Math.floor((Math.random() * 200) + 50), 0),
    new WaterVassel(4, Math.floor((Math.random() * 200) + 50), 0),
    new WaterVassel(5, Math.floor((Math.random() * 200) + 50), 0)
]

function waterPlant(amountOfWater) {
    let supply = amountOfWater;
    let smallWaterVesells = 5;
    let water_carnister = 1000;
    let supplyToEach = supply / smallWaterVesells;
    for (let i = 0; i < newVassels.length; i++) {
        newVassels[i].volume -= supplyToEach;
        newVassels[i].water_volume += supplyToEach;
        if (newVassels[i].volume <= newVassels[i].water_volume) {
            console.log(`Zbiornik ${newVassels[i].id} jest pełny`);
        }
        
        } water_carnister -= amountOfWater;
        if (water_carnister < 0) {  
            water_carnister = 0;
            console.log(`Zbiornik dostawczy jest pusty ${water_carnister} `);
          
    }
}return;

waterPlant(1500);
console.log(newVassels);
waterPlant(100);
console.log(newVassels);
waterPlant(200);
console.log(newVassels);

