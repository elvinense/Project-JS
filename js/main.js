let tortas = "tortas";
let precioT = 400;
let stockT = 5;

let mesaDulce = "mesa dulce"
let precioM = 600;
let stockM = 8;

let compra = prompt("Ingrese el producto deseado: tortas o mesa dulce")
let cantidad = prompt("cuantos quiere solicitar?")

if(compra == tortas){
    stockT -= cantidad;
    let precioTotalTorta = precioT * cantidad
    alert('Debe abonar:' + " " + precioTotalTorta + "$" )
}

else if(compra == mesaDulce){
    stockM -= cantidad;
    let precioTotalMesa = precioM * cantidad
    alert('Debe abonar:' + " " + precioTotalMesa + "$")
}

else{
alert("lo sentimos no tenemos ese producto");
}