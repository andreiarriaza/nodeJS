/* El paquete "bcrypt" permite encriptar contraseñas.  


Para instalarlo: 
    npm install bcrypt
*/
const bcrypt = require("bcrypt");

const password = "123456";

/* Crea un hash de contraseña, es decir un contraseña encriptada mediante
el método "hash". */

/* El método "hash()" permite realizar la encriptación del texto indicado. Tiene los siguientes parámetros:
    Primer Parámetro: valor a encriptar. En este caso, el contenido de la variable "password". 
    Segundo Parámetro: número de veces que se repetirá el algoritmo que realiza la encriptación del texto indicado. En este
                       caso se escribió "5", pues se desea que dicho algoritmo se ejecute cinco veces para mejorar la seguridad del cifrado. 
    Tercer Parámetro: función que se ejecutará cuando se hay completado el "hash". Dicha función tiene dos parámetros: "err" (si hubo algún error en el proceso)
    y el parámetro "hash", que devuelve el texto ya codificado. 
*/
bcrypt.hash(password, 5, function (err, hash) {
  console.log("Password cifrado: " + hash);
  /* El paquete "bcrypt" cuenta también con el método "compare()", el cual permite comparar si la contraseña original corresponde a la contraseña
     cifrada mediante el método "hash()". 
    
     La función "compare()" tiene los siguientes parámetros:
        Primer parámetro: texto a comparar. 
        Segundo parámetro: contraseña encriptada (parámetro "hash").
        Tercer parámetro: función que se ejecutará. Esta función tiene 2 parámetros: "err" (si hay un error en el procedimiento) y "res" (un valor booleano
        que devolverá "true", si la contraseña original y la contraseña encriptada concuerda, y "fals" si no coinciden).
    */

  bcrypt.compare(password, hash, function (err, res) {
    console.log(res);
  });
});
