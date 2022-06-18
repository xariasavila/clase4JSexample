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

unoCien();
milQuinientos();

//FUNCION FLECHA

const sumarNotas = (n1, n2, n3, n4, n5, n6) => n1 + n2 + n3 + n4 + n5 + n6;
const totalSuma = sumarNotas(6, 8, 9, 2, 5, 10);
console.log("La suma de las notas es :" + totalSuma);

const calculaPromedio = (totalSuma) => totalSuma / 6;
const promedioFinal = calculaPromedio(totalSuma);
console.log("El promedio es :" + promedioFinal);

//FUNCION LARGA
function sumaNotas(n1, n2, n3, n4, n5, n6) {
  return n1 + n2 + n3 + n4 + n5 + n6;
}

var suma = sumaNotas(6, 8, 9, 2, 5, 10);
function promedio(suma) {
  return suma / 6;
}

var promedio = promedio(suma, 6);

console.log("Funcion larga:::La suma de las notas es :" + suma);
console.log("Funcion larga:::el promedio es :" + promedio);
