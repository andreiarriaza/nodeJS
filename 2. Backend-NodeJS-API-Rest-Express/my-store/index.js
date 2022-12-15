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
/*

Faker JS
Es una librería (dependencia) que genera
datos falsos para pruebas y desarrollo.

Su sitio web es: https://fakerjs.dev/

Para instalarla y utilizarla se deben seguir los siguientes pasos:

    1. Instalar la dependencia de "Faker js":
            npm install @faker-js/faker --save-dev

    2. Antes de realizar la importación del paso
       siguiente, es indispensable abrir el archivo
       de configuración de ESLint llamadio ".eslintrc.json"
       y agregar en la sección de "parserOptions"
       la siguiente propiedad con el valor indicado:

            "sourceType": "module"

       Esto es necesario para que la aplicación permita utilizar el comando "import", que se utilizará a continuación.

    3. Importar la librería dentro del proyecto:
            import { faker } from '@faker-js/faker';

            const randomName = faker.name.findName();
*/
import { faker } from '@faker-js/faker';

// const randomName = faker.name.findName();

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

app.get('/products', (req, res) => {
  /* También es posible enviar objetos JSON al servidor.
  En este caso, se envía un arreglo, el cual contiene
  diferentes objetos JSON. */

  const products = [];

  /*


Parámetros query

Son parámetros de consulta que suelen venir en los métodos de consulta o métodos GET.

Son los que se utilizan, por ejemplo,
para controlar la paginación de un sitio web, y
poder mostrar los productos de la página 1, o los
productos de la página 2, etc.

La mayoría de veces se utilizan para filtrar determinados registros, para que solo sean mostrados algunos productos en específico.
*/
  /*
 Para poder capturar los parámetros de tipo "query", se utiliza la propiedad "req.query".
*/
  const { size } = req.query;
  /* Se utiliza un operador de cortocircuito para comprobar si el usuario envió el parámetro query (el cual es opcional),
  o bien, si no lo envió.

  Si el parámetro query llamado "size" fue enviado, es decir, si existe, será almacenado en la variable "limit".
  De lo contrario, si dicho parámetro no fue enviado, en la variable "limit" se almacenará el valor "10".
  */

  /*
Para comprobar si la ruta que se creará a continuación funciona, se puede hacer lo siguiente:

  1. Ruta:
       localhost:3000/products

      Al escribir dicha ruta, como no se está enviando el parám,etro "query", el cual es opcional, la cantidad de productos que se mostrarán será "10".

  2. Ruta (con parámetro query):
      localhost:3000/products?size=50

    Como ahora sí se envío el parámetro query, en lugar de 10 se mostrarán 50 productos en el sitio web.

*/
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    /*

    La librería Fake JS devuelve, entre otros, los siguientes valores:

      - nombre de producto: faker.commerce.productName()
      - Precio del producto (cadena de texto): faker.commerce.price()
      - URL de la imagen del producto: faker.image.imageUrl()


      El precio devuelto por "faker.commerce.price()"
      es una cadena de texto, por ello, es necesario
      castearlo a número, en este caso, a
      número entero.

      Al castearlo, se indica que el valor anterior se convertirá a un número entero de base "10"
      */
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
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

/* ******************* Método GET ******************* */

/* ********** Ejemplo 1 ********** */

/*
¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡IMPORTANTE!!!!!!!!!!!!!!!!!!!!

Los primeros dos ejemplos tienen una peculiaridad que vale la pena resaltar.

El "endpoint" del ejemplo 1 es:
     /products/filter

El "endpoint" del ejemplo 2 es:
    /products/:id

Como se explica en el ejemplo 2, cualquier valor que sea enviada en la ruta, será tomado como "id".

  Ejemplo:

    /products/5   (el id es igual a 5)
    /products/one  (el id es igual a "one")


Esto es importantísimo porque, siendo así, qué podría pasar con la ruta del ejemplo 1:
    /products/filter

El valor "filter" podría ser interpretado como si fuera el valor del parámetro "id" que se le está enviando. Es
decir, podría pensarse que si la ruta es "/products/filter", el "id" sería "filter". Pero eso NO ES LO QUE SE BUSCA,
se quiere que "filter" sea una ruta a la que el usuario pueda acceder, y no se desea que
sea interpretado como "id".

Para evitar esta confusión, se debe tomar en cuenta la siguiente REGLA DE ORO de Node JS:

            "LOS 'ENDPOINT' ESPECIFICOS, DEBEN IR ANTES DE LOS 'ENPOINT' DINÁMICOS."



Lo anterior significa que cuando se tiene un endpoint específico, como la ruta:
    /products/filter          (endpoint específico)

Dicha ruta debe ser creada antes del endpoint dinámico, por ejemplo, la ruta:
    /products/:id             (enpoint dinámico)


Precisamente por ello es que el ejemplo 1, se encuentra antes del ejemplo 2.
Siguiendo este orden, cuando se escriba la ruta:
    /productsa/filter

NO SERÁ RECONOCIDA la palabra "filter" como un "id", sino que será interpretada como una ruta específica; es decir,
que mostrará el texto:
   "Yo soy un filter".

*/

/* Ahora la ruta cuenta con */
app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter.');
});
/* ********** Ejemplo 2 ********** */

