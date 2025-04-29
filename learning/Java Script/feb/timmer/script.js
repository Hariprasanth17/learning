const counter = document.getElementById("counterInput")
console.log(counter)
let count = 0
console.log(count)
let interval
//start
const start = document.querySelectorAll("button")[0]
start.addEventListener("click", () => {
    interval = setInterval(startCount, 1000);
});
console.log(start)
//stop
const stop = document.querySelectorAll("button")[1]
stop.addEventListener("click", stopCount)

const clear = document.querySelectorAll("button")[2]
clear.addEventListener("click", clearCount)

function startCount() {
    count += 1;
    counter.innerText = count;
    console.log(count)
}


function stopCount() {
    clearInterval(interval);
}

function clearCount() {
    count = 0;
    counter.innerText = count;
}