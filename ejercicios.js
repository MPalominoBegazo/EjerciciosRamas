//AGREGAR SUS FUNCIONES
function Ejercicio1(){
    //probando
    var arregloDado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var arregloInvertido = [];

    document.write("Arreglo invertido: " + invertirArreglo(arregloDado));
    arregloInvertido = arregloDado.reverse();
    return arregloInvertido.join(" ");

}

//AGREGAR SUS FUNCIONES
function Ejercicio2(n){

  var capicua = n.toString().split("").reverse().toString().replace(/,/g,"");
  var c = n.toString();

  if(c == capicua){
    return "Es capicua"
  } else{
    return "No es capicua"
  }
}
Ejercicio2(989);


function Ejercicio6(cad) {
	//Diana
  var a = cad.split(" ");
  for(var i =0; i <a.length; i++)  {
    }
 	 return("Tiene " + i + " palabras.");
}
mira("El mundo es tan cruel");





function Ejercicio7(arreglo, numero)
{//se le puede poner un nombre a la funcion collback como tambien no
  var numFiltrado = arreglo.filter(function suma(numcelu){

    numcelu = numcelu.toString();
    numero = numero.toString();
    //0 es el indice ,3 es el numero de elemntos
    if(numcelu.substr(0,3) == numero || numcelu.substr(-3) == numero)
      {
        return true;
      }
      else
      {
        return false;
      }
  });
  return numFiltrado;
}

document.write(Ejercicio7([938203938, 9287,25938,234,2456],938));

