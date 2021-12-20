// Array Productos

let listaProductos = [{
    id: 1,
    nombre: " Tortas ",
    precio: 800,

}, {
    id: 2,
    nombre: " Tartas ",
    precio: 400,

}, {
    id: 3,
    nombre: " Cupcakes ",
    precio: 100,

}]

// Array Carrito de compras

let listaCompras = []

////// Funciones Globales /////

// Agregar a listaCompras

function agregarProductos(cantidad, nombre, totalProducto, id) {

    nuevoProducto = new producto(cantidad, nombre, totalProducto, id)

    listaCompras.push(nuevoProducto)

    menu()
}


// Constructor de objetos Mediante clase

class producto {
    constructor(cantidad, nombre, totalProducto, id) {

        this.cantidad = cantidad;
        this.nombre = nombre;
        this.totalProducto = totalProducto;
        this.id = id;
    }
}

// Calculo Precio

const calculoPrecio = (cantidad, precio) => (precio * cantidad)


//Mostrar Carrito

function mostrarCarrito() {
    if (listaCompras == "") {
        alert("Su Carrito esta Vacio")

        menu()

    } else {

        let mostrarCompra = "Su carrito contiene:\n"

        for (const producto of listaCompras) {
            mostrarCompra += producto.cantidad + producto.nombre + "$" + producto.totalProducto + " ID: " + producto.id + "\n"
        }
        alert(mostrarCompra);
    }
}

// Eliminar Producto

const eliminarProductos = () => {

    if (listaCompras == "") {
        alert("Su Carrito esta Vacio")

        menu()

    } else {

        alert("Debera Eliminar el producto por su ID")
        mostrarCarrito()
        let producto = parseInt(prompt("Ingrese el ID del producto a eliminar"))
        const index = buscarIndice(producto)
        listaCompras.splice(index, 1)
        alert("Producto fue eliminado correctamente")
        // guardarStorage("productos", productos)
        menu()
    }
}

// Buscar por Indice

const buscarIndice = (id) => {
    const index = listaCompras.findIndex(producto => producto.id == id)

    if (index != -1) {
        return index
    } else {
        alert("ID Incorrecto")
    }
}

// Funcion Principal menu

function menu() {

    let compra = parseInt(prompt(`Ingrese el Nº de item que desea comprar
                            1- Tortas 
                            2- Tartas 
                            3- Cupcakes
                            4- Ver Carrito de compras
                            5- Eliminar productos
                            6- Salir`));

    if (compra == 1 || compra == 2 || compra == 3) carrito(compra)
    else if (compra == 4) mostrarCarrito(), menu()
    else if (compra == 5) eliminarProductos()
    else if (compra == 6) return
    else menu()

}

// Ejecucion de compra

function carrito(compra) {

    cantidad = parseInt(prompt("¿Cuantas unidades quiere Comprar?"))

    switch (compra) {

        case 1:

            if (isNaN(cantidad)) {
                alert("Por favor ingrese un numero")

                menu()

            } else {

                let producto = listaProductos[0]

                totalProducto = calculoPrecio(cantidad, producto.precio)

                alert("Se Agregaron " + cantidad + " " + producto.nombre + " a tu carro por" + " $ " + totalProducto)

                agregarProductos(cantidad, producto.nombre, totalProducto, producto.id)

                menu()
            }

            break;

        case 2:

            if (isNaN(cantidad)) {
                alert("Por favor ingrese un numero")

                menu()

            } else {

                let producto = listaProductos[1]

                totalProducto = calculoPrecio(cantidad, producto.precio)

                console.log(totalProducto)

                alert("Se Agregaron " + cantidad + " " + producto.nombre + " a tu carro por" + " $ " + totalProducto)

                agregarProductos(cantidad, producto.nombre, totalProducto, producto.id)

                console.log(totalProducto)

                menu()
            }


            break;

        case 3:

            if (isNaN(cantidad)) {
                alert("Por favor ingrese un numero")

                menu()

            } else {

                let producto = listaProductos[2]

                totalProducto = calculoPrecio(cantidad, producto.precio)

                console.log(totalProducto)

                alert("Se Agregaron " + cantidad + " " + producto.nombre + " a tu carro por" + " $ " + totalProducto)

                agregarProductos(cantidad, producto.nombre, totalProducto, producto.id)

                console.log(totalProducto)

                menu()
            }
            break;

        }
}

menu()