# PHP e infraestrutura web

## Front Controller

Um Front Controller recebe as requisições por um único ponto de entrada, normalmente `public/index.php`. Ele inicializa o ambiente, aplica regras comuns e encaminha a requisição para a página correta.

Fluxo simplificado:

```text
Navegador -> Nginx -> public/index.php -> rota -> regra de negócio -> view
```

## Componentes do projeto estudado

- Nginx: servidor web e proxy reverso.
- PHP-FPM: executa o código PHP em processos gerenciados.
- OPcache: mantém bytecode PHP compilado em memória.
- MariaDB/MySQL: persistência relacional.
- HTTPS: protege dados em trânsito.
- Docker Compose: descreve serviços locais de forma reproduzível.

## Segurança mínima

- Use tokens CSRF em operações que alteram estado.
- Escape saída HTML para evitar XSS.
- Use consultas parametrizadas no banco.
- Armazene senhas com funções de hash adequadas.
- Defina uma Content Security Policy coerente.
- Mantenha segredos em variáveis de ambiente fora do Git.
- Diferencie configuração de desenvolvimento e produção.

## Observação

Os arquivos Docker deste repositório são material de estudo. Revise senhas, portas, domínio, certificados e permissões antes de qualquer uso real.
