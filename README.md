# Web Design - FACENS

Portfólio acadêmico do Grupo A com as atividades práticas, relatórios, códigos-fonte, materiais de revisão, exercícios e pacotes de entrega da disciplina de Web Design.

> Os relatórios desta versão pública tiveram os RAs removidos. Capturas que poderiam revelar credenciais ou dados locais também foram omitidas. Consulte [PRIVACIDADE.md](PRIVACIDADE.md).

## Atividades

| # | Conteúdo | Origem do código | Relatório | Pasta |
|---|---|---|---|---|
| 1 | Estrutura inicial, HTML, CSS, JavaScript e Git | Reconstruído a partir do relatório; repositório antigo indisponível | [PDF](relatorios/atividade-01-relatorio.pdf) | [Abrir](atividades/01-primeiros-passos-git/) |
| 2 | HTML semântico: cabeçalho, navegação, posts, lateral e rodapé | Original, commit `9c701f6` | [PDF](relatorios/atividade-02-relatorio.pdf) | [Abrir](atividades/02-html-semantico-blog/) |
| 3 | Elementos HTML5, formulário, listas, tabelas e mídia | Original recuperado + exemplo didático reconstruído | [PDF](relatorios/atividade-03-relatorio.pdf) | [Abrir](atividades/03-elementos-html5/) |
| 4 | Front Controller PHP, design tokens, responsividade e infraestrutura | Seleção verificada do projeto Elda, commit `f90f45c` | [PDF](relatorios/atividade-04-relatorio.pdf) | [Abrir](atividades/04-php-css-infraestrutura/) |
| 5 | Projeto final Elda: CSS responsivo, JavaScript e DOM | Snapshot original do commit `f90f45c` | [PDF](relatorios/atividade-05-relatorio.pdf) | [Abrir](atividades/05-projeto-final-js-dom/) |

## Materiais de revisão

- [HTML5 semântico e acessibilidade](materiais/01-html5-semantico.md)
- [CSS responsivo, Grid, Flexbox e design tokens](materiais/02-css-responsivo.md)
- [JavaScript, eventos e manipulação do DOM](materiais/03-javascript-dom.md)
- [Git e GitHub com autenticação segura](materiais/04-git-github.md)
- [PHP, Front Controller e infraestrutura web](materiais/05-php-infraestrutura.md)
- [Exercícios de revisão](exercicios/README.md) — com [10 soluções HTML executáveis](exercicios/resolvidos/index.html)

## Como executar

As atividades 1, 2 e 3 são estáticas. Abra o respectivo `index.html` no navegador. Para evitar diferenças entre navegadores, também é possível iniciar um servidor local na pasta da atividade:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

As atividades 4 e 5 usam PHP. O código original inclui instruções próprias em seus READMEs e, no projeto final, arquivos de Docker. Use apenas valores locais de desenvolvimento; nunca coloque senhas ou tokens reais no repositório.

## Estrutura

```text
atividades/   códigos originais e reconstruções identificadas
exercicios/   roteiro de fixação e 10 soluções HTML executáveis
materiais/    resumos dos principais assuntos do semestre
pacotes/      ZIP individual de cada atividade e pacote completo
relatorios/   cinco PDFs em versão pública sanitizada
```

## Downloads

- [Atividade 1](pacotes/atividade-01.zip)
- [Atividade 2](pacotes/atividade-02.zip)
- [Atividade 3](pacotes/atividade-03.zip)
- [Atividade 4](pacotes/atividade-04.zip)
- [Atividade 5](pacotes/atividade-05.zip)
- [Pacote completo](pacotes/web-design-facens-completo.zip)

## Proveniência e limites

Os arquivos recuperados mantêm a identificação do repositório e do commit de origem. Quando o original não pôde ser obtido ou quando mídias de terceiros não eram adequadas para redistribuição, o conteúdo foi reconstruído e marcado explicitamente. Veja [REFERENCIAS.md](REFERENCIAS.md) e [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Licença

O material próprio deste repositório está sob a [Licença Apache 2.0](LICENSE). Códigos importados preservam seus avisos e licenças originais quando disponíveis.
