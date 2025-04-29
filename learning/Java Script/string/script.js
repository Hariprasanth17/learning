//length
var str = "Returns the length of a string";
let length_str = str.length;
console.log(str[0]);// first word
console.log(str[str.length - 1]);//last word
console.log(str[-1]);//undefined
console.log(length_str);

/*char_at
syntax: stringname.charAt(index);
*/
console.log(str.charAt(9));
console.log(str.charAt(-1));//<empty string>

/* indexOf                                           lastindexOf
syntex : stringname.indexOf(searchstring)            stringname.lastIndexOf(searchstring)
     stringname.indexOf(searchstring,position)       stringname.lastIndexOf(searchstring,position)
*/
var str1 = "The code undefined code code! "
let searchstr = "code"
console.log(str1.indexOf('Code'));//-1  case sensitive
console.log(str1.indexOf(searchstr));//4
console.log(str1.lastIndexOf(searchstr));//24 return last code index
let indexstart = str1.indexOf(searchstr, 5);//19
let indexstart1 = str1.indexOf(searchstr, -18); // 4
let indexlast = str1.lastIndexOf(searchstr, 18);//4 it take 18 as last index value return 4
let indexlast1 = str1.lastIndexOf(searchstr, -6);//it goes left to left return -1

console.log(`The index is ${indexstart}`);
console.log(`The index is ${indexstart1}`);
console.log(`The index is ${indexlast}`);
console.log(`The index is ${indexlast1}`);   
console.log(str1.indexOf(''));//empty string occuires start return 0
console.log(str1.lastIndexOf(''));//empty string occuires end return 30
console.log(str1.indexOf());//it take undefined,if undefined word there in string it return that index

/* slice: stringname.slice(startindex,endindex)
substring : stringname.substring(startindex,endindex) it takes negative value as 0
substr : srtingname.substr(startindex,length)
*/
var str2 = "String Methods In Java Script"
console.log(str2.slice(2));
console.log(str2.slice(2, 9));
console.log(str2.slice(0, 1));
console.log(str2.slice(-1));
console.log(str2.slice(-20, 20));
console.log(str2.slice(16, 13));//it return empty string
console.log(str2.substring(16, 13));//automatically change start index and endindex
console.log(str2.substring(2));
console.log(str2.substring(-3));//it start from 0
console.log(str2.substr(2));//ring Methods In Java Script
console.log(str2.substr(2, 9));//ring Meth

/*split
stringname.split(seprator)
stringname.split(seprator,limit)
*/
console.log(str2.split(" "));
console.log(str2.split(""));
console.log(str2.split("i"));
console.log(str2.split("", 4));//["s","t","r","i"]

/*includes
stringname.includes(searchstring)
stringname.includes(searchstring,startposition)*/
console.log(str2.includes("Method"));//true
console.log(str2.includes("method"));//false
console.log(str2.includes("Method", 9));//false
console.log(str2.includes("Method", 3));//true

/*startsWith endsWith
stringname.startswWith(searchstring)
stringname.startsWith(searchstring,length)*/
console.log(str2.startsWith("String"));//true
console.log(str2.startsWith("Method", 7));//true
console.log(str2.endsWith("Script"));//true
console.log(str2.endsWith("In", 17));//true

/*concat
str1.concat(str2)
str1.concat(str2,str3....stringN)
*/
console.log(str1.concat(str2));
console.log(str1.concat(" ", str2));
console.log(str1 + str2);

/* repeat
str.repat(count)*/
var str3 = "abc";
console.log(str3.repeat(4));
console.log(str3.repeat(5.5));//it consider only integer value
console.log(str3.repeat(0));//empty string
//console.log(str3.repeat(2/0));range error
//console.log(str3.repeat(-1));range error it not a integer

/* trim,trimStart,trimEnd*/
let str4 = "   hello    "
console.log(str4.trim());//hello
console.log(str4.trimStart());//hello  
console.log(str4.trimEnd());//  hello

/* padStart                           padEnd
strname.padStart(targetlength)
strname.padEStart(targetlength,padstring)  */
var str5 = "abs";
console.log(str5.padStart(10)); //7 space abs
console.log(str5.padStart(10, "hari"));//hariharabs
console.log(str5.padEnd(10));//abs7space
console.log(str5.padEnd(10, "hari"));//absharihar
//target lenth is less than original string it retur full string
console.log(str5.padStart(2));//abs

