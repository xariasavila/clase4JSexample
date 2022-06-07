const nombre = 'Juan'
const edad = '23'
const casado = true || false
const colores = ['rojo', 'verde','azul']

//objeto
const cliente = {

    nombre: 'juan',
    edad: '23',
    casado: true,
    direccion: {
        calle: 'calle 123',
            ciudad: 'madrid',
        pais: 'españa'
    },
 
    pedido: ['camisa', 'pantalon', 'corbata'],
    saludo: function () {
        console.log('hola!');
    }
}

console.log(colores[0], cliente.nombre,cliente.direccion.calle)

console.log(cliente.saludo());

const nuevaFuncion = function () {
    console.log('imprimo funcion nueva');

}

nuevaFuncion();


const miNuevaFuncion2 = () =>  // funcion de flecha
{
    let xx = 'variable extra';
    console.log('imprimo mi funcion 2' + xx)

}

miNuevaFuncion2();