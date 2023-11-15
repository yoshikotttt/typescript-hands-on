export {};

//objectと{}は違う、{}の方が細かく指定できる

let profile1: object = { name: "cat" };
profile1 = { birthYear: 1999 };

let profile2: {
  name: string;
} = { name: "dog" };
profile2 = { name: "bird" };

//alias

type Strings = string;
const fooString: string = "hello";
const fooString2: Strings = "hello";
