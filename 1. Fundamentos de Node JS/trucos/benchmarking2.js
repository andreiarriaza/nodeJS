console.time("Tiempo Total");
let suma = 0;

/* La función "console.time()" permite determinar el tiempo que tarda
un proceso en completarse. 

El proceso que se medirá será el que se encuentre dentro de los comandos: 

console.time("nombreProceso");

    ProcesoA a Medir

console.timeEnd("nombreProceso");
*/
console.time("Bucle1");
for (let i = 0; i < 1000000; i++) {
  suma += 1;
}

console.timeEnd("Bucle1");

let suma2 = 0;

/* La función "console.time()" permite determinar el tiempo que tarda
un proceso en completarse. 

El proceso que se medirá será el que se encuentre dentro de los comandos: 

console.time("nombreProceso");

    ProcesoA a Medir

console.timeEnd("nombreProceso");
*/
console.time("Bucle2");
for (let j = 0; j < 100000000; j++) {
  suma2 += 1;
}

console.timeEnd("Bucle2");

console.timeEnd("Tiempo Total");
