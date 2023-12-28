let numeros:number[]=[20,30,40]; //mais simples
//let numeros:Array<number|string|boolean>=[20,30,40,"Teste",false];
//let numeros:(number|string)[]=[20,30,40,"Matheus"]
numeros.push(10); //[20,30,40,10]
numeros.unshift(2)//[2.20,30,40,10]
numeros.pop(); //remove o ultimo el
numeros.shift(); //remove o primeiro el
console.log(numeros);


let numeros_ro:ReadonlyArray<number>=[100,200,300]; //Não consigo alterar esses valores, nem adicionar nem remover. 

console.log(numeros_ro);
