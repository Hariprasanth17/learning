let user = {
    name:"tiya",
    age :27,
    count:0
}
console.log(user)
 function reducer(){
    user = {...user,count: user.count+1 }

 }
 reducer()
 console.log(user)