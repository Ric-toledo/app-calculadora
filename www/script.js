function calcular(operacao) {
      var valor1 = parseFloat(document.getElementById('valor').value);
      var valor2 = parseFloat(document.getElementById('valor2').value);
      var resultado;

      switch (operacao) {
        case 'soma':
          resultado = valor1 + valor2;
          break;
        case 'subtracao':
          resultado = valor1 - valor2;
          break;
        case 'multiplicacao':
          resultado = valor1 * valor2;
          break;
        case 'divisao':
          resultado = valor1 / valor2;
          break;
        default:
          resultado = "Operação inválida";
      }

      document.getElementById('resultado').value = resultado;
    }