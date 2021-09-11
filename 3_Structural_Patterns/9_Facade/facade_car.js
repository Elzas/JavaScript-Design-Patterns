class Conveyor {

    setBody() {
        console.log('Body set!');
    }

    getEngine() {
        console.log('Dismantle Engine!');
    }

    setEngine() {
        console.log('Engine set!');
    }

    getInterior() {
        console.log('Exterior added!');
    }

    setInterior() {
        console.log('Exterior added!');
    }

    setExterior() {
        console.log('Added interior!');
    }

    setWheels() {
        console.log('Wheels!');
    }

    addElectronics() {
        console.log('Added electronics!');
    }

    paint() {
        console.log('Car painted!');
    }
}

class ConveyorFacade {
    constructor(car) {
        this.car = car;
    }

    assembleCar() {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.addElectronics();
        this.car.paint();
    }

    changeEngine() {
        this.car.getEngine();
        this.car.setEngine();
    }

    changeInterior() {
        this.car.getInterior();
        this.car.setInterior();
    }
}

const conveyor = new ConveyorFacade(new Conveyor);

let car = conveyor.assembleCar();
car = conveyor.changeEngine();
car = conveyor.changeInterior();

console.log(car);

/*
 Body set!
 Engine set!
 Exterior added!
 Added interior!
 Wheels!
 Added electronics!
 Car painted!
 Dismantle Engine!
 Engine set!
 Exterior added!
 Exterior added!
*/
