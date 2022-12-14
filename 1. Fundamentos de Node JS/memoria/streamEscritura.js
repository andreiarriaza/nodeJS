/* El módulo "fs" permite interactuar con los archivos del sistema. */
const fs = require("fs");

let data = "";

/* Se crea un Stream a partir del archivo "input.txt", el cual servirá como entrada, es decir, será el archivo
que será leído.  */
let readableStream = fs.createReadStream(__dirname + "/input.txt");

/* Se indica que los datos leídos del archivo "input.txt" 
se interpretarán utilizando la codificación de caracteres "UTF-8"*/
readableStream.setEncoding("UTF8");

/* El método "process.stdout.write()" permite escribir en el buffer. */
process.stdout.write("Hola");
process.stdout.write("¿Cómo");
process.stdout.write("estás?");
