// var car = {name:"Opel Astra J GTC",color:"black",year:2011,kilometers:500000,HP:100};

// var car2 = {
//     name:"Ford",
//     color:"black",
//     year:2000,
//     kilometers:5,
//     HP:40,
//     startEngine: function(){
//         console.log("Veq Met Shtyme Tybe")
        
//     }
// };


// console.log(car);
// console.log(car2);

// console.log(car.name);
// console.log(car.color);
// console.log(car.year);
// console.log(car.kilometers);
// console.log(car.HP);


// console.log(car2.name);
// console.log(car2.color);
// console.log(car2.year);
// console.log(car2.kilometers);
// console.log(car2.HP);

// car2.startEngine();

// console.log(car2.startEngine)

var computer = new Object();

computer.name = "Lenovo"
computer.GPU = "Ge Force"
computer.RAM = "16GB"

computer.type = function(){
    return this.name + " " + this.GPU + " " + this.RAM;
}

console.log(computer.type())