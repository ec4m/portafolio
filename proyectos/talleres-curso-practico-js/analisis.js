//Analisis de los salarios
//Helpers
function esPar(numero) {
    return (numero % 2 ==0);
}

//Mediana General
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
)

const salariosColSorted = salariosCol.sort(
    function(a, b) {
        return a - b;
    }
)

//calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elemento1 = mitad - 1;
        const elemento2 = mitad;
        let mediana = (lista[elemento1] + lista[elemento2]) / 2;
        return mediana;
    } else {
        let mediana = lista[mitad];
        return mediana;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%
const spliceStart = (salariosColSorted.length * (90)) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart, 
    spliceCount
    );

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});