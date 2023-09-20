function analyzeCarMileage(cars) {
    if (cars.length === 0) return
    let totalMileage = 0
    let highestMileageCar = cars[0]
    let lowestMileageCar = cars[0]
    for (let i = 0; i < cars.length; i++) {
        totalMileage += cars[i].mileage
        if (cars[i].mileage > highestMileageCar.mileage) {
            highestMileageCar = cars[i]
        }
        if (cars[i].mileage < lowestMileageCar.mileage) {
            lowestMileageCar = cars[i]
        }
    }
    console.log({averageMileage: (totalMileage / cars.length).toFixed(2),
        highestMileageCar,
        lowestMileageCar,
        totalMileage})
    return {
        averageMileage: parseFloat((totalMileage / cars.length).toFixed(2)),
        highestMileageCar: highestMileageCar,
        lowestMileageCar: lowestMileageCar,
        totalMileage: parseFloat(totalMileage)
    }
}

module.exports = analyzeCarMileage;
