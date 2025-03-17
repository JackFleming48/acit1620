let planet = {
    diameter: 300
};

console.log(planet.diameter);

let anvil = {
    color: "Black",
    weight: 1000,
    material: "metal"
};

if (anvil.weight > 500) {
    anvil.isheavy = true;
}

console.log(anvil.isheavy);

class rectangle {
    constructor(width, length, height) {
        this.width = width;
        this.length = length;
        this.height = height;
    }
}

const small_rect = new rectangle(20, 20, 20);

function volume(l, w, h) {
    return l*w*h;
}

console.log(volume(small_rect.length, small_rect.width, small_rect.height));


let taxi = {
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
}

function prequal(car) {
    if (car.mileage > 200000) {
        return false;
    }
    else if (car.year > 1960) {
        return false;
    }
    return true;
}

// let didQualify = prequal(taxi);

function isWorthALook (didQualify, car) {
    if (didQualify) {
        console.log("Worth!")
    } else {
        console.log("Not Worth!")
    }
}

isWorthALook(prequal(taxi), taxi)