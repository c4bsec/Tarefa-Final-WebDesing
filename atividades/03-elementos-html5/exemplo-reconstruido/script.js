const botaoTema = document.querySelector('[data-tema]');
const formulario = document.querySelector('[data-formulario]');
const retorno = document.querySelector('[data-retorno]');

botaoTema?.addEventListener('click', () => {
  const ativo = document.body.classList.toggle('contraste');
  botaoTema.setAttribute('aria-pressed', String(ativo));
  botaoTema.textContent = ativo ? 'Contraste padrão' : 'Alto contraste';
});

formulario?.addEventListener('submit', (evento) => {
  evento.preventDefault();
  retorno.classList.remove('erro');

  if (!formulario.checkValidity()) {
    retorno.textContent = 'Revise os campos obrigatórios antes de continuar.';
    retorno.classList.add('erro');
    formulario.reportValidity();
    return;
  }

  const nome = new FormData(formulario).get('nome').trim();
  retorno.textContent = `Tudo certo, ${nome}. A validação local foi concluída e nenhum dado foi enviado.`;
  formulario.reset();
});
