class Rectangulo {
    //propiedad privada
    #area=0;

    constructor(base, altura){
        this.base= base;
        this.altura= altura;
        this.#area= base * altura;
    }
}

const rectangulo = new Rectangulo(10,15);
//no deja modificar el valor de una propiedad privada de clase
// rectangulo.#area = 23; no permitido por ser privada
console.log(rectangulo);