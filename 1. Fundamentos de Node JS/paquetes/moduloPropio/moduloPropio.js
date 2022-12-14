function saludar() {
  console.log("Hola Mundo");
}

/* Para poder utilizar la función "saludar()" desde otro archivo, es necesario exportarla. En este caso, además de la función "saludar()",
se exportarán otras propiedades dentro de un objeto. */
module.exports = {
  /* Cuando el nombre de la propiedad y su valor son iguales, se puede sintetizar de la siguiente forma:
    
                saludar: saludar,
    
       Se puede abreviar como: 

                saludar,
        
        */
  saludar,
  prop1: "¿Cómo estás?",
};
