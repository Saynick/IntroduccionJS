/* function sumar (n1, n2){
    return n1 + n2;
}

const resultado = sumar(3,3);

console.log(resultado); */

let total = 0;
function agregarcarrito (precio){
    return total+=precio;

}

function calcularimpuesto(total){
    return 1.15 * total;
}

total = agregarcarrito(200);
total = agregarcarrito(300);
total = agregarcarrito(800);

console.log(total);

const totalApagar = calcularimpuesto(total);
console.log(`El total a pagar con impuestos es de: $${totalApagar}`);
