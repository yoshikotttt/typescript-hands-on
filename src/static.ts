export {};

// class Me {
//   static isProgrammer: boolean = true;
//   static firstName: string = "aaa";
//   static lastName: string = "bbb";

//   static work() {
//     return `hey! guys! myname is ${this.firstName}!`;
//   }
// }

// // let me = new Me();
// // console.log(me.isProgrammer);

// console.log(Me.work());

//名前空間
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("cat");
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person("ねこやん");
console.log(meOsaka.name);

const michael = new English.Person("aaa", "bbb", "ccc");
console.log(michael);
