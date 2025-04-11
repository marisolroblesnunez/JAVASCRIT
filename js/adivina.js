//Crear un script que muestre una frase aleatoria cada vez que cargue el html
let frases = [
    "hoy vas a tener un gran día",
    "Mejor no salgas",
    "coge una pelota",
    "vete a la casa de tu abuela"

]
// let numAlumnos = alumnos.length;
// console.log(numAlumnos);
// //conseguir un numero aleatorio
// //Math.random()devuelve un número aleatorioo[0, 1]
// let numAleatorio= Math.random() *numAlumnos;
// console.log(numAleatorio);
// numAleatorio= parseInt(numAleatorio);
// document.getElementById("resultado3").textContent = alumnos[numAleatorio];

let numeroAleatorio= Math.random() * frases.length;

numeroAleatorio= parseInt(numeroAleatorio);
document.getElementById("ejercicio").textContent = frases[numeroAleatorio];

function probarSuerte(){
    location.reload();
}
 document.getElementById("probar"). addEventListener("click", probarSuerte);

 document.body.style.backgroundColor = "red";