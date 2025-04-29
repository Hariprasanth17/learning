/*
    copyWithin: Copies part of the array to another location in the same array
    fill: Changes all elements within a range in an array to a static value
    pop: Removes the last element from an array
    push: Adds the specified elements to the end of an array
    reverse: Reverses an array
    shift: Removes the first element from an array
    sort: Sorts an array
    splice: Removes or replaces existing elements and/or adds new elements
    unshift: Adds the specified elements to the beginning of an array
*/
const arr1 = new Array(["mango", "banana", "apple", "lemon"]);
var arr2 = ["mango", "banana", "apple", "lemon"];
console.log(arr1.length);
console.log(arr2.length);
/*copyWithin
arr.copyWithin(target,start,end);
*/
console.log(arr2.copyWithin(2, 2, 4));

/*entries()
*/
for (let element of arr2.entries()) {
    console.log(element);
}

 /*flat(depth)
 it remove inside array*/
 var arr2 = [0, 1, [2, [3, [4, 5]]]];
 console.log(arr2.flat())//default depth 1 Array [0, 1, 2, Array [3, Array [4, 5]]]
 console.log(arr2.flat(2))// Array [0, 1, 2, 3, Array [4, 5]]
 console.log(arr2.flat(Infinity))//Array [0, 1, 2, 3, 4, 5]

 
/* forEach(callbackFn, thisArg)*/
const arr3 = [];
var arr4 = [1, 5, 4, 5, 1, 2, 4, 5, 9];
let sum = 0;
let count = {};

arr4.forEach((element, index, arr) => {
    arr3.push(element);
    console.log("array :" + index);
    sum += element;//sum
    if (count[element]) {//count
        count[element]++;
    } else {
        count[element] = 1;
    }
})
console.log(`array 3 is ${arr3}`);
console.log(`sum of array ${sum}`);//sum of array 36
console.log(count);//Object { 1: 2, 2: 1, 4: 2, 5: 3, 9: 1 }

/*map(callbackFn, thisArg)*/
const maparr = arr4.map(maparray);
const maparr1 = arr4.map(maparray1);
function maparray(element, index, arr) {
    return element * 5;
}
function maparray1(element, index, arr) {
    return element * index;
}
console.log(maparr);//Array(9) [ 5, 25, 20, 25, 5, 10, 20, 25, 45 ]
console.log(maparr1);//Array(9) [ 0, 5, 8, 15, 4, 10, 24, 35, 72 ]

var prodect = [
    {
        name1: "mobile",
        price: 2000,
        count: 3
    },
    {
        name1: "labtop",
        price: 4000,
        count: 2
    },
    {
        name1: "desktop",
        price: 7000,
        count: 5
    }
];
const totalprice = prodect.map((element) => (
    ` name1 :${element.name1} ,totalprice :${element.price * element.count}`))// [ " name1 :mobile ,totalprice :6000", " name1 :labtop ,totalprice :8000", " name1 :desktop ,totalprice :35000" ]
//function totprice(element) {
//    return element.price * element.count;//Array(3) [ 6000, 8000, 35000 ]
//}
console.log(totalprice)//Array(3) [ 6000, 8000, 35000 ]


/*filter(callbackFn, thisArg)*/
var even = arr4.filter(isEven);
function isEven(element) {
    return element % 2 == 0;
}
console.log(even);//Array(3) [ 4, 2, 4 ]

/*every(callbackFn, thisArg)
it return true or false*/
arr6 = [1, 3, 5, 4, 2];
console.log(arr6.every((element) => element > 0));//true

/*some(callbackFn, thisArg)
it return true or false
any one is true it return true*/
arr6 = [1, 3, 5, 4, 2];
console.log(arr6.some((element) => element > 4));//true

/*find(callbackFn, thisArg)                              findLast(callbackFn, thisArg)
it return element when callback condition satisfy        it check condition last to first and return element
*/
arr6 = [1, 3, 7, 5, 4, 2, 8];
console.log(arr6.find((element) => element > 6));//7
console.log(arr6.findLast((element) => element > 6));//8

/*findIndex(callbackFn, thisArg)                             findLastIndex(callbackFn, thisArg)
it return index value where that element present            it check last to first */
arr6 = [1, 3, 7, 5, 4, 2, 7, 8];
console.log(arr6.findIndex((element) => element === 7));//2 because element 7 present at index 2
console.log(arr6.findLastIndex((element) => element === 7));//6 


/*reduce(callback,initialvalue = 0)
initialvalue is known from accumulator*/
let reducearr = arr4.reduce(sum1, 0);
function sum1(accumulator, element) {
    return accumulator + element;
}
console.log(reducearr);//36
const totalprice1 = prodect.reduce((accumulator, element) => (
    accumulator + element.price * element.count), 0);
console.log(totalprice1);//49000

/* slice(startindex,endindex)*/
console.log(arr4.slice(2, 4));//Array [ 4, 5 ]
console.log(arr4.slice(0, -1));//Array(8) [ 1, 5, 4, 5, 1, 2, 4, 5 ]

