const alumnos = ["Inma", "David", "jesus", "Marisol", "Antonia"];
const notas= [7,8,9,10,6];
//declaraciob de objetos
const alumno = {
    nombre: "inma",
    nota: 7,
    tienePracticas: true,
}

console.log(alumnos); //array
console.log(alumno);//objeto


//acceder a un elemento de un objeto
console.log(alumno.nombre);
console.log(alumno.nota);


//mostrar por pantalla los datos de alumno
//inma a sacado un 7 y tiene practicas
let mensajeTxt = `${alumno.nombre} ha sacado un ${alumno.nota}`;
//es igual que 
// mensajeTxt= alumno.nombre+ "ha sacado un " +alumno.nota;

document.getElementById("mensaje").textContent = `${alumno.nombre} ha sacado un ${alumno.nota} y tiene practicas ${alumno.tienePracticas}`;
document.getElementById("mensaje").textContent = mensajeTxt;

if(alumno.tienePracticas){
    mensajeTxt += " y tiene practicas";
}else{
    mensajeTxt += " y no tiene practicas";
}
document.getElementById("mensaje").textContent = mensajeTxt;
//modificar la nota del alumno
alumno.nota = 8.5;
alumno.edad = 23;
alumno.altura = 170;
console.log(alumno.nota);

//crear un array de objetos con datos de los alumnos
//cada alumno contiene las claves: nombre, nota ,tienePracticas, edad

// const alumnos = [];
// const alumno = {
//     nombre: "inma"
//     nota: "7"
//     tienePracticas: "true"
//     edad: 22
// }
//alumnos.push(alumno);

const alumnos1 = [
    {nombre: "Inma", nota: 7, tienePracticas: true, edad: 22},
    {nombre: "Marisol", nota: 7, tienePracticas: true, edad: 28},
    {nombre: "jesus", nota: 5, tienePracticas: false, edad: 22},
    {nombre: "Lucia", nota: 4, tienePracticas: true, edad: 24},
    {nombre: "Javi", nota: 6, tienePracticas: true, edad: 23},
    
    
]
console.log(alumnos1[0]);
//mostrar por pantalla el primer elemento del array
document.getElementById("divMensaje").textContent=alumnos1[0].nombre+"ha sacado un "+alumnos1[0].nota;
let datos = "";

alumnos1.forEach(alumno =>{
    //En cada interaccion del bucle tenemos acceso a un elemento del array en la variable alumno
    console.log(alumno.nombre);//mostrar solo el nombre
    datos =`<li>${alumno.nombre} ha sacado un ${alumno.nota}`//le borrado el li para añadirselo a +=datos

    
    // document.getElementById("listaAlumnos").innerHTML += datos;//mostrar el nombre mas los demas datos por eso le añadido +=datos
    if(alumno.tienePracticas){
        datos+= " y tiene practicas";
    }else{
        datos += "y no tiene practicas";
    }
// datos+= "</li>";
datos += `y tiene ${alumno.edad} años </li>`;
document.getElementById("listaAlumnos").innerHTML +=datos;//aqui le acabo de añadir el </li>

})
