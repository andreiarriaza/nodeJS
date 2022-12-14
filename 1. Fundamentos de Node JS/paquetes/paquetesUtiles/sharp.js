/* 
El paquete "sharp" permite trabajar con imágenes. 

Para instalarlo:
    npm install sharp
*/

const sharp = require("sharp");

/* El método "sharp(rutaImagen)" permite acceder a la imagen que se desea modificar. 
 
El método "resize(tamaño)" indica el tamaño al que se desea redimensionar la imagen, en este caso,, 
 se redimensionará a "80px" tanto de alto como de ancho. 

El método "grayscale()" le aplicará el filtro "escala de grises" a la imagen. 

El método "toFile(rutaGuardado)" guardará la imagen redimensionada con el nombre y extensión indicados. 
 */

sharp("original.png").resize(80).grayscale().toFile("originalResize.png");