/* En este caso, se usa el método "GET",
pero se está indicando que el "endpoint"
recibirá un parámetro; esto se indica por medio de
los dos puntos (:). El parámetro que recibirá el
endpoint en este ejemplo, es el parámetro "id" (:id). */

/* En este ejemplo, como no se asignó ningún atributo "id" dentro del objeto JSON,
cualquier número o texto que se escriba el "endpoint", será
tomado como "id".

Es decir, que si se escribiera la siguiente ruta:
    localhost:3000/products/5

Se mostraría el siguiente objeto JSON:
    {
    "id": "5",
    "name": "Product 2",
    "price": 2000
    }

    */

app.get('/products/:id', (req, res) => {
  /*
  En este ejemplo, el comando "req.paramas.id" obtiene
  el valor del parámetro "id"(:id) que se está enviando
  mediante el "endpoint".
  */
  /* Se utiliza la desestructuración para indicar
    que de todos los parámetros, únicamente se desea obtener el parámetro llamdo "id". */
  const { id } = req.params;
  /* Se retornan (res) en formato JSON los datos de un producto en específico*/
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});

/* ********** Ejemplo 3 ********** */

/* En este ejemplo, como no se asignaron dos atributos  dentro del objeto JSON (categoryId y productId),
si se escribe la siguiente ruta:
    localhost:3000/categories/1/products/1000

Se mostraría el siguiente objeto JSON:
    {
    "categoryId": "1",
    "productId": "1000"
    }

    */
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  /* Se retornan (res) en formato JSON los datos deseados. */
  res.json({
    categoryId,
    productId,
  });
});

/* ********** PARÁMETROS QUERY (QUERY PARAMETERS) */

/* ********** Ejemplo 1 ********** */

/*
Parámetros query

Son parámetros de consulta que suelen venir en los métodos de consulta o métodos GET.

Son los que se utilizan, por ejemplo,
para controlar la paginación de un sitio web, y
poder mostrar los productos de la página 1, o los
productos de la página 2, etc.

La mayoría de veces se utilizan para filtrar determinados registros, para que solo sean mostrados algunos productos en específico.

*/

/* Se debe notar que el "endpoint" no incluye
los parámetros "limit" y "offset", los cuales
son Parámetros Query y, por lo tanto, son opcionales. */

/* Al poner a prueba este ejemplo, se comprueba lo siguiente:

1. Si se escribe la ruta:
      lolcalhost:3000/user-s
   Se desplegará el mensaje: "No hay parámetros"

2. Si se escribe la ruta:
        localhost:3000/users/?limit=10&offset=200

   Se desplegaría lo siguiente:
        {
            "limit": "10",
            "offset": "200"
        }

*/
app.get('/users', (req, res) => {
  /* Los parámetros "limit" y "offset" son los
    utilizados para poder controlar la paginación de un sitio Web.

  Para poder capturar los Parámetros query, se usa la propiedad "req.query". */

  const { limit, offset } = req.query;

  /* Como los parámetros "limit" y "offset" son
  opcionales, es necesario realizar una validación
  para confirmar si fueron o no enviados. */
  /* Se comprueba si los parámetros "limit" y "offset" son "verdaderos", es decir, verifica si existen. */
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parámetros');
  }
});
