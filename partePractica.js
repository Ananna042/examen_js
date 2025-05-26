//ejercicio 1
//a)
const numeros = [3, 7, 2, 9, 12, 5, 8];
numeros.forEach(function(numero){
    if (numero > 5) {
        console.log(numero);
    }
});

//B)
let pares = numeros.filter(n => n % 2 === 0);

//ejercicio 2
const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Juan", nota: 5 },
  { nombre: "Lucía", nota: 9 },
  { nombre: "Pedro", nota: 4 }];

// a)
const nombres = estudiantes.map(estudiante => estudiante.nombre);
console.log(nombres); 

//b)
const ap = estudiantes.filter(estudiante => estudiante.nota >= 6);
console.log(ap);

//c)
const aprobados = estudiantes.map(estudiantes => {
if ( estudiantes.nota >= 6)
  console.log("aprobado")
else
  console.log("desaprobado")

});
console.log(aprobados)

