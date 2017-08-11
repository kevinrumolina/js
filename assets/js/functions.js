var string_reverse = function(string_var){
    var contador = string_var.length;
    do{
      contador = contador -1;
      console.log(string_var.toUpperCase().charAt(contador));
    }while(contador > 0);
};
string_reverse("La palabrita");
