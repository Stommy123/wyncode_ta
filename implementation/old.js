collection = [
    {make: "Honda", model: "Accord", year: 1996},
    {make: "Honda", model: "Civic", year: 2006},
    {make: "Nissan", model: "Altima", year: 2010}
]

function checkMake(cars){
    cars.forEach((car)=>{
        if (car.make === "Honda"){
            console.log("your", car.model, "from", car.year, "is pretty rad")
        }
    })
}

checkMake(collection)
