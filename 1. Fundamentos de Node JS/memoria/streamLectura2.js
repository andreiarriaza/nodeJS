/* 
** Stream**
Podría decirse que un Stream es el proceso de ir consumiendo datos al tiempo en que se reciben. Por ejemplo, cuando vemos un video en Youtube estamos consumiendo datos por medio de streaming (readable stream, porque solo podemos ver los videos mas no editarlos) ya que lo vemos al mismo tiempo en que este se está descargando. de lo contrario habría que esperar a que se descargue el video por completo para poder verlo.

*/

/* El módulo "fs" permite interactuar con los archivos del sistema. */
const fs = require("fs");

let data = "";

/* Se crea un Stream a partir del archivo "input.txt", el cual servirá como entrada, es decir, será el archivo
que será leído.  */
let readableStream = fs.createReadStream(__dirname + "/input.txt");

/* Se indica que los datos leídos del archivo "input.txt" 
se interpretarán utilizando la codificación de caracteres "UTF-8"*/
readableStream.setEncoding("UTF8");

/* ****************************************** Procedimiento para archivos pequeños ****************************************** */
/* A cada paquete de datos se le chama "chunk". Si el archivo fuera más grande, 
ya no se enviaría uno sino varios paquetes (chunk's). */
readableStream.on("data", function (chunk) {
  /* Como se dijo antes, si el archivo fuera más grande, se enviarán varios paquetes (chunk's), 
    por lo que se irá concatenando cada paquete dentro de la variable "data". */
  data += chunk;
});

/* Cuando se haya terminado (end) de leer todos los paquetes del archivo, se ejecutará
la función anónima que desplegará en consola los datos del archivo almacenados en la variable "data". */
readableStream.on("end", function () {
  console.log(data);
});
