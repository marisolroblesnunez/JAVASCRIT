let notas = [3, 6, 8, 6, 2, 10, 1];
let alumnos = ["David", "inma", "Jesús", "Reich", "Lucia", "Marisol", "Antonia"];
let salida;
document.getElementById("marisoli").textContent = notas;
//para acceder a un elemento del array:
//notas[1]
document.getElementById("marisoli").textContent = notas [1];
//mostrar el nombre y la nota del tercer alumno
salida= alumnos[2]+" tiene una nota de " +notas [2];
document.getElementById("marisoli").textContent = salida;
if(notas[2]>=5){
    salida= "Aprobado";
}else{
    salida= "Suspenso";
}
document.getElementById("marisoli1").textContent= salida;

//como saber cuantos elementos tiene un array
let numAlumnos = alumnos.length;
console.log(numAlumnos);
//conseguir un numero aleatorio
//Math.random()devuelve un número aleatorioo[0, 1]
let numAleatorio= Math.random() *numAlumnos;
console.log(numAleatorio);
numAleatorio= parseInt(numAleatorio);
document.getElementById("resultado3").textContent = alumnos[numAleatorio];