/* Módulo File System (fs)

Este módulo permite administrar archivos en Node JS. 
*/

/* 
IMPORTANTE: para poder borrar un archivo, es necesario haber ejecutado antes la función "escribir()". 
*/

/* Mediante el comando "require" se importa el módulo fs (file system). */
const fs = require("fs");

/* LEER UN ARCHIVO */

function leer(ruta, callback) {
  /* Se realizará la lectura mediante el método "readFile()", el cual es asíncrono. 
    Si se deseara realizar la lectura del archivo en forma síncrona se debería utilizar el método "readFileSync" (no recomendado). */
  /* El parámetro "err" permitirá manejar los posibles errores que se presenten, mientras que el parámetro "data", contendrá
    los datos del archivo. */
  fs.readFile(ruta, (err, data) => {
    /* Se deben convertir los datos almacenados en la variable "data", en una cadena de texto mediante
      el método "toString". Si no se convirtieran, no se mostrarían los datos del archivo de manera legible. */
    callback(data.toString());
  });
}

/* ESCRIBIR (CREAR) UN ARCHIVO */
function escribir(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No se ha podido escribir en el archivo" + err);
    } else {
      console.log("Se ha escrito correctamente en el archivo.");
    }
  });
}

/* BORRAR UN ARCHIVO */
function borrar(ruta, callback) {
  /* El método "unlink()" "deslinquea" o remueve un link simbólico de File System. */
  fs.unlink(ruta, callback);
}

/* Invocación de funciones */
/* El objeto global "__dirname" devuelve la ruta de la carpeta en la que se encuentra
el archivo actual. En este caso devolverá: 
        C:\Users\Taller\Documents\GitHub\nodeJS\Fundamentos de Node JS\modulos

*/
console.log(__dirname);
/* La función "leer()" requiere dos argumentos: 
    - ruta: la ruta del archivo que se desea leer.
    - callback: la función que se ejecutará como callback, en este caso, se ejecutará el método "console.log", el cual
                 tendrá como argumento el valor "data.toString()" devuelto por la función "leer()".         
*/
/* Para obtener la ruta, se usa el objeto global llamado "__dirname" el cual proporciona
la ruta de la carpeta actual, después se concatena el nombre del archivo que se desea leer, el cual, 
en este caso, está dentro de la carpeta actual. Se antepone la diagonal, porque 
se concatenará a la ruta devuelta por el objeto "__dirname".  */
leer(__dirname + "/archivo.txt", console.log);

/* Se invoca la función "escribir()" y se le envían dos parámetros: 
    - ruta: la ruta del archivo que se desea leer.
    - callback: la función que se ejecutará como callback, en este caso, se ejecutará el método "console.log", el cual
                 tendrá como argumento el texto ""Se ha escrito correctamente en el archivo." que es desplegado por
                 la función "escribir()". 
*/
escribir(__dirname + "/archivo2.txt", "Soy  un archivo nuevo", console.log);

borrar(__dirname + "/archivo2.txt", console.log);
