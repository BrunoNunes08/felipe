const audioParabens = new Audio("assets/xuxa-parabens.mp3");
const audioBoraTomarUma = new Audio("assets/bora-tomar-uma.mp3");
audioParabens.loop = true;
alert("Clica na tela após fechar essa mensagem, menos em cima do botão (só clica no botão depois de ler o texto)!")
window.onclick = (e) => {
    audioParabens.play();
}

const button = document.querySelector(".sparkle-button");
button.addEventListener("click", (e) => {
    audioParabens.pause();
    audioBoraTomarUma.play();
})

audioBoraTomarUma.addEventListener("pause", (e) => {
    audioParabens.play();
})
