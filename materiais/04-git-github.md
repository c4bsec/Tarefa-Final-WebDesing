# Git e GitHub com autenticação segura

Git registra versões localmente; GitHub hospeda o repositório remoto e facilita colaboração.

## Fluxo básico

```bash
git status
git add .
git commit -m "docs: organiza atividade"
git push origin main
```

Para configurar um remoto, use uma URL sem credencial embutida:

```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

## Segurança

Não use URLs no formato `https://usuario:token@github.com/...`. Elas podem aparecer no histórico do terminal, em capturas e em arquivos de configuração.

Prefira uma destas opções:

- Git Credential Manager.
- Autenticação SSH com chave protegida.
- Aplicativo oficial do GitHub ou integração autorizada.

## Organização de commits

- Faça commits pequenos e coerentes.
- Escreva mensagens que expliquem a intenção.
- Verifique `git diff --staged` antes de confirmar.
- Não publique `.env`, chaves privadas, tokens, RAs ou dados pessoais.
- Use `.gitignore` para artefatos locais, mas lembre que ele não apaga arquivos já versionados.
