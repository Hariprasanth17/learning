// window.addEventListener("click", openTab);
// function openTab() {
//     console.log("click ok");
//     alert("error");

// }
window.addEventListener("click", (event) => {
    console.log("cut action initiated");
    document.getElementById("demo").innerHTML = "Hello World!";
    console.warn("close tab");
  });

// let txt = "string";
// var encode = window.btoa(txt);
// console.log(encode);//c3RyaW5n
// var decode = window.atob(encode);
// console.log(decode);//string

function myFunction() {
    var myWindow = window.open("", "", "width=200, height=100");
    myWindow.blur();
}

clearInterval & setInterval
let mytime = setInterval(timmer,1000);
function timmer(){
    const date = new Date().toLocaleTimeString()
    document.getElementById("demo").innerHTML = date
   window.prompt("What's your sign?");
   //window.confirm("The time was Stopped ")
   //print("error");
} 
function stoptimmer(){
    clearInterval(mytime);
}

const car1 = {name:"Audi", model:"A4"}
const aar2 = {name:"Volvo", model:"XC90"}
const car3 = {name:"Ford", model:"Fusion"}

console.table([car1, aar2, car3]);
console.time();
for (let i = 0; i < 1000; i++) {
  // some code
}
let x = 5;
let y = 5;
const myObj = {firsname:"John", lastname:"Doe"};
console.assert(x + y == 10, myObj);



//function in arguments

// function sum(){
//   console.log((arguments));
//   let t =  0;
//   for(let i = 0;i<arguments.length;i++){
//     t+=arguments[i]
//   }
//   return t
// }
//  console.log(sum(10,30,30,54534,5565))


// fun using closure
let counter =()=>{
  let count = 0;
  return()=>{
    count++;
    return count;
  }
}
let counter1 =counter() 
console.log(counter1())//1
console.log(counter1())//2
console.log(counter1())//3
console.log(counter1())//4
console.log(counter1())//5
