class Singleton{

    static instancia;
    nombre = '';

    constructor(nombre = ''){
        //Si si exitste una instancia
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre=nombre;
        // return this;
    }
}

const instancia = new Singleton('Ironman');
console.log(`Nombre de instancia 1: ${instancia.nombre} `);

const instancia2 = new Singleton('Thor');
console.log(`Nombre de instancia 2: ${instancia2.nombre} `);