



let count = 0;

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const demo = document.getElementById("demo");

incrementBtn.addEventListener("click", () => {
    count++;
    demo.innerText = count;
});

decrementBtn.addEventListener("click", () => {
    count--;
    demo.innerText = count;
});

// A higher-order 
// Takes another function as an argument.
// Returns another function as its result.
const arr = [1, 4, 5, 6]

const newarr = arr.map((val) => {
    return val * 3;
}
)
console.log(newarr)//[3,12,15,18]



// function Currying and  ⁠Closures

function add(x) {
    return x + 2;
}
function mul(x) {
    return x * 2;
}
function result(a, b) {
    return ((x) => {
        return a(b(x))
    })
}

console.log(result(add, mul)(3));//8

