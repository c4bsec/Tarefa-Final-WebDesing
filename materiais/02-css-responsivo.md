# CSS responsivo

CSS separa a apresentação da estrutura HTML. Um projeto organizado centraliza decisões visuais e adapta o layout a diferentes telas.

## Design tokens

```css
:root {
  --cor-principal: #173b67;
  --cor-destaque: #19a7a0;
  --fundo: #f6f8fb;
  --texto: #1f2937;
  --espaco: 1rem;
  --raio: 0.75rem;
}
```

Tokens reduzem repetição e deixam mudanças globais previsíveis.

## Grid e Flexbox

- Use Flexbox para alinhar itens em uma dimensão, como menu, barra ou grupo de botões.
- Use Grid para organizar linhas e colunas, como cards e áreas da página.
- Prefira unidades fluidas (`rem`, `%`, `fr`, `minmax`) a larguras rígidas.

```css
.grade {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}
```

## Media queries

Crie primeiro um layout simples para telas pequenas e amplie quando houver espaço:

```css
@media (min-width: 48rem) {
  .layout {
    grid-template-columns: 2fr 1fr;
  }
}
```

## Qualidade visual

- Mantenha contraste suficiente entre texto e fundo.
- Limite a largura de leitura de parágrafos longos.
- Use `:focus-visible` nos controles interativos.
- Respeite `prefers-reduced-motion` em animações.
- Teste pelo menos em 360 px, 768 px e uma largura desktop.
