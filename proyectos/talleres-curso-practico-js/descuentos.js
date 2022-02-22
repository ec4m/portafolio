const cuponesDeDescuento = [
    {code: 1111, discount: 10},
    {code: 2222, discount: 20},
    {code: 3333, discount: 30},
    {code: 4444, discount: 40},
    {code: 5555, discount: 50},
];

function calcularPrecioConDescuento(precio, descuento, cupon) {
    const porcentajePrecioConDescuento = 100 - descuento - cupon;
    const precioConDescuento = (precio*porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function buttonPrinceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const validar = cuponesDeDescuento.find(function(items) {
        return items.code == couponValue;
    });

    if (validar) {
        var cupon = parseInt(validar.discount);
        var precioTotal = calcularPrecioConDescuento(priceValue, discountValue, cupon);
        var resultP = document.getElementById("ResultPrice");
        resultP.innerText = "El precio con descuento del " + discountValue +"% y el cupon " + validar.code + " con " + validar.discount + "% es de $" + precioTotal;
    } else {
        alert("Su cupon no es valido");
        var cupon = 0;
        var precioTotal = calcularPrecioConDescuento(priceValue, discountValue, cupon);
        var resultP = document.getElementById("ResultPrice");
        resultP.innerText = "El precio con descuento del " + discountValue +"% es de $" + precioTotal;
        
    }

}