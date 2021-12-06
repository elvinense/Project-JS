let carro = "";

let compra  = parseInt(prompt(`Ingrese el Nº de item que desea comprar\n
                            1- Tortas 
                            2- Tartas 
                            3- Cupcakes
                            4- Finalizar compra y pagar
                            5- Salir`))


while (compra != 4 && compra != 5) {
    
    let cantidad = 1

    switch (compra) {
        case 1:
            cantidad = parseInt(prompt("¿Cuantas Tortas Quiere Comprar?"))
            carro += cantidad + " Tortas "
            total += cantidad * 800
            break;
            
        case 2:
            cantidad = parseInt(prompt("¿Cuantas Tartas Quiere Comprar?"))
            carro += cantidad + " Tartas "
            total += cantidad * 600
            break;

        case 3:
            cantidad = parseInt(prompt("¿Cuantas Cupcakes Quiere Comprar?"))
            carro += cantidad + " Cupcakes "
            total += cantidad * 100
            break;

    }

    compra = parseInt(prompt(`Ingrese el Nº de item que desea comprar\n
                            1- Tortas 
                            2- Tartas 
                            3- Cupcakes
                            4- Finalizar compra y pagar
                            5- Salir`))

}

if(compra == 4) {

    if(total == 0) {
        alert("Tu carro esta vacio")
    } else {
        alert(carro + "\n Total a pagar: $"+ total)
        alert("¡Gracias por su Compra!")
    }
} else {
    alert("¡Gracias por su visita!")
} 