//Arrays o Arreglos

const numeros = [10, 20, 30, 40, 50];

/* console.table(numeros); */

/* const meses = ['Enero', 'Feberero', 'Marzo', 'Abril'];
 /console.table(meses);

/* //Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);

//Conocer la extensión de un arreglo
console.log(meses.length); */

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
/* meses.splice(2, 1);
console.table(meses); */
//meses.pop();//elimina el ultimo elemento    
//meses.shift();//elimina el primer elemento 

//numeros.push (60,70,80);//Al final del arreglo  

//numeros.unshift(-10,-20,-30);//Al inicio del arreglo

//Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio'];
console.table(nuevoArreglo);