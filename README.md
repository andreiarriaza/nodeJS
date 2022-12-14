# Node JS

## ¿Qué es Node JS?

**Node.js** es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en .js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript. T

Node es una plataforma OpenSource para desarrollar aplicaciones, que está enfocada en tiempo real. Es similar a la máquina virtual de Java.

Node es muy útil para aplicaciones que tienen alta concurrencia. Utiliza JavaScript como lenguaje de programación y patrones de programación asíncronos y orientados a objetos.


Node.js fue creado por los desarrolladores originales de JavaScript. Lo transformaron de algo que solo podía ejecutarse en el navegador en algo que se podría ejecutar en los ordenadores como si de aplicaciones independientes se tratara. Gracias a Node.js se puede ir un paso más allá en la programación con JavaScript no solo creando sitios web interactivos, sino teniendo la capacidad de hacer cosas que otros lenguajes de secuencia de comandos como Python pueden crear. 

Tanto JavaScript como Node.js se ejecutan en el motor de tiempo de ejecución JavaScript V8 (V8 es el nombre del motor de JavaScript que alimenta Google Chrome. Es lo que toma nuestro JavaScript y lo ejecuta mientras navega con Chrome). Este motor coge el código JavaScript y lo convierte en un código de máquina más rápido. El código de máquina es un código de nivel más bajo que la computadora puede ejecutar sin necesidad de interpretarlo primero, ignorando la compilación y por lo tanto aumentando su velocidad. 


¿Por qué decimos que Node.js es una plataforma simple?

Es una librería estándar es donde el código va a morir. Mantener una plataforma estándar actualizada puede ser un problema.
npm y la modularidad de Node abre un ecosistema de trabajo muy grande.
El modelo de trabajo Open Source beneficia mucho a la plataforma.
Node existe gracias a un componente principal que se llama V8, que es el que nos permite utilizar JavaScript del lado del servidor.


## ¿Para qué sirve Node JS?

Node.js utiliza un modelo de entrada y salida sin bloqueo controlado por eventos que lo hace ligero y eficiente (con entrada nos referimos a solicitudes y con salida a respuestas). Puede referirse a cualquier operación, desde leer o escribir archivos de cualquier tipo hasta hacer una solicitud HTTP. 

La idea principal de Node.js es usar el modelo de entrada y salida sin bloqueo y controlado por eventos para seguir siendo liviano y eficiente frente a las aplicaciones en tiempo real de uso de datos que se ejecutan en los dispositivos. Es una plataforma que no dominará el mundo del desarrollo web pero si que satisface las necesidades de una gran mayoría de programadores. 

La finalidad de Node.js no tiene su objetivo en operaciones intensivas del procesador, de hecho, usarlo para programación de más peso eliminará casi todas sus ventajas. Donde Node.js realmente brilla es en la creación de aplicaciones de red rápidas, ya que es capaz de manejar una gran cantidad de conexiones simultáneas con un alto nivel de rendimiento, lo que equivale a una alta escalabilidad.


## Variables de entorno en Node JS

Las variables de entorno son variables externas a nuestra aplicación que residen en el sistema operativo o en el contenedor de la aplicación que se está ejecutando. Una variable de entorno es simplemente un nombre asignado a un valor.

Por convención, el nombre se escribe con mayúscula y los valores son cadenas de texto, por ejemplo: PORT=8080.

Normalmente, nuestras aplicaciones requieren que se establezcan muchas variables de entorno para que funcionen. Al confiar en configuraciones externas, su aplicación se puede implementar fácilmente en diferentes entornos. Estos cambios son independientes de los cambios en el código, por lo que no requieren que su aplicación sea reconstruida.

Los datos que cambian según el entorno en el que se ejecuta su aplicación deben configurarse como variables de entorno. Algunos ejemplos comunes son:

  * Dirección y Puerto HTTP.
  * Credenciales de Base de Datos.
  * Ubicación de archivos y carpetas estáticos.
  * Credenciales de API's externas.



### Definición de variables de entorno: 
 ```
   process.env.NOMBRE_VARIABLE

    Ejemplo: 
        process.env.NOMBRE 

    Con el proceso anterior, se define una variable, pero aún no se le asigna un valor. 

    Para asignar el valor que se agregará en la variable, se puede definir
    antes de la instrucción que permite ejecutar el programa. 

    Ejemplo: 
        NOMBRE = Andrei node entorno.js
 ```
   

