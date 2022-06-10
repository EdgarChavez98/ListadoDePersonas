//Se crea una variable temporal para guardar el texto como un string
let texto = "";

//Se crea la función que mostrará los elementos nuevos en la lista que tendrá como parámetro la variable mostrarPersona
function mostrar(motrarPersona){
    //Se crea una constante donde se guardará el elemento con el ID lista
    const lista = document.getElementById("lista");

    //La variable texto antes creada se concatena con las variables de la clase y las etiquetas li para crear un elemento html
    texto += `<li> ${motrarPersona.nombre} ${motrarPersona.apellido}</li>`;
    //Se imprime el contenido de la variable texto
    lista.innerHTML = texto;
}

//Función que estará conectada al método onclick del botón en el documento html
function agregar(){
    //Se crean constantes para los elementos de tipo input con sus respectivos ID
    const agregarNombre = document.getElementById("nombre");
    const agregarApellido = document.getElementById("apellido");

    //Se crea una variable que creará un nuevo objeto de tipo persona, el cual agarrará los parámetros de los imputs antes declarados
    let Persona = new persona(agregarNombre.value, agregarApellido.value);

    //se crea un if que condiciona si los inputs se encuentran vacíos o con datos
    if((Persona.nombre != "") && (Persona.apellido != "")){
        //Si no se encuentran vacíos los imputs se ejecuta la función mostrar que da como parámetro el objeto Persona creado anteriormente
        mostrar(Persona);
    }else{
        //Si los imputs se encuentran vacíos enviará un mensaje de error en la consola
        console.log("Faltan datos");
    }
}