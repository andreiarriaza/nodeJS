/* ******************************************** CREACIÓN DE SERVICIOS ******************************************** */

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

class ProductsService {
  constructor() {
    // Se inicializa un array en memoria.
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
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
      this.products.push({
        /* El método "uuid()" permite obtener un string largo que se genera de forma aleatoria, el cual
        se convertirá en el "id". */
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }
  create() {}

  find() {
    return this.products;
  }

  findOne(id) {
    /* Se comprueba si algún valor del atributo "id" de cada producto(item), coincide con el "id" que fue enviado
    como parámetro a la función "findOne()". La función "find" buscará el "id" que coincida dentro del arreglo "products" y lo devolverá. */
    return this.products.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

export default ProductsService;
