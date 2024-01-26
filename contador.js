function EstruturaDerepeticao(){
var valorInicial=Number(document.getElementById("valorInincial").value);
var valorFinal=Number(document.getElementById("valorFinal").value);

var contador = valorInicial;
var acumulador = 0;

while(contador<=valorFinal){
    //acumulador=acumulador+contador
    acumulador+=contador;
    //contador++;
    //contador=contador+1;
    contador+=1;
}
    console.log(acumulador);
    alert(acumulador);
}
