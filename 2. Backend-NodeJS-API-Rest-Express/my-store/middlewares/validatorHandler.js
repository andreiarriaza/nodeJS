/*

El paquete "boom" permite administrar errores de la API.

Para instalarlo, se debe escribir lo siguiente en consola:
    npm i @hapi/boom
*/

import Boom from '@hapi/boom';

/* Para realizar la validación con la libería "Joi" (ver archivo "productSchema.js"),
es necesario crear un Middleware dinámico, por lo cual, este recibe como parámetros:
    - schema
    - property
*/
/* */
function validatorHandler(schema, property) {
  /* Básicamente el Middleware "validatorHandler", ejecuta el Middleware que está a continuación y que recibe
  los parámetros: req, res y next. */
  /* El procedimiento a continuación es una "Clausura o Closure"*/
  /*
  Clausura o Closure
  Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.
  */
  return (req, res, next) => {
    //  Se define que la información  de la petición (req)se tomará del parámetro "property", y se almacenará en la constante "data".

    const data = req[property];

    /* LA propiedad "abortEarly: false" se incluye para que cuando se realice la validación,
    se muestren todos los errores de validación encontrados. Si no se utiliza esta propiedad,
    se mostraría el primer error, luego de corregirlo, hasta entonces, se mostraría el segundo error, y así sucesivamente. */
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      /* El tipo de error de la libería "Boom" llamado "badRequest()" indica que hubo un error en la petición. */
      /* Se envía el error a los middleware de error (que se encuentra en el archhivo "errorHandler.js") mediante la función "next()". */
      next(Boom.badRequest(error));
    }
    /* Si no hubiese ningún error, simplemente se ejecuta la función "next()" que hará que la aplicación siga su ejecución normal. */
    next();
  };
}

export default validatorHandler;
