// Tenemos dos maneras de declararlas... Por funcion constructora o Expresion de clase


// FUNCIÓN CONSTRUCTORA
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
 }
 let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
 console.log(miPrimerAuto);
 console.log(miPrimerAuto.marca);


// EXPRESIÓN DE CLASE
class Auto {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
 }
 let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
 console.log(miSegundoAuto);
 console.log(miSegundoAuto.marca);



/*Los prototipos son un mecanismo por el cual todos los objetos o elementos de Javascript pueden extender sus propiedades y métodos.

El proceso en el que los objetos globales de JavaScript le extienden métodos y propiedades a cualquier tipo de dato se denomina herencia. 

Todos los objetos pueden heredar propiedades y métodos por medio de un prototipo. Gracias a estos prototipos podremos acceder al constructor de cualquier objeto para modificarlo.

LOS PROTOTIPOS SIRVEN PARA CREAR METODOS FUERA DE LA CLASE PARA APLICARLOS INDEPENDIENTEMENTE DE LA CLASE (los metodos son funciones dentro de objetos.)./*/


Array.prototype.mayorQueTres = function () {
   var arregloModificado = [];
   for (var i = 0; i < this.length; i++) {
      	if (this[ i ] > 3) {
         		arregloModificado.push(false);
     	 } else {
        		 arregloModificado.push(this[ i ]);
     	 }
   }
   return arregloModificado;
};
 
var arreglo = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayorQueTres();
console.log(nuevoArreglo);



class LatinoAmerica {
	constructor() {
		this.paises = [ ];
	};
};
 
LatinoAmerica.prototype.agregarPais = function (pais) {
   	this.paises.push(pais);
};
let continente = new LatinoAmerica();
continente.agregarPais('México');
console.log(continente.paises);


// Una clase general le heredará propiedades y métodos a otras clases. De esta forma, podremos generar distintas sub-entidades que puedan mantener sus propias características, pero que compartan algunas otras generales.

class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
 }
 //let martin = new Persona('Martin', 26);
 //martin.saludar();



 class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
let martin = new Persona('Martín', 26);
let programador = new Programador('María', 37, 4);
martin.saludar();
programador.codear();