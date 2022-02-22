const lista1 = [
    100,
    200,
    500,
    400000000,
    49,
    30
];

function calcularPromedio(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0,nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function calcularMediana(lista) {
    const listaDeNumeros = lista.sort(
        function(a,b) {
            return a - b;
        }
    );
    const mitadLista = parseInt(listaDeNumeros.length / 2) ;
    
    let mediana;
    
    if (esPar(listaDeNumeros.length)) {
        const elemento1 = listaDeNumeros[mitadLista - 1];
        const elemento2 = listaDeNumeros[mitadLista];
        const promedioElement1y2 = calcularPromedio([elemento1, elemento2]);
        mediana = promedioElement1y2;
        console.log(mediana);
    } else {
        mediana = listaDeNumeros[mitadLista];
        console.log(mediana);
    }
}

function esPar(numero) {
    if(numero % 2 === 0) {
        return true;
    } else {
        return false;
    }

}

const lista = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    2,
    1,4,4,4,4,4,4,4,4
];

function calcularModa(lista) {   
    const listaCount = {};
    
    lista.map(
        function(elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] ++;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    );
    
    const moda = listaArray[listaArray.length - 1];
    console.log(moda);
}
 


