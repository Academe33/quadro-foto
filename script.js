const image = document.getElementById('image');

// Variáveis para controlar o nível de zoom e arrasto
let scale = 1;
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

// Função para alternar zoom
image.addEventListener('click', () => {
    scale = scale === 1 ? 1.5 : 1; // Alterna entre zoom e tamanho original
    image.style.transform = `scale(${scale})`;
});

// Funções para arrastar a imagem com o mouse
image.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - image.offsetLeft;
    startY = e.pageY - image.offsetTop;
    scrollLeft = image.scrollLeft;
    scrollTop = image.scrollTop;
});

image.addEventListener('mouseleave', () => {
    isDragging = false;
});

image.addEventListener('mouseup', () => {
    isDragging = false;
});

image.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Se não estiver arrastando, sai da função
    e.preventDefault();
    const x = e.pageX - image.offsetLeft;
    const y = e.pageY - image.offsetTop;
    const walkX = (x - startX) * 1; // A intensidade do arrasto
    const walkY = (y - startY) * 1;
    image.scrollLeft = scrollLeft - walkX;
    image.scrollTop = scrollTop - walkY;
});

// Funções para arrastar a imagem com toque
image.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX - image.offsetLeft;
    startY = e.touches[0].clientY - image.offsetTop;
    scrollLeft = image.scrollLeft;
    scrollTop = image.scrollTop;
});

image.addEventListener('touchend', () => {
    isDragging = false;
});

image.addEventListener('touchmove', (e) => {
    if (!isDragging) return; // Se não estiver arrastando, sai da função
    e.preventDefault();
    const x = e.touches[0].clientX - image.offsetLeft;
    const y = e.touches[0].clientY - image.offsetTop;
    const walkX = (x - startX) * 1; // A intensidade do arrasto
    const walkY = (y - startY) * 1;
    image.scrollLeft = scrollLeft - walkX;
    image.scrollTop = scrollTop - walkY;
});
