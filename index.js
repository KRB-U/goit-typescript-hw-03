"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        console.log(this.width * this.height);
        return this.width * this.height;
    }
}
const calcRectangle = new Rectangle(3, 4);
console.log(calcRectangle.calculateArea());
//# sourceMappingURL=index.js.map