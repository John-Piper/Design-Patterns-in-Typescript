abstract class Color {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    fillWithColor(border: number) : void {
        console.log(`${this.color} color with ${border} inch border`);
    }
};

class RedColor extends Color {
    constructor() {
        super("Red");
    }
};

class GreenColor extends Color {
    constructor() {
        super("Green")
    }
};

class Shape {
    color: Color;
    border: number;
    constructor(color: Color, border: number) {
        this.color = color;
        this.border = border;
    }
    changeBorder(newSize: number) : void {
        if (newSize > 0) {
            this.border = newSize;
        }
    }
    changeColor(newColor: Color) : void {
        if (newColor instanceof Color) {
            this.color = newColor
        }
    }
    drawShape() : void {
        console.log(`${this.constructor.name} shape filled with ${this.color.fillWithColor(this.border)}`);
    }
};

class Square extends Shape {
    constructor(color: Color, border: number) {
        super(color, border);
    }
};

class Traingle extends Shape {
    constructor(color: Color, border: number) {
        super(color, border);
        this._halfBorderNumber();
    }
    changeBorder(newSize: number) : void {
        super.changeBorder(newSize);
        this._halfBorderNumber();
    }
    private _halfBorderNumber() : void {
        this.border /= 2;
    }
};

const red = new RedColor();
const green = new GreenColor();

const square = new Square(red, 60);
square.drawShape();
square.changeColor(green);
square.changeBorder(100);
square.drawShape();

const traingle = new Traingle(green, 30);
traingle.drawShape();
traingle.changeBorder(400);
traingle.changeColor(red);
traingle.drawShape(); 
