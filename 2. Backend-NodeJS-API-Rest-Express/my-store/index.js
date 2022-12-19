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
6. ¡¡¡IMPORTANTE!!! Revisar lo que se agregó en la sección "Dependency directories", esto se hizo para que no agregue a GitHub
   la carpeta "node_modules", sin importar en qué ubicación se encuentre.





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
/*
 ¡¡¡¡¡¡¡¡¡¡IMPORTANTE!!!!!!!!!!
 Antes de hacer uso del comando "import" o "export", es indispensable
 realizar lo siguiente:

    1. Abrir el archivo de configuración de ESLint (el cual es el eslinter para manejar buenas prácticas) llamadio ".eslintrc.json"
       y agregar en la sección de "parserOptions" la siguiente propiedad con el valor indicado para que no sea reconocido como un error:
            "sourceType": "module"

    2. Abrir el archivo "package.json" y agregar ls siguiente propiedad, con su respectivo valor:
          "type": "module"

        La línea anterior se debe agregar después de la propiedad "main", es decir, quedaría así el archivo "package.json":
            {
              "name": "my-store",
              "version": "1.0.0",
              "description": "",
              "main": "index.js",
              "type": "module",
              "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "dev": "nodemon index.js",
                "start": "node index.js",
                "link": "eslint"
              },
              "keywords": [],
              "author": "",
              "license": "ISC",
              "devDependencies": {
                "@faker-js/faker": "^7.6.0",
                "eslint": "^8.29.0",
                "eslint-config-prettier": "^8.5.0",
                "eslint-plugin-prettier": "^4.2.1",
                "nodemon": "^2.0.20",
                "prettier": "^2.8.1"
              },
              "dependencies": {
                "express": "^4.18.2"
              }
            }

*/
import express from 'express';
/* Se importa la función "routerApi" que se encuentra dentro del archivo "index.js", el cual se encuentra
dentro de la carpeta "routes". No  hace falta agregar explícitamente el nombre del archivo "index.js",
debido a que se sobreentiende que con solo agregar el nombre de la carpeta "routes", lo que se quiere importar es
el archivo "index.js" que contiene. */
import routerApi from './routes/index.js';

const app = express();
/* Puerto con el que se comunciará. Normalmente el puerto es el 3000, o, en su defecto, 3001, 3002, etc. */
const port = 3000;

/*
Middleware

El término middleware se refiere a un sistema de software que ofrece servicios y funciones comunes para las aplicaciones.
En general, el middleware
se encarga de las tareas de gestión de datos, servicios de aplicaciones, mensajería, autenticación y gestión de API.
⠀⠀⠀
Ayuda a los desarrolladores a diseñar aplicaciones con mayor eficiencia. Además, actúa como hilo conductor entre las aplicaciones,
los datos y los usuarios.

"express.json()" es un método incorporado en express para reconocer el objeto de solicitud entrante como objeto JSON. Este método se llama como middleware en su aplicación usando el código:
              app.use(express.json());

Este Middleware es INDISPENSABLE, para poder realizar el envío y recepción del método POST sin problemas.

  */
app.use(express.json());

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

/* El método "listen()" permite definir el puerto en el que debe escuchar la aplicación. */
app.listen(port, () => {
  /* IMPORTANTE: los "console.log" aparcen subrayados porque NO ES UNA BUENA PRÁCTICA dejaron allí cuando
    el archivo es enviado a Producción. Pueden estar para pruebas solamente en la etapa de Desarrollo, pero
    en la etapa de Producción deben ser eliminados. */
  console.log('Mi port ' + port);
});

routerApi(app);

/*
Single Responsiblity Principle (Principio de Responsabilidad Única)

Este principio, es fundamental en el área de desarrollo.
Determina que cada función, archivo o método, debe cumplir una única función específica.
Por ejemplo, en el caso de un método, si un método se encarga de realizar una suma,
esa debería ser la única función que dicho método debería desempeñar.

Aplicando este principio, se puede comprobar que no sería correcto tener en un solo archivo, TODAS LAS RUTAS
creadas en el servidor. Por lo que lo ideal sería que cada ruta que ha sido creada, junto con todo el procedimiento
que corresponde a esa ruta, se encuentre en un archivo independiente.

Precisamente por ello, se creó una carpeta "routes", dentro de la cual se crearon
archivos que contienen todo el procedimiento relativo a cada producto.

Por ejemplo, todo el procedimiento relacionado con la ruta "/products", se encuentra
dentro del archivo "productsRouter".


*/
