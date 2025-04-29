// function makePromise(delay) {
//   var p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (delay > 5000) {
//         reject(Error("The Time is Too High!"));
//       } else {
//         resolve("Fullfiled");
//       }

//     }, delay)
//   });
//   return p;
// }

// var first = makePromise(2000);
// console.log(first);
// // var pro = makePromise(5000);
// // console.log(pro);

// first
//   .then(
//     (resol) => {
//       console.log("The promise", resol);
//       return makePromise(5000);
//     }
//   ).then(
//     (resol) => {
//       console.log("The promise", resol);

//     }
//   )
// first.catch(
//   (rej) => {
//     console.log("Rejected", rej);
//   }
// )
// first.finally(
//   () => {
//     console.log("Completed");
//   }
// )





//all - all promise success only it resolve(fullfiled) else reject(error) - reject ,when any one  promise fails

//any - any one process complete it return that promise fullfiled value - reject ,when all 3 fails

//allSettled - it return array(fullfiled , reject, fullfiled) - reject ,when no argument pass

//race -which is excute first (fullfiled or fail) - reject ,when first occures reject

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("one"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("two"), 3000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("three"), 3000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("four"), 4000);
// });
// const p5 = new Promise((resolve, reject) => {

//   setTimeout(() => reject(new Error("reject")), 4000);

// });

// //all ,any, allSetteled , race 
// Promise.race([p1, p2, p3, p4, p5])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });




//withResolver
//let { promise, resolve, reject } = Promise.withResolvers();  
//         or
/* let resolve, reject;
const promise = new Promise((res, rej) => {
 resolve = res;
 reject = rej;
});*/
// function myPromise(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (delay < 6000) {
//         resolve("The promise fullfiled")
//       } else {
//         reject("Exit");
//       }
//     }, delay)
//   })
// }
// var promise = myPromise(1000);
// promise
//   .then((resol) => {
//     console.log(resol, ": ok");
//     return myPromise(3000);
//   })
//   .then((resol) => {
//     console.log(resol, "ok 2");
//   })
//   .catch((rej) => {
//     console.log(rej, "The Promise Failed");
//   })
//   .finally(() => {
//     console.log("Done");
//   })

// async function createPromise() {
//   try {
//     await myPromise(1000);
//     console.log("promise 1");
//     await myPromise(2000);
//     console.log("promise 2");
//     await myPromise(5000);
//     console.log("promise 3");
//     await myPromise(6000);
//     console.log("promise 4");
//     await myPromise(5000);
//     console.log("promise 5");
//   } catch (err) {
//     console.log("reject");
//   } finally {
//     console.log("Success!");
//   }
// }
// console.log(createPromise());
// redux
function sendAPICall() {
  var p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send();
    xhr.addEventListener('load', () => {
      console.log('done');
      resolve();
    });
  });

  return p;
}

var sendApi = sendAPICall()
function taskA() {
  sendApi
    .then(() => {
      document.getElementById('response-display').innerText = 'Task B done';
      return sendAPICall();
    })
    .then(() => {
      document.getElementById('response-display').innerText = 'Task c done';
      return sendAPICall();
    })
    .then(() => {
      document.getElementById('response-display').innerText = 'Task d done';
      return sendAPICall();
    })
    .then(() => {
      document.getElementById('response-display').innerText = 'Task e done';
      return sendAPICall();
    })
    .then(() => {
      document.getElementById('response-display').innerText = 'Task f done';
      return sendAPICall();
    })
    .catch((error) => {
      console.log("Rejected", error);
    })
}

taskA();



// taskA()
// function taskB() {
//   sendAPICall(() => {
//     document.querySelector('response-display').innerText = 'Task B done'
//   })
// }
// function () {
//   console.log('Task A');
//   sendAPICall(() => {
//     document.querySelector('response-display').innerText = 'Task B done'

//     sendAPICall(() => {
//       document.querySelector('response-display').innerText = 'Task B done'

//       sendAPICall(() => {
//         document.querySelector('response-display').innerText = 'Task B done'

//         sendAPICall(() => {
//           document.querySelector('response-display').innerText = 'Task B done'

//           sendAPICall(() => {
//             document.querySelector('response-display').innerText = 'Task B done'
//           })
//         })
//       })
//     })
//   })

// }


