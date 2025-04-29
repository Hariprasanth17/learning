class products {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
    displayProduct() {
        console.log(`Name : ${this.name}`)
        console.log(`Price : $${this.price.toFixed(2)}`)
    }
    tot() {
        console.log(`Tax : $${(0.06 * this.price).toFixed(2)}`)
        console.log(`Total : $${(this.price * 0.06 + this.price).toFixed(2)}`)
    }
}
const pr1 = new products("Pen", 30)
pr1.displayProduct()
pr1.tot()



//sound effect

const image = document.getElementById("image")
console.log(image)
const sound = new Audio("./assert/sun.wav")
const hover = image.addEventListener("mouseover",
    () => {
        sound.currentTime = 0;
        sound.play().catch((error) => { console.log("error", error) });

    })
const para = document.createElement("h1")
const paracont = document.createTextNode("Hover Image to play sound")
para.appendChild(paracont)
const newchild = document.body.appendChild(para)
newchild.style.color = "Green"
newchild.style.textAlign = "center"

//nav 
const li = document.querySelectorAll("li")
console.log(li)

li.forEach((item) => {
    item.addEventListener('mouseover',
        () => {
            item.style.backgroundColor = "green";
            item.addEventListener("mouseout", () => {

                item.style.backgroundColor = ""; // Reset when mouse leaves
            });

        }



    )
})
console.log(document.cookie);
let att = document.createAttribute("class")
att.value = "Hari";
let setatt = document.getElementById("image").setAttributeNode(att)

document.getElementById("image").classList.add('Hari')
console.log(image);

let com = document.createComment("this is sample project");
let mom= document.body.appendChild(com);
console.log(mom);