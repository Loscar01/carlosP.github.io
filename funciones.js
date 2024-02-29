//function saludar(){
 //  respuesta = prompt("Hola Carlos como estas?")
 //  if(respuesta=="bien" || "Bien" ){
 //   alert("Me alegro mucho pa, hagamos algo")
 //  } else{
 //   alert("Una pena")
 //  }
//}
//saludar()

//function saludar(){
  // alert("Hola")
   //return "La funcion se ejecuto correctamente" 
//}
//let saludo = saludar()

//document.write(saludo)

//******************** */

/*num1=parseInt(prompt("Numero 1: "))
num2= parseInt(prompt("Numero2: "))

opc = prompt("Seleccione 1 para suma, 2 para resta")

if(opc==1){
    suma(num1,num2)
} 

function suma(num1,num2){
    let res = num1 + num2
    return res
}
*/


//Actividad1

/*let edad = parseInt(prompt("Ingrese tu edad: "));
let namee = prompt("Ingresa tu nombre: ")
if (edad >= 18) {
    pasar(edad);
} else {
    alert("Eres menor de edad");
}

function pasar(edad) {
    let ahora = new Date();
    let horaActual = ahora.getHours();
    alert(`Son las ${horaActual}:00`)

    if (horaActual === 2) {
        alert(namee + " de " + edad + " años ha pasado gratis, que disfrute.");
    } else {
        alert(namee + " de " + edad + " años puede pasar, pero deberá pagar 500 pesos.");
    }
}*/

//Actividad2

let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (pre)
};
