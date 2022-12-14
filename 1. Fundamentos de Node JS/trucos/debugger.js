/* 

Para hacer el proceso de "debuggin" (depuración) de código, es decir, el proceso
de corregir errores, se puede utilizar la siguiente estrategia: 

    1. Ejecutar el programa en consola ya sea directamente en "node" o por medio de "nodemon", 
       y anteponer el comando "--inspect" a la ubicación de dicho programa. 

       Ej:
        node --inspect trucos/http.js

        o bien

        nodemon --inspect trucos/http.js 

    2. Acceder en Chrome que fue creada por medio del archivo "http.js", es decir, la ruta: 
        localhost:3000/hola

    3. Abrir una nueva pestaña de Chrome y escribir: "chrome://inspect"
    4. Se abre una ventana llamada "Devices" donde debe aparecer  la ruta del archivo que se está ejecutando en node (trucos/http.js). 
       Se debe dar clic en el vínculo "inspect". 
    5. Se abre el inspector de Google Chrome en una nueva ventana. 
       



Para este ejemplo se utilizará el arichivo "http.js" (este archivo fue creado anteriormente) para realizar la prueba del debugging. 
*/
