const { callbackify } = require("util");

function asincrona(callback) {
  setTimeout(function () {
    try {
      /* Como la variable "z" no está definida, se producirá un error. */
      let a = 3 + z;
      /* El primer parámetro de un "callback", siempre corresponde al parámetro "error" (err). En este
        caso, como el valor es "null", significa que no hubo ningún error. */
      callback(null, a);
    } catch (err) {
      callback(err, null);
    }
  }, 1000);
}

/* El primer parámetro de un "callback", siempre corresponde al parámetro "error" (err). */
asincrona(function (err, dato) {
  /* Si comprueba que el parámetro "err" (error) sea VERDADERO, es decir, si está lleno. 
    Si el parámetro "err" tuviera almacenado el valor "null", equivaldría a FALSO, es decir que indicaría que no hubo ningún
    error. 
     */
  if (err) {
    console.error("Tenemos un error: " + err);
    /* Es recomendable, en caso de haber un error, detener la ejecución de la función, y esto se logra
      mediante el comando "return false". */
    return false;
  }

  console.log("Todo salió bien. Mi data es: " + dato);
});
