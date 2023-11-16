export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
    // return `${this.name} can run!`;
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    super(name); //Animal 親で初期化する

    this.speed = speed; //Lion ここで初期化する
  }
  run(): string {
    return `${super.run()} ${this.speed}km/h`;
  }
}

// let animal = new Animal();
// console.log(animal.run());
// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal("Mickey").run());
console.log(new Lion("Simba", 100).run());
