class Item {
    constructor(id, autor, titulo, precio, imagen) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen
    }
    mostrarData() {
        console.log(`El nombre del producto= ${this.nombre}, su precio es ${this.precio}`)
    }
}

const Item1 = new Item (0,"pen-drive 64gb",5400,imagen.jpg)
const Item2 = new Item (1, "Procesador", 179900)
const Item3 = new Item (2, "Placa Madre", 73023)
const Item4 = new Item (3, "Memoria Ram", 225003)
const Item5 = new Item (4, "Placa de Video", 250000)
const Item6 = new Item (5, "Gabinete", 45000)

let estanteria = []

if (localStorage.getItem("estanteria")) {
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}else{
    estanteria.push(Item1,Item2,Item3,Item4,Item5,Item6)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}