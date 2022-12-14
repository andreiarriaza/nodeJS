/* 
HTTP:
Es el módulo que permite crear un servidor o conectarse con servidores externos.

Node nos ofrece el modulo HTTP el cual nos permite principalmente crear un servidor en nuestro computador.
En este modulo encontraremos todo lo necesario que necesitamos para crear un sistema de rutas, que responderá cada ruta, los header que podrá mandar, etc.
Uno de los métodos principales de este modulo es createServer, el cual nos permitirá abrir un puerto para crear el servidor.
*/

/* 

IMPORTANTE: 
En este caso particular, para que la aplicación se ejecutara correctamente de parte de NODEMON, se usó
el siguiente comando: 
    nodemon modulos/http.js
*/

const http = require("http");

/* La función "createServer()" permite crear un servidor.
Dicha función tioene como argumento otra función, la cual, a su vez, recibe
dos parámetros: 
    - req: almacenará la petición "request" hacia el servidor.
    - res: almacenará la respuesta "response" desde el servidor. 

Para poder realizar el procedimiento, el servidor debe "escuchar" desde 
un puerto en específico. Eso se indica por medio de la función "listen()". 
El puerto utilizado en este caso, será el puerto "3000".
*/
http
  .createServer(router)
  .listen(
    3000
  ); /* Los puertos más comúnmente utilizado para establecer la comunicación con el servidor son el: 3000, 3001, 3002, etc. */

function router(req, res) {
  console.log("Nueva petición.");
  console.log(req.url);

  /* La estructura de selección switch comprobará cuál es la ruta que está realizando la petición (req.url).
  
  Si la ruta a la que se accede es "/hola", es decir, si se se
  accede a la ruta: 
      localhost:3000/hola

  El mensaje que se enviará como respuesta será "Bienvenido..."

  De lo contrario, si la ruta a la que se accede es cualquier otra, 
  el mensaje que se desplegará será:
      "Error 404. No se reconoce la ruta a la que se desea acceder."
  */

  /* Se especifica el código de respuesta que se devolverá y la cabecera de la petición. */
  res.writeHead(201, { "Content-Type": "text/plain; charset=utf-8" });

  switch (req.url) {
    case "/hola":
      /* Se especifica el mensaje que será enviado como respuesta por medio
    del método "write()". */
      res.write("Bienvenido...");
      res.end();
      break;
    default:
      res.write("Error 404. No se reconoce la ruta a la que desea acceder ");
      res.end(); /* Finaliza el proceso de respuesta. */
  }
}

console.log("Escuchando http en el puerto 3000");

/* Se puede acceder al puerto definido anteriormente, para comprobar que en efecto, el servidor está escuchando desde ese puerto. 
Basta con esribir en la barra de direcciones: 
    localhost: 3000
    
Al acceder a la dirección anterior, no se mostrará nada en el sitio web, pero en consola se mostrará lo siguiente: 

    Escuchando http en el puerto 3000
    
    Nueva petición.
    /
    Nueva petición.
    /favicon.ico

    Google Chrome, lo primero que solicita es un "favicon". En este caso se ignorará esa solicitud. 
*/
