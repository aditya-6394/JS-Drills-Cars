function problem1(inventory){
    for(let car of inventory){
        if(car.id==33){
            console.log(`Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model}.`);
        }
    }
}

module.exports = problem1;