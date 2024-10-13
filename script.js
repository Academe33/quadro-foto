const image = document.getElementById('image');

// Função para abrir a imagem em tela cheia
image.addEventListener('click', () => {
    // Cria uma nova imagem em tela cheia
    const fullScreenImage = document.createElement('img');
    fullScreenImage.src = image.src;
    fullScreenImage.style.width = '100%';
    fullScreenImage.style.height = '100%';
    fullScreenImage.style.objectFit = 'contain'; // Mantém a proporção da imagem

    // Estilo para tela cheia
    fullScreenImage.style.position = 'fixed';
    fullScreenImage.style.top = '0';
    fullScreenImage.style.left = '0';
    fullScreenImage.style.zIndex = '9999'; // Coloca a imagem acima de outros elementos

    // Adiciona a imagem ao corpo
    document.body.innerHTML = ''; // Limpa o conteúdo atual
    document.body.appendChild(fullScreenImage); // Adiciona a nova imagem

    // Adiciona o botão de voltar
    const returnButton = document.createElement('button');
    returnButton.innerText = 'Voltar';
    returnButton.style.position = 'absolute';
    returnButton.style.top = '20px';
    returnButton.style.left = '20px';
    returnButton.style.padding = '10px 20px';
    returnButton.style.fontSize = '16px';
    returnButton.style.backgroundColor = '#007bff';
    returnButton.style.color = 'white';
    returnButton.style.border = 'none';
    returnButton.style.borderRadius = '5px';
    returnButton.style.cursor = 'pointer';

    // Evento para retornar à tela anterior
    returnButton.addEventListener('click', () => {
        // Retorna ao conteúdo original
        document.body.innerHTML = `
            <div class="image-container">
                <img id="image" src="sua-imagem.jpeg" alt="Sua Imagem">
            </div>
        `;

        // Reanexa o script para que a funcionalidade de clique na imagem funcione
        const script = document.createElement('script');
        script.src = 'script.js';
        document.body.appendChild(script);
    });

    fullScreenImage.appendChild(returnButton); // Adiciona o botão à imagem em tela cheia
});

// Funções para arrastar a imagem com o mouse
let isDragging = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

// Adicionando funcionalidade de arrastar a imagem com o mouse
fullScreenImage.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - fullScreenImage.offsetLeft;
    startY = e.pageY - fullScreenImage.offsetTop;
    scrollLeft = fullScreenImage.scrollLeft;
    scrollTop = fullScreenImage.scrollTop;
});

fullScreenImage.addEventListener('mouseleave', () => {
    isDragging = false;
});

fullScreenImage.addEventListener('mouseup', () => {
    isDragging = false;
});

fullScreenImage.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Se não estiver arrastando, sai da função
    e.preventDefault();
    const x = e.pageX - fullScreenImage.offsetLeft;
    const y = e.pageY - fullScreenImage.offsetTop;
    const walkX = (x - startX) * 1; // A intensidade do arrasto
    const walkY = (y - startY) * 1;
    fullScreenImage.scrollLeft = scrollLeft - walkX;
    fullScreenImage.scrollTop = scrollTop - walkY;
});

// Funções para arrastar a imagem com toque
fullScreenImage.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX - fullScreenImage.offsetLeft;
    startY = e.touches[0].clientY - fullScreenImage.offsetTop;
    scrollLeft = fullScreenImage.scrollLeft;
    scrollTop = fullScreenImage.scrollTop;
});

fullScreenImage.addEventListener('touchend', () => {
    isDragging = false;
});

fullScreenImage.addEventListener('touchmove', (e) => {
    if (!isDragging) return; // Se não estiver arrastando, sai da função
    e.preventDefault();
    const x = e.touches[0].clientX - fullScreenImage.offsetLeft;
    const y = e.touches[0].clientY - fullScreenImage.offsetTop;
    const walkX = (x - startX) * 1; // A intensidade do arrasto
    const walkY = (y - startY) * 1;
    fullScreenImage.scrollLeft = scrollLeft - walkX;
    fullScreenImage.scrollTop = scrollTop - walkY;
});
