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
    return this.width * this.height;
  }
}

const calcRectangle = new Rectangle(3, 4);
console.log(calcRectangle.calculateArea());

// ********

class Circle implements Shape {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const calcCircle = new Circle(5);
console.log(calcCircle.calculateArea());

// **********
class AreaCalculator {
  public calculate(shape: Shape): number {
    return shape.calculateArea();
  }
}

const calc = new AreaCalculator();

const rectangle = new Rectangle(6, 6);
const rectangleArea = calc.calculate(rectangle);
console.log("Прямок: ", rectangleArea);

const circle = new Circle(15);
const circleArea = calc.calculate(circle);
console.log("Коло: ", circleArea);

// ********
// class House {
//   street: string;

//   constructor(n: string) {
//     this.street = n;
//   }

//   showAddress(this: House) {
//     console.log("Address: " + this.street);
//   }
// }

// const house = new House("Middle-earth");
// console.log(house);
// house.showAddress();

// const houseCopy = { street: "Dummy", showAddress: house.showAddress };
// houseCopy.showAddress();

// ******

// class A {
//   private someProperty = "str";
// }

// class B extends A {
//   showProperty() {
//     console.log(this.someProperty); // Помилка: 'someProperty' можна викликати лише в класі A
//   }
// }
// const fff = new B();
// B.showProperty();

// *******
// class A {
//   protected someProperty = "str";
// }

// class B extends A {
//   showProperty() {
//     console.log(this.someProperty); //Немає помилки
//   }
// }

// const b = new B();
// b.showProperty();

// *********
// застосуємо модифікатори доступу до нашого класу House:
// class House {
//   private street: string;

//   private tenants: string[] = [];

//   constructor(n: string) {
//     this.street = n;
//   }

//   public showAddress(this: House) {
//     console.log("Address: " + this.street);
//   }

//   public addTenant(tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//   }
// }

// const house = new House("Middle-earth");

// house.addTenant("Anton");
// house.addTenant("Nikita");

// house.showTenants(); // ["Anton", "Nikita"]

// house.tenants.push("Anton"); // Помилка: 'tenants' можна викликати лише в межах класу 'House'.

// export {};
