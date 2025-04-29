
// function withStrict() {
//     "use strict"
//     str = "hello";
//     console.log(str);// str is not defined
// }
// // withStrict()
// function withoutStrict(a) {

//     let str = "hello";
//     console.log(str + this);// str is not defined
//     console.log(typeof (this))

// }
// withoutStrict(4)

// let public = 4;
// var let = 4;// strict mode can't allow keywords


// function(a, a, b) {//can'allow dupicate parameter
//     console.log(a + a + b);
// }

// let oct = o051//41
// strict mode not allow octale  number;
//we add first element 0 it not shows error
// let oct2 = 0o051

// delete Object.prototype;//it will show error can't delete prototype

// //avoad using
// eval()
// get propertie


// e.target
// e.currentTarget
// this.target



// evevt Deligation and Bubbling

const div = document.getElementById("div");
const head = document.getElementById("parent");
const button = document.getElementById("button");
console.log(div)

div.addEventListener("click", (event) => {
    window.alert("div");
    // event.stopPropagation()
},
    // {
    //     capture: true,
    // }
)
head.addEventListener("click", () => {
    window.alert("head");
})
button.addEventListener("click", () => {
    window.alert("button");
})

// if add event.stopPropagation() it stops bubling

const eventDeligation = document.getElementById("eventDeligation");
eventDeligation.addEventListener("click", (e) => {
    let a = (e.target.tagName)
    window.alert(`TageName : ${a}`);
})