El nombre de las variables de entorno SIEMPRE se escribe con mayúsculas, . 


Una forma de prevenir que en consola se muestre el valor "undefined" en el caso de que
no se defina un valor para la variable de entorno NOMBRE, se puede usar un operador de cortocircuito (|1)), 
el cual hará lo siguiente: 

    * Si "process.env.NOMBRE" es VERDADERO, es decir, si existe un valor aignado para la variable de entorno NOMBRE, será ese valor
      el que se guardará en la variable "nombre".
    * Si "process.env.NOMBRE" es FALSO, es decir, si no existe un valor asignado para la variable de entorno NOMBRE, 
      el valor que se almacenerá será la cadena de texto "Sin nombre".     

## Nodemon (recomendado para la etapa de Desarrollo)

En Node.js, debe reiniciar el proceso para que los cambios surtan efecto; es decir, cada vez que se realiza un cambio y se quiere probar la aplicación, 
es necesario escribir el comando **node** más la ruta donde se encuentra almacenado el archivo. Puede eliminar este paso adicional usando **Nodemon** para reiniciar el proceso automáticamente.

Nodemon es una **utilidad de interfaz de línea de comandos (CLI)** desarrollada por @rem que envuelve su aplicación Node, vigila el sistema de archivos y reinicia automáticamente el proceso. Esto significa que permite que se puedan ver los resultados de cada cambio realizado en tiempo real. 

Su sitio web oficial es: https://nodemon.io/ 

### Instalación

Desde la línea de comandos, se debe escribir lo siguiente: 
```
npm install -g nodemon
```


### Utilización

Solo basta escribir el comando: 
```
nodemon RutaDelArchivoAEjecutar

Ejemplo: 
nodemon js/prueba.js
```

Y eso es todo. Cada vez que se realice un cambio en el programa, automáticamente se mostrará en consola dicho programa, con los cambios realizados.

## PM2 (recomendada para la fase de Producción)

Es mucho más complejo que Nodemon. 

**Pm2** es un gestor de procesos en producción para las aplicaciones Node.js que tiene un balanceador de carga incorporado. PM2 permite mantener siempre activas las aplicaciones y volver a cargarlas evitando los tiempos de inactividad, a la vez que facilita tareas comunes de administrador del sistema. PM2 también permite gestionar el registro de aplicaciones, la supervisión y la agrupación en clúster.

Las principales características de pm2:

 - Capacidad de manejar un montón de apps. (Ver el estado de distintas apps)
 - Capacidad de monitoreo de memoria y cps de nuestros procesos.
 - Manejo de logs.
 - Balanceo de carga.
 - Iniciar tus aplicaciones una vez el servidores se inicia.
 - Capacidad de “watch your code” si tu codigo cambia.

Su sitio web oficial es: https://pm2.io/

### Instalación

Para poder instalar pm2 necesitas tener previamente instaldo nodejs en vuestor servidor, ya sea un vps o algún disposotivo tipo Raspberry Pi. Para instalar solo tenemos que ejecutar el siguiente comando en la terminal:

```
npm install -g pm2
```


## Callback

Los Callbacks en JavaScript son como su propio nombre, en inglés, indica, llamadas de vuelta, quiere decir que cuando invoco una función pasándole como parámetro otra función (el callback) esta función parámetro se ejecuta cuando la función principal ha terminado de ejecutarse. O cuando a nosotros nos interese…

Este concepto que parece muy complicado, es en realidad muy sencillo de entender si lo hacemos con casos prácticos, por ejemplo:

```js
function funcionPrincipal(callback){
  alert('hago algo y llamo al callback avisando que terminé');
  callback();
}
 
funcionPrincipal(function(){
  alert('terminó de hacer algo');
});
```

En el ejemplo anterior, la función llamada "funcionPrincipal()" recibe como parámetro otra función 
llamada "callback" (puede utilizarse cualquier otro nombre). Dentro de la función "funcionPrincipal()", justo despupes
de que haya desplegado el Alert Box con el texto "Hago algo y llamo al Callback avisando que termine", se invoca
la función "callback()". Es decir que al final de la función "funcionPrincipal()" se ejecuta
la función "callback()". 

Ahora bien, la función "callback" es la función que se enviará como parámetro cuando se invoca la función llamada "funcionPrincipal()". En este
caso, la función "callback" que se envía como parámetro es la siguiente: 

```js
    function(){
      alert('terminó de hacer algo');
    }

```



