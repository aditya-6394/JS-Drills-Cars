const problem4 = require('./problem4');

function problem5(inventory){
    let old_cars = [];
    for(let car of inventory){
        if(car.car_year < 2000){            
            old_cars.push(car);
        }
    } 
    return old_cars;  
} 

module.exports = problem5;
