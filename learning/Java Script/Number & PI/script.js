var num = 15;
num = 2.56;
let num1 = Number.MAX_VALUE;
console.log(num1);
let num2 = Number.MIN_VALUE;
console.log(num2);
console.log(Number.isFinite(num1));//true
console.log(Number.isInteger(num1));//true
console.log(Number.isNaN(num));//false
console.log(Number.isSafeInteger(num))//false
console.log(Number.isSafeInteger(Math.pow(2, 53)));//false
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));//true
let v;
v = Number.MAX_SAFE_INTEGER
console.log(v);//9007199254740991
v = Number.MIN_SAFE_INTEGER
console.log(v);//-9007199254740991



//parseInt(floatvalue) converts integer
console.log(Number.parseInt(6.987));//6

//parseFloat("num string") it takes first value of variable
console.log(Number.parseFloat("58 years"));//58

//number to string
////typeof string
let str = num.toString();
console.log(str);//2.56
console.log(typeof (str));//string

//toFixed(flotingpointlength) how maney digit after points 
//typeof string
let tofixe = num.toFixed(6);
console.log(tofixe);//2.560000

//num.toExponential(String)
//typeof string
console.log(num.toExponential("2"))//2.56e+0

//num1.toPrecition(totalLengthNumber)
//typeof string
console.log(num.toPrecision(2))//2.6

//number to primitives num.valueOf();
//type of number
console.log(num.valueOf());

//NEGATIVE_INFINITY
let neginf = Number.NEGATIVE_INFINITY;
console.log(neginf)//-Infinity
let posinf = Number.POSITIVE_INFINITY;
console.log(posinf);//Infinity


//MATH


let x = 3.14;
//Math.round(value)
console.log(Math.round(x));//3
//Math.floor(value)
let y = 4.99;
console.log(Math.floor(y));//4
//Math.ceil
let z = 4.12;
console.log(Math.ceil(z));//5
//Math.pow(x,power);
console.log(Math.pow(x, 2));//9.8596
//Math.sqrt(value)
console.log(Math.sqrt(z));//2.029778313018444
//Math.cbrt(value)
console.log(Math.cbrt(z));//1.6031189162753117

//Math.max(x,y,z)  Math.min(x,y,z);
console.log(Math.max(x, y, z));//4.99
console.log(Math.min(x, y, z));//3.14

//random() it generate random value 0 to 1
let b = Math.random();
console.log(b);
//generate 0 to 100
let c = Math.floor(Math.random() * 100 + 1)
console.log(c);


//absolute
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN

 a = Math.PI;//3.14

/*The Math.sign() 

If the number is positive, this method returns 1.
If the number is negative, it returns -1.
If the number is zero, it returns 0. */
let p = -3;
let q = 0;
let r = 3;
console.log(Math.sign(p));//-1
console.log(Math.sign(q));//0
console.log(Math.sign(r));//1



var x = 1;

let obj = {
    x,
    name: '',
}


const a = 'wewedwfr';

a[0]