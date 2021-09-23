/**areglo
 * estructra de datos
 */
const arreglo=[];
const arreglo2= new Array();

let lenguajes=['java','c','python'];
/*foreach* */
document.write('<ul>');
lenguajes.forEach(function(lenguajes,index){
/*document.write(`<p>${lenguajes}</p>`);
*/document.write(`<li>${index}-${lenguajes}</li>`)
});
document.write('</ul>');

/**map, crea un nuevo arreglo con los resultado */
let numeros=Array(2,3,4,5,6);
let numero2=numeros.map(function(numero){
    return numero *2;
});
console.log(numeros);
console.log(numero2);

/**icludes detremnina si un rreglo contiene un valor */
 console.log(lenguajes.includes('php','c'));

 /**filter */
 if(numero>10){
     
 }