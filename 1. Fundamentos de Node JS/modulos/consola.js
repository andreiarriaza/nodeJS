/* Desplegar en consola. */
console.log("'console.log' = Mostrar en consola.");
/* Mostrar información importante en consola. */
console.info("'console.info' = Muestra texto informativo en consola.");
/* Permite desplegar mensajes de error. */
console.error("'console.error' = Muestra mensajes de error.");
/* Mensajes de advertencia */
console.warn("'console.warn' = Mensajes de advertencia.");

/* Muestra los datos de un objeto en formato de tabla. */
var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "A",
  },
];
/* Los objetos del arreglo "tabla" se muestran en formato de tabla. */
console.table(tabla);

/* Agrupar "console.log" para organizarlos mejor. */
console.group("Conversación");
console.log("Hola");
console.group("Bla");
console.log("Blablabla");
console.log("Blablabla");
console.groupEnd();
console.log("Adiós");
console.groupEnd();
/* Contador de consola */
console.count("contador");
console.count("contador");
console.count("contador");
console.count("contador");
console.count("contador");

/* Limpiador de contador (reinicia el contador) */
console.countReset("contador");
console.log("Se reinició el contador:");
console.count("contador");
