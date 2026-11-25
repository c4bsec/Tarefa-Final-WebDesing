# HTML5 semântico e acessibilidade

HTML5 descreve a estrutura e o significado do conteúdo. A semântica facilita manutenção, mecanismos de busca e tecnologias assistivas.

## Estrutura mínima

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Título da página</title>
  </head>
  <body>
    <header>...</header>
    <nav aria-label="Navegação principal">...</nav>
    <main>...</main>
    <footer>...</footer>
  </body>
</html>
```

## Elementos importantes

- `header`: apresentação da página ou de uma seção.
- `nav`: conjunto principal de links de navegação.
- `main`: conteúdo único e central da página.
- `section`: agrupamento temático com título.
- `article`: conteúdo independente, como um post.
- `aside`: conteúdo complementar.
- `footer`: autoria, contato e informações finais.
- `figure` e `figcaption`: mídia acompanhada de legenda.

## Checklist de acessibilidade

- Use uma hierarquia de títulos lógica, sem escolher `h1` a `h6` apenas pelo tamanho visual.
- Informe o idioma em `html lang`.
- Dê texto alternativo útil às imagens; use `alt=""` quando forem apenas decorativas.
- Associe `label` e campo de formulário por `for` e `id`.
- Garanta navegação por teclado e foco visível.
- Prefira tabelas para dados tabulares, com `caption`, `thead`, `tbody` e cabeçalhos `th`.
- Não use cor como único meio de transmitir informação.
