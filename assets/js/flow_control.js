//for loop
//Objetivo: imprimir los numeros pares desde 0 y y hasta 20
//el for tiene tres instrucciones internas en su declaracion, como:
//1. iniciar
//2. terminar
//3. aumentar
for (var contador = 0; contador <= 20; contador = contador + 2) {
  console.log(contador);
}

//do while
var name = "Kevin Jair";
contador = 0;
do{
  console.log(name.charAt(contador));
  contador = contador + 1;
}while(contador < name.length);

//while
contador = name.length;
while(contador > 0){
  contador = contador - 1;
  console.log(name.charAt(contador));
}
