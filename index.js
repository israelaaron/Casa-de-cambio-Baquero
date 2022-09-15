function casaCambio() {
    const operacion = prompt("Casa de cambio \n Hoy el USD tiene un valor de 290 ARS \n Seleccione la operación que desea realizar \n 1. Vender \n 2. Comprar");
    switch (operacion) {
        case '1': 
            vender();
            break;
        case '2': 
            comprar();
            break;
        default:
            alert("Valor inválido, por favor ingrese un valor válido"); 
            casaCambio();
            break;
    }
    const nuevaOperacion = prompt("Desea realizar una nueva operación?(Si/No)");
    const afirmacionLista = ["si", "SI", "Si", "sí", "Sí", "SÍ"]
    if (afirmacionLista.includes(nuevaOperacion)) {
        casaCambio();
    }

}

function vender() {
    const cantidadVenta = parseInt(prompt("Ingrese la cantidad de USD a vender"));
    const esValido = validar(cantidadVenta);
    if(!esValido) {
        vender();
    }
    alert("Recibirás " + cantidadVenta * 290 + " ARS");
}

function comprar() {
    const cantidadCompra = parseInt(prompt("Ingrese la cantidad de USD a comprar"));
    const esValido = validar(cantidadCompra);
    if(!esValido) {
        comprar();
    }
    alert("Tendrás que abonar " + cantidadCompra * 290 + " ARS");
}

function validar(cantidad) {
    if(cantidad >= 1) {
        return true;
    } 
    alert("Valor inválido, por favor ingrese un valor válido");
    return false;
}

casaCambio();








