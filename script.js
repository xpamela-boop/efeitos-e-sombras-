// Desafio 3: Lógica para alternar o modo escuro manualmente
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
