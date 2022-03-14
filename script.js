function Converter(variavel) {
  var dolar = 5.12;
  var valorElemento = document.getElementById("valor");
  var valorElementoDolar = document.getElementById("valorDolar");

  console.log(variavel);
  if (variavel == "real") {
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * dolar;
    var valorEmReal = valorEmReal.toFixed(1);

    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Resultado da conversão para Real R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }

  if (variavel == "dolar") {
    var valor = valorElementoDolar.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmDolar = valorEmDolarNumerico / dolar;
    var valorEmDolar = valorEmDolar.toFixed(1);
    console.log(valorEmDolar);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "Resultado da conversão para Dólar US$ " + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}
