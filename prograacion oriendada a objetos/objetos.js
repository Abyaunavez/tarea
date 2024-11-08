/*
POO
Clases: se refiere a nuestro mole o plantilla para que podamos crear objetos. utiliza la palabra reservada "class"
Constructor: Es una funcion obligatoria para crear objetos atra ves de caracteristicas o atributos especificas(chefsitx)
Objetos: Es lo que contruimos atraves de la clase y el constructor
Atributo: Se refieren a las caracteristicas o propiedades de mi objeto
Metodo:Las cosas que puede hacer nuestro objeto (saludar, correr etc)
Instanciacion: se refiere a cuando ya creaos la clase,el constructor y el objeto


Herencia: cuenta la palabra reservvada extends (permite reutilizar el código de la clase padre en la clase hijo)
Polimorfismo: El comportamiento de cada objeto de la misma clase a un metodo 
Encapsulamiento : S e refiere a encerrar y/o ocultarr el codigo
Abstracción:Se refiere a ser muy especificos con los objetoss (resumir)
Modularidad: Nos permite reutilizar codigo, hhacermodificaciones, teer orden, entender y mantener el codigo

Metodos estaticos: funciones que nos permine ejecutar una clase sin instanciar al objeto utilixzan la palabra reservada "static" 
Metodos accesores: son funciones que permiten acceder y modificar las propiedades de un objeto de manera controlada. Se dividen en dos tipos: 
Getters: Métodos que se utilizan para obtener el valor de una propiedad
Setters: Métodos que se utilizan para asignar o modificar el valor de una propiedad


PRINCIPIOS SOLID

Principio de responsabilidad unica (SRP): se refiere a que cada que asingamos una clase, objeto.etc debe ser unica
principio de abierto o cerrado(OCP): se reefiere a que debemos poder extender el codigo ya existente de ser necesario
Principio de sustitución de Liskov: se refiere a que podemos tenir cualquier tipo de obketo dentro de mi clase y no se ve afecctado e4l comportamiento del mismo 
Principio de segregacion de de intefaces(ISP): se refiere a que es mejor tener distintas interfances especificas 
Principio de investiacción de dependencias(DIP):Trrabaja atraves de abstracción para que el codigo no dependa de detalles especificos


Objetos Json
Javascript Objet Notacion:
los objetos json trabajan atraves de clave(a que se refiere) valor(lo que tiene guardado como una variable) y no tienen metodos 

*/

class ch47 {//Clase principal o clase padre 
    constructor(nombre, apellido, email, edad){//nos permite crear el objeto 
        this.name = nombre;//this nos permite seleccionar el objeto que voy a crear 
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age}`
    }

    infoIntegrantes(){
        console.log(this.info);
    }
}


class mentoria extends ch47 {
    constructor (nombre, apellido, email, edad, telefono, escolaridad){
      super(nombre, apellido, email, edad,telefono, escolaridad)//super define los datos que se heredan
      this.tel = telefono; 
      this.escolaridad;
      this.info = `Holi soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age}y mi telefono ${thist.tel}` 
    }
    static darMentoria(){
      console.log("Hoy no tienes sesion");
    }
  }
 

const inte1 = new ch47 ("Abychuela", "Sanz", "aby@gmial.com", 27);//los objetos se deben definir con const
const inte2 = new instruccion ("liliana", "aguirre","lili@gmail.com", 30, "licenciatura");

const inte3 = new mentoria ("holi", "crayoli", "email@gmail.com", 27, "licsenciatura", "55522266325")

inte3.infoIntegrantes();
instruccion.darSesiones();

get edad(){
  return this._edad;
}
 set edad(nuevaEdad) {
  if (nuevaEdad >= 0 && nuevaEdad <= 120) {
    this._edad = nuevaEdad;
  } else {
    console.log("Edad no válida");
  }
}
const persona1 = new Persona("lili", 30);
persona1.edad = 30;
console.log(persona1.edad);
persona1.edad = 100;
console.log(persona1.edad);