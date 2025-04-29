console.log("hari")
console.log("prasanth")
const btn1  = document.getElementById("value").addEventListener("click", createPromise)


let arr1 = ["hari", "babu", "dena", "raghu", "siva"]


function myPromise(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(arr);
        }, 1000)
    })
}
async function createPromise() {
    try {
        const data1 = await myPromise(arr1[0]);
        console.log("Welcome", data1);
        const data2 = await myPromise(arr1[1]);
        console.log("Welcome", data2);
        const data3 = await myPromise(arr1[2]);
        console.log("Welcome", data3);
        const data4 = await myPromise(arr1[3]);
        console.log("Welcome", data4);
        const data5 = await myPromise(arr1[4]);
        console.log("Welcome", data5)
    } catch (err) {
        console.log("reject");
    } finally {
        console.log("Success!");
    }
}
console.log(createPromise());
