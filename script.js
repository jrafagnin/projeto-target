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
      developmentText: `
Levando em conta os dados de input:

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
      developmentText: 'Desenvolvimento da Questão 2...',
      answerText: 'Resposta para a Questão 2...'
  },
  3: {
      titleImage: 'assets/questao3.jpg',
      developmentText: 'Desenvolvimento da Questão 3...',
      answerText: 'Resposta para a Questão 3...'
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
