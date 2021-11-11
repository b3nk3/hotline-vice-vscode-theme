export default async function unreachableCode() {
  return 10;
}

const age = 100;
const myObj = {
  prop: 12,
  nested: {
    prop: 100,
  },
  initialAge: age,
  age,
};

const age = 100;

const ben = {
  age: 100,
  name: `Ben`,
};

console.log(ben.cool);
console.log(ben.cool);

console.log(ben.age);
console.log(ben.doesNotExist);

const usedAge = 200;
console.log(usedAge);

unreachableCode();
