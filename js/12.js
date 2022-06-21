//Objetos

//Objeto creado
const producto ={
    nombreproducto :"Monitor", 
    precio: 300,
    disponible: true,
}

const precioProducto = producto.precio;
const nombreProducto = producto.nombreproducto;


/* console.log(precioProducto);
console.log(nombreProducto);
 */
//Destructuring 
const {precio} = producto;
const {nombreproducto} = producto

console.log(precio);
console.log(nombreproducto);