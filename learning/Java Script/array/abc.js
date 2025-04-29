// var x = 'abcaabbcdeefggghghklkkk';
// let count = 1;
// for (let i = 0; i < x.length; i++) {
//     if (x[i] == x[i + 1]) {
//         count++;
//         if (x[i + 1] == x[i+2]) {
//             count++;
//             x[i] = x[i++];
//         }
//         console.log("The element " + x[i] + " " + count);
//         count = 1;
//     }
// }

// function findChars(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         const x = str[i];
//         const next = str[i + 1];
//         if (x === next) {
//             ++count;
//         }else{
//             console.log("The element "+ x +", count:"+count);
//             count = 0;
//         }

//     }
// }

// let y = findChars(x)


// for (let i = 0; i < x.length; i++) {
//     if (x[i] == x[i + 1]) {
//         count++;
//         if (x[i + 1] == x[i + 2]) {
//             count++;

//         }
//         console.log("The element " + x[i] + " " + count);
//         count = 1;
//     }
// }
// let z = ["hari", "babu", "siva", "prasanth"]

// function reverse(arr) {

//     var op = [];
//     var n = [...arr]
//     for (let i = 0; i < n.length; i++) {
//         let value = arr.pop();
//         op.push(value);
//     }
//     console.log(op)
//     console.log(z)
//     return op;

// }
// reverse(z)



// let a = 22;
// function findDays(age) {
//     let year = new Date().getFullYear();
//     let birthYear = year - age;
//     let count = 0;
//     for (let i = birthYear; i <= year; i++) {
//         if (i % 4 == 0) {
//             count++;
//         }
//     }
//     console.log(count)
//     console.log(count + (age * 365));
// }
// let val = findDays(a);


// let str1 = "hariprasanth";
// function findNumberOfVowels(s) {
//     let vowel = '';

//     vowel = s.match(/a|e|i|o|u/gi);
//     // console.log(vowel)
//     return vowel;
// }
// findNumberOfVowels(str1);


let str2 = "wow";
function palindrome(string) {
    let reverseStr = '';
    for (let i = string.length - 1; i >= 0; --i) {
        reverseStr += string[i];
    }
    //const reverseStr = string.split('').reverse().join('');
    if (string === reverseStr) {
        console.log("string :" + string + ", It's a palindrome");
    } else {
        console.log("string :" + string + ", It's Not a palindrome");
    }
    return reverseStr;
}
palindrome(str2)


const arr = [1, 2,3, 5, 7, 8, 9];
arr.forEach((x, i) => {
    console.log(arr[i] === arr[i + 1])
})
let i = 0;

while (i < arr.length - 1) {
    const current = arr[i];
    const next = arr[i + 1];
    if (current + 1 !== next) {
        console.log('Missing', current + 1);
    }
    ++i
}
