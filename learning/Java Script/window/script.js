

//addEventListener
window.addEventListener("click", () => {
    document.getElementById("addE").innerHTML = "window.com";
})


//setInterval ,clearInterval,alert,prompt ,confirm
const myTime = setInterval(myfun, 1000);
function myfun() {
    let date = new Date().toLocaleTimeString();
    document.getElementById("hell").innerHTML = date;

}
function clearTime() {
    window.confirm("You want to stop time");
    window.alert("suspending time.");
    window.clearInterval(myTime);
    window.prompt("Enter Login ID ")
}
function consoleMess() {
    console.log("Log :error");
    console.error("error :error1");
    console.info(" info :hello")
    let obj = {
        myName: "hari",
        lastName: "S",
        Age: 21,
        isAlive: true,
    }
    console.table(obj);
    console.table(["Audi", "Volvo", "Ford"]);
    let a = 5;//assert excute only the expression failed
    let b = 5;
    console.assert(a + b === 8, "The expresion failed");
   
    console.group("Group");
    console.groupCollapsed("Inside Group");
    console.log("Hello again, this time inside a group1!");
    console.groupEnd();
    console.log("Hello again, this time inside a group2!");
    console.log("Hello again, this time inside a group3!");
    console.groupEnd();
    
    // console.clear();//Console was cleared.
}
//atob ,btoa
function encode() {
    let text = "Hari";
    let encode = window.btoa(text);
    let decode = window.atob(encode);
    document.getElementById("encode").innerHTML = "enode :" + encode + "<hr>" + "decode :" + decode;
}

//blur method was removed
//setTimeout , cleartimeout
const setTime = setTimeout(myfun2, 3000);
function myfun2() {
    document.getElementById("setTime").innerHTML = "The Fuction excuted";
}
function clearTimeout1() {
    window.clearTimeout(setTime)

}

//open window("url" ,"target" ,"height = " ,"width = ") , close window
let newWindow;
function openWindow() {
    newWindow = window.open("https://www.w3schools.com/jsref/met_win_close.asp", "_target", "height=600px", "width=300px");
}
function closeWindow() {
    newWindow.close();
}
//closed
function checkOpen() {
    let text = ''
    if (!newWindow) {
        text = "No windows are open"
    } else {
        if (newWindow.closed) {
            text = "The window is closed";
        } else {
            text = "The window is  Open";
        }
    }
    document.getElementById("check").innerHTML = text;
}