"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const calcRectangle = new Rectangle(3, 4);
console.log(calcRectangle.calculateArea());
// ********
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
const calcCircle = new Circle(5);
console.log(calcCircle.calculateArea());
// **********
class AreaCalculator {
    calculate(shape) {
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
// abstract class Plane {
//   protected pilotInCabin = false;
//   public sitInPlane() {
//     this.pilotInCabin = true;
//   }
//   public abstract startEngine(): boolean;
// }
// class Maize extends Plane {
//   public startEngine() {
//     // Запускаємо винти двигуна.
//     return true;
//   }
// }
// class Boeing extends Plane {
//   public startEngine() {
//     // Розігріваємо реактивні турбіни.
//     return true;
//   }
// }
// class BrokenPlane extends Plane {} // Error: Клас 'BrokenPlane' не реалізовує унаслідований абстрактний метод 'startEngine' з класу 'Plane'.
// export {};
//# sourceMappingURL=index.js.map