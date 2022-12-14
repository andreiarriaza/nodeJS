/*

    1. Se crea una configuración por defecto para los nuevos paquetes "npm" que se instalarán:
        npm init -y

    2. Se accede al archivo "package.json" y dentro del área de "scripts" se agregan las siguientes tareas:
            "dev": "nodemon index.js",    (permite levantar el entorno de desarrollo)
            "start": "node index.js",      (levantar la aplicación para producción)
            "link": "eslint"               (verifica que se estén aplicando las buenas prácticas)

    3. Instalar las siguientes dependencias de desarrollo (paquetes):
        a. nodemon: crea el entorno de desarrollo y crea un servidor y ejecuta la actualización de la aplicación en tiempo real, al detectar algún cambio en ella.
        b. eslint eslint-config-prettier eslint-plugin-prettier prettier: estas dependencias se encargan del "linter", es decir,
           de verificar las buenas prácticas de programación (ESLint) y dar formato adecuado al código (prettier).
        c. -D: Indica que son dependencias de forma de "desarrollo" y NO para "producción".

        Comando a escribir para instalar estas dependencias:
            npm install nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D



Para probar la aplicación en el entorno de Desarrollo:
    npm run dev

    Se ejecuta nodemon y va a escuchar a todos los archivos JavaScript y actualizar la aplicación en tiempo real, al detectar
    algún cambio en ella.



Para probar la aplicación en Producción:

    npm run start



Para agregar el contenido del archivo ".gitignore" se recomienda realizar lo siguiente:

1. Acceder a la página:
    https://www.toptal.com/developers/gitignore/
2. Como se desea ignorar algunos archivos de NodeJS, tanto en plataforma "Windows", como en "Linux" y "MacOS",
   en la barrá de búsqueda del sitio web escribir los siguientes términos de búsqueda (los 4 deben estar en una sola casilla):
    a. Node
    b. Windows
    c. Linux
    d. macOS
3. Clic en el botón "Create".
4. Se abre un sitio web con el código apropiado para ser agregado al archivo ".gitignore". Copiar dicho código.
5. Pegar el código anterior dentro del archivo ".gitignore".


IMPORTANTE:
1. El archivo ".editorconfig" se crea para que todos los desarrolladores tengan la misma configuración en el editor de código.
2. El archivo ".eslintrc.json" permite configurar el proyecto, para seguir las buenas prácticas. En este caso,
   dentro de dicho archivo se especifica lo siguiente:
    a. Se trabajará con ECMAScript 6 (es6)
    b. Se utilizarán las extensiones "ESLint" y "Prettier".

        ESLint: es un linter para JavaScript. Un Linter no es más que una herramienta que nos ayuda a cumplir
                las buenas prácticas de codificación y de estilos en un lenguaje de programación

        Prettier: es una herramienta que se usa para dar formato a tu código, siendo una de las mejores
                  opciones cuando quieres obtener un estilo de programación consistente tanto en el caso de
                  que trabajes con un equipo como en el caso de que trabajes solo en un proyecto.



*/

/*
Express JS:
    Es el framework backend más popular para Node.js, y es una parte extensa del ecosistema JavaScript.
    Está diseñado para construir aplicaciones web de una sola página, multipágina e híbridas, también se ha convertido en el estándar para desarrollar aplicaciones backend con Node.js.

Para instalarlo:
    npm install express

Express NO ES una dependencia de desarrollo (devDependencies), sino una dependencia de producción (dependencies)

*/
const express = require('express');
const app = express();
/* Puerto con el que se comunciará. Normalmente el puerto es el 3000, o, en su defecto, 3001, 3002, etc. */
const port = 3000;

/* El siguiente comando crea una ruta.
La ruta es "/".
La ArrowFunction es el Callback que se ejecutará, el cual tiene dos parámetros:
    - req (request o petición)
    - res (response o respuesta)

*/

/* ***************************** Creación de Rutas  ***************************** */
/* IMPORTANTE
Para comprobar que la ruta creada a continuación funciona correctamente, se debe ejecutar nuestra aplicación,
si se está desarrollando aún, sería usando el comando (npm run dev), pero si ya se terminó
la aplicación y quiere probarse en modo de Producción, el comando sería (npm run start).

Luego, al acceder a la ruta:
    localhost:3000
Se deberá desplegar el sitio web que se encuentra en esa ruta con el mensaje "Hola, mi server en Express JS."
*/
app.get('/', (req, res) => {
  /* Por medio del método "send()" se envía una respuesta al servidor. */
  res.send('Hola, mi server en Express JS.');
});

/*
Para ver la siguiente ruta, se debe acceder a:
    localhost:3000/nueva-ruta
*/
app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta (endpoint) en Node JS');
});

/*
Para ver la siguiente ruta, se debe acceder a:
    localhost:3000/products
*/
app.get('/products', (req, res) => {
  /* También es posible enviar objetos JSON al servidor. */
  res.json({
    name: 'Product 1',
    price: 1000,
  });
});

/* El método "listen()" permite definir el puerto en el que debe escuchar la aplicación. */
app.listen(port, () => {
  /* IMPORTANTE: los "console.log" aparcen subrayados porque NO ES UNA BUENA PRÁCTICA dejaron allí cuando
    el archivo es enviado a Producción. Pueden estar para pruebas solamente en la etapa de Desarrollo, pero
    en la etapa de Producción deben ser eliminados. */
  console.log('Mi port ' + port);
});

/* ******************* Métodos ******************* */
/*


- GET: Permite obtener datos del servidor.

- PUT: Permite editar un registro en el servidor, con la salvedad de que se deben modificar TODOS los
       campos que correspondan a ese registro.

- PATCH: Hermano de "PUT", con la diferencia de que permite modificar solamente los campos del registro que se desee,
         es decir, NO ES NECESARIO MODIFICAR TODOS LOS CAMPOS DEL REGISTRO.

- POST: Permite crear nuevos registros en el servidor.

- DELETE: Permite eliminar un registro del servidor.

*/
