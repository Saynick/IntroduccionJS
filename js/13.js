//"use strict";//Corre JS en modo estricto

//Objetos

//Objeto creado
const producto ={
    nombreproducto :"Monitor", 
    precio: 300,
    disponible: true,
}


Object.freeze(producto)
producto.imagen = 'imagen.jpg';

console.log(producto);