//alert("Ya es viernes");
let nombre = "Lucia";
let profesion = "Maestra";
let antiguedad = 35;
let sueldo = 2500;
let plusAntiguedad = 10;
let salida;
antiguedad = antiguedad + 1;
let sueldoplus = antiguedad * plusAntiguedad + sueldo;

//mostrar por consola: Lucia es la maestra y lleva 35 años trabajando
console.log( nombre+ " es la "+profesion+ " y lleva "+antiguedad+ " años trabajando.");



salida = nombre+ " es la "+profesion+ " y lleva "+antiguedad+ " años trabajando.";
document.getElementById("mensaje").textContent = salida;

profesion = "Directora";

salida =  nombre+ " es la "+profesion+ " y lleva "+antiguedad+ " años trabajando.";
// La empresa ha decidido dar un plus a los trabajadores de 10€ por año trabajado
// Mostrar por pantalla cuanto gana (nombre)

salida = "La empresa a subido el sueldo de los trabajadores y ahora cobran "+sueldoplus;
document.getElementById("sueldo1").textContent = salida;