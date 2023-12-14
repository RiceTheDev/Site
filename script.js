const body = document.querySelector('body');
const bodyBefore = document.createElement('div');
bodyBefore.classList.add('background');

// Adiciona um elemento div simulando o ::before
body.insertBefore(bodyBefore, body.firstChild);

document.addEventListener("mousemove", (e) => {
    const sensitivity = 31; // Ajuste o valor de sensibilidade conforme necessário
    const mouseX = (e.clientX / window.innerWidth - 0.5) * sensitivity;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * sensitivity;

    bodyBefore.style.backgroundImage = `url('seu-fundo-personalizado (1).png')`;
    bodyBefore.style.backgroundSize = 'cover';
    bodyBefore.style.width = '100vw';
    bodyBefore.style.height = '100vh';
    bodyBefore.style.position = 'fixed';
    bodyBefore.style.top = '0';
    bodyBefore.style.left = '0';
    bodyBefore.style.zIndex = '-1';
    bodyBefore.style.transformOrigin = 'center center';
    bodyBefore.style.transform = `scale(1.05) translate(${mouseX}px, ${mouseY}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
    // Adiciona a classe que inicia a animação apenas após o carregamento da página
    document.querySelectorAll('.profile-box, .social-box, .rounded-icon').forEach(function (element) {
        element.classList.add('fadeIn');
    });
});

function updateTime() {
    const clockElement = document.querySelector('.animated-clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Atualiza o relógio a cada segundo
setInterval(updateTime, 1000);

// Atualiza o relógio imediatamente ao carregar a página
updateTime();
