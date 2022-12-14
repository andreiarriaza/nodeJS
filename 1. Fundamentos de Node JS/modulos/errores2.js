function pruebaAsincrona(callback) {
  setTimeout(function () {
    try {
      return 5 + w;
    } catch (err) {
      console.error("Error en función asíncrona. ");
      callback(err);
    }
  });
}

try {
  pruebaAsincrona(function (err) {
    /* El atributo "message" del objeto "err", contiene el mensaje de error correspondiente.  */
    console.log(`Detalle del error: ${err.message}`);
  });
} catch (err) {
  console.error("Se produjo un error al ejecutar la función. ");
  console.error(err);
}
