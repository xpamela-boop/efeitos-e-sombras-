// Funcionalidade simples de curtidas para o post
let curtidas = 0;

const botaoCurtir = document.getElementById('btn-curtir');
const contador = document.getElementById('contador-curtidas');

botaoCurtir.addEventListener('click', () => {
  curtidas++;
  if (curtidas === 1) {
    contador.textContent = '1 curtida';
  } else {
    contador.textContent = `${curtidas} curtidas`;
  }
});
