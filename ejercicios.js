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