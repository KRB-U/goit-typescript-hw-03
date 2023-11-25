interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    console.log(this.width * this.height);
    return this.width * this.height;
  }
}

const calcRectangle = new Rectangle(3, 4);
console.log(calcRectangle.calculateArea());
