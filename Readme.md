![poster](./.github/poster.png)

## Sobre

Repositório do treinamento: Workflow de testes contínuos em Cypress no Github Actions

## Stacks
- Cypress
- Javascript
- Cypress Dashboard
- Tesults

## Rodando

1. Clonar o repositório, instalar as dependências
```
yarn / npm install
```

2. Subir o Cypress UI
```
yarn cypress open / npx cypress open 
```

3. Executar testes em Headless
```
yarn cypress run / npx cypress run 
```

<hr>
Curso disponível em https://qaxperience.com

## Documentação das Funções e Classes

### `cypress/support/commands.js`

#### Função: `cy.login(user, pass)`
Adiciona o comando customizado `login` ao Cypress.

**Parâmetros:**
- `user` (string|null): Nome de usuário a ser preenchido no campo de login. Se for `null`, apenas loga a ausência.
- `pass` (string|null): Senha a ser preenchida no campo de senha. Se for `null`, apenas loga a ausência.

**Fluxo:**
1. Acessa a página inicial (`cy.visit('/')`).
2. Seleciona os campos de usuário e senha.
3. Preenche os campos se os valores forem fornecidos.
4. Clica no botão "Entrar".

---

### `cypress/support/e2e.js`

- Importa os comandos customizados definidos em `commands.js` para serem usados nos testes.

---

### `cypress/e2e/login.cy.js`

#### Suite de Testes: `describe('Login', ...)`
Executa diversos cenários de teste para o fluxo de login, utilizando o comando `cy.login`.

**Cenários cobertos:**
- Usuário obrigatório
- Senha obrigatória
- Usuário não existe
- Senha incorreta
- Login com sucesso
- Usuário/senha com espaços em branco
- Usuário/senha com caracteres especiais
- Usuário e senha vazios ou nulos

Cada teste faz asserções explícitas sobre o resultado esperado na interface (toast ou modal).

---

### `runner.js` (e similares)

#### Função principal
Executa os testes Cypress e envia os resultados para o Tesults.

**Fluxo:**
1. Executa os testes com `cypress.run`.
2. Ao finalizar, envia os resultados para o Tesults usando o token apropriado.
3. Em caso de erro, exibe no console.

---

