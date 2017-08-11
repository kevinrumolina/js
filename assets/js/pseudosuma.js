//Nombres de las variables emouezan por letra, _, $
var var_1 = 2435;//asignado por el usuario
var var_2 = 324;//asignado por el usuario
var contador = 0;
var resultado = 0;
//validar parametros de entrada var 1, var 2 sean numeros enteros positivos
if (var_1 >= 0 && (var_1 % 1) === 0 && (var_2 >= 0) && (var_2 % 1) === 0){
  //1. asegurarme de que inicia
  //2. asegurarme de que termina
  while (contador < var_2) {
    contador = contador + 1;
    resultado = resultado + var_1;
  }
  console.log("El resultado es: ");
  console.log(resultado);
}else {
  console.log("Los numeros no son validos, perrit@!");
}
