function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Hola, " + nombre);
    miCallback();
  }, 1000);
}
console.log("Iniciando proceso...");

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adiós " + nombre);
    otroCallback();
  }, 1000);
}
hola("Andrei", function () {
  adios("Andrei", function () {
    console.log("Terminando proceso...");
  });
});
