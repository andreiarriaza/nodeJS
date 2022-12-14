/* 
Se importará el módulo "child_process" mediante el comando "require". 

La siguiente línea de comandos: 
    const spawn = require("child_process").exec;

Se puede abreviar de la siguiente forma:
    const { spawn } = require("child_process");
*/

/* El proceso "spawn" permite ejecutar procesos nuevos. */
const { spawn } = require("child_process");

/* Se indica que el proceso ejecutará el comando "ls" acompalado del atributo "-la"*/
let proceso = spawn("ls", ["-la"]);

/* La variable "proceso", mostrará toda la información del proceso. */
console.log(proceso);
/* Despliega el "process id" (id del proceso) */
console.log(proceso.pid);
/* Muestra si el proceso está o no conectado. */
console.log(proceso.connected);
/* La siguiente línea usa como base la propiedad "stdout" (salida estándar), y comprueba
si vienen datos (data) dentro de ella, en cuyo caso ejecutará una función que recibirá el parámetro "dato" (es decir, lo almacenado en "data")
y luego desplegará en consola el contenido del parámetro "dato" convertido a "String". 

Lo anterior devolverá en consola los mismos datos que se devolvieron en el archivo "procesoHijo2.js", es decir, 
el resultado de ejecutar en la consola de linux: "ls - la".

*/
proceso.stdout.on("data", function (dato) {
  console.log(dato.toString());
});

/* El siguiente proceso permite detectar
cuando el proceso actual ha terminado. */
proceso.on("exit", function () {
  console.log("El proceso terminó");
});
