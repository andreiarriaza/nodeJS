/* El comando "async" convierte una función, en una función asíncrona. */
async function hola(nombre) {
  /* Las promesas contiene dos estados: 
            - resolve: si la promesa se resolvió correctamente.
            - reject: si hubo un error en la promesa, y por ello, esta fue rechazada. */
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre);

      /* El parámetro "nombre" es el que será devuelto por la función "hola", si la promesa se ejecuta
        correctamente. */
      resolve(nombre);
    }, 1000);
  });
}
async function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adiós " + nombre);
      resolve();
    }, 1000);
  });
}

console.log("Iniciando el proceso.");

async function main() {
  /* El comando "await" solo es válido, cuando se utiliza DENTRO de una función asíncrona. */
  let nombre = await hola("Carlos");
  await hablar();
  await hablar();
  await adios(nombre);
}

main();
