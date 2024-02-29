/*const rangoEtario = document.querySelector(".rangoEtario")
rangoEtario.setAttribute("type","color")
valorDelAtributo = rangoEtario.getAttribute("type")

rangoEtario.removeAttribute("type")
document.write(valorDelAtributo)*/
 
// Función para mostrar los valores de los atributos de un input
function mostrarAtributosInput() {
    // Obtener el elemento input por su ID
    let inputElement = document.getElementById("miInput");

    // Obtener y mostrar los valores de los atributos
    console.log("ID del input:", inputElement.id);
    console.log("Nombre del input:", inputElement.name);
    console.log("Tipo del input:", inputElement.type);
    console.log("Valor del input:", inputElement.value);
    console.log("Placeholder del input:", inputElement.placeholder);
    console.log("Tamaño del input:", inputElement.size);
    console.log("Requerido:", inputElement.required);
}

// Función para cambiar el valor del input
function cambiarValorInput() {
    let inputElement = document.getElementById("miInput");
    inputElement.value = "Nuevo valor del input";
}
