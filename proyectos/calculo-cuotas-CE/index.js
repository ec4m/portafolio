//funciones de utilidad
let valorCuota = 0;
//Encontrar el maximo valor de un array
function maximoValorArray(array) {
    const posicion = array.length - 1;
    return array[posicion];
}

function calcularCuotasInteresSimple(capital, interes, time) {
    const cuotaSimple = capital / time;
    const intMensualSimple = (capital * interes) / 100;
    const cuotaConIntSimple = cuotaSimple + intMensualSimple; //cuotas fijas mensuales
    const cuotaConIntSimpleRedondeada = cuotaConIntSimple.toFixed(2);

    const totalAPagar = cuotaConIntSimple * time;
    const totalAPagarRedondeado = totalAPagar.toFixed(2);

    return {
        cuotas: time,
        interes: interes,
        valorCuotas: cuotaConIntSimpleRedondeada,
        total: totalAPagarRedondeado,
    };
}

function calcularCuotasInteresCompuesto(capital, interes, time) {
    const cuotaCompuesta = capital / time;
    let nuevoCapital = capital;
    
    const cuotasDeInteresCompuesto = [];
    let sumaDeCuotasCompuestas = 0;

    for (let i = 0; i < time; i++) {
        let intMensualCompuesto = (nuevoCapital * interes) / 100;
        let cuotaConIntCompuesto = cuotaCompuesta + intMensualCompuesto; 

        cuotasDeInteresCompuesto.push(cuotaConIntCompuesto); //Le empujo un valor de cuota a un array

        nuevoCapital = nuevoCapital + intMensualCompuesto;

        sumaDeCuotasCompuestas = sumaDeCuotasCompuestas + cuotaConIntCompuesto; 
    }
    const sumaDeCuotasCompuestasRedondeadas = sumaDeCuotasCompuestas.toFixed(2);
    
    const valorDeCuotas = maximoValorArray(cuotasDeInteresCompuesto);
    const valorDeCuotasRedondeado = valorDeCuotas.toFixed(2);

    return {
        cuotas: time,
        interes: interes,
        valorCuotas: cuotasDeInteresCompuesto,
        valorMaxCuotas: valorDeCuotasRedondeado,
        total: sumaDeCuotasCompuestasRedondeadas,
    };

}
// boton de calcular Cuotas:
function calcularCuotas() {
    const tipoInt = document.getElementById("InputTipoInteres");
    const tipoIntValue = tipoInt.value;
    const capital = document.getElementById("InputCapital");
    const capitalValue = parseInt(capital.value);
    const interes = document.getElementById("InputInteres");
    const interesValue = parseInt(interes.value);
    const time = document.getElementById("InputTime");
    const timeValue = parseInt(time.value);

    if (tipoIntValue == "simple") {     //calculo de cuotas simples
        const simple = calcularCuotasInteresSimple(capitalValue, interesValue, timeValue);
        console.log(simple);

        const resultadoSimple = document.getElementById("OutputCuota");
        resultadoSimple.innerText = `Para sacar un credito por $${capitalValue} a un plazo de ${simple.cuotas} meses y una tasa de interes mensual del ${simple.interes}%, tendras que pagar cuotas de $${simple.valorCuotas}. Para terminar devolviendo un total de $${simple.total}.`;
        valorCuota = simple.valorCuotas;
        
    } else if (tipoIntValue == "compuesto") {  //calculo de cuotas compuestas
        const compuesto = calcularCuotasInteresCompuesto(capitalValue, interesValue, timeValue);
        console.log(compuesto);
        
        const resultadoSimple = document.getElementById("OutputCuota");
        resultadoSimple.innerText = `Para sacar un credito por $${capitalValue} a un plazo de ${compuesto.cuotas} meses y una tasa de interes mensual del ${compuesto.interes}%, tendras que pagar cuotas como maximo de ${compuesto.valorMaxCuotas}. Para terminar devolviendo un total de $${compuesto.total}.`;
        valorCuota = compuesto.valorMaxCuotas;
    } else {
        console.log("Tipo de interes no selecionado");
    }
} 


//Capacidad de endeudamiento

function calcularCE() {

    const ingresos = document.getElementById("InputIngresos");
    const ingresosValue = ingresos.value;
    const gastos = document.getElementById("InputGastos");
    const gastosValue = gastos.value;
    
    const CE = (ingresosValue - gastosValue) * 0.35;

    const resultadoCE = document.getElementById("OutputCE");

    if (valorCuota < CE) {
        resultadoCE.innerText = `Tu capacidad de endeudamiento es de $${CE}. Puedes pagar facilmente cuotas de ${valorCuota}, por lo tanto el credito SI sera aceptado por el Banco.`;
    } else {
        resultadoCE.innerText = `Tu capacidad de endeudamiento es de $${CE}. No puedes pagar facilmente cuotas de ${valorCuota}, por lo tanto el credito NO sera aprobado por el Banco. Lo sentimos.`
    }
    
}
