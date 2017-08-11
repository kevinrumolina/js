//variables con estados especiales
{
  var uninitalized;
  console.log(uninitalized);
  var null_initialized = null;
  console.log(null_initialized);
  var error_math =3/"a";
  console.error(error_math);
  var inf = 3/0;
  console.error(inf);
  var minus_inf = -3/0;
  console.error(minus_inf);}
//variables con tipos de datos
{
  var object_name = {
    prop_name : "value",
    prop_1 : "algun valor guardado en esta llave",
    "2nd_key" : "",
    "ó" : "de esta manera guardo valores en llaves que usan caracteres",
  };
  console.log(object_name["ó"]);
  console.log(object_name.prop_1);
  var integer_num = 1;
  var float_num = 3.1416;
  var const_math = Number.PI;
  var string = "cadena de caracteres";
  var smile = "\U+1F601";
  console.log(smile);
  var array_of_numeros = [1,2,0,0.2,Number.PI];
  var array_mix = ["a", 0, smile, function(){}, array_of_numeros];
  var verdadero = true;
  var falso = false;
  var regular_expresion = /a/;
  var function_var = function() {
    //some instructions
  };
  function_var();
}
