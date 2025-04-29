const api = fetch('https://jsonplaceholder.typicode.com/todos/1');
// console.log(api)

// const abc = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         reslove([1, 2, 3, 4, 5]);
//     }, 1000);
// });

// let a = [];
// const b = []

// abc.then(res => {
//     console.log(res);
//     a = res
// }).then(res1 => {
//     console.log(a)
// })

api.then(async res => {
    const abc = await res.json();
    console.log(abc);
}).catch(err => {
    console.log('error in resolve');
}).finally(() => {
    console.log('success to complete promise');
})
// console.log(resolvedAPI, 'resolvedAPI')
