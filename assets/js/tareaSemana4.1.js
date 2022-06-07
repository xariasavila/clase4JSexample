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




//FUNCION FLECHA

sumarNotas = (n1, n2, n3, n4, n5, n6) => n1 + n2 + n3 + n4 + n5 + n6;
const totalSuma = sumarNotas(1, 1, 1, 1, 1, 1);
console.log("La suma de las notas es :" + totalSuma);

calculaPromedio = (totalSuma) => totalSuma / 6;
const promedioFinal = calculaPromedio(totalSuma);
console.log("El promedio es :" + promedioFinal);

//FUNCION LARGA
function sumaNotas(a, b, c) {
    return a + b + c;
}
  
  var suma = sumaNotas(3, 4, 5);

  function promedio(suma) {
    return suma / 6;
  }

  var promedio = promedio(suma, 6);

  console.log("La suma de las notas es :" + suma);
  console.log("el promedio es :" + promedio);