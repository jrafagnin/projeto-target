function analisarFaturamento(faturamentoDiario) {
    // Remover dias sem faturamento utilizando .filter
    const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);

    // Calcular o valor total utilizando o metodo reduce que reduz o array em um unico elemento, utilizando 
    // uma arrow function os argumentos passados para o metodo reduce serao: TOTAL  que funciona como 
    // acumulador para os valores, VALOR que representa o valor atual do elemento do array que sera acrescido a TOTAL e
    // 0 que sera o valor inicial atribuido a TOTAL.
    const somaTotal = diasComFaturamento.reduce((total, valor) => total + valor, 0);

    // Calcular a média anual
    const mediaAnual = somaTotal / diasComFaturamento.length;

    // Encontrar o menor e maior valor utilizando os metodos min e max
    const menorValor = Math.min(...diasComFaturamento);
    const maiorValor = Math.max(...diasComFaturamento);

    // Contar dias com faturamento acima da média utilizando um filtro que ira separar os valores acima da media
    // em outro array e definir a quantidade de dias acima da media pelo tamanho do array criado.
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaAnual).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

// Exemplo de uso:
const faturamentoDiario = [1000, 2000, 0, 3000, 1500, 0, 2500];
const resultado = analisarFaturamento(faturamentoDiario);

console.log("Menor valor:", resultado.menorValor);
console.log("Maior valor:", resultado.maiorValor);
console.log("Dias acima da média:", resultado.diasAcimaDaMedia);