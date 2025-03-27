// let planet = {
//     diameter: 300
// };

// console.log(planet.diameter);

// let anvil = {
//     color: "Black",
//     weight: 1000,
//     material: "metal"
// };

// if (anvil.weight > 500) {
//     anvil.isheavy = true;
// }

// console.log(anvil.isheavy);

// class rectangle {
//     constructor(width, length, height) {
//         this.width = width;
//         this.length = length;
//         this.height = height;
//     }
// }

// const small_rect = new rectangle(20, 20, 20);

// function volume(l, w, h) {
//     return l*w*h;
// }

// console.log(volume(small_rect.length, small_rect.width, small_rect.height));


// let taxi = {
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341
// }

// function prequal(car) {
//     if (car.mileage > 200000) {
//         return false;
//     }
//     else if (car.year > 1960) {
//         return false;
//     }
//     return true;
// }

// // let didQualify = prequal(taxi);

// function isWorthALook (didQualify, car) {
//     if (didQualify) {
//         console.log("Worth!")
//     } else {
//         console.log("Not Worth!")
//     }
// }

// isWorthALook(prequal(taxi), taxi)

function makeCar() {
    let makes = ["chev", "gm", "Fiat"];
    let models = ["Cadillac", "500", "Bel-Air", "Taxi"];
    let years = [1955, 2002, 2009, 2015];
    let colors = ["red", "yellow", "blue"];
    let convertible = [true, false];




    let rand1 = Math.floor(Math.random()*makes.length);
    let rand2 = Math.floor(Math.random()*models.length);
    let rand3 = Math.floor(Math.random()*years.length);
    let rand4 = Math.floor(Math.random()*colors.length);
    let rand5 = Math.floor(Math.random()*convertible.length);

    let car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        convertible: convertible[rand5]
    }

    return car
}

console.log(makeCar())

var chevy = {
    make: "Chevy",
    model: "bel air",
    year: 1957,
    color: "Red",
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            alert(`${this.make} ${this.model} goes zoom zoom`)
        } else {
            alert(`you will need to start the engine first.`)
        }
    }
}

chevy.start();
chevy.drive();
chevy.stop();