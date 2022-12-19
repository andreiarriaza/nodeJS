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

/* Se importa la clase "ProductsService", la cual corresponde a los servicios que han sido creados. */
import ProductsService from '../services/productService.js';

const router = express.Router();

/* Se crea una instancia del servicio. */
const service = new ProductsService();

router.get('/', (req, res) => {
  /* También es posible enviar objetos JSON al servidor.
  En este caso, se envía un arreglo, el cual contiene
  diferentes objetos JSON. */

  /* Se accede al método "find" de la instancia de servicio "service": */
  const products = service.find();

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

  Ejemplo:
    const { size } = req.query;

*/

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
*/

  res.json(products);
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
router.get('/filter', (req, res) => {
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

router.get('/:id', (req, res) => {
  /*
  En este ejemplo, el comando "req.paramas.id" obtiene
  el valor del parámetro "id"(:id) que se está enviando
  mediante el "endpoint".
  */
  /* Se utiliza la desestructuración para indicar
    que de todos los parámetros, únicamente se desea obtener el parámetro llamdo "id". */
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

/* ****************************** Método POST ****************************** */

/* Para corroborar el envío por medio de método POST, se debe utlizar ya sea POSTMAN o INSOMNIA,
para realizar el envío de datos al servidor.


Los datos que serán enviados desde POSTMAN o INSOMNIA, deben tener el siguiente formato JSON:

    {
      "name": "New Product",
      "price": 1500,
      "image": "http://placeimg.com/640/480"
    }

*/
/*
¡¡¡¡¡¡¡¡¡¡IMPORTANTE!!!!!!!!!

 Para el funcionamiento del método POST, es necesario implementar un Middlware en el arhivo "MY-STORE/index.js".


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
router.post('/', (req, res) => {
  /* La constante "body", almacenará toda la información que será enviada en formato JSON a la API. */
  /* La propiedad "req" (request), hace referencia a la petición de datos que se realizará.  */
  const body = req.body;

  /* El método "json()" convierte un objeto JSON en un objeto JavaScript. A pesar de su nombre,
  este método no convierte un objeto en JSON, sino que convierte un objeto JSON en objeto JavaScript. */
  /*
  El objeto "res" devolverá los siguientes atributos:
    message: mensaje que se mostrará.
    data: cuerpo (body) con los datos que serán enviados como respuesta. */
  res.json({
    message: 'Created',
    data: body,
  });
});

/* ****************************** Método PUT ****************************** */
/*
Se utilizar para editar TODOS los campos del registro indicado. Esto significa que si se quiere modificar solamente algunos campos
del registro, no debería ser utilizado este método.


Aunque el método PUT también podría ser usado para modificar solo algunos campos del registro, la convención de API Rest determina
que el método apropiado en ese caso, sería el método "PATCH".

*/

router.put('/:id', (req, res) => {
  const body = req.body;
  /* Se utiliza la destructuración para obtener el valor del parámetro "id" (:id) que fue
  enviado mediante la URL. */
  const { id } = req.params;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

/* ****************************** Método PATCH ****************************** */
/*
Se utilizar para editar solamente ALGUNOS de los campos del registro indicado. Esto significa que si se quieren modificar TODOS los campos
del registro, no debería ser utilizado este método.


Aunque el método PATCH también podría ser usado para modificar TODOS los campos del registro, la convención de API Rest determina
que el método apropiado en ese caso, sería el método "PUT".

*/

router.patch('/:id', (req, res) => {
  const body = req.body;
  /* Se utiliza la destructuración para obtener el valor del parámetro "id" (:id) que fue
  enviado mediante la URL. */
  const { id } = req.params;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

/* ****************************** Método DELETE ****************************** */

router.delete('/:id', (req, res) => {
  /* Como se está eliminando un registro, no se envía ningún contenido dentro del elemento "Body". */
  // const body = req.body;

  /* Se utiliza la destructuración para obtener el valor del parámetro "id" (:id) que fue
  enviado mediante la URL. */
  const { id } = req.params;
  res.json({
    message: 'deleted',
    /* Como se está eliminando un registro, no se envía ningún contenido dentro del elemento "Body". */
    // data: body,
    id,
  });
});

/* Se exporta la constante "router" como un módulo. */
export default router;
