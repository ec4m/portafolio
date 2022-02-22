// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;  
}

function areaCuadrado(lado) {
    return lado * lado;
} 

console.groupEnd();


console.group("Triángulos");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();


console.group("Círculo");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI equivale a " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;
} 

//Area
function areaCirculo(radio) {
    return (radio * radio) * PI; 
} 

console.groupEnd();

//Interactuamos con el HTML
//Funciones del cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
//Funciones del triángulo
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputLado1");
    const valueLado1 = parseInt(lado1.value);

    const lado2 = document.getElementById("InputLado2");
    const valueLado2 = parseInt(lado2.value);

    const base = document.getElementById("InputBase");
    const valueBase = parseInt(base.value);

    const perimetro = valueLado1 + valueLado2 + valueBase;
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputBase");
    const valueBase = parseInt(base.value);
    
    const altura = document.getElementById("InputAltura");
    const valueAltura = parseInt(altura.value);

    const area = (valueBase * valueAltura) / 2;
    alert(area);
}
//Funciones del círculo 
function calcularDiametroCirculo() {
    const radio = document.getElementById("InputRadio");
    const valueRadio = radio.value;

    const diametro = valueRadio * 2;
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputRadio");
    const valueRadio = radio.value;
    const PI = 3.1415;

    const perimetro = valueRadio * 2 * PI;
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputRadio");
    const valueRadio = radio.value;
    const PI = 3.1415;

    const area = (valueRadio * valueRadio) * PI;
    alert(area);
}
//Altura triángulo isóseles
function calcularAlturaIsoseles() {
    const lado1 = document.getElementById("InputLadoIs1");
    const valueLado1 = parseInt(lado1.value);

    const lado2 = document.getElementById("InputLadoIs2");
    const valueLado2 = parseInt(lado2.value);

    const base = document.getElementById("InputBaseIs");
    const valueBase = parseInt(base.value);

    if(valueLado1 == valueLado2) {
        const altura = Math.sqrt((valueLado1 * valueLado1) - ((valueBase * valueBase)/2));
        alert(altura);
    } else {
        alert("Las alturas tienen valores diferentes, vuelve a intenrlo.");
    }
}