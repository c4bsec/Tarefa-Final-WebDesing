# Exercícios de revisão

Use estes exercícios para revisar os conteúdos do semestre. Cada proposta agora possui uma solução própria e executável em HTML.

## Soluções prontas

- [Abrir o índice visual com os 10 exercícios resolvidos](resolvidos/index.html)
- [01 - Estrutura HTML5](resolvidos/01-estrutura-html5.html)
- [02 - Navegação interna](resolvidos/02-navegacao-interna.html)
- [03 - Formulário acessível](resolvidos/03-formulario-acessivel.html)
- [04 - Tabela semântica](resolvidos/04-tabela-semantica.html)
- [05 - Layout responsivo](resolvidos/05-layout-responsivo.html)
- [06 - Menu com JavaScript](resolvidos/06-menu-javascript.html)
- [07 - Design tokens](resolvidos/07-design-tokens.html)
- [08 - Git seguro](resolvidos/08-git-seguro.html)
- [09 - Front Controller](resolvidos/09-front-controller.html)
- [10 - Auditoria de privacidade](resolvidos/10-auditoria-privacidade.html)

Tente resolver cada proposta antes de comparar com a respectiva solução.

## 1. Estrutura HTML5

Crie uma página com `header`, `nav`, `main`, duas `section`, um `article`, um `aside` e `footer`. Adicione um link “Pular para o conteúdo”.

**Resposta esperada:** estrutura semelhante à atividade 1, com apenas um `main`, navegação nomeada e hierarquia lógica de títulos.

**Solução:** [01-estrutura-html5.html](resolvidos/01-estrutura-html5.html)

Referência: [atividade 1](../atividades/01-primeiros-passos-git/codigo-reconstruido/index.html).

## 2. Navegação interna

Monte um menu com links para `#posts`, `#lateral` e `#rodape`. Verifique se cada destino tem um `id` único.

**Resposta esperada:** os links mudam o fragmento da URL e levam o foco visual à região correspondente.

**Solução:** [02-navegacao-interna.html](resolvidos/02-navegacao-interna.html)

Referência: [atividade 2](../atividades/02-html-semantico-blog/codigo-original/index.html).

## 3. Formulário acessível

Crie campos de nome, e-mail e mensagem. Todos devem ter rótulo, identificação e validação nativa. Mostre uma mensagem com `aria-live` após a validação.

**Resposta esperada:** `label` associado ao campo, `type="email"`, `required` e retorno que não envia dados reais.

**Solução:** [03-formulario-acessivel.html](resolvidos/03-formulario-acessivel.html)

Referência: [atividade 3](../atividades/03-elementos-html5/exemplo-reconstruido/index.html).

## 4. Tabela semântica

Crie uma tabela de três tecnologias com `caption`, `thead`, `tbody`, cabeçalhos de coluna e cabeçalhos de linha.

**Resposta esperada:** uso correto de `th scope="col"` e `th scope="row"`; rolagem horizontal em telas pequenas sem cortar conteúdo.

**Solução:** [04-tabela-semantica.html](resolvidos/04-tabela-semantica.html)

## 5. Layout responsivo

Crie três cards que ocupem uma coluna no celular e três colunas quando houver espaço.

**Resposta esperada:** Grid com `repeat(auto-fit, minmax(...))` ou uma media query clara.

**Solução:** [05-layout-responsivo.html](resolvidos/05-layout-responsivo.html)

Referência: [material de CSS](../materiais/02-css-responsivo.md).

## 6. Menu com JavaScript

Implemente um botão que abre e fecha a navegação. Atualize `aria-expanded` e feche o menu após selecionar um link.

**Resposta esperada:** evento de clique, alternância de classe e estado ARIA sincronizado.

**Solução:** [06-menu-javascript.html](resolvidos/06-menu-javascript.html)

Referência: [script da atividade 1](../atividades/01-primeiros-passos-git/codigo-reconstruido/script.js).

## 7. Design tokens

Centralize cores, espaçamentos e raio de borda em `:root`, depois crie uma variação de alto contraste sem duplicar todo o CSS.

**Resposta esperada:** propriedades customizadas reutilizadas e substituídas por uma classe no `body`.

**Solução:** [07-design-tokens.html](resolvidos/07-design-tokens.html)

Referência: [CSS da atividade 3](../atividades/03-elementos-html5/exemplo-reconstruido/style.css).

## 8. Git seguro

Escreva os comandos necessários para revisar, adicionar, confirmar e enviar mudanças, sem colocar token na URL.

**Resposta esperada:** `git status`, `git add`, `git commit` e `git push`, usando Credential Manager ou SSH para autenticação.

**Solução:** [08-git-seguro.html](resolvidos/08-git-seguro.html)

Referência: [material de Git](../materiais/04-git-github.md).

## 9. Front Controller

Desenhe o fluxo de uma requisição desde o navegador até a view em uma aplicação com Nginx e PHP-FPM.

**Resposta esperada:** navegador → Nginx → `public/index.php` → roteamento/regra de negócio → view → resposta.

**Solução:** [09-front-controller.html](resolvidos/09-front-controller.html)

Referência: [atividade 4](../atividades/04-php-css-infraestrutura/).

## 10. Auditoria de privacidade

Antes de publicar, procure RAs, e-mails pessoais, tokens, chaves privadas e arquivos `.env`. Explique o que fazer se um token já tiver sido enviado.

**Resposta esperada:** revogar o token, remover o dado do conteúdo e revisar o histórico; apenas apagar o arquivo não é suficiente.

**Solução:** [10-auditoria-privacidade.html](resolvidos/10-auditoria-privacidade.html)

Referência: [PRIVACIDADE.md](../PRIVACIDADE.md).
