
//Ejemplo del problema de referencia, solo aplica para ob¿jetos los primitivos son por valor.
let juan = {"nombre":"Juancho"};
let ana = {...juan};
ana.nombre = "Anita";
// console.log({juan, ana});

//Segundo ejemplo del problema con función
const cambiarNombre = ( {...persona} )=>{
    persona.nombre = "Tony";
    return persona;
};
let peter = {"nombre":"Peter Pank"};
let cambiado = cambiarNombre(peter);
console.log({cambiado, peter});

// SOLUCIÓN
// OPERADOR SPREAD ...

//pARA ARREGLOS
let frutas=['Manzana','Pera','Bananno'];
let otrasFrutas = [...frutas];
otrasFrutas.push('Kiwi');
console.table({frutas,otrasFrutas});


///Alternativa al if else
let dia =3;
let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes,", "Sabado"];
console.log("El dia es:", dias[3]);