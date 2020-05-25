let cars = ["Ford", "Chevy", "Mazda", "Honda"];
console.log(cars.length);

let moreCars = ["Audi","Buick", "Jeep", "Honda"];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

console.log(totalCars.indexOf("Honda"));

console.log(totalCars.lastIndexOf("Honda"));

let stringOfCars = totalCars.join(",");
console.log(stringOfCars);

totalCars = stringOfCars.split(",");
console.log(totalCars);

let carsInReverse = totalCars.reverse(",");
console.log(carsInReverse);

carsInReverse.sort();
//alert(carsInReverse.indexOf('Audi'));//
console.log(carsInReverse);

let removedCars= carsInReverse.slice(3,5);
console.log(removedCars);

carsInReverse.splice(1, 2, "Honda", "Ford");
console.log(carsInReverse);

carsInReverse.push("Buick", "Chevy");
console.log(carsInReverse)

carsInReverse.pop("");
console.log(carsInReverse);

carsInReverse.shift("");
console.log(carsInReverse);

carsInReverse.unshift("Nissan");
console.log(carsInReverse);

let numbers = [23, 45, 0, 2];

for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 2;
}
console.log(numbers);

const numbers2 = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
numbers.forEach(element => console.log(element +=2))
