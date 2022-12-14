function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1000);
}
function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Bla bla bla bla...");
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adiós " + nombre);
    otroCallback();
  }, 1000);
}

/* El parámetro "veces" sirve para controlar cuántas veces
va a "hablar" el programa, es decir, cuántas veces se desplegará el texto: "Bla bla bla bla..." 

Esto será mucho más eficiente que el Callback Hell. 
*/
function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      /* Al parámetro "veces" se le irá restando "1" cada vez que se ejecute la función "hablar()": --veces */
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log("Iniciando proceso...");

hola("Andrei", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Proceso Terminado.");
  });
});
