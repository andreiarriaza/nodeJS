/*  Manejo de errores en JavaScript */
function prueba() {
  /* Esta función devolverá un error */
  return 3 + z;
}

try {
  prueba();
} catch (err) {
  console.error("Se produjo un error al ejecutar la función. ");
  console.error(err);
}
/* Con el uso de "try/catch", el programa sigue su ejecución normal, aún cuando se produzca un error. */
console.log("Esto se despliega al final.");
