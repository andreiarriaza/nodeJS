/* 
Benchmark = prueba de rendimiento o comparativa en inglés
*/

let suma = 0;

/* La función "console.time()" permite determinar el tiempo que tarda
un proceso en completarse. 

El proceso que se medirá será el que se encuentre dentro de los comandos: 

console.time("nombreProceso");

    ProcesoA a Medir

console.timeEnd("nombreProceso");
*/
console.time("Bucle");
for (let i = 0; i < 1000000; i++) {
  suma += 1;
}

console.timeEnd("Bucle");
