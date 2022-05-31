function printElements<T>(arr: T[]): void {
  arr.forEach((i) => console.log(i));
}

printElements<string>(["a", "b", "c"]);
printElements<number>([20, 30, 40]);
printElements<boolean>([true, false]);
printElements<{ name: string }>([{ name: "joe" }, { name: "ryan" }]);
printElements<string[]>([["a", "b"], ["c"]]);
printElements<number | string | { name: string }>([20, "30", { name: "ryan" }]);

// multiple generic types
function makeArray10<T>(char: T): T[] {
  return Array(10).fill(char);
}

// const result = makeArray10("a");
// const result2 = makeArray10<number>(10);
// console.log(result2)

// another example with a tuple
function makeTuple<X, Y>(x: X, y: Y): [X, Y] {
  return [x, y];
}

const t1 = makeTuple(1, "2");
const t2 = makeTuple("a", "b");
const t3 = makeTuple(true, false);
const t4 = makeTuple({ name: "joe" }, { name: "ryan" });

// default types
function makeArray<X, Y = string>(x: X, y: Y): [X, Y] {
  return [x, y];
}

const result = makeArray<number | string, string>(30, "-");
console.log(result);

// extends

interface Person {
  firstName: string;
  lastName: string;
}

const createUser = <T extends Person>(person: T) => {
  return {
    ...person,
    fullname: `${person.firstName} ${person.lastName}`,
  };
};

const user = createUser({ firstName: "joe", lastName: "ryan", age: 30 });
console.log(user);

// interfaces
interface Transaction<T> {
  userId: string;
  ammount: number;
  info: T;
}

type StringTransaction = Transaction<string>;
type TransactionWithInfo = Transaction<{ description: string; date: Date }>;

const newTransaction: StringTransaction = {
  userId: "123",
  ammount: 100,
  info: "hello",
};

console.log(newTransaction);

const newTransactionInfo: TransactionWithInfo = {
  userId: "124",
  ammount: 200,
  info: {
    description: "payment for something",
    date: new Date(),
  },
};

console.log(newTransactionInfo);

// Class with generics in constructor
class GenericClass<T> {
  constructor(public value: T) {}
}

const gclass = new GenericClass<string>("hello");
console.log(gclass.value);

// class with generics in method

class GenericMethodClass<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

const newGenericMethodClass = new GenericMethodClass<string>("hello");
const newGenericMethodClass2 = new GenericMethodClass<{ name: string }>({
  name: "joe",
});

console.log(newGenericMethodClass.getValue());
console.log(newGenericMethodClass2.getValue());
