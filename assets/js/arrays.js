//es un tipo de variable que nos permite almacenar varios tipos de variables o objetos
var array = ["val1", "2", 2, 3, 4, false];
var array_car_brands = [
  "Hyundai", "Buggati",
  "Renault", "Rolls Royce",
  "Tesla", "Mercedes", "Ford"
];
//Aplicar una o varias instrucciones a cada uno de los datos
array_car_brands.forEach(function(brand, index){
  console.log(brand.toUpperCase());
});
array_car_brands.push("Chevrolet");
console.log(array_car_brands);
array_car_brands = array_car_brands.filter(function(car_brand){
  if(car_brand === "Tesla"){
    return false;
  }else{
    return true;
  }
});
/*console.log(array_car_brands);
array = array.filter(function(elemento){
  if(typeof(elemento) === "number"){
    return true;
  }else{
    return false;
  }
});*/
console.log(array);
Array.prototype.remove = function(indice){
  var result_array = this;
  result_array = array.filter(function(elemento, index){
    if(indice === index){
      return false;
    }else {
      return true;
    }
  });
  return result_array;
};
array_car_brands = array_car_brands.remove(1);
console.log(array_car_brands);
