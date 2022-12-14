/* 
El módulo "process" permite interactuar con los diferentes procesos. 
*/

/* El módulo "process" se incluye dentro de los módulos globales, por lo
que no es necesario importarlo. Sin embargo, si se deseara, también se podría hacer: 
    const process = requiete("process");*/

/* El siguiente ejemplo permitirá desplegar un mensaje cuando el proceso haya terminado (exit).*/
process.on("exit", () => {
  console.log("El proceso ha terminado. ");
});

/* El siguiente ejemplo permitirá desplegar un mensaje antes de que el proceso haya terminado (beforeExit).*/
process.on("beforeExit", () => {
  console.log("El proceso está a punto de terminar. ");
});

/* El siguiente ejemplo permitirá desplegar un mensaje si hay una excepción (error) en el proceso, 
que no se ha capturado con "catch()"; es decir, una excepción que no se ha capturado (uncaughtexception).*/
process.on("uncaughtexception", (err, origen) => {
  console.error("Hay una excepción que no fue capturada: " + err);
});
