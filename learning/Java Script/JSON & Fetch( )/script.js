










//Fetch
//syntex : fetch (url,{option})
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));


const uint8 = new Uint8Array([1, 2, 3]);
console.log(uint8); // 1

const arr = new Int8Array(10)
arr[0]= 5;
arr[1]=130
console.log(arr)//Int8Array(10) [ 5, -126, 0, 0, 0, 0, 0, 0, 0, 0 ]

