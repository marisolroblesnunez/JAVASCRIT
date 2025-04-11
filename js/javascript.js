alert("hola marisol");
//declarar variables
let nombreAlumno ="Manolo";
let apellidoAlumno = "Pérez";
let edad = 28;
let calificacion = 8;


// alert("Hola" + "apellidoAlumno");
console.log("Hola " + nombreAlumno + ", has sacado un " + calificacion + " este trimestre.");
calificacion = 9.5;
console.log("Hola " + nombreAlumno + ", has sacado un " + calificacion + " este trimestre.");
console.log(`Hola ${nombreAlumno} has sacado un ${calificacion} este trimestre`);
//operaciones numéricas
let producto = "Jamón Ibérico";
let precio = 100;
const iva = 21;
//mostrar por consola: El (producto) cuesta (precio + iva) €€
let precioConIva = precio + precio * iva / 100;
console.log("El " + producto + " cuesta " + precioConIva);

//Bajar el precio de los productos un tanto por ciento que tenemos en la variable oferta y volver a mostrar el precio
let oferta = 10;
let nuevoPrecio = precioConIva - oferta
console.log( "Con la nueva oferta el" + producto + " ahora cuesta " +nuevoPrecio);

 oferta = 10;
let descuento = precio * oferta / 100;
let precioConDescuento = precio - descuento
let pvp = precioConDescuento + (precioConDescuento * iva / 100);

//mostrar: Hoy el (producto) esta de oferta y cuesta (pvp)

//llega la navidaf, la empresa quiere repartir los jamones que quedan entre los empleados. Muestra cuantos jamones le corresponden a cada empleado y cuantos jamones sobran
let empleados = 10;
let jamones= 23;
let jamonesParaCadaEmpleado = jamones / empleados;
let jamonesParaCadaEmpleado_Entero = parseInt (jamonesParaCadaEmpleado);//parseint sirve para que te ponga el numero entero y deje aparte los decimales
let sobran = jamones % empleados;

console.log ( "tocan a " + jamonesParaCadaEmpleado_Entero + " y sobran " + sobran + " jamones");