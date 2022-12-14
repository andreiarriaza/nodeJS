// Importar el módulo que se ha creado
/* Como es un módulo que ha sido creado por nosotros mismos, es necesario
especificar la ruta en la que se encuentra dicho módulo. Es importante notar que no
es necesario escribir la extensión, ya que por ser el módulo un archivo JavaScript
no hace falta especificar su extensión.  */
const moduloPropio = require("./moduloPropio");

// Ejecutar una función del módulo

/* Devuelve el objeto exportado por el módulo llamado "moduloPropio"
con sus respectivas propiedades. */
console.log(moduloPropio);

/* Se puede acceder a una propiedad específica del módulo llamado "moduloPropio". */
console.log(moduloPropio.prop1);

/* También se puede invocar la función "saludar" contenida dentro del módulo llamado "moduloPropio". */
moduloPropio.saludar();
