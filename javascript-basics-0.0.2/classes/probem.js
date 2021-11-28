/**
 * Antigua forma de trabajar con Clases en JS, 
 * NO  RECOMENDADO ACTUALMENTE
**/
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`El nombre es ${nombre} - edad: ${edad}`);
    }
}
const maria = new Persona("Maria", 23);
const lulu = new Persona("Lulu", 19);
lulu.imprimir();
maria.imprimir();