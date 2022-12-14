function hola(nombre) {
  /* Las promesas contiene dos estados: 
            - resolve: si la promesa se resolvió correctamente.
            - reject: si hubo un error en la promesa, y por ello, esta fue rechazada. */
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre);

      /* El parámetro "nombre" es el que será devuelto por la función "hola", si la promesa se ejecuta
        correctamente. */
      resolve(nombre);
      /* La función "reject()" se ejecutará si se encuentra un error en la ejecución de la promesa. */
      reject("Se ha interrumpido la ejecución.");
    }, 1000);
  });
}
function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      resolve(nombre);
      /* La función "reject()" se ejecutará si se encuentra un error en la ejecución de la promesa. */
      reject("Se ha interrumpido la ejecución.");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adiós " + nombre);
      resolve();
      /* La función "reject()" se ejecutará si se encuentra un error en la ejecución de la promesa. */
      reject("Se ha interrumpido la ejecución.");
    }, 1000);
  });
}

console.log("Iniciando el proceso.");

hola("Carlos")
  /* El "then" que se encuentra a continuación, normalmente se escribiría así: 
            .then((nombre) => {
                return adios(nombre);
            })

        Sin embargo, como el parámetro "nombre" es el mismo que se utiliza en todo ese fragmento
        de código, y es el mismo que se envía como parámetro cuando se invoca la función "hola", lo anterior se puede expresar también así: 

            .then(adios)



    */

  /* No hace falta enviar el parámetro "nombre" a la función "hablar" una vez más, porque se sobreentiende que es el mismo parámetro enviado por medio 
    de la funció "hola" cuando fue invocada. */
  .then(hablar)
  /* Como se volvió a hacer referencia a la función "hablar", se volverá a desplegar en consola:  Bla bla bla bla... */
  .then(hablar)

  /* No hace falta enviar el parámetro "nombre" a la función "adios" una vez más, porque se sobreentiende que es el mismo parámetro enviado por medio 
    de la funció "hola" cuando fue invocada. */
  .then(adios)
  .then((nombre) => {
    console.log("Terminado el proceso.");
  })
  .catch((err) => {
    console.error("Error: " + err);
  });
