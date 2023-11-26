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

// interface IPerson {
//   readonly name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// const pers: IPerson = {
//   name: "Mango",
// };

// pers.name = "Poly";

// interface IPilot extends IPerson {
//   flyMessage(): void;
// }

// ******
// interface IPerson {
//   name?: string;
//   age: number;
// }

// class Person implements IPerson {
//   constructor(public age: number, public name?: string) {}

//   setName(n: string) {
//     this.name = n;
//   }
// }

// const newVal = new Person(33, "ddd");
// console.log(newVal);

// ***********

// class Parent {
//   private privateProperty: number; // Приватна властивість з модифікатором доступу private

//   constructor() {
//     this.privateProperty = 42;
//   }
// }

// // class Child extends Parent {
// //   constructor() {
// //     super();
// //     console.log(this.privateProperty); // Спроба доступу до приватної властивості з підкласу
// //   }
// // }

// const parent = new Parent();
// console.log(parent.privateProperty); // Спроба доступу до приватної властивості з екземпляра класу Parent

// ***********
// class Team {
//   members: Programmer[];

//   constructor(members: Programmer[]) {
//     this.members = members;
//   }

//   startProject() {
//     this.members.forEach((member) => member.code());
//   }
// }

// class Programmer {
//   code() {
//     console.log("Coding...");
//   }
// }

// const programmers = [new Programmer(), new Programmer()];
// const team = new Team(programmers);
// team.startProject();

// *******
// class Computer {
//   processor: Processor;

//   constructor() {
//     this.processor = new Processor();
//   }

//   start() {
//     this.processor.processData();
//   }
// }

// class Processor {
//   processData() {
//     console.log("Processing data...");
//   }
// }

// const computer = new Computer();
// computer.start();

//***********
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  comeIn(human: Person): void {
    if (this.door) {
      this.tenants.push(human);
      console.log("Двері відчинені");
    } else {
      console.log("Двері зачинені");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Вхід дозволено");
    } else {
      console.log("Вхід заборонено");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
