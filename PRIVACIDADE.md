# Privacidade e segurança

Este repositório foi preparado para publicação pública.

## O que foi removido

- Registros acadêmicos (RAs) das capas dos cinco relatórios.
- Capturas de terminal que poderiam revelar credenciais, e-mail de commit ou caminhos locais.
- Credenciais de demonstração encontradas na documentação recuperada do projeto final.
- Qualquer token real de autenticação. Exemplos usam apenas placeholders como `SEU_USUARIO` e `SEU_TOKEN`.

As versões originais dos PDFs não fazem parte deste repositório público. As versões em `relatorios/` são cópias sanitizadas.

## Boas práticas

1. Nunca coloque um token na URL do repositório.
2. Prefira o Git Credential Manager, SSH ou a autenticação oficial da ferramenta usada.
3. Mantenha arquivos `.env` fora do Git; publique somente `.env.example` com valores fictícios.
4. Antes de novos commits, procure por e-mails pessoais, RAs, telefones, senhas, tokens e chaves de API.
5. Se um segredo for publicado, revogue-o imediatamente. Apagar apenas o arquivo não remove o segredo do histórico.

## Revisão antes da entrega

- [ ] Não há RAs em texto, imagens ou PDFs.
- [ ] Não há tokens, senhas ou chaves privadas.
- [ ] O histórico do Git não contém segredos.
- [ ] Links públicos não concedem permissões de escrita.
- [ ] Os arquivos `.env` continuam ignorados.
