# JavaScript, eventos e DOM

JavaScript acrescenta comportamento à página. O DOM representa o HTML como uma árvore de objetos que pode ser consultada e alterada.

## Seleção e eventos

```js
const botao = document.querySelector('[data-menu]');
const navegacao = document.querySelector('#navegacao');

botao.addEventListener('click', () => {
  const aberto = navegacao.classList.toggle('aberta');
  botao.setAttribute('aria-expanded', String(aberto));
});
```

## Funcionalidades estudadas

1. Abrir e fechar menu em telas pequenas.
2. Fechar notificações e aplicar temporização.
3. Formatar entradas como telefone e CEP.
4. Validar formulário no cliente sem substituir a validação do servidor.
5. Alternar visibilidade de senha.
6. Copiar conteúdo para a área de transferência.
7. Mostrar prévia de imagem com `FileReader`.

## Boas práticas

- Use `const` por padrão e `let` quando houver reatribuição.
- Evite variáveis globais; encapsule o código em módulos ou funções.
- Verifique se o elemento existe antes de registrar eventos.
- Atualize atributos ARIA quando o estado visual mudar.
- Trate falhas de APIs do navegador.
- Nunca confie apenas na validação do cliente para segurança.
