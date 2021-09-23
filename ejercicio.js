
numero1=parseInt(prompt('¿ingresa primer numero?'));
numero1=parseInt(prompt('¿ingresa segundo numero?'));
var suma =numero1+numero2;
var dif=numero1-numero2;
var pro=numero1*numero2;
var div=numero1/numero2;



if(numero1 > numero2){
 document.write("el mayor es:" + numero1+"la suma es:"+suma+"su diferencia es:"+dif);
}else if(numero2>numero1){
    document.write("el mayor es:" + numero2+"el producto es:"+pro+"su diferencia es:"+div);

}else{
document.write("uno de los ejercicos es igual a otro")
}