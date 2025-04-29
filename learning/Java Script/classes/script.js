class car {
    constructor(carName, price) {
        this.carName = carName;
        this.price = price;
    }
    pre() {
        return `car Name :${this.carName} price : $${this.price.toFixed(2)}`

    }
}
class model extends car {
    constructor(carName, price, mod) {
        super(carName, price);
        this.mod = mod;
    }
    show() {
        return `${this.pre()} model : ${this.mod}`;
    }
}
let myCar = new model("Ford", 80.00, "mustang");
let output = myCar.show();
console.log(output)


//try catch

try {
console.log(test);
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}finally{
    console.log("error")//it always excute
}