/* 
¿Qué es el Web Scrapping?

El web scraping o el raspado de páginas web es una técnica que consiste en usar un software programado (bot, crawler o spider) para rastrear uno o varios sitios web y extraer automáticamente la información, los contenidos y otros datosque contienen. 

¿Para qué se utiliza el web scraping?

En la actualidad, son muchas las empresas que recurren al web scraping a modo de “ayuda” para hacer investigación de mercado, conseguir información relevante de la competencia y utilizarla con la idea de mejorar sus estrategias de negocio. 
*/

/* Se deben seguir los siguientes pasospara realizar Web Scrapping: 
        1. Inicializar "npm": 
                npm init -y
        2. Instalar el módulo "puppeteer", el cual permite realizar Scrapping:
            npm install puppeteer


*/
/* El módulo "puppeteer" funciona de manera asíncrona. */
const puppeteer = require("puppeteer");

/* Se crea una función anónima autoejecutable. */
(async () => {
  console.log("Lanzamos el navegador.");

  // Lanzar un navegador
  /* 
    Si se desea que el navegador sea visible, se debe escribir la siguiente línea: 
        const browser = await puppeteer.launch({ headless: false }); 
        
    Si no se desea que el navegador sea visible, se debe escribir lo siguiente: 
        const browser = await puppeteer.launch(); 
  */
  const browser = await puppeteer.launch({ headless: false });

  // Abrir una página en el navegador a la que se le desea hacer Web Scrapping.
  const page = await browser.newPage();
  await page.goto("https://es.wikipedia.org/wiki/Node.js");

  /* Por medio del método "evaluate()", se indica que se evaluará la página anterior. 
  Luego, por medio del método "document.querySelector" se buscará al selector "h1" 
  y por medio de la propiedad "innerHTML" se capturará todo su contenido.

  En este caso, el contenido del elemento "h1" es: 
        <span class="mw-page-title-main">Node.js</span>
    
  */
  let titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.group("Contenido del elemento 'h1'");
    console.log(
      "El contenido del elemento 'h1' del sitio web es: " + h1.innerHTML
    );
    console.groupEnd();
    return h1.innerHTML;
  });

  /* Se despliega en consola la invocación de la función "titulo1". */
  console.log(titulo1);

  console.log("Cerramos navegador...");
  // El método "close()" cierra el navegadfor.
  browser.close();
  console.log("Navegador cerrado.");
})();
