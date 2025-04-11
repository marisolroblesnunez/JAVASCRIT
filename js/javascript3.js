//Booleanos
//Es un tipo de dato que puede tener dos valores: true y false
//Condicionales
/*
Sintáxis:
if (condicion){
instrucciones a ejecutar}
*/
let nombre = "Andrés";
let tienePermiso = true;
let mensaje ;

//mostrar por pantalla Andres tiene permiso si realmente tiene permiso 
if(tienePermiso){
    
    salida= nombre + " SI tiene permiso";
    document.getElementById("mensaje").textContent = salida;
} else {
    salida= nombre + " NO tiene permiso";
    document.getElementById("mensaje").textContent = salida;
}
    
let alumno = "María";
let nota = 10;
//mostrar por pantalla si (alumno) esta aprobado o suspenso 

let estaAprobado = nota>=5;
if(estaAprobado){
    salida= alumno + " esta aprobada";
} else {
    salida= alumno + " está suspensa";
}
document.getElementById("mensaje").textContent = salida;

//Mostrar por pantalla si a nota es igual a 5 el mensaje Esta aprobada por los pelos
if(nota<5){
    salida= alumno + "esta suspenso";
} else if( nota==5) {
    salida= alumno + "esta aprobada por los pelos";

// } else if (nota>5) {

//     salida= alumno + " está aprobada";
}else if (nota==10){
    salida= alumno+ " tienes matricula de honor"
}
document.getElementById("mensaje1").textContent = salida;



