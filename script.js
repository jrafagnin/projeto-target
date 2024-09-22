function updateMessage(messageTitleUrl, developmentText, answerText) {
  // Atualiza a imagem de fundo
  document.getElementById('message-title').style.backgroundImage = `url('${messageTitleUrl}')`;
  
  // Cria um novo elemento de imagem para obter a altura
  const img = new Image();
  img.src = messageTitleUrl;

  img.onload = function() {
      // Define a altura do contêiner com base na altura da imagem carregada
      document.getElementById('message-title').style.height = `${img.height}px`;
  };

  // Atualiza o conteúdo dos outros elementos
  document.getElementById('message-development').textContent = developmentText;
  document.getElementById('message-answer').textContent = answerText;
}

// Mapeamento das imagens e textos para cada botão
const messages = {
  1: {
      titleImage: 'assets/questao1.jpg',
      developmentText: `Levando em conta os dados de input:

	INDICE = 12
	SOMA = 0
	K = 1

O código informado ira atuar da seguinte forma:

	- Cria-se um loop com While tendo a condição de:
		"enquanto K for menor que INDICE faca"

	- Executa o código onde:
		"acrescenta 1 em K e armazena o valor atual de SOMA somado ao valor atual de K"

	- Imprime o valor de SOMA.

O código executado em JavaScript sera:

const INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
    K += 1; // Usando incremento +=
    SOMA += K; // Usando incremento +=
}

console.log(SOMA);
`,
      answerText: 'Resposta: Ao final do processamento a variavel SOMA, tera o valor de 77.'
  },
  2: {
      titleImage: 'assets/questao2.jpg',
      developmentText: `a) Os números são incrementados de 2 em 2 
b) Os números são multiplicados de 2 em 2 
c) Os números são definidos por seu índice elevado ao quadrado
d) Os números são definidos como a (raiz quadrada do numero anterior + 2)²
e) Os números são a soma dos dois números anteriores
f) Os números são todos que iniciam com a letra D em ordem crescente
`,
      answerText: `RESPOSTAS:
a) 7 + 2 = 9
b) 64 * 2 = 128
c) 7² = 49
d) ((raiz quadrada de 64)+2)² = 100
e) 8 + 5 = 13
f) 200
`
  },
  3: {
      titleImage: 'assets/questao3.jpg',
      developmentText: `
Optei por utilizar JavaScript devido à minha maior familiaridade com a linguagem. Inicialmente, declarei uma função para retornar os valores solicitados no enunciado. 
Em seguida, utilizei o método filter para remover do vetor os dias sem faturamento, selecionando apenas os valores maiores que zero.

Apliquei o método reduce para somar todos os elementos do array filtrado, obtendo o valor total do faturamento. A média anual foi calculada dividindo a soma total pela 
quantidade de dias com faturamento.

Para determinar o menor e o maior valor de faturamento, utilizei os métodos Math.min e Math.max, respectivamente, sobre o array filtrado. Por fim, apliquei o método 
filter mais uma vez para identificar os dias em que o faturamento superou a média anual, contando a quantidade de elementos no novo array resultante.
      `,
      answerText: `
    function analisarFaturamento(faturamentoDiario) {

    const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);

    const somaTotal = diasComFaturamento.reduce((total, valor) => total + valor, 0);

    const mediaAnual = somaTotal / diasComFaturamento.length;

    const menorValor = Math.min(...diasComFaturamento);
    const maiorValor = Math.max(...diasComFaturamento);

    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaAnual).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

const faturamentoDiario = [1000, 2000, 0, 3000, 1500, 0, 2500];
const resultado = analisarFaturamento(faturamentoDiario);

console.log("Menor valor:", resultado.menorValor);
console.log("Maior valor:", resultado.maiorValor);
console.log("Dias acima da média:", resultado.diasAcimaDaMedia);
      `
  },
  4: {
      titleImage: 'assets/questao4.jpg',
      developmentText: 'Desenvolvimento da Questão 4...',
      answerText: 'Resposta para a Questão 4...'
  },
  5: {
      titleImage: 'assets/questao5.jpg',
      developmentText: 'Desenvolvimento da Questão 5...',
      answerText: 'Resposta para a Questão 5...'
  }
};

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      if (messages[id]) {
          const { titleImage, developmentText, answerText } = messages[id];
          updateMessage(titleImage, developmentText, answerText);
      }
  });
});

document.getElementById('externalLinkButton').addEventListener('click', function() {
  window.location.href = 'https://www.linkedin.com/in/jo%C3%A3o-vitor-rafagnin-611678129/'; // Substitua pelo URL desejado
});
