/* El módulo "os" permite realizar diferentes operaciones con el sistema operativo de nuestra computadora. */
const os = require("os");

/* El método "arch()" muestra la arquitectura del sistema operativo actual. 
    Ej: 
        x64

    Es decir, especifica una arquitectura de 64 bits.
*/
console.group("Arquitectura");
console.log(os.arch());
console.groupEnd();

/* El método "platform()" indicará la plataforma en la que nos encontramos: 
    Ej: 
        win32
*/
console.group("Plataforma");
console.log(os.platform());
console.groupEnd();

/* El método "cpus()" devuelve la información del CPU (procesador) del sistema. 
    Ej: 
        Despliega un objeto con los núcleos disponibles, el modelo de procesador, los tiempos, etc. 
*/
console.group("CPU");
console.log(os.cpus());
console.groupEnd();

/* El método "cpus().length" devuelve la cantidad de "cores" o "núcleos" que posee el procesador. */
console.group("Cores (núcleos) del procesador");
console.log(os.cpus().length);
console.groupEnd();

/* El método "cpus().length" devuelve la cantidad de "cores" o "núcleos" que posee el procesador. */
console.group("Errores y señales del sistema");
console.log(os.constants);
console.groupEnd();

/* El método "freemem()" devuelve la memoria libre (en bytes) que se tiene disponible. */
console.group("Memoria disponible (bytes");
console.log("Bytes = " + os.freemem());
console.groupEnd();

/* Memoria disponible en Kilobytes, Megabytes y Gigabytes */
const SIZE = 1024;
let kb = (bytes) => {
    return bytes / SIZE;
  },
  mb = (bytes) => {
    return kb(bytes) / SIZE;
  },
  gb = (bytes) => {
    return mb(bytes) / SIZE;
  };
console.log("Kb = " + kb(os.freemem()));
console.log("Mb = " + mb(os.freemem()));
console.log("Gb = " + gb(os.freemem()));

/* El método "totalmem()" devuelve la memoria RAM total disponible en la computadora.  */
console.group("Total Memoria RAM");
console.log(os.totalmem());
console.groupEnd();

/* El método "homedir()" devuelve el directorio raíz del archivo actual. */
console.group("Directorio raíz");
console.log(os.homedir());
console.groupEnd();

/* El método "tmpdir()" devuelve el directorio de los archivos temporales almacenados en la computadora. */
console.group("Directorio de archivos temporales");
console.log(os.homedir());
console.groupEnd();

/* El método "hostname()" devuelve el nombre del host actual. Esto es especialmente útil cuando se trabaja con servidores. */
console.group("Nombre del Host");
console.log(os.hostname());
console.groupEnd();

/* El método "networkInterfaces()" devuelve un listado con todas las interfaces de red activas en la computadora actual. */
console.group("Interfaces de red activas en la computadora actual");
console.log(os.networkInterfaces());
console.groupEnd();
