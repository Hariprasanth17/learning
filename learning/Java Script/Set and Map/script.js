//set can't create literal method 
// syntex :  new Set([])
const mySet = ["hari", 21, "work", "student", "play"];//constractor method
var mySet1 = new Set(mySet);
console.log(typeof (mySet1))//object
mySet1.add("song");
mySet1.add("travaling");
console.log(mySet1);
//has(value)
//it return true or false
console.log(mySet1.has("hari"));
console.log(mySet1.has("tree"));
//entries()
let setentries = mySet1.entries();
for (let item of setentries) {
    console.log(item);
};
//key
setKey = mySet1.keys();
for (let item of setKey) {
    console.log(item);
};
//value
setvalue = mySet1.values();
for (let item of setvalue) {
    console.log(item);
};

//size
console.log(mySet1.size);//7
//delete(element)
mySet1.delete("song");
console.log(mySet1);
//clear()
mySet1.clear()
console.log(mySet1);

//set1.union(set2)
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
let union1 = evens.union(squares);
console.log(union1);

//forEach
union1.forEach(element => {
    console.log(element);
});

//intersection  isSupersetOf isSubsetOf
const odds = new Set([1, 3, 4, 5, 7, 9]);
const squares1 = new Set([1, 4, 9]);
console.log(odds.intersection(squares1)); // Set(2) { 1,4, 9 }
console.log(odds.symmetricDifference(squares1));//Set(3) [ 3, 5, 7 ]
console.log(odds.isSupersetOf(squares1)); // true
console.log(squares1.isSubsetOf(odds))//true


//isDisjointFrom
let var1 =new  Set([1,3,5]);
let var2 =new Set([2,4]);
console.log(var1.isDisjointFrom(var2));//true



//Map
//it used for uniqe value and we can use any object(array,function) in key
const map = new Map();
map.set("firstName","hari");
map.set("lastName","s");
map.set("age",21);
map.set(function(){},"object");
console.log(map);
