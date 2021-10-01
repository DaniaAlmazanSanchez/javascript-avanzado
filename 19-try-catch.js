/** el try permite ejecutar codigo propenso a fallar de una manera segura */
//@ts-check
const gravedad =9.7;
console.log(gravedad);

/*try intenta ejecuta el codigo, si hay un error ejecuta el catch*/
try{
    gravedad=10.1;

}catch(error){

    /**el catch cacha el error */
}finally{
    //siempre se ejecuta
    console.log('finaly');

}
