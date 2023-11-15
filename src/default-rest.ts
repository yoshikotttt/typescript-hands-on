export {};

const nestYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

// console.log(nestYearSalary(1000));

const reducer = (acc: number,current: number) => {
  console.log({acc,current})
  return acc + current
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
  console.log(values);
  return 100;
};

sum(1, 2, 3, 4, 5);

[1,2,3,4].reduce(reducer);
