const frutas = ["manzana", "fresa", "naranja", "melocotón"];
//otra forma de declarar un array, aunque se utiliza menos
let frutas2= new Array ("tomate", "pepino");
//métodos para modificar un array
//modificar un elemento
console.log(frutas);
frutas[0]= "sandía";
console.log(frutas);
//añadir elementos: push () añade un elemento al final del array
frutas.push("pera");
console.log(frutas);
//unshift() añade un elemento al principio del array.
frutas.unshift("cereza");
console.log(frutas);
//eliminar elementos de un array: pop() elimina el ultimo elemento 
frutas.pop();
console.log(frutas);
//shift() elimina el primer elemento
frutas.shift();
console.table(frutas);
frutas[34] = "melon";
console.table(frutas);
console.log(frutas[100]);
//eliminar elementos del attay seleccionados splice()

frutas.splice(1,2);
console.table(frutas);
//agregar un elemento al array
let fruta= "calabaza";
const frutas3 = [fruta, ...frutas];
console.table(frutas3);
const frutas4 = [...frutas, "aguacate"];
console.table(frutas4);

//recorrer un array con foreach
frutas3.forEach(fruta =>{
    //esta parte se ejecuta una vez por elemeto del array
    //cada vez tenemos acceso a un elemento del array en la variable fruta
console.log(fruta);
document.getElementById("listaFrutas").innerHTML += `<li>${fruta}</li>`;
})
let frase = "en un lugar";
frase = frase + " de la mancha";
frase += "de la mancha";