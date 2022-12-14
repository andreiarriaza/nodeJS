/* Este paquete es nmece*/
const { resolve } = require("dns/promises");

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Termina el proceso Asíncrono.");
      resolve();
    });
  });
}

console.time("Función Asíncrona");
console.log("Comienza el proceso Asíncrono");
asincrona().then(() => {
  console.timeEnd("Función Asíncrona");
});
