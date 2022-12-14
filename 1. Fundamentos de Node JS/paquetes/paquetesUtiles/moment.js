/* 
El paquete "moment" facilita el trabajo con "fechas".

Para instalarlo: 
    npm install moment
*/

const moment = require("moment");

let ahora = moment();

/* Devuelve la fecha y hora actuales. */
console.log(ahora.toString());

// Darle formato a la fecha: día/mes/año - hora actual
console.log(ahora.format("DD/MM/YYYY - HH:mm"));
