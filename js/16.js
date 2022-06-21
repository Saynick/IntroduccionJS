//Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

const carrito = [
        { nombre: 'Monitor', precio: 500 },
        { nombre: 'Televisión', precio: 300 },
        { nombre: 'Teclado', precio: 200},
        { nombre: 'Mouse', precio: 100},
        { nombre: 'Mouse', precio: 100}
];

//for each
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//includes

let resultado = meses.includes ('Marzo');

//some ideal para arreglo de objetos 
resultado = carrito.some(function(producto){
    return producto.nombre === 'Monitor'
})

//Reduce 
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);


console.log(resultado);

