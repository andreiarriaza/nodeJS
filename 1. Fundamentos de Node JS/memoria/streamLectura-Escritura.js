/* El módulo "fs" permite interactuar con los archivos del sistema. */
const fs = require("fs");
/* El módulo "stream" permite trabajar con "streams". */
const stream = require("stream");
/* El módulo "util", proporciona acceso a algunas funciones de utilidad. */
const util = require("util");
let data = "";

/* Se crea un Stream a partir del archivo "input.txt", el cual servirá como entrada, es decir, será el archivo
que será leído.  */
let readableStream = fs.createReadStream(__dirname + "/input.txt");

/* Se indica que los datos leídos del archivo "input.txt" 
se interpretarán utilizando la codificación de caracteres "UTF-8"*/
readableStream.setEncoding("UTF8");

/* Se crea un Stream de transformación que puede tanto "leer" como "escribir": */
const Transform = stream.Transform;

/* Este proceso permitira leer el texto del archivo "input.txt", 
y convertirlo a Mayúsuculas. */
class Mayus extends Transform {
  /* La función "_transform" viene por defecto en los Streams de transformación. */
  _transform(chunk, codif, callback) {
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
  }
}

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
