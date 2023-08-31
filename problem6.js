function problem6(inventory){
    let l = []
    for(let car of inventory){
        if(car.car_make == 'Audi' || car.car_make == 'BMW'){
            l.push(car);
        }
    }
    return l;
}

module.exports = problem6;