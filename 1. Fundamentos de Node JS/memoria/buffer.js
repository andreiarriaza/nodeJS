/* 
Buffer: un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.
Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato)
En la consola, los datos se muestran en formato hexadecimal.

*/

// Se crea un Buffer de 1 posición:
let buffer = Buffer.alloc(1);

/* 
Se despliega el buffer creado anteriormente, el cual tiene 1 posición, y se muestra en
formato hexadecimal. 

En este caso, como está vacío, mostrará: 
    <Buffer 00>
*/
console.group("buffer");
console.log(buffer);
console.groupEnd();

/* El método "from()" permite definir los valores del buffer. */
let buffer2 = Buffer.from([1, 2, 3, 4]);
// Desplegará: <Buffer 01 02 03 04>
console.group("buffer2");
console.log(buffer2);
console.groupEnd();

/* Ahora se asigna al buffer una cadena de texto. */
let buffer3 = Buffer.from("Hola");
// Desplegará: <Buffer 48 6f 6c 61>
console.group("buffer3");
console.log(buffer3);
console.groupEnd();

//Convertir buffer3 a String
console.group("buffer3 convertido a String");
// Desplegará la palabra "Hola"
console.log(buffer3.toString());
console.groupEnd();

/* Crear abecedario con Buffer */
let abc = Buffer.alloc(26);
console.group("Buffer 'abc' vacío");
console.log(abc);
console.groupEnd();

/* Se recorrerá cada elemento del buffer "abc". */
for (let i = 0; i < 26; i++) {
  /* 
    A cada posición del buffer "abc" se le asigna por medio del código ASCII la letra que almacenará. 

    El código ASCII que corresponde a la letra "a" es el 97. Por ello se le irá sumando 
    al contador "i" el número 97. 
    
    La primera vez, la operación quedará así: 0 + 97 = 97 (letra "a").
    La segunda vez, la operación quedará así: 1 + 97 = 98 (letra "b").
    Y así sucesivamente...
    */
  abc[i] = i + 97;
}

console.group("Buffer 'abc' lleno");
console.log(abc);
console.groupEnd();

console.group("Buffer 'abc' lleno convertido a String");
console.log(abc.toString());
console.groupEnd();
