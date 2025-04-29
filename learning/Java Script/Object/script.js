var obj = {
    name: "aaaa",
    age: 21,
    fatherName: "bbbb",
    motherName: "cccc",
    sibiling: {
        brother: "dddd",
        sister: "eeee"
    },
    address: "ffff"


}
console.log(Object.values(obj));//Array(6) [ "aaaa", 21, "bbbb", "cccc", {…}, "ffff" ]
console.log(Object.keys(obj));//Array(6) [ "name", "age", "fatherName", "motherName", "sibiling", "address" ]
let entries = Object.entries(obj);
console.log(entries)/*​
0: Array [ "name", "aaaa" ]
​
1: Array [ "age", 21 ]
​
2: Array [ "fatherName", "bbbb" ]
​
3: Array [ "motherName", "cccc" ]
​
4: Array [ "sibiling", {…} ]
​
5: Array [ "address", "ffff" ]
​
length: 6
​*/
console.log(entries[3][1])//cccc

/* assign(target,source1,...sourcen)
it add source object to target*/
const birth = {
    year() {//method 
        //we can also decleare year : function(){}
        return (new Date().getFullYear() - obj.age)
    }
}
let newobj = Object.assign(obj, birth);
console.log(newobj)//merge object
console.log(birth.year());//2003

//using assign method we can also copy
const copyobj = Object.assign({}, obj);
console.log(copyobj);

//Object.defineProperties(objname,{key:{value: valuename},{key:{value: valuename}.....})
let objprint = Object.defineProperties(obj,{
    phon :{value :654},
    isAlive  :{value :true}
})
console.log(objprint);




//bitwise
//loop
//efficiency vs readability (important)
//swtch vs if else
//normal vs for of ,foreach
//scope = global.fun.block
//hoisting