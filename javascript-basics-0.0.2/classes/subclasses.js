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
class Heroe extends PersonaNatural{
    clan = 'sin clan';
    constructor(nombre,codigo,frase){
        //Dad constructor
        super(nombre,codigo,frase);
    }
    showMe(){
        super.showMe();
        console.log("Soy el hero:", this.nombre);
    }
}
const hero = new Heroe("Tarzan","Mono de la selva","Jane voy a por tí");
console.log(hero);
hero.showMe();
