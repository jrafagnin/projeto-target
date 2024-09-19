// 1) Observe o trecho de código:

// int INDICE = 12, SOMA = 0, K = 1;

// enquanto K < INDICE faça

// { K = K + 1; SOMA = SOMA + K;}

// imprimir(SOMA);


// Ao final do processamento, qual será o valor da variável SOMA?

// tendo em vista os seguintes dados:
// indice = 12
// soma = 0
// K = 1

// o algoritmo apresentado mostra um loop de while utilizando K como indice inicial e INDICE como indice final e implementando incremento em K com K=K+1, 
// o algoritmo mostra que com esse loop o codigo sera executado 11 vezes e cada execucao ira incrementar na variavel SOMA o valor atual de K.
// levando isso em consideracao, ao final do processamento o valor da variavel soma sera 

function changeMessage(title, development, answer) {
  document.getElementById('message-title').textContent = title;
  document.getElementById('message-development').textContent = development;
  document.getElementById('message-answer').textContent = answer;
}

document.getElementById('externalLinkButton').addEventListener('click', function() {
  window.location.href = 'https://www.linkedin.com/in/jo%C3%A3o-vitor-rafagnin-611678129/'; // Substitua pelo URL desejado
});
