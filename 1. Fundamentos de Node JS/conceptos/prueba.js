/* 

Para ejecutar un archivo en Node JS, se debe
acceder en consola a la ubicación en la que se encuentra almacenado el archivo, y luego, usar el comando "node". 

Ejemplo: 
  (suponiendo que el archivo se encuentre en la ubicación actual de la consola)
  node entorno.js

*/
console.log("HOla Mundo");

let i = 0;
setInterval(function () {
  console.log(i);

  i++;
}, 1000);
