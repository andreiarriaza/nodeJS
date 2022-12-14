/* 
Se importará el módulo "child_process" mediante el comando "require". 

La siguiente línea de comandos: 
    const exec = require("child_process").exec;

Se puede abreviar de la siguiente forma:
    const { exec } = require("child_process");
*/

/* El proceso "exec" permite ejecutar comandos o procesos existentes. */
const { exec } = require("child_process");

/* La arrow function que se encuentra dentro del proceso "exec" contiene los siguientes
argumentos: 
    - err: mensaje de error. 
    - stdout: salida estándar (standar out).
    -sterror: salida estándar con error. */

/* Mediante el proceso "exec" se ejecutarán el archivo "consola.js". Esto significa que
mediante el proceso "exec" se ejecutó el proceso del archivo "consola.js". */

/* IMPORTANTE: El proceso "exec" puede ejecutar también procesos de Python u otros procesos. */
exec("node modulos/consola.js", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
});
