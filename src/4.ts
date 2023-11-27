class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {
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
console.log(key);

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
