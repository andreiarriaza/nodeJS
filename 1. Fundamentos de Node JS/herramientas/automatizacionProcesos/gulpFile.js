/* 
                        Automatización de Procesos



Gulp: 
Gulp es una herramienta que sirve para automatizar muchas de las tareas habituales que se realizan durante el desarrollo de una aplicación web, desde copiar y mover archivos, hasta actualizar el navegador de forma automática cuando se modifica el código. Se trata de un task manager (gestor de tareas) en forma de script de NodeJS que se utiliza en el desarrollo web para ejecutar todo tipo de tareas, siendo las más habituales:

    - Optimizar las imágenes web.
    - Generar código CSS.
    - Procesar código HTML para verificar que los enlaces que incluye son correctos.
    - Empaquetar una web para poder ejecutar el script con el servidor (JavaScript, CSS, HTML…).
    - Desplegar una página en el servidor web.
    - Hacer FTP y SSH.


*/

/* 
Para instalar Gulp se deben seguir los siguientes pasos: 
1. Inicializar "npm":   
        npm init -y 
2. Se instala el módulo "gulp", pero también se instala un plugin que crea un pequeño servidor, 
   el cual permite ver los cambios en tiempo real: 
        npm install gulp gulp-server-livereload
3. Acceder al "package.json" y en el área de "scripts", agregar el nombre de la tarea que se
   desea ejecutar. En este ejemplo, la tarea se llama "build", por lo que
   la línea que se debe agregar al área de "scripts" es la siguiente: 
            "build": "gulp build"

4. Para ejecutar la tarea creada, se debe escribir en consola:
        npm run build



Para ejecutar la tarea "serve":

5. Acceder al "package.json" y en el área de "scripts", agregar el nombre de la tarea que se
   desea ejecutar. En este ejemplo, la tarea se llama "serve", por lo que
   la línea que se debe agregar al área de "scripts" es la siguiente: 
            "serve": "gulp serve"

6. Para ejecutar la tarea creada, se debe escribir en consola:
        npm run serve

7. Se abrirá el navegador con el sitio web "index.html" que se encuentra dentro de la carpeta "www".
8. Si se realiza un cambio en el archivo "index.html" y se guardan dichos cambios, automáticamente
   esos cambios se verán reflejados en el sitio web del navegador. 
*/

const gulp = require("gulp"),
  server = require("gulp-server-livereload");

/* ************* Crear tarea 1 ************* */
/* Se crea una tarea en Gulp. En este caso se llamó "build", pero el nombre puede ser cualquiera.  */
gulp.task("build", function (callback) {
  console.log("Construyendo el sitio. ");

  setTimeout(callback, 1200);
});

/* ************* Crear tarea 2 ************* */
gulp.task("serve", function (callback) {
  /* El atributo "src" permite indicar la carpeta dentro de la cual se encuentran los archivos
     que serán cargados en el servidor. 
    En este caso, dentro de la carpeta "www", se encuentra el archivo "index.html", el cual
    será cargado cada vez que se ejecute la tarea "serve": npm run serve. 
*/
  gulp.src("www").pipe(
    /* Se le envían al servidor algunas opciones de configuración. */
    server({
      /* Si hay algún cambio en el código, el servidor se actualizará automáticamente. */
      livereload: true,
      /* El atributo "open" abrirá automáticamente el código. */
      open: true,
    })
  );
});

/* Crear tareas por defecto en Gulp:
    1. Escribir el comando: 
            gulp.task("default", gulp.series("tarea1", "tarea2")) ;
    2. En package.json, agregar en la sección de "scripts" lo siguiente:
        "nombreTareaDeafault": "gulp"

        Ejemplo: (en este caso, se le llamó a la tarea "start")
            "start": "gulp"
    3. Para ejecutar las tareas por default: 
            npm run nombreTareaDefault
        
        Ejemplo: 
            npm run start
*/

gulp.task("default", gulp.series("build", "serve"));
