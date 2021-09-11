class Model {
    constructor(color) {
        this.color = color;
    }
}

class Color { // bridge
    constructor(type) {
        this.type = type;
    }

    get() {
        return this.type;
    }
}

class BlackColor extends Color {
    constructor() {
        super('dark-black');
    }
}

class SilbrigkColor extends Color {
    constructor() {
        super('silbermatsllic');
    }
}

class Audi extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Audi, color: ${this.color.get()}`; // connection between methods
    }
}


class Bmw extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Bmw, color: ${this.color.get()}`;
    }
}

// We avoided creation of very specific class:
// const blackBmw = new BlackColorBmw();

//Instead
const blackBmw = new Bmw(new BlackColor());
console.log(blackBmw.paint()); // Auto: Bmw, color: dark-black
