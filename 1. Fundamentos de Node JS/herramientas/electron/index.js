/* 
¿Qué es Electron?
Electron es un framework para crear aplicaciones de escritorio usando JavaScript, HTML y CSS. 
Incrustando Chromium y Node.js dentro del mismo, Electron le permite mantener una base de 
código JavaScript y crear aplicaciones multiplataforma que funcionan en Windows, macOS y Linux, - no requiere experiencia en desarrollo nativo.

Para instalarlo, se deben escribir los siguientes comandos: 
        npm install electron


Sitio web oficial: https://www.electronjs.org/es/



Para conseguir que el sitio web se muestre como aplicación de escritorio, 
es necesario ejecutar desde Electrón, realizando los siguientes pasos: 
        1. Inicializar npm: 
                npm init -y
        2. Instalar "electron":
                npm install electron
        3. Abrir el archivo "package.json" y buscar la sección de "scripts" y agregar 
           lo siguiente: 
                "nombreComando": "electron ."    (se escribió el punto, porque se está indicando que el archivo "index.js", se encuentra en la ubicación actual, 
                                                  si dicho archivo estuviera en otra ubicación, habría que utilizar "../"  para poder acceder a la carpeta que corresponda.)
                
                Ejemplo: 
                        "start": "electron . "
        4. Para ejecutar la aplicació, se debe escribir el comando que se agregó en el área de "scripts": 

                npm nombreComando

                Ejemplo: 
                        npm start
                         
*/

/* Se importan desde el módulo "Electron", las clases: "app" y "Browser". */
const { app, BrowserWindows, BrowserWindow } = require("electron");

let mainWindow;

/* La clase "app" crea los procesos necesarios para poder visualizar ventanas. 
Pero no se puede utilizar sino hasta que haya cargado completamente, por ello
se utiliza el evento "ready", el cual permitirá determinar si la clase "app"
ya cargó correctamente, para luego entonces ejecutar la función "crearVentana()".

El método "on" (app.on())  permite escuchar un evento
*/
app.on("ready", crearVentana);

function crearVentana() {
  /* Se crea una instancia de la clase "BrowserWindow", la cual crea una nueva ventana con las medidas especificadas.  */
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  /* En la instancia "mainWindow" se carga el sitio web que se desea mostrar en esa ventana.  */
  mainWindow.loadFile("index.html");
}
