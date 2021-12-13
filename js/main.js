// Variables globales

const producto1 = { 

    nombre : "Tortas",
    precio : 800,
    stock : 10
}

const producto2 = {

    nombre : "Tartas",
    precio : 400,
    stock : 20

}

let producto3 = "Cupcakes";
let precio3 = 100;
let stock3 = 60;

let precioFinal = 0

let semana = 1 // la semana cambiaria y asi la promo segun semana

// Clases Y Funcion PromoSemanal

class Promocion {
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
    
    }
    promoSemanal() {
    if (semana == 1){ semana += 1;
        let cantidad = prompt ('Esta semana tenemos ' + this.nombre + ' ' + this.precio + ' $ cada uno, Cuantos quiere comprar?' )
        calculoPrecio(cantidad,this.precio);

    } else if (semana == 2) { semana += 1;
        let cantidad = prompt ('Esta semana tenemos ' + this.nombre + ' ' + this.precio + ' $ cada uno, Cuantos quiere comprar?' )
        calculoPrecio(cantidad,this.precio);

    } else if
        (semana == 3){ semana -= 2
            alert('Lo Sentimos esta semana no tenemos promociones')
            menu()
            }
        }
    }    


// Creador de objetos mediante clases

const promo1 = new Promocion('1 Docena de Pops', 600);
const promo2 = new Promocion('2 Docenas de bombones', 800)

// Funcion menu

function menu() {

    let compra = parseInt(prompt(`Ingrese el Nº de item que desea comprar\n
                            1- Tortas 
                            2- Tartas 
                            3- Cupcakes
                            4- !Promocion de la Semana! (a pedido)
                            5- Salir`));

    if (compra == 1 || compra == 2 || compra == 3) carrito(compra)
    else if (semana == 1 && compra == 4) promo1.promoSemanal()
    else if (semana == 2 && compra == 4) promo2.promoSemanal()
    else if (semana == 3 && compra == 4) promo2.promoSemanal()
    else if (compra == 5) return
    else menu()

}

// Ejecucion de compra

function carrito(compra) {

    cantidad = parseInt(prompt("¿Cuantas unidades quiere Comprar?"));

    switch (compra) {
        case 1:
            if (cantidad <= producto1.stock) {
                producto1.stock -= cantidad
    
                alert("Se Agregaron " + cantidad + " " + producto1.nombre + " a tu carro, quedan " + producto1.stock + " disponibles")
                calculoPrecio(cantidad, producto1.precio)
            }
    
            else {
                alert('No tenemos esa cantidad, solo nos quedan ' + producto1.stock + " unidades disponibles");
                carrito(compra)
            }
    
            break;

        case 2:

            if (cantidad <= producto2.stock) {
                producto2.stock -= cantidad
    
                alert("Se Agregaron " + cantidad + " " + producto2.nombre + " a tu carro, quedan " + producto2.stock + " disponibles")
                calculoPrecio(cantidad, producto2.precio)
            }
    
            else {
                alert('No tenemos esa cantidad, solo nos quedan ' + producto2.stock + " unidades disponibles");
                carrito(compra)
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
                carrito(compra)
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

menu()