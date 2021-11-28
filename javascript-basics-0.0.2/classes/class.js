
class PersonaNatural {

    //Propiedad estatica
    static _conteo = 0;
    static get obtenerConteo(){
        return PersonaNatural._conteo + ': instancias';
    }
    static mensaje(){
        console.log('Mensa de metodo estatico');
    }

    //Propiedades instanciadas
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    constructor(nombre, codigo , frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        //Change value static property
        PersonaNatural._conteo++;
    }
    //get and set
    set setComida(comida){
        this.comida = comida.toUpperCase();
    }
    get getComida(){
        return `La comida favorita es ${this.comida}`;
    }


    //other methods
    showMe() {
        console.log(`Soy ${this.nombre} - ${this.codigo}`);
    }
    miFrase() {
        this.showMe();
        console.log(`Mi frase: ${this.frase}`);
    }

}

const persona = new PersonaNatural('Peter parker', 'Spiderman', 'am friendly');
persona.miFrase();
persona.setComida = 'Carne asada';

//static value
console.log('Conteo estático', PersonaNatural._conteo );
//static methods
console.log(PersonaNatural.obtenerConteo);
PersonaNatural.mensaje();
