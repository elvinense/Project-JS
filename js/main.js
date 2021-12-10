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


// Funcion menu

function menu() {

    let compra = parseInt(prompt(`Ingrese el Nº de item que desea comprar\n
                            1- Tortas 
                            2- Tartas 
                            3- Cupcakes
                            4- Salir`));

    if (compra == 1 || compra == 2 || compra == 3) compras(compra)
    else if (compra == 4) return
    else menu()

}

// Ejecucion de compra

function compras(compra) {

    cantidad = parseInt(prompt("¿Cuantas unidades quiere Comprar?"));

    switch (compra) {
        case 1:
            if (cantidad <= stock1) {
                stock1 -= cantidad
    
                alert("Se Agregaron " + cantidad + " " + producto1 + " a tu carro, quedan " + stock1 + " disponibles")
                calculoPrecio(cantidad, precio1)
            }
    
            else {
                alert('No tenemos esa cantidad, solo nos quedan ' + stock1 + " unidades disponibles");
                compras(compra)
            }
    
            break;

        case 2:

            if (cantidad <= stock2) {
                stock2 -= cantidad
    
                alert("Se Agregaron " + cantidad + " " + producto2 + " a tu carro, quedan " + stock2 + " disponibles")
                calculoPrecio(cantidad, precio2)
            }
    
            else {
                alert('No tenemos esa cantidad, solo nos quedan ' + stock2 + " unidades disponibles");
                compras(compra)
            }

            break;
    
        case 3:
            if (cantidad <= stock3) {
                stock3 -= cantidad
    
                alert("Se Agregaron " + cantidad + " " + producto3 + " a tu carro, quedan " + stock3 + " disponibles")
                calculoPrecio(cantidad, precio3)
            }
    
            else {
                alert('No tenemos esa cantidad, solo nos quedan ' + stock3 + " unidades disponibles");
                compras(compra)
            }
    
            break;
        
    }
}



// Calculo Precio

function calculoPrecio(cantidad, precio) {
    let precioFinal = precio * cantidad
    finalizarCompra(precioFinal)


}

// Finalizar Compra

function finalizarCompra(precioFinal) {

    if (precioFinal == 0) {
        alert("Tu carro esta vacio")
        return menu()
    } 
    
    else {
        alert("\n Total a pagar: $" + precioFinal)
        pago(precioFinal)
    }
}

// Ejecucion Pago

function pago(precioFinal) {
    let pagar = prompt("Con cuanto abonara el total de " + precioFinal);
    if (pagar < precioFinal) {
        alert("El monto ingresado no es suficiente")
        return pago(precioFinal)
    } 
    
    else {

        let vuelto = pagar - precioFinal
        alert("\n Este es su vuelto: $" + vuelto)
        alert("¡Gracias por su Compra!")
        menu();
    }
}

menu();