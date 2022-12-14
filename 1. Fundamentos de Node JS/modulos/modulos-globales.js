/* 
Módulos Globales: 

Node.js de ahora en adelante llamado Node, es una plataforma que provee un entorno de ejecución para JavaScript y un conjunto de librerías básicas o módulos nativos, 
algunos programados en C, de más bajo nivel, y otros desarrollados en el propio javascript.

Modulos Globales:
En Node los módulos se cargan de dos formas, los de ámbito global se llaman por su nombre, ejemplo: "process", "console", "setTimeout", etc. 
Y se accede a sus propiedades directamente. 
    Ejemplo: 
    "process.features;"     devuelve la arquitectura y sistema operativo donde corre Node en un archivo tipo JSON, hay que decir que en Node el formato JSON es un estándar 
                            a la hora de describir o recibir cualquier tipo de información.


Los módulos globales no necesitan ser importados, pues son los módulos nativos o por defecto de Node JS; como, por ejemplo: el módulo "console" (console.log, console.error, etc.), el módulo "setTimeout", el módulo "setInterval", etc.

Mientras que los módulo que no son de ámbito global se importan con la función Global llamada "require",  
*/

/* El objeto "global" es donde se encuentran almacenados todos los módulos globales. */

console.log(global);
/* EJemplode uso de los módulos globales "setInterval" y "clearInterval". */
let i = 0;
let intervalo = setInterval(function () {
  console.log("Ejecución " + i);
  /* El método "clearInterval" detiene la ejecución del método "setInterval". En este ejemplo, 
  después de 3 repeticiones, el método "setInterval" se detendrá. */
  if (i == 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);
