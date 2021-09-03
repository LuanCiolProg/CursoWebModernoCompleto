// depois da troca.... a = 94 e b = 7

let a = 7;
let b = 94;

console.log(a);
console.log(b);

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

// criar uma variavel temporaria (variavel auxiliar) no caso let temp = a;

//modo mais avançado de fazer
// [a, b] = [b, a]