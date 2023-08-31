function problem3(inventory){
    let car_models=[];
    for(let car of inventory){
        car_models.push(car.car_make);
    }
    car_models.sort();
    console.log(car_models);
}
module.exports = problem3;