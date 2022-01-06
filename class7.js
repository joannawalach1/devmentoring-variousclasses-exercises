class WaterVassel {
    constructor(id, volume, water_volume) {
        this.id = id;
        this.volume = volume;
        this.water_volume = water_volume;
    }
}


let newVassels = [
    new WaterVassel(1, Math.floor((Math.random() * 200) + 50), 0),
    new WaterVassel(2, Math.floor((Math.random() * 200) + 50), 0),
    new WaterVassel(3, Math.floor((Math.random() * 200) + 50), 0),
    new WaterVassel(4, Math.floor((Math.random() * 200) + 50), 0),
    new WaterVassel(5, Math.floor((Math.random() * 200) + 50), 0)
]

function waterPlant(water) {
    let waterCarnister = 1000;
    let waterCarnisterAfter = 1000 - water;
    let numberOfSmallCarnisters = 5;
    let addingWaterToSmallCarnisters = water / numberOfSmallCarnisters;

        console.log(` Ilość wody w duzym zbiorniku ${waterCarnisterAfter} litrów`);
        console.log(` Tankowanie ${water}`);
        newVassels.forEach(addingWaterToTanks => {
            addingWaterToTanks.water_volume += addingWaterToSmallCarnisters;
            console.log(`  Ilość wody w zbiorniku ${addingWaterToTanks.water_volume} litrów`);
        }
        )
    }


waterPlant(300);
waterPlant(150)
console.log(newVassels);
