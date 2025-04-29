let mydate = new Date("2003-01-17T08:30:00");
console.log(mydate);
console.log(mydate.getTimezoneOffset());
console.log(mydate.getUTCFullYear());//2003
console.log(mydate.getUTCMonth());//0
console.log(mydate.getUTCDate());//17
console.log(mydate.getUTCDay());//5
console.log(mydate.getUTCHours());//3  (8:30 - 5:30)


console.log(mydate.getFullYear());//2003
console.log(mydate.getMonth());//0
console.log(mydate.getDate());//17
console.log(mydate.getDay());//5
console.log(mydate.getTime());//1042754040000 epoach timestamp
console.log(mydate.getHours());//8
console.log(mydate.getMinutes());//30
console.log(mydate.getSeconds());//0
console.log(mydate.getMilliseconds());//0