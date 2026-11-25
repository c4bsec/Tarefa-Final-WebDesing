const botaoMenu = document.querySelector('.menu');
const navegacao = document.querySelector('#navegacao');
const botaoConfirmar = document.querySelector('[data-confirmar]');
const mensagem = document.querySelector('#mensagem');

botaoMenu?.addEventListener('click', () => {
  const aberto = navegacao.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', String(aberto));
});

navegacao?.addEventListener('click', (evento) => {
  if (evento.target.matches('a')) {
    navegacao.classList.remove('aberto');
    botaoMenu?.setAttribute('aria-expanded', 'false');
  }
});

botaoConfirmar?.addEventListener('click', () => {
  mensagem.textContent = 'Aprendizado confirmado: estrutura, estilo e comportamento separados.';
  botaoConfirmar.disabled = true;
});
