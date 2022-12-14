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

console.log("Iniciando proceso...");

hola("Andrei", function (nombre) {
  /* El Callback hell consiste en abusar del uso de los Callback. */
  hablar(function () {
    hablar(function () {
      adios(nombre, function () {
        console.log("Terminando proceso...");
      });
    });
  });
});
