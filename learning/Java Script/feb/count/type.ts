interface Person {
    name: string;
    age: number;
}

type TableColumns = Person[keyof Person];

const x: TableColumns = 'age';

let arr = [1, 3, 45, 4];
for (var i of arr) {
    console.log(i);
}

//basic generic

interface KeyValuePair<K, V> {
    key: K
    value: V
}

let kvp: KeyValuePair<string, number> = { key: 'Age', value: 30 }
console.log(kvp.key) // Output: Age
console.log(kvp.value) // Output: 30

type Response1<T> = {
    data: T
    isValue: boolean
}

const res1: Response1<{ name: string, age: number }> = {
    data: {
        name: "hari",
        age: 22,
    },
    isValue: true
}

const res2: Response1<{ name: string, mobile: number }> = {
    data: {
        name: "hari",
        mobile: 183929028,
    },
    isValue: false,
}

interface Response2<T, U, V> {
    username: T | U
    employee: V
}

interface Response2<T, U, V> {
    email: T
}
const obj: Response2<string, number, boolean> = {
    username: 121,
    employee: false,
    email: "hari@123",
}

//type

type First = {
    name: string,
    age: number,
}
type Second = {
    email: string,
}
type FirstSecond = First & Second;

const obj1: FirstSecond = {
    name: "hari",
    age: 33,
    email: "hari@123"
}


//interface
interface ObjOne {
    name: string,
    age: number,
}
interface ObjOne {
    email: string,
}

interface ObjTwo extends ObjOne {
    mobile: number
}
const obj2: ObjOne = {
    name: "hari",
    age: 33,
    email: "hari@123",
}

const obj3: ObjTwo = {
    name: "hari",
    age: 33,
    email: "hari@123",
    mobile: 3242433,
}

//what is react
// when to use react
// add of react
// add using react over allternative