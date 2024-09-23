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

// Funcao para exibir conteudo de arquivo .JSON
async function loadMessages() {
  try {
    const response = await fetch('messages.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao carregar o arquivo JSON:', error);
    return {};
  }
}
//Funcao para selecionar o conteudo a ser exibido de acordo com o botao pressionado
loadMessages().then(messages => {
  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      if (messages[id]) {
        const { titleImage, developmentText, answerText } = messages[id];
        updateMessage(titleImage, developmentText, answerText);
      }
    });
  });
});

document.getElementById('externalLinkButton').addEventListener('click', function() {
  window.location.href = 'https://www.linkedin.com/in/jo%C3%A3o-vitor-rafagnin-611678129/'; 
});

document.getElementById('buttonGithub').addEventListener('click', function() {
  window.location.href = 'https://github.com/jrafagnin'; 
});