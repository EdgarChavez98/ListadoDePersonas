//Se crea una claase para el objeto persona
class persona{
    //Se crea el constructor de la clase con los parametros de nombre y apellido
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //Métodos get y set para el nombre
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    //Métodos get y set para el apellido
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}