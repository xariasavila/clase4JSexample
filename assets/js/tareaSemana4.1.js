const unoCien = () => {
  for (i = 1; i <= 100; i++) {
    console.log(i);
  }
};

const milQuinientos = () => {
  for (i = 1000; i >= 500; i--) {
    console.log(i);
  }
};

//unoCien();
//milQuinientos();

/*function sumaNotas(a, b, c) {
    return a + b + c;
  }

  var suma = sumaNotas(3, 4, 5);

  function promedio(suma, q) {
    return suma / 6;
  }

  var promedio = promedio(suma, 6);

  console.log("La suma de las notas es :" + suma);
  console.log("el promedio es :" + promedio);
}
*/

//const sumaNotas = (a, b, c) => a + b + c;
function sumaNotas(a, b, c) {
  return a + b + c;
}
var suma = sumaNotas(3, 4, 5);

//sumaNotas(1, 2, 3);
console.log("La suma de las notas es :" + sumaNotas);
