import express from 'express';

const router = express.Router();

/* En este ejemplo, como se asignaron dos atributos  dentro del objeto JSON (categoryId y productId),
si se escribe la siguiente ruta:
    localhost:3000/categories/1/products/1000

Se mostraría el siguiente objeto JSON:
    {
    "categoryId": "1",
    "productId": "1000"
    }

    */
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  /* Se retornan (res) en formato JSON los datos deseados. */
  res.json({
    categoryId,
    productId,
  });
});

/* Se exporta la constante "router" como un módulo. */
export default router;
