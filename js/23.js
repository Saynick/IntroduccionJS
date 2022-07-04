/*  const puntaje = 1000;
 if(puntaje !== 1000) 
console.log('No es igual')
 else {
console.log('el puntaje es 1000');
}
 */
/* const efectivo = 700;
const carrito = 800;

if( efectivo > carrito ) { //La cantidad de efectivo es mayor se puede pagar y se cumple la condición
console.log('El Usuario puede pagar');
} else {
console.log('Fondos Insuficientes');
}
 */

const rol = 'ADMINISTRADOR';

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if(rol === 'EDITOR') {
    console.log('Eres editor, puedes entrar')
} else 
    console.log('No tienes acceso')
    