/*splice(startindx,deletecount,additem1,additem2.....,additemn)*/
const months = ['Jan', 'March', 'April', 'June', 'july'];
console.log(months.splice(1, 2, 'Feb', 'may'));//Array [ "March", "April" ] deleted array
console.log(months)//Array(5) [ "Jan", "Feb", "may", "June", "july" ] new array

/* sort(comparefun)*/
let arr5 = [105, 4, 56, 2, 43, 16, 15];
arr5.sort(compareFunction);
function compareFunction(a, b) {
    return a - b;
}
console.log(arr5);//Array(7) [ 2, 4, 15, 16, 43, 56, 105 ]

var prodect = [
    {
        name1: "mobile",
        price: 2000,
        count: 3
    },
    {
        name1: "labtop",
        price: 7000,
        count: 2
    },
    {
        name1: "desktop",
        price: 1000,
        count: 5
    }
];
prodect.sort(comparefun);
function comparefun(a, b) {
    return a.price - b.price;
}
console.log(prodect);/*0: Object { name1: "desktop", price: 1000, count: 5 }
​
1: Object { name1: "mobile", price: 2000, count: 3 }
​
2: Object { name1: "labtop", price: 7000, count: 2 } */

/*arr0.concat(arr1,arr2....n)*/
console.log(arr2.concat([11, 12, 13], arr3));//original array not change
console.log(arr2)

/*fill(value, start, end)*/
var arr6 = [1, 5, 4, 5, 1, 2, 4, 5, 9];
arr6.fill("A", 2, 5);
console.log(arr6);//change array

function fillnumber(n) {
    return Array(n).fill(0).map((element, index) => (index + element));
}
let number = fillnumber(10);
console.log(number);

/* arr.includes(searchstrinh) - true,false*/
/* arr.join(separator)*/
console.log(arr6.join("-"));//1-5-A-A-A-2-4-5-9

/*reverse()*/
var arr6 = [1, 5, 4, 5, 1, 2, 4, 5, 9];
arr6.reverse();
console.log(arr6);//Array(9) [ 9, 5, 4, 2, 1, 5, 4, 5, 1 ]
//the reverse array can't chahge array use concat method or ...
var arr6 = [1, 5, 4, 5, 1, 2, 4, 5, 9];
let newarr = [...arr6].reverse()//or we can use arr6.concat().reverse()
console.log(newarr);//Array(9) [ 9, 5, 4, 2, 1, 5, 4, 5, 1 ]
console.log(arr6);//[1, 5, 4, 5, 1, 2, 4, 5, 9];
const str = "hello!"
console.log(str.split('').reverse().join(''));//!olleh

/*push(element1, element2, …, elementN)
pop()
*/
var arr6 = [1, 2, 4, 5];
arr6.push(11);
arr6.push(12);
arr6.push(13, 14, 15, 16);
console.log(arr6);//Array(10) [ 1, 2, 4, 5, 11, 12, 13, 14, 15, 16 ]
arr6.pop();
console.log(arr6);//Array(9) [ 1, 2, 4, 5, 11, 12, 13, 14, 15 ]

/*unshift(element1, element2, …, elementN)
shift() it remove first value(opposite of pop method)
*/
var arr6 = [1, 2, 4, 5];
arr6.unshift(0)//[ 0, 1, 2, 4, 5 ]
arr6.unshift(-2, -1)//Array(8) [ -2, -1, 0, 1, 2, 4, 5 ]
console.log(arr6);
arr6.shift();
arr6.shift();//Array(5) [ -1,0, 1, 2, 4, 5 ]
console.log(arr6);//Array(5) [ 0, 1, 2, 4, 5 ]

/* indexOf(searchElement, fromIndex)
lastIndexOf(searchElement, fromIndex)*/
arr6 = ["hari", "vasu", "siva", "hari", "babu"];
console.log(arr6.indexOf("hari"));//0
console.log(arr6.lastIndexOf("hari"));//3

/*Array.from(arrayLike, mapFn, thisArg)
static method
it convert (objecr or string) to an array*/
var str1 = "12341415";
console.log(Array.from(str1))//Array(8) [ "1", "2", "3", "4", "1", "4", "1", "5" ]
console.log(Array.from(str1, mapFun))//Array(5) [ 1, 2, 3, 4, 1, 4, 1, 5 ]
function mapFun(element) {
    return Number(element);
}
//remove muliple element
arr6 =[ 1, 2, 3, 4, 1, 4, 1, 5 ]
let newarr1 = new Set(arr6);
console.log(newarr1);//Set(5) [ 1, 2, 3, 4, 5 ]
//convert set to array
console.log(Array.from(newarr1));//Array(5) [ 1, 2, 3, 4, 5 ]

/*Array.isArray(value)
static method it check array or not
it return true or false*/
console.log(Array.isArray(arr6));//true
console.log(Array.isArray(str1));//false


arr6 =  ["hari", "vasu", "siva", "hari", "babu"];
console.log(arr6.toString());//hari,vasu,siva,hari,babu




