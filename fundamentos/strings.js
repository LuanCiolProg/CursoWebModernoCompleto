const escola = "Fatec3 americana";

console.log(escola.charAt(0)); // charAt mostra qual simbolo vc quer
console.log(escola.charAt(4)); // ele começa contar apartir do 0
console.log(escola.charCodeAt(3)); // valor tabela unicode
console.log(escola.indexOf("3")); // faz o contrario da de cima

console.log(escola.substring(1)); //conta elementos apartir do pedido
console.log(escola.substring(0, 3)); //conta elementos do pedido ate o pedido

console.log('escola '.concat(escola).concat("!")); //concatena strings
console.log('escola ' + escola + "!"); // mesma concatenaçao porem mais simples com sinal de +
console.log(escola.replace(3, 'e')); // substitui o simbolo ou string que quiser

console.log('Ana,Maria,Pedro'.split(','))