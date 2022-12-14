/*

************************** Callback **************************

Los Callbacks en JavaScript son como su propio nombre, en inglés, indica, llamadas de vuelta, quiere decir que cuando invoco una función pasándole como parámetro otra función (el callback) esta función parámetro se ejecuta cuando la función principal ha terminado de ejecutarse. O cuando a nosotros nos interese…

Este concepto que parece muy complicado, es en realidad muy sencillo de entender si lo hacemos con casos prácticos, por ejemplo:


function funcionPrincipal(callback){
  alert('hago algo y llamo al callback avisando que terminé');
  callback();
}
 
funcionPrincipal(function(){
  alert('terminó de hacer algo');
});


En el ejemplo anterior, la función llamada "funcionPrincipal()" recibe como parámetro otra función 
llamada "callback" (puede utilizarse cualquier otro nombre). Dentro de la función "funcionPrincipal()", justo despupes
de que haya desplegado el Alert Box con el texto "Hago algo y llamo al Callback avisando que termine", se invoca
la función "callback()". Es decir que al final de la función "funcionPrincipal()" se ejecuta
la función "callback()". 

Ahora bien, la función "callback" es la función que se enviará como parámetro cuando se invoca la función llamada "funcionPrincipal()". En este
caso, la función "callback" que se envía como parámetro es la siguiente: 

    function(){
      alert('terminó de hacer algo');
    }

*/
/* Se utilizará el "setTimeout()" para simular una función asíncrona.  */

function soyAsincrona(miCallback) {
  setTimeout(function () {
    console.log("Hola, soy una Función Asíncrona");
    miCallback();
  }, 1000);
}
console.log("Iniciando proceso...");

soyAsincrona(function () {
  console.log("Terminando proceso...");
});
