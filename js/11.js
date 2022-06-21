//Objetos

//Objeto creado
const producto ={
    nombreproducto :"Monitor", 
    precio: 300,
    disponible: true,
}


/* console.log(producto);
console.log(producto.precio); */


//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

//eliminar propiedades
delete producto.disponible;

console.log(producto);

