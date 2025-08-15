// Cargar Navbar
fetch("/public/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  });

// Calcular rentabilidad
function calcularRentabilidad() {
  const plazo = parseInt(document.getElementById("input_plazo").value);
  const monto = parseFloat(document.getElementById("input_monto").value);
  const interes = parseFloat(document.getElementById("input_interes").value);

  let intereses = 0;
  if (interes === 2) {
    intereses = (monto * interes) / 100 * plazo;
  }

  const saldoTotal = monto + intereses;

  document.getElementById("intereses").innerHTML =
    intereses > 0 ? `Total Intereses: ${intereses}` : "Sin Intereses";
  document.getElementById("saldo").innerHTML = `Saldo Inicial: ${monto}`;
  document.getElementById("saldototal").innerHTML = `Total Saldo: ${saldoTotal}`;
}

// Validar si un número es par o impar
function validarNumero() {
  const num = parseInt(document.getElementById("input_num").value);
  document.getElementById("resultado").innerHTML =
    num % 2 === 0 ? "Número Par" : "Número Impar";
}

// Validar si es mayor o igual a 10 y triplicar
function validarDos() {
  const num = parseInt(document.getElementById("input_num").value);
  document.getElementById("resultado").innerHTML =
    num >= 10 ? `Número: ${num * 3}` : "Número no es mayor ni igual a 10";
}

// Calcular compra con IVA y posible descuento
function calcularCompra() {
  const DESCUENTO = 10;
  const PRECIO_MIN = 1000000;
  const IVA = 19;

  const valorCompra = parseFloat(document.getElementById("input_vlrcompra").value);
  const vlrIva = (valorCompra * IVA) / 100;
  const vlrConIva = valorCompra + vlrIva;

  if (valorCompra >= PRECIO_MIN) {
    const vlrDescuento = (valorCompra * DESCUENTO) / 100;
    const total = vlrConIva - vlrDescuento;

    document.getElementById("valorcompra").innerHTML = `El valor de su compra: ${valorCompra}`;
    document.getElementById("descuento").innerHTML = `Valor descuento: ${vlrDescuento}`;
    document.getElementById("iva").innerHTML = `IVA: ${vlrIva}`;
    document.getElementById("Total").innerHTML = `Total con IVA y descuento: ${total}`;
  } else {
    document.getElementById("descuento").innerHTML = "Sin descuento: su compra no supera el valor mínimo";
    document.getElementById("iva").innerHTML = `IVA: ${vlrIva}`;
    document.getElementById("Total").innerHTML = `Total con IVA: ${vlrConIva}`;
  }
}