/* localCompare
referanceString.localCompare(comparestr)
referanceString.localCompare(comparestr,locals,option)*/
console.log("a".localeCompare("b"));// return negative number -1,-2,-3(referance->comparestr)
console.log("b".localeCompare("a"));//positive number 1,2,3(compare->referancestr)
console.log("a".localeCompare("a"));//0(compare=referance)

/* search
str.search(regex)
regex not there it return -1*/
const str6 = "i think Ruth's dog is dog cuter than your Dog!";
let regex1 = /[A-Z]/;
let regex2 = /0-9/;
let regex3 = /dog/;
console.log(str6.search(regex1));//8 because first capital is R
console.log(str6.search(regex2));//-1 number not there in string
console.log(str6.search(regex3));//15

/*match
str.match(regex)
output : [
"dog",
index:15,
input :'i think Ruth's dog is dog cuter than your Dog!',
group: undefined
]
regex not there it return null*/
let regex4 = /[A-Z]/g;
let regex5 = /0-9/;
let regex6 = /dog/;
console.log(str6.match(regex4));//array ["R","D"] g-global it check global to the string
console.log(str6.match(regex5));//null
console.log(str6.match(regex6));//array["dog"]

//matchAll we pass g-globle to the regex
let regex7 = /dog/gi;
console.log(str6.matchAll(regex7));/*[ [ "dog", index:15, input :'i think Ruth's dog is dog cuter than your Dog!', group: undefined]
                                        [ "dog", index:20, input :'i think Ruth's dog is dog cuter than your Dog!', group: undefined] ]*/

/* replace replaceAll
str.replace(searchstr,replacestr)        str.replace(regex,replacestr)
str.replace(searchstr,replacefun)        str.replace(regex,replacefun)*/
console.log(str6.replace("dog", "cat"));//i think Ruth's cat is cuter than your Dog!
console.log(str6.replace(/dog/gi, (match) => {
     return match.toUpperCase();
}));//i think Ruth's DOG is DOG cuter than your Dog!
console.log(str6.replaceAll("dog", "cat"));//i think Ruth's cat is cat cuter than your Dog!

/*charCodeAt                                 codePointAt
str.charCodeAt(position)                       str.codePointAt(position)
UTF-16 (0 to 65535)                            unicode (0 to 65535 & >65535)
leangth of emoji 2
emoji return single unicode(eg 55677)          emoji return 2 16 bit and added unicode value return(125565)
position vale is out of range it NaN           position vale is out of range it undefined   */
console.log(str6.charCodeAt(5));//110
console.log(str6.codePointAt(5));//110

/* fromCharCode                                    fromCodePoint
 str.fromCharCode(num)                             str.fromCodePoint(num)
*/
//console.log(String.fromCharCodeAt(110));

/* toUpperCase                                 toLowerCase
str.toUpperCase ()                            str.toLowerCase() */
console.log(str6.toUpperCase());//I THINK RUTH'S DOG IS DOG CUTER THAN YOUR DOG!
console.log(str6.toLowerCase());//i think ruth's dog is dog cuter than your dog!

/* toLocaleUpperCase                                 toLocaleLowerCase
str.toLocaleUpperCase ()                            str.toLocaleLowerCase()
str.toLocaleUpperCase (local)                        str.toLocaleLowerCase (local)   */
console.log(str6.toLocaleUpperCase("en-us"));//I THINK RUTH'S DOG IS DOG CUTER THAN YOUR DOG!(english-us)
console.log(str6.toLocaleUpperCase("tr"));//İ THİNK RUTH'S DOG İS DOG CUTER THAN YOUR DOG!(tr-turkish)

/*toString                                 valueOf
String.toString()                          String.valueOf()
it used to convert objec into string        
*/

/* String.raw(string,....subsitiuation)
   String.raw `templateString`
*escape character - \n\r\t...
*interpolation - ${  }    */
const str7 = String.raw`i am \n${19 + 3} years old!`;//i am \n22 years old!
console.log(str7);

