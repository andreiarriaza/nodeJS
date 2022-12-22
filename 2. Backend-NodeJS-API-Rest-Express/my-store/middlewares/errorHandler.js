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

/* En este caso se creará un Middleware Global para administrar los errores.

Los middleware de error reciben 4 parámetros:
  - err (obligatorio): error a ejecutar.
  - req (obligatorio): petición
  - res (obligatorio): respuesta
  - next (obligatorio): redirige la aplicación al siguiente Middleware. IMPORTANTE: aunque no se utilice la función "next()",
                        SE DEBE COLOCAR SIEMPRE.


Los Middleware normales, que no son de error, únicamente reciben 3 parámetros: req, res y next.
*/

/*

IMPORTANTE: estos Middlewares, solo se implementaron, como ejemplo, en la función "findOne()" del archivo "productService", si se
desea realizar la prueba de este mensaje de error, se podría, por ejemplo, invocar un métod inexistente en dicha función, y luego
por medio de Insomnia o Postman, realizar el envío de un "id", y así comprobar el mensaje de error devuelto.

Si se quisieran implementar estos Middlewares para el resto de funciones del archivo "productService", se debe agregar en cada uno el "try-catch" y
la función "next()".
*/
function logErrors(err, req, res, next) {
  /* Este "console.log" se utiliza para saber cuál de los dos Middlewares se ejecuta primero, pues en ese mismo
  orden deben ser implementados en el archivo "index.js". */
  console.log('logError');

  console.error(err);
  next(err);
}

/*

Los middleware de error reciben 4 parámetros:
  - err (obligatorio): error a ejecutar.
  - req (obligatorio): petición
  - res (obligatorio): respuesta
  - next (obligatorio): redirige la aplicación al siguiente Middleware. IMPORTANTE: aunque no se utilice la función "next()",
                        SE DEBE COLOCAR SIEMPRE.

  Los Middleware normales, que no son de error, únicamente reciben 3 parámetros: req, res y next.
*/
function errorHandler(err, req, res, next) {
  /* Este "console.log" se utiliza para saber cuál de los dos Middlewares se ejecuta primero, pues en ese mismo
  orden deben ser implementados en el archivo "index.js". */
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    /* "stack" indicará en dónde se encontró el error. */
    stack: err.stack,
  });
}

/* Middleware que será utilizado con el paquete BOOM, el cual permite la gestión de errores. */
function boomErrorHandler(err, req, res, next) {
  /* La propiedad "isBoom" permite verificar si el error que se generó es un error de tipo "boom" (del paquete "boom"). */
  if (err.isBoom) {
    /* Se obtiene la información del error generada por el paquete "boom". Dicha información
     se almacena en el objeto "output". */
    const { output } = err;
    /* En la propiedad "statusCode" del atributo "output", el paquete "boom" envía el código de error generado. Mientras
    que en el atributo "payload" de la propiedad "output" es enviada la información del error. */
    res.status(output.statusCode).json(output.payload);
  }

  /* Si el error generado NO ES de tipo "boom", se invoca la función "next()", la cual ejecuta los Middlewares
  que se crearon en este archivo (excepto el middleware "boomErrorHnadler()", pues este último es exclusivo para errores del paquete "Boom"). */
  next(err);
}

export { logErrors, errorHandler, boomErrorHandler };
