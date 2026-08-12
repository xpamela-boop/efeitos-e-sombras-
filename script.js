// Contador de apoio à inovação no agronegócio
let apoios = 0;

const botaoApoiar = document.getElementById('btn-curtir');
const contador = document.getElementById('contador-curtidas');

botaoApoiar.addEventListener('click', () => {
  apoios++;
  if (apoios === 1) {
    contador.textContent = '1 apoio';
  } else {
    contador.textContent = `${apoios} apoios`;
  }
});
