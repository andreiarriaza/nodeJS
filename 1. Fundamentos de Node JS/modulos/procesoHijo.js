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
/* Mediante el proceso "exec" se ejecutarán los comandos "ls -la", los cuales, en linux,
 permiten ver el listado de los archivos disponibles en la carpeta actual. En windows, el comando equivalente sería "dir". */
exec("ls -la", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
});
