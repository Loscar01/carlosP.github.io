let array = ["Banana", "manzana", "pera", ]

let pc = {
    nombre: "CX",
    procesador: "Intel Core i3",
    ram: "16 GB",
    espacio: "128GB"
}
let nombre = pc["nombre"]
let procesador = pc["procesador"]
let ram = pc["ram"]
let espacio = pc["espacio"]

frase = `El nombre de mi pc es:  ${nombre} <br>
        el procesador de mi pc es:  ${procesador} <br>
        La RAM que dispone es de:  ${ram} <br>
        El espacio de almacenamiento que tiene es de: ${espacio} <br>
`
document.write(frase)