function suma() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;

    if (input1.trim() === "" || input2.trim() === "") {
        alert("Por favor ingrese dos números válidos");
        return;
    }

    let resultado = parseInt(input1) + parseInt(input2);
    mostrarResultado("El resultado de esa suma es: " + resultado);
}

function resta() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;

    if (input1.trim() === "" || input2.trim() === "") {
        alert("Por favor ingrese dos números válidos");
        return;
    }

    let resultado = parseInt(input1) - parseInt(input2);
    mostrarResultado("El resultado de esa resta es: " + resultado);
}

function multiplicacion() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;

    if (input1.trim() === "" || input2.trim() === "") {
        alert("Por favor ingrese dos números válidos");
        return;
    }

    let resultado = parseInt(input1) * parseInt(input2);
    mostrarResultado("El resultado de esa multiplicación es: " + resultado);
}

function division() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;

    if (input1.trim() === "" || input2.trim() === "") {
        alert("Por favor ingrese dos números válidos");
        return;
    }

    if (parseInt(input2) === 0) {
        alert("IMPOSIBLE HACER DIVISIÓN POR 0");
        return;
    }

    let resultado = parseInt(input1) / parseInt(input2);
    mostrarResultado("El resultado de esa división es: " + resultado);
}

function mostrarResultado(resultadoTexto) {
    const contenedor = document.querySelector(".resultados");
    const item = document.createElement("li");
    const textoResultado = document.createTextNode(resultadoTexto);
    
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.setAttribute("type", "button");
    botonEliminar.addEventListener("click", function() {
        contenedor.removeChild(item); // Elimina el resultado al hacer clic en el botón
    });

    item.appendChild(textoResultado);
    item.appendChild(botonEliminar);
    contenedor.appendChild(item);
}

function enviar() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const comentarios = document.getElementById("comentarios").value;

    const cajaFinal = document.createElement("div");
    cajaFinal.id = "cajaFinal";

    const mensajeCajaFinal = document.createElement("label");
    mensajeCajaFinal.textContent = "Sus datos junto con su reseña fueron enviados exitosamente, gracias por usar esta herramienta.";

    cajaFinal.appendChild(mensajeCajaFinal);

    // Obtener el elemento contenedor para la encuesta y agregar la caja final
    const encuesta = document.querySelector('.mensajeEncuesta');
    encuesta.appendChild(cajaFinal);

    setTimeout(function() {
        cajaFinal.style.display = 'none';
    }, 4000);
}


