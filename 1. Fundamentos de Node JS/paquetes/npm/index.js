/* 
Por medio del Gesto de Paquetes "npm" se instaló el paquete: "is-odd",
el cual permite saber si un número es impar o no. 

Desde el sitio web de "npm" se puede buscar la acción que se desea ejecutar
y devolverá qué paquetes pueden servir para completarla. 
    https://www.npmjs.com/

Muchos paquetes tienen a su vez sus propias dependencias, por lo que se debe ser mesurado al momento de 
instalar paquetes y no abusar de ello. 

*/

/* Importanto el paquete "is-odd". */
const isOdd = require("is-odd");

//  Comprueba si el número es impar (true) o no lo es (false).
console.log(isOdd(3));
