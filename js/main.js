
// Variables globales

let producto1 = "Tortas";
let precio1 = 800;
let stock1 = 10

let producto2 = "Tartas";
let precio2 = 400;
let stock2 = 20;

let producto3 = "Cupcakes";
let precio3 = 100;
let stock3 = 60;

let precioFinal = 0


// Funcionas Globales

function calculoPrecio(precio, cantidad) {
    let precioFinal = precio * cantidad
    return precioFinal
}

function promo() {
    let descuento = parseInt(prompt(`Tiene codigo de 20% de descuento?\n
                            1- Si 
                            2- No`))
    if (descuento == 1)
        precioFinal = precioFinal * 0.8
    else if (descuento == 0) return
    else promo()

}

// Funcion menu

function menu() {

    let compra = parseInt(prompt(`Ingrese el Nº de item que desea comprar\n
                            1- Tortas 
                            2- Tartas 
                            3- Cupcakes
                            4- Finalizar compra y pagar
                            5- Salir`));

    if (compra == 1) compraTorta()
    else if (compra == 2) compraTarta()
    else if (compra == 3) compraCupcakes()
    else if (compra == 4) finalizarCompra()
    else if (compra == 5) return
    else menu()
}

// Ejecucion de compra

function compraTorta() {

    cantidad = parseInt(prompt("¿Cuantas Tortas Quiere Comprar?"))
    if (cantidad <= stock1) {
        stock1 -= cantidad;
        precioFinal += calculoPrecio(precio1, cantidad)
        alert("Se Agregaron " + cantidad + " " + producto1 + " a tu carro, quedan " + stock1 + " disponibles")
        return menu()
    }
    else {
        alert('No tenemos esa cantidad, solo nos quedan ' + stock1 + " unidades disponibles");

        return menu()
    }
}

function compraTarta() {

    cantidad = parseInt(prompt("¿Cuantas Tartas Quiere Comprar?"))
    if (cantidad <= stock2) {
        stock2 -= cantidad;
        precioFinal += calculoPrecio(precio2, cantidad)
        alert("Se Agregaron " + cantidad + " " + producto2 + " a tu carro, quedan " + stock2 + " disponibles")
        return menu()
    }
    else {
        alert('No tenemos esa cantidad, solo nos quedan ' + stock2 + " unidades disponibles");

        return menu()
    }
}

function compraCupcakes() {

    cantidad = parseInt(prompt("¿Cuantos Cupcakes Quiere Comprar?"))
    if (cantidad <= stock3) {
        stock3 -= cantidad;
        precioFinal += calculoPrecio(precio3, cantidad)
        alert("Se Agregaron " + cantidad + " " + producto3 + " a tu carro, quedan " + stock3 + " disponibles")
        return menu()
    }
    else {
        alert('No tenemos esa cantidad, solo nos quedan ' + stock3 + " unidades disponibles");

        return menu()
    }
}

// Ejecucion Finalizar compra/Carro

function finalizarCompra() {

    if (precioFinal == 0) {
        alert("Tu carro esta vacio")
        return menu()
    } else {
        alert("\n Total a pagar: $" + precioFinal)
        promo()
        alert("\n 20% de descuento aplicado: Total a pagar: $" + precioFinal)
        pago()
    }
}

function pago(){
    let pagar = prompt ("Con cuanto abonara el total de " + precioFinal);
    let vuelto = pagar - precioFinal
    alert("\n Este es su vuelto: $" + vuelto )
    alert("¡Gracias por su Compra!")
    
}

menu();

console.log(precioFinal)