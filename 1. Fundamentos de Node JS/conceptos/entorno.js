/* 
    ¿Qué son las variables de entorno?
Las variables de entorno son variables externas a nuestra aplicación que residen en el sistema operativo o en el contenedor de la aplicación que se está ejecutando. Una variable de entorno es simplemente un nombre asignado a un valor.

Por convención, el nombre se escribe con mayúscula y los valores son cadenas de texto, por ejemplo: PORT=8080.

Normalmente, nuestras aplicaciones requieren que se establezcan muchas variables de entorno para que funcionen. Al confiar en configuraciones externas, su aplicación se puede implementar fácilmente en diferentes entornos. Estos cambios son independientes de los cambios en el código, por lo que no requieren que su aplicación sea reconstruida.

Los datos que cambian según el entorno en el que se ejecuta su aplicación deben configurarse como variables de entorno. Algunos ejemplos comunes son:

    - Dirección y Puerto HTTP.
    - Credenciales de Base de Datos.
    - Ubicación de archivos y carpetas estáticos.
    - Credenciales de API's externas.
    - Tokens de API'S
    - Emails
    - URL´S



Definición de variables de entorno: 

    process.env.NOMBRE_VARIABLE

    Ejemplo: 
    process.env.NOMBRE 

    Con el proceso anterior, se define una variable, pero aún no se le asigna un valor. 

    Para asignar el valor que se agregará en la variable, se puede definir
    antes de la instrucción que permite ejecutar el programa. 

    Ejemplo: 
        NOMBRE = Andrei node entorno.js

El nombre de las variables de entorno SIEMPRE se escribe con mayúsculas, . 


Una forma de prevenir que en consola se muestre el valor "undefined" en el caso de que
no se defina un valor para la variable de entorno NOMBRE, se puede usar un operador de cortocircuito (||)), 
el cual hará lo siguiente: 
    - Si "process.env.NOMBRE" es VERDADERO, es decir, si existe un valor aignado para la variable de entorno NOMBRE, será ese valor
      el que se guardará en la variable "nombre".
    - Si "process.env.NOMBRE", es decir, si no existe un valor asignado para la variable de entorno NOMBRE, 
      el valor que se almacenerá será la cadena de texto "Sin nombre".     

*/
let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.WEB || "No tengoW Web";

console.log("Hola " + nombre);
console.log("Mi Web es: " + web);
