// null undefined nubmer string symbol boolean symbol bigint object
const a: undefined = undefined;
const b: null = null;
const c: boolean = true;
const d: number = 1;
const e: string = "";
const f: symbol = Symbol();
const g: any = {};
const h: unknown = {};
const i: object = {};

const obj: Object = {};
const arr1: Array<number> = [1, 2, 3];
const arr2: Array<string> = ["one", "two", "three"];
const arr3: Array<number | string | null> = [1, "two", 4, null];

// 1. “类型”写在参数列表后面
const add1 = (a: number, b: number): number => a + b;
// 2. “类型”写在冒号后面
const add2: (a: number, b: number) => number = (a, b) => a + b;
// 3. type 类型缩写
type Add = (a: number, b: number) => number;
// 4. 有属性，只能用 interface
const add3: Add = (a, b) => a + b;
// add3.xxx = 1; // error
interface AddWithProps {
  (a: number, b: number): number;
  xxx: number;
}
const add4: AddWithProps = (a, b) => a + b;
add4.xxx = 1;

// ts 中的类型：any unknown void never enum tuple
let aaa: any = "hi";

type B = { name: string };
let bbb: unknown = JSON.parse('{"name": "Andy", "age": 18}');
console.log((b as B).name); // 断言
// console.log((b as B).age); // error

console.log((b as { age: string }).age); // 断言

let fn: () => void = () => {
  console.log(1);
};

type X = number & string;
type Y = (1 | 2 | 3) & (2 | 3 | 4);

let tuple: [number, number] = [1, 2]; // 元组

type Dir = "东" | "西" | "南" | "北";
let dir1: Dir = "东";
// let dir2: Dir = '希';
