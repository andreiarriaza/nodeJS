import express from 'express';

const router = express.Router();

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
router.get('/', (req, res) => {
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

/* Se exporta la constante "router" como un módulo. */
export default router;
