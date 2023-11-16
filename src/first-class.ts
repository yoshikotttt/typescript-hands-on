export {};

// classの練習

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   profile(): string {
//     return `name:${this.name},age:${this.age}`;
//   }
// }
// let taro = new Person("Taro", 30);
// console.log(taro.profile());
// let hanako = new Person();

// アクセス修飾子をつかってみよう
// class Person {
//   public name: string;
//   protected age: number;
//   protected nationality: string;

//   constructor(name: string, age: number, nationality: string) {
//     this.name = name;
//     this.age = age;
//     this.nationality = nationality;
//   }

//   profile(): string {
//     return `name:${this.name},age:${this.age}`;
//   }
// }

// class Android extends Person {
//   constructor(name: string, age: number, nationality: string) {
//     super(name, age, nationality);
//   }

//   profile(): string {
//       return `name:${this.name},age:${this.age},nationality: ${this.nationality}`;
//   }
// }

// let taro = new Person("Taro", 30, "Japan");
// console.log(taro.name);
// console.log(taro.profile());

//コンストラクタの機能
// class Person {
//   constructor(public name: string, protected age: number) {}
// }

// const me = new Person("cat", 10);
// console.log(me);

//getterとsetter

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 途中で変更できない
//   * 参照できる
//  *secretNumber
//   * 所有者
//   * 初期化時に設定できる
//   * 途中で変更できる
//   * 参照できない

// class MyNumberCard {
//   private _owner: string;
//   private _secretNumber: number;

//   constructor(owner: string, secretNumber: number) {
//     this._owner = owner;
//     this._secretNumber = secretNumber;
//   }

//   //ownerという値をgetするためだけのもの getを伴うメソッド
//   get owner() {
//     return this._owner;
//   }

//   //値をsetするためだけのもの  setを伴うメソッド
//   set secretNumber(secretNumber: number) {
//     this._secretNumber = secretNumber;
//   }

//   debugPrint(){
//     return `secretNumber: ${this._secretNumber}`
//   }
// }

// let card = new MyNumberCard("cat", 1234567890);

// console.log(card.owner);
// console.log(card.debugPrint());
// card.secretNumber = 11111111;
// console.log(card.debugPrint());

// console.log(card.secretNumber);

//readonly修飾子

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("cat");
console.log(myVisaCard.owner);
// myVisaCard.owner = 'dog';
