class TeslaCar {

    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce() {
        return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
    }
}

// produce base auto
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

// cloning base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// changes  for every car features
car1.interior = 'white';
car2.price = 10000;
car3.autopilot = true;

console.log(car1);
console.log(car2);
console.log(car3);

/*
 TeslaCar {
     model: 'S',
     price: 80000,
     interior: 'white',
     autopilot: false
 }
 TeslaCar {
     model: 'S',
     price: 10000,
     interior: 'black',
     autopilot: false
 }
 TeslaCar {
     model: 'S',
     price: 80000,
     interior: 'black',
     autopilot: true
 }
 */