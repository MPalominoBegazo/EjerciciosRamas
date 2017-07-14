//AGREGAR SUS FUNCIONES
function Ejercicio1(){
    //probando
    var arregloDado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var arregloInvertido = [];

    document.write("Arreglo invertido: " + invertirArreglo(arregloDado));
    arregloInvertido = arregloDado.reverse();
    return arregloInvertido.join(" ");

}
