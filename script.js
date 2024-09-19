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

const myButton = document.getElementById('myButton');
const message = document.getElementById('message');

// Botao para primeira questao
myButton.addEventListener('click', function() {
    // Alterar o conteúdo do parágrafo quando o botão for clicado
    message.textContent = 'Hello, you clicked the button!';
});

