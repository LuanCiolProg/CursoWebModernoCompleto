const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length); //length - Obtém ou define o comprimento da matriz. Este é o número um mais alto do que o índice mais alto da matriz.

valores.push({id: 3}, false, null, 'teste'); //push - Adiciona novos elementos ao final de uma matriz, e devolve o novo comprimento da matriz.
console.log(valores);

console.log(valores.pop());//pop - remove ultimo elemento do array e retorna ele
delete valores[0];
console.log(valores);

console.log(typeof valores); // retorna cm objeto pq em js um array é definido como objeto
