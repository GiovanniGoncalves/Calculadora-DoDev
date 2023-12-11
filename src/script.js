///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Calculadora(num1, num2, operador) {
  // Convertendo as strings para números
  const numero1 = parseFloat(num1);
  const numero2 = parseFloat(num2);

  // Variável para armazenar o resultado
  let resultado;

  // Realizando a operação com base no operador
  switch (operador) {
      case '+':
          resultado = numero1 + numero2;
          break;
      case '-':
          resultado = numero1 - numero2;
          break;
      case '*':
          resultado = numero1 * numero2;
          break;
      case '/':
          if (numero2 !== 0) {
              resultado = numero1 / numero2;
          } else {
              return '/0 não existe';
          }
          break;
      case 'e':
          resultado = 1;
          for (let contador = 0; i < numero2; contador++) {
              resultado *= numero1;
          }
          break;
      default:
          return 'Operador inválido';
  }

     // Substituindo o resultado por "ERRO" se for undefined ou maior que 1.000.000
     if (resultado === undefined || resultado > 1000000) {
      resultado = 'ERRO';
  }

  return resultado;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}