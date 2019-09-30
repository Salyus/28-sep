// Calculadora, suma, resta, multiplicacion, division;

function suma(sumado1, sumando2) {
  return sumado1 + sumando2;
}

function resta(restando1, restando2) {
  return restando1 - restando2;
}

function multiplicacion(producto1, producto2) {
  return producto1 * producto2;
}

function division(dividendo, divisor) {
  if (divisor === 0) {
    return "error, un número no puede ser dividido por cero!";
  }
  return dividendo / divisor;
}

function calculadora(operando1, operando2, operacion) {
  switch (operacion) {
    case "suma":
      return suma(operando1, operando2);
    case "resta":
      return resta(operando1, operando2);

    case "multiplicacion":
      return multiplicacion(operando1, operando2);
    case "division":
      return division(operando1, operando2);
    default:
      return "error, operación no soportada!";
  }
}

console.log(calculadora(6, 3, "division"));

// Registro Académico

// class Person {
//   constructor(nombre, edad, genero) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.genero = genero;
//   }
// }

// console.log(Person);

// class Teacher extends Person {
//   constructor(nombre, edad, genero, subject, studentsList) {
//     super(nombre, edad, genero);
//     this.subject = subject;
//     this.studentsList = studentsList;
//   }
// }

// console.log(Teacher);

// class Student extends Person {
//   constructor(nombre, edad, genero, course, group) {
//     super(nombre, edad, genero);
//     this.course = course;
//     this.group = group;
//   }
// }

// console.log(Student);

// const student1 = new Student("Manolo", 28, "V", "js", "a");
// const student2 = new Student("Manuela", 18, "H", "js", "b");

// const teacher1 = new Teacher("Francisco", 45, "V", "Protocol");
// const teacher2 = new Teacher("David", 30, "V", "Support");
// const teacher3 = new Teacher("Alberto", 25, "V", "Language");

//Dado Electrónico

function juegoDado() {
  let suma = 0;
  let gameOver = false;
  let aleatorio = 0;
  while (suma <= 50) {
    aleatorio = Math.round(Math.random() * 5 + 1);
    suma = suma + aleatorio;
    console.log(suma);
  }
  gameOver = true;
  console.log("gameOver");
}

juegoDado();
