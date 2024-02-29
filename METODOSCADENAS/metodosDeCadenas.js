/*
let cadena = "cadena de prueba"

resultado = cadena.concat("hola")

document.write(resultado)*/ //concat()
/********************************/
/*let cadena = "cadena de prueba"

resultado = cadena.startsWith("cadena")
resultado1 = cadena.endsWith("cadena")

document.write(resultado)
document.write(resultado1 + "<br>")*/ //startsWith() y endsWith()
/********************************/


/*let cadena = "cadena de prueba"

resultado = cadena.includes("cadena")

document.write(resultado)*/ //includes() busca una cadena dentro de una cadena, si la encuentra devuelve true y si no false

/********************************/


/*let cadena = "cadena de prueba"

resultado = cadena.indexOf("cadena")

document.write(resultado)*/ //devuelve la posicion en la que comienza la cadena dada, y lastIndexOf() hace lo mismo pero comienza a contar desde el ultimo caracter

/********************************/

/*let cadena = "CARLITOS"

resultado = cadena.padStart(50,"cacas")

document.write(resultado)*/ //  .padStart() se usa para agregar caracteres a una cadena, en la primer coma se coloca la cantidad de cacarteres a rellenar y en la ultima coma lo que se quiere rellenar, padEnd() hace lo mismo pero al final

/********************************/

/*let cadena = "CARLITOS"

resultado = cadena.repeat(50)

document.write(resultado)*/ // repeat() repite la misma cadena las veces que queramos

/********************************/

/*let cadena = "CARLITOS"

resultado = cadena.toLowerCase()

resultado1 = cadena.toUpperCase()


document.write(resultado)
document.write(resultado1)*/ // toLowerCase() convierte la cadena a minuscula y UpperCase a mayuscula

/********************************/

/*let cadena = "CARLITOS        "

let resultado = cadena.trim()


document.write(resultado.length)*/ //.trim() sirve para eliminar los espacios en blanco de una cadena, lo mismo .trimEnd() nos elimina los espacios en blanco del final de la palabra, y .trimStart() lo mismo pero desde el principio

/********************************/

let cadena = "CARLITOS"

let resultado = cadena


document.write(resultado